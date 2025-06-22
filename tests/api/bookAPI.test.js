const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const app = require('../../server'); // Ensure this exports the app
const Book = require('../../models/Book');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterEach(async () => {
  // Clean up after each test
  await mongoose.connection.db.dropDatabase();
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

describe('Books API', () => {
  it('should create a book', async () => {
    const res = await request(app)
      .post('/api/books')
      .send({ title: 'API Book', author: 'Author' });

    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe('API Book');
  });

  it('should get all books', async () => {
    await Book.create({ title: 'Another Book', author: 'A' });
    const res = await request(app).get('/api/books');
    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should update a book', async () => {
    const book = await Book.create({ title: 'Old', author: 'X' });
    const res = await request(app)
      .put(`/api/books/${book._id}`)
      .send({ title: 'New' });

    expect(res.body.title).toBe('New');
  });

  it('should delete a book', async () => {
    const book = await Book.create({ title: 'To Delete', author: 'X' });
    const res = await request(app).delete(`/api/books/${book._id}`);
    expect(res.body.message).toBe('Book deleted');
  });
});
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const Book = require('../../models/Book');

let mongoServer;

beforeAll(async () => {
  mongoServer = await MongoMemoryServer.create();
  await mongoose.connect(mongoServer.getUri());
});

afterAll(async () => {
  await mongoose.disconnect();
  await mongoServer.stop();
});

it('should save and retrieve a book', async () => {
  const book = new Book({ title: 'Integration Test', author: 'Tester' });
  await book.save();

  const found = await Book.findOne({ title: 'Integration Test' });
  expect(found).not.toBeNull();
  expect(found.author).toBe('Tester');
});
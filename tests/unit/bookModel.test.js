const Book = require('../../models/Book');

describe('Book Model Unit Tests', () => {
  it('should create a Book instance with default availability', () => {
    const book = new Book({
      title: 'Test Book',
      author: 'Author',
      genre: 'Fiction',
      publishedYear: 2023
    });

    expect(book.available).toBe(true);
  });

  it('should require a title', async () => {
    const book = new Book({ author: 'No Title' });
    try {
      await book.validate();
    } catch (err) {
      expect(err.errors.title).toBeDefined();
    }
  });
});
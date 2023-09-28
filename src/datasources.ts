import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

import { Low } from 'lowdb';
import { JSONFile } from 'lowdb/node';

import type {
  AddBookMutationResponse,
  Author,
  Book,
  DeleteBookMutationResponse,
  Maybe,
  Review,
  UpdateBookMutationResponse,
} from './__generated__/resolvers-types';

type BookType = Omit<Required<Book>, '__typename'>;
type AuthorType = Omit<Required<Author>, '__typename'>;
type ReviewType = Omit<Required<Review>, ' __typename'>;

type Data = {
  books: BookType[];
  authors: AuthorType[];
  reviews: ReviewType[];
};

// db.json file path
const __dirname = dirname(fileURLToPath(import.meta.url));
const file = join(__dirname, '../_db.json');

console.log({ file });

// Configure lowdb to write data to JSON file
const defaultData = { books: [], authors: [], reviews: [] };
const adapter = new JSONFile<Data>(file);
const db = new Low<Data>(adapter, defaultData);

// Read data from JSON file, this will set db.data content
// If JSON file doesn't exist, defaultData is used instead
await db.read();

export class BooksDataSource {
  getBooks(): BookType[] {
    return db.data.books;
  }

  getBook(bookId: string): Maybe<BookType> {
    return db.data.books.find(book => book.id === bookId);
  }

  getAuthors(): AuthorType[] {
    return db.data.authors;
  }

  getAuthor(authorId: string): Maybe<AuthorType> {
    return db.data.authors.find(author => author.id === authorId);
  }

  getReviews(): ReviewType[] {
    return db.data.reviews;
  }

  getReviewsByAuthorId(authorId: string): ReviewType[] {
    return db.data.reviews.filter(review => review.authorId === authorId);
  }

  getReviewsByBookId(bookId: string): ReviewType[] {
    return db.data.reviews.filter(review => review.bookId === bookId);
  }

  getReview(reviewId: string): Maybe<ReviewType> {
    return db.data.reviews.find(review => review.id === reviewId);
  }

  private async _addBook(book: BookType): Promise<void> {
    db.data.books.push({
      id: book.id,
      title: book.title,
      characters: book.characters,
      reviews: book.reviews,
    });

    await db.write();
  }

  private async _deleteBook(bookId: string): Promise<void> {
    db.data.books = db.data.books.filter(book => book.id !== bookId);
    await db.write();
  }

  private async _updateBook(newBook: BookType): Promise<void> {
    await this._deleteBook(newBook.id);
    await this._addBook(newBook);
  }

  async addBook(book: Book): Promise<AddBookMutationResponse> {
    if (book.id && book.title && Array.isArray(book.characters)) {
      this._addBook(book);

      return {
        code: '200',
        success: true,
        message: 'New book added!',
        book,
        id: book.id,
      };
    } else {
      return {
        code: '400',
        success: false,
        message: 'Invalid input',
        book: undefined,
        id: book.id,
      };
    }
  }

  async updateBook(
    bookId: string,
    updatedBook: Partial<Omit<BookType, 'id' | 'reviews'>>
  ): Promise<UpdateBookMutationResponse> {
    const book = db.data.books.find(book => book.id === bookId);

    if (book) {
      const newBook: Book = {
        id: book.id,
        title: updatedBook.title || book.title,
        characters: updatedBook.characters || book.characters,
        reviews: book.reviews,
      };

      this._updateBook(newBook);

      return {
        code: '200',
        success: true,
        message: 'book updated!',
        book: newBook,
        id: bookId,
      };
    } else {
      return {
        code: '400',
        success: false,
        message: 'the book could not be found',
        book: undefined,
        id: bookId,
      };
    }
  }

  async deleteBook(bookId: string): Promise<DeleteBookMutationResponse> {
    if (bookId && db.data.books.some(book => book.id === bookId)) {
      this._deleteBook(bookId);

      return {
        code: '200',
        success: true,
        message: 'book removed!',
        id: bookId,
      };
    } else {
      return {
        code: '400',
        success: false,
        message: 'invalid book id',
        id: bookId,
      };
    }
  }
}

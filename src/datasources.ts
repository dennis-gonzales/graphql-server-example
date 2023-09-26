// Use our automatically generated Book and AddBookMutationResponse types
// for type safety in our data source class
import type {
  AddBookMutationResponse,
  Book,
} from './__generated__/resolvers-types';

type BookType = Omit<Required<Book>, '__typename'>;

const BooksDB: BookType[] = [
  {
    id: '1',
    title: 'The Awakening',
    author: 'Kate Chopin',
  },
  {
    id: '2',
    title: 'City of Glass',
    author: 'Paul Auster',
  },
];

export class BooksDataSource {
  getBooks(): BookType[] {
    // simulate fetching a list of books
    return BooksDB;
  }

  getBook(bookId: string): BookType | undefined {
    return BooksDB.find(book => book.id === bookId);
  }

  // We are using a static data set for this small example, but normally
  // this Mutation would *mutate* our underlying data using a database
  // or a REST API.
  async addBook(book: Book): Promise<AddBookMutationResponse> {
    if (book.id && book.title && book.author) {
      BooksDB.push({ id: book.id, title: book.title, author: book.author });

      return {
        code: '200',
        success: true,
        message: 'New book added!',
        book,
      };
    } else {
      return {
        code: '400',
        success: false,
        message: 'Invalid input',
        book: undefined,
      };
    }
  }
}

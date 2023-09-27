// Use our automatically generated Book and AddBookMutationResponse types
// for type safety in our data source class
import type {
  AddBookMutationResponse,
  Author,
  Book,
  Review,
} from './__generated__/resolvers-types';

type BookType = Omit<Required<Book>, '__typename'>;
type AuthorType = Omit<Required<Author>, '__typename'>;
type ReviewType = Omit<Required<Review>, ' __typename'>;

const authors = [
  {
    id: '1',
    name: 'John Smith',
    verified: true,
  },
  {
    id: '2',
    name: 'Jane Doe',
    verified: false,
  },
  {
    id: '3',
    name: 'Alan Poe',
    verified: true,
  },
] as AuthorType[];

const books = [
  {
    id: '1',
    title: 'Mystery Island',
    characters: ['Bob', 'Alice', 'Tom'],
  },
  {
    id: '2',
    title: 'Space Adventure',
    characters: ['Jim', 'Eva', 'Sam'],
  },
  {
    id: '3',
    title: 'Haunted Mansion',
    characters: ['Liam', 'Sophia', 'Olivia'],
  },
] as BookType[];

const reviews = [
  {
    id: '1',
    rating: 5,
    content: 'Great book!',
    authorId: '1',
    bookId: '3',
  },
  {
    id: '2',
    rating: 4,
    content: 'Interesting read.',
    authorId: '2',
    bookId: '3',
  },
  {
    id: '3',
    rating: 3,
    content: 'Not bad, could be better.',
    authorId: '3',
    bookId: '1',
  },
  {
    id: '4',
    rating: 5,
    content: 'Absolutely loved it!',
    authorId: '2',
    bookId: '2',
  },
  {
    id: '5',
    rating: 2,
    content: 'Not my cup of tea.',
    authorId: '3',
    bookId: '1',
  },
] as ReviewType[];

export class BooksDataSource {
  getBooks(): BookType[] {
    return books;
  }

  getBook(bookId: string): BookType | undefined {
    return books.find(book => book.id === bookId);
  }

  getAuthors(): AuthorType[] {
    return authors;
  }

  getAuthor(authorId: string): AuthorType | undefined {
    return authors.find(author => author.id === authorId);
  }

  getReviews(): ReviewType[] {
    return reviews;
  }

  getReviewsByAuthorId(authorId: string): ReviewType[] {
    return reviews.filter(review => review.authorId === authorId);
  }

  getReviewsByBookId(bookId: string): ReviewType[] {
    return reviews.filter(review => review.bookId === bookId);
  }

  getReview(reviewId: string): ReviewType | undefined {
    return reviews.find(review => review.id === reviewId);
  }

  // We are using a static data set for this small example, but normally
  // this Mutation would *mutate* our underlying data using a database
  // or a REST API.
  async addBook(book: Book): Promise<AddBookMutationResponse> {
    if (
      book.id &&
      book.title &&
      Array.isArray(book.characters) &&
      Array.isArray(book.reviews)
    ) {
      books.push({
        id: book.id,
        title: book.title,
        characters: book.characters,
        reviews: book.reviews,
      });

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
}

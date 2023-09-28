import type {
  Author,
  Book,
  Maybe,
  QueryResolvers,
  Review,
} from '../__generated__/resolvers-types';

const queries: QueryResolvers = {
  books: async (_, __, { dataSources }): Promise<Book[]> => {
    return dataSources.booksAPI.getBooks();
  },

  book: async (_, args, { dataSources }): Promise<Maybe<Book>> => {
    return dataSources.booksAPI.getBook(args.bookId);
  },

  authors: async (_, __, { dataSources }): Promise<Author[]> => {
    return dataSources.booksAPI.getAuthors();
  },

  author: async (_, args, { dataSources }): Promise<Maybe<Author>> => {
    return dataSources.booksAPI.getAuthor(args.authorId);
  },

  reviews: async (_, __, { dataSources }): Promise<Review[]> => {
    return dataSources.booksAPI.getReviews();
  },

  review: async (_, args, { dataSources }): Promise<Maybe<Review>> => {
    return dataSources.booksAPI.getReview(args.reviewId);
  },

  search: async (
    _,
    { contains },
    { dataSources }
  ): Promise<Array<Author | Book>> => {
    return dataSources.booksAPI.search(contains);
  },
};

export default queries;

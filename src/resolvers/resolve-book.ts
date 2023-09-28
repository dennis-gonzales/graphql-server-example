import type { BookResolvers, Review } from '../__generated__/resolvers-types';

const bookResolver: BookResolvers = {
  id: book => book.id,

  title: book => book.title,

  characters: book => book.characters,

  reviews: async (book, __, { dataSources }): Promise<Review[]> =>
    dataSources.booksAPI.getReviewsByBookId(book.id),
};

export default bookResolver;

import type { BookResolvers } from '../__generated__/resolvers-types';

const bookResolver: BookResolvers = {
  id: book => book.id,

  title: book => book.title,

  characters: book => book.characters,

  reviews: (book, __, { dataSources }) =>
    dataSources.booksAPI.getReviewsByBookId(book.id),
};

export default bookResolver;

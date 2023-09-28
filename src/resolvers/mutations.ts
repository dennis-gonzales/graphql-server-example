import { v4 as uuidv4 } from 'uuid';

import type { MutationResolvers } from '../__generated__/resolvers-types';

// Use the generated `MutationResolvers` type to type check our mutations!
const mutations: MutationResolvers = {
  // Below, we mock adding a new book. Our data set is static for this
  // example, so we won't actually modify our data.
  addBook: async (_, { book }, { dataSources }) => {
    return dataSources.booksAPI.addBook({
      ...book,
      id: uuidv4(),
      reviews: [],
    });
  },

  updateBook: async (_, { bookId, book }, { dataSources }) => {
    return dataSources.booksAPI.updateBook(bookId, {
      ...book,
    });
  },
  deleteBook: async (_, { bookId }, { dataSources }) => {
    return dataSources.booksAPI.deleteBook(bookId);
  },
};

export default mutations;

import { v4 as uuidv4 } from 'uuid';

import type { MutationResolvers } from '../__generated__/resolvers-types';

// Use the generated `MutationResolvers` type to type check our mutations!
const mutations: MutationResolvers = {
  // Below, we mock adding a new book. Our data set is static for this
  // example, so we won't actually modify our data.
  addBook: async (_, { title, author }, { dataSources }) => {
    // TODO: fix
    return dataSources.booksAPI.addBook({
      id: uuidv4(),
      title,
      characters: [],
      reviews: [],
    });
  },
};

export default mutations;

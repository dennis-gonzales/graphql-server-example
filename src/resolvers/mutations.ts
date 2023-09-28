import { v4 as uuidv4 } from 'uuid';

import type {
  AddBookMutationResponse,
  DeleteBookMutationResponse,
  MutationResolvers,
  UpdateBookMutationResponse,
} from '../__generated__/resolvers-types';

const mutations: MutationResolvers = {
  addBook: async (
    _,
    { book },
    { dataSources }
  ): Promise<AddBookMutationResponse> => {
    return dataSources.booksAPI.addBook({
      ...book,
      id: uuidv4(),
      reviews: [],
    });
  },

  updateBook: async (
    _,
    { bookId, book },
    { dataSources }
  ): Promise<UpdateBookMutationResponse> => {
    return dataSources.booksAPI.updateBook(bookId, {
      ...book,
    });
  },
  deleteBook: async (
    _,
    { bookId },
    { dataSources }
  ): Promise<DeleteBookMutationResponse> => {
    return dataSources.booksAPI.deleteBook(bookId);
  },
};

export default mutations;

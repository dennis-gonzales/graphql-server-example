import { GraphQLError } from 'graphql';

import type { ReviewResolvers } from '../__generated__/resolvers-types';

const reviewResolver: ReviewResolvers = {
  id: review => review.id,

  content: review => review.content,

  rating: review => review.rating,

  authorId: review => review.authorId,

  bookId: review => review.bookId,

  author: (parent, _, { dataSources }) =>
    dataSources.booksAPI.getAuthor(parent.authorId),

  book(parent, _, { dataSources }) {
    const result = dataSources.booksAPI.getBook(parent.bookId);

    if (!result) {
      throw new GraphQLError('Invalid book id', {
        extensions: {
          code: 'BAD_USER_INPUT',
          argumentName: 'id',
        },
      });
    }

    return result;
  },
};

export default reviewResolver;

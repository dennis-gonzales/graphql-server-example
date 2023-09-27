import type { AuthorResolvers } from '../__generated__/resolvers-types';

const authorResolver: AuthorResolvers = {
  id: author => author.id,

  name: author => author.name,

  verified: author => author.verified,

  reviews: (author, _, { dataSources }) =>
    dataSources.booksAPI.getReviewsByAuthorId(author.id),
};

export default authorResolver;

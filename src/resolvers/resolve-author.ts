import type { AuthorResolvers, Review } from '../__generated__/resolvers-types';

const authorResolver: AuthorResolvers = {
  id: author => author.id,

  name: author => author.name,

  verified: author => author.verified,

  reviews: async (author, _, { dataSources }): Promise<Review[]> =>
    dataSources.booksAPI.getReviewsByAuthorId(author.id),
};

export default authorResolver;

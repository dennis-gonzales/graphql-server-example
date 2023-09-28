import type { SearchResultResolvers } from '../__generated__/resolvers-types';
import { hasPropertyWithKey } from '../utils/guard';

const searchResolver: SearchResultResolvers = {
  __resolveType(obj, contextValue, info) {
    // Only Author has a name field
    if (hasPropertyWithKey(obj, 'name')) {
      return 'Author';
    }
    // Only Book has a title field
    if (hasPropertyWithKey(obj, 'title')) {
      return 'Book';
    }
  },
};

export default searchResolver;

import type { Resolvers } from '../__generated__/resolvers-types';
import Mutation from './mutations';
import Query from './queries';
import authorResolver from './resolve-author';
import bookResolver from './resolve-book';
import reviewResolver from './resolve-review';
import searchResolver from './resolve-search';

export default {
  Query,
  Mutation,
  Book: bookResolver,
  Author: authorResolver,
  Review: reviewResolver,
  SearchResult: searchResolver,
} as Resolvers;

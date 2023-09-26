import { readFileSync } from 'node:fs';

import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { BooksDataSource } from './src/datasources';
import resolvers from './src/resolvers';

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = readFileSync('./src/schema.graphql', { encoding: 'utf8' });

export interface MyContext {
  dataSources: {
    booksAPI: BooksDataSource;
  };
}

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer<MyContext>({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests
const { url } = await startStandaloneServer(server, {
  listen: { port: 4000 },
  context: async () => {
    return {
      // We are using a static data set for this example, but normally
      // this would be where you'd add your data source connections
      // or your REST API classes.
      dataSources: {
        booksAPI: new BooksDataSource(),
      },
    };
  },
});

console.log(`🚀  Server ready at: ${url}`);

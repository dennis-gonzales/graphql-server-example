import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: './src/schema.graphql',
  generates: {
    'src/__generated__/resolvers-types.ts': {
      plugins: ['typescript', 'typescript-resolvers'],
      config: {
        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#avoidoptionals
        avoidOptionals: true,

        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#allow-undefined
        maybeValue: 'T | null | undefined',

        // https://the-guild.dev/graphql/codegen/plugins/typescript/typescript#strictscalars
        strictScalars: true,

        useIndexSignature: true,
        // Providing our context's interface ensures our context's type is set for
        // all of our resolvers.
        // This file path starts from the location of the file where you generate
        // types (i.e., `/src/__generated__/resolvers-types.ts` above)
        contextType: '../../server#MyContext',
      },
    },
  },
};

export default config;

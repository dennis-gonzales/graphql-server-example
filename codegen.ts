/**
 * @description generated file via `npx graphql-code-generator init`
 * @see https://www.apollographql.com/docs/apollo-server/workflow/generate-types
 */

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
        maybeValue: 'T | undefined', // overrides default type of `T | null`

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

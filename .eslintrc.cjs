// generated with `npm init @eslint/config`
// see https://eslint.org/docs/latest/use/getting-started#quick-start

const variableRules = {
  /**
   * @description Warn for unused vars
   * @see https://typescript-eslint.io/rules/no-unused-vars/#how-to-use
   */
  'no-unused-vars': 'off',
  '@typescript-eslint/no-unused-vars': 'warn',
};

const functionRules = {
  /**
   * @description Prefer function declaration over arrow functions
   * @see https://eslint.org/docs/latest/rules/func-style
   */
  'func-style': [2, 'declaration', { allowArrowFunctions: false }],
};

const importExportRules = {
  /**
   * @description Sort imports/exports
   * @see https://github.com/lydell/eslint-plugin-simple-import-sort
   */
  'simple-import-sort/imports': 'error',
  'simple-import-sort/exports': 'error',

  /**
   * @description Prefer import type
   * @see https://typescript-eslint.io/rules/consistent-type-imports/
   */
  '@typescript-eslint/consistent-type-imports': 'error',

  /**
   * @description Prefer export type
   * @see https://typescript-eslint.io/rules/consistent-type-exports/
   */
  '@typescript-eslint/consistent-type-exports': 'error',
};

const unicornRules = {
  /**
   * @description Allow abbreviations
   * @see https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prevent-abbreviations.md
   */
  'unicorn/prevent-abbreviations': 'off',
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'plugin:import/typescript',
    'plugin:unicorn/recommended',
    'prettier', // Prettier must be last
  ],
  settings: {
    'import/resolver': {
      typescript: true,
      node: true,
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: [
    '@typescript-eslint',
    'import',
    'simple-import-sort',
    'unicorn',
    'prettier',
  ],
  rules: {
    ...variableRules,
    ...functionRules,
    ...unicornRules,
    ...importExportRules,

    'prettier/prettier': 'warn',
  },
};

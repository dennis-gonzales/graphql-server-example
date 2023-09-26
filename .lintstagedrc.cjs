module.exports = {
  /**
   * @description Auto fix code style and formatting
   * @see https://github.com/okonet/lint-staged#reformatting-the-code
   * @see https://github.com/okonet/lint-staged#automatically-fix-code-style-with---fix-and-add-to-commit
   */
  '**/*.ts?(x)': ['eslint --fix', 'prettier --write'],
  /**
   * @description Run tsc on changes to TypeScript files, but do not pass any filename arguments
   * @see https://github.com/okonet/lint-staged#example-run-tsc-on-changes-to-typescript-files-but-do-not-pass-any-filename-arguments
   */
  '**/*.ts?(x)': () => 'tsc -p tsconfig.json --noEmit',
};

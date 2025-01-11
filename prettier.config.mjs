/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  overrides: [
    {
      files: '*.md',
      options: {
        printWidth: 70,
        useTabs: false,
        trailingComma: 'none',
        arrowParens: 'avoid',
        proseWrap: 'never',
      },
    },
  ],
}

export default config

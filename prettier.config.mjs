/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: true,
  trailingComma: 'es5',
  importOrder: [
    '^(react|next?/?([a-zA-Z/]*))$',
    '<THIRD_PARTY_MODULES>',
    '^@/(.*)$',
    '^types$',
    '^@/types/(.*)$',
    '^@/styles/(.*)$',
    '^[./]',
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
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
  plugins: ['@trivago/prettier-plugin-sort-imports'],
}

export default config

import { FlatCompat } from '@eslint/eslintrc'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  // Make sure to put 'prettier' last, so it gets the chance to override other configs
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    rules: {
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],
    },
  },
]

export default eslintConfig

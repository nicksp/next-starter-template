import { FlatCompat } from '@eslint/eslintrc'
import checkFile from 'eslint-plugin-check-file'
import nodePlugin from 'eslint-plugin-n'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  // Make sure to put 'prettier' last, so it gets the chance to override other configs
  ...compat.extends('next/core-web-vitals', 'next/typescript', 'prettier'),
  {
    files: ['src/**/*'],
    plugins: {
      'check-file': checkFile,
      n: nodePlugin,
    },
    rules: {
      'prefer-arrow-callback': ['error'],
      'prefer-template': ['error'],
      'n/no-process-env': ['error'],
      'check-file/filename-naming-convention': [
        'error',
        {
          '**/*.{ts,tsx}': 'KEBAB_CASE',
        },
        {
          ignoreMiddleExtensions: true,
        },
      ],
      'check-file/folder-naming-convention': [
        'error',
        {
          'src/**/!^[.*': 'KEBAB_CASE',
        },
      ],
    },
  },
]

export default eslintConfig

export default {
  '*': () => 'pnpm lint',
  '*.json': 'pnpm format',
  '*.{js,jsx}': () => ['pnpm format', 'pnpm lint:fix'],
  '*.{ts,tsx}': () => ['pnpm run type-check', 'pnpm format', 'pnpm lint:fix'],
}

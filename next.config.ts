import type { NextConfig } from 'next'

import '@/env/server'

const nextConfig: NextConfig = {
  experimental: {
    typedRoutes: true,
  },
}

export default nextConfig

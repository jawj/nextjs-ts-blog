/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  async rewrites() {
    return [{
      source: '/:token',
      destination: '/api/redirect',
    }]
  },
}

module.exports = nextConfig

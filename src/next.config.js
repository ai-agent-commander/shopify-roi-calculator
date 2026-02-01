/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: process.env.NODE_ENV === 'production' ? '../docs' : '.next',  // Dev uses .next, production builds to /docs
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig

module.exports = {
  reactStrictMode: true,
  swcMinify: true,
    images: {
      domains: ['staging.essentiallysports.com', 'image-cdn.essentiallysports.com', 'www.staging.essentiallysports.com'],
    }  
  }


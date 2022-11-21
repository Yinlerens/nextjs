/** @type {import('next').NextConfig} */
const path = require('path');
const nextConfig = {
  experimental: {
    appDir: true
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true
      }
    ];
  },
  webpack: config => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname)
    };
    return config;
  }
};

module.exports = nextConfig;

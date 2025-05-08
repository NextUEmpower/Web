/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  output: 'standalone',
  webpack: (config) => {
    // Add aliases to help webpack find your modules
    config.resolve.alias = {
      ...config.resolve.alias,
      '@components': path.join(__dirname, 'src/components'),
      '@styles': path.join(__dirname, 'src/styles'),
      '@context': path.join(__dirname, 'src/context'),
    };
    return config;
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  // Remove deprecated experimental options
  webpack: (config) => {
    // Add resolve.modules to help webpack find the components directory
    config.resolve.modules.push(path.resolve('./src'));
    return config;
  },
  // This helps with static exports if needed
  output: 'standalone',
};

module.exports = nextConfig;

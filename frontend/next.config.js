/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  // Remove experimental.serverActions as it's now enabled by default
  webpack: (config) => {
    // Add path aliases configuration for webpack
    config.resolve.alias['@'] = path.join(__dirname, 'src');
    config.resolve.alias['@components'] = path.join(__dirname, 'src/components');
    config.resolve.alias['@context'] = path.join(__dirname, 'src/context');
    config.resolve.alias['@styles'] = path.join(__dirname, 'src/styles');
    return config;
  },
  // This helps with static exports if needed
  output: 'standalone',
};

module.exports = nextConfig;

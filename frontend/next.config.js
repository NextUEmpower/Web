/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  // This will ensure that your component imports work correctly
  transpilePackages: [],
  // Set output to standalone for better hosting compatibility
  output: 'standalone',
};

module.exports = nextConfig;

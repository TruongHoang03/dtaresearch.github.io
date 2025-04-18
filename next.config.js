const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: process.env.NEXT_DIST_DIR || '.next',
  output: 'export',  // This enables static exports for GitHub Pages
  outputFileTracingRoot: path.join(__dirname, '../'),
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  basePath: process.env.NODE_ENV === 'production' ? '/landing-page' : '',  // Replace "landing-page" with your repo name
  images: {
    unoptimized: true,  // Required for static export
    domains: [],        // Add any external image domains if needed
  },
};

module.exports = nextConfig;

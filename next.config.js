const path = require('path');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    domains: ['streamingly.s3.us-east-005.backblazeb2.com'],
  },
};

module.exports = nextConfig;

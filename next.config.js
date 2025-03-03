/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone', // Reduces size for Azure deployment
  images: {
    domains: ['Jobspring.org'],
    unoptimized: true, // Avoids large image processing files
  },
  eslint: {
    ignoreDuringBuilds: true, // Disables ESLint during build
  },
  typescript: {
    ignoreBuildErrors: true, // Disables type checking during build
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ignore type errors during builds
    ignoreBuildErrors: true,
  },
  images: { unoptimized: true },
  webpack: (config) => {
    // Disable webpack caching
    config.cache = false;
    
    // Add specific rule for problematic files
    config.module.rules.push({
      test: /\.(js|jsx|ts|tsx)$/,
      resolve: {
        fullySpecified: false,
      },
    });
    
    return config;
  },
};

module.exports = nextConfig;
const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  distDir: 'out',
  webpack(config, { isServer }) {
    // Add custom Webpack configuration

    // Example: Exclude large modules from the server bundle
    if (isServer) {
      config.externals = {
        'large-module': 'large-module', // Replace 'large-module' with actual module names if any
      };
    }

    // Example: Use dynamic imports to split code
    config.optimization.splitChunks = {
      chunks: 'all',
      maxInitialRequests: 10,
      maxAsyncRequests: 20,
    };

    // Example: Adjust output settings
    config.output = {
      ...config.output,
      chunkFilename: isServer
        ? '[name].[contenthash].js'
        : 'static/chunks/[name].[contenthash].js',
    };

    return config;
  },
};

module.exports = withBundleAnalyzer(nextConfig);

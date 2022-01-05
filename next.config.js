const withPWA = require("next-pwa")
const withImages = require("next-images");
const withPlugins = require("next-compose-plugins");

module.exports = withPlugins([withPWA, withImages], {
  swcMinify: true,
  reactStrictMode: true,
  pwa: {
    dest: 'public',
  },
  dynamicAssetPrefix: true,
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com'],
    disableStaticImages: true,
  },
  webpack(config, {}) {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      child_process: false,
      net: false,
      crypto: false,
    };
    return config;
  }
});
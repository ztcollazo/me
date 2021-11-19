const withPWA = require("next-pwa")
const prod = process.env.NODE_ENV === 'production'

module.exports = withPWA({
  swcMinify: true,
  reactStrictMode: true,
  pwa: {
    dest: 'public',
    disable: !prod
  },
  images: {
    domains: ['avatars.githubusercontent.com', 'github.com']
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
const withPWA = require("next-pwa")
const prod = process.env.NODE_ENV === 'production'

module.exports = withPWA({
    reactStrictMode: true,
    pwa: {
      dest: 'public',
      disable: !prod
    }
});
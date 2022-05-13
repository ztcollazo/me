const lineClamp = require('@tailwindcss/line-clamp')

module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {},
  },
  plugins: [lineClamp],
};

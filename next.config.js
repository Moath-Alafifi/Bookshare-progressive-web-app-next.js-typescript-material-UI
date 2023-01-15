/** @type {import('next').NextConfig} */

const { i18n } = require('./next-i18next.config')

module.exports = {
  i18n,
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icons: true } }],
    })

    return config
  },
}
// const withPWA = require('next-pwa')

// module.exports = withPWA({
//   dest: 'public',
//   register: true,
//   skipWaiting: true,
//   disable: true,
// })

const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  // Mengatur mode ke production
  mode: 'production',
})

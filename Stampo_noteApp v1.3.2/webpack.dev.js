const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')

module.exports = merge(common, {
  // Mengatur mode ke development
  mode: 'development',
  // Menghasilkan source map untuk debugging yang lebih mudah
  devtool: 'inline-source-map',
  devServer: {
    // Direktori untuk menyajikan file statis
    static: './dist',
    // port server
    port: 8080,
    // Membuka browser secara otomatis
    open: true,
  },
})

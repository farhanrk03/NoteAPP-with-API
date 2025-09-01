const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  // Titik masuk utama aplikasi
  entry: './src/script.js',
  output: {
    // Direktori output file
    path: path.resolve(__dirname, 'dist'),
    // Nama file JavaScript yang dibundle
    filename: 'bundleStampo.js',
    // Membersihkan folder dist sebelum setiap build
    clean: true,
  },
  module: {
    rules: [
      {
        // Mendeteksi file CSS
        test: /\.css$/,
        // Menggunakan loader untuk mengimpor CSS ke JavaScript
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif|ico)$/i,
        type: 'asset/resource',
        generator: {
          // Menetapkan nama file keluaran di folder dist
          filename: 'assets/[name].[ext]',
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Menggunakan file HTML yang ada sebagai template
      template: './src/noteAPP_Stampo.html',
      // Nama file HTML output di folder dist
      filename: 'index.html',
      favicon: './src/favicon.ico',
    }),
  ],
}

const path = require('path')
const CleanPlugin = require('clean-webpack-plugin')
const fs = require('fs-extra')

module.exports = {
  mode: 'production',
  entry: './src/app.ts',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  plugins: [
    new CleanPlugin.CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: [
        '**/*',
        '!index.html',
        '!app.css',
        '!public{,/**/*}',
      ],
    }),
  ],
}

fs.copySync('index.html', 'dist/index.html')
fs.copySync('app.css', 'dist/app.css')
fs.copySync('public/favicon.ico', 'dist/public/favicon.ico')

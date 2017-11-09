const path = require('path')

const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')

const config = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js'
  },
  plugins: [
    new ExtractTextWebpackPlugin('style.bundle.css')
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        loader: ExtractTextWebpackPlugin.extract({
          use: 'css-loader'
        })
      }
    ]
  }
}

module.exports = config

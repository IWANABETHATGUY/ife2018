const webpack = require('webpack');
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    'main': path.join(__dirname, '../src/index.js')
  },
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      },
      {
        test: /\.san$/,
        include: /src/,
        use: [
          {loader: 'san-loader'}
        ]
      },
      
    ]
  },
  // resolve: {
  //   alias: {
  //     san: process.env.NODE_ENV === 'production' ?
  //       'san/dist/san.js' :
  //       'san/dist/san.dev.js'
  //   }
  // },
  plugins: [
    new htmlWebpackPlugin({
      template: path.join(__dirname, '../template/index.html')
    })
  ]
}
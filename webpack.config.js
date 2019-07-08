const webpack = require('webpack');
const path = require('path');

BUILD_DIR = path.resolve(__dirname, './client/public');
APP_DIR = path.resolve(__dirname, './client/views');

module.exports = {
  entry: APP_DIR + '/index.jsx',
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: APP_DIR,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: [
            '@babel/preset-env',
            '@babel/preset-react'
          ]
        }
      }
    ]
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  }
}
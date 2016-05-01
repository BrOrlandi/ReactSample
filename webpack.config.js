module.exports = {
  entry: [
    './src/App.js'
  ],
  output: {
    filename: 'app.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}﻿;

var webpack = require('webpack');
var path = require('path');

module.exports = {

  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    path.resolve(__dirname, 'src/index.js')
  ],

  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'bundle.js'
  },

  modulesDirectories: [
    'node_modules'
  ],

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel'],
      include: __dirname
    },
    {
      test: /\.css$/,
      loader: 'style!css'
    },
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }

};

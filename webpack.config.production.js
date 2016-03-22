process.env.NODE_ENV = 'production';

var path = require('path');
var webpack = require('webpack');

module.exports = {

  entry: {
    app: path.resolve(__dirname, 'src/index.js')
  },

  output: {
    filename: 'app.js',
    path: path.join(__dirname, 'public/dist'),
    publicPath: '/dist/'
  },

  module: {
    loaders: [{
        test: /\.js$/,
        loaders: ['babel'],
        include: path.join(__dirname, 'src')
      }, {
        test: /\.scss$/,
        loader: 'style!css!sass'
    }]

  }
};

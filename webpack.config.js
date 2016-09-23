var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body'
});

module.exports = {
  devtool: '#source-map',
  entry: path.resolve(__dirname + '/client/index.js'),
  output: {
    path: path.resolve(__dirname + '/public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel-loader', 'babel'],
      include: path.join(__dirname, 'client')
    }, {
      test: /\.s?css$/,
      loaders: ['style', 'css', 'sass'],
      include: path.join(__dirname, 'client')
    }]
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
  },
  postcss: function() {
    return [autoprefixer];
  },
  plugins: [
    HtmlWebpackPluginConfig,
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    })


  ],

}

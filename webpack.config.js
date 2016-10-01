var HtmlWebpackPlugin = require('html-webpack-plugin');
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/client/index.html',
  filename: 'index.html',
  inject: 'body',
  hash: true
});

module.exports = {
  entry: [__dirname + '/client/index.js'],
  output: {
    path: './public',
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel', // 'babel-loader' is also a valid name to reference
        query: {
          presets: ['es2015']
        }
      }, {
        test: /\.css$/,
        exclude: /node_modules/,
        loader: 'style!css'
      }, {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        loader: "file-loader?name=img/img-[hash:6].[ext]"
      }

    ]
  },
  plugins: [HtmlWebpackPluginConfig],
  devtool: '#source-map'
};

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: "source-map",
  entry: path.resolve(__dirname, 'client/app/app.js'),
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        query: {
          presets: ['stage-0', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loaders: [
          'style-loader', 
          'css-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  }
};
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const common = require('./webpack.common');

module.exports = {
  ...common,
  mode: 'development',
  output: {
    ...common.output,
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, '..', 'templates', 'index.ejs'),
      filename: 'index.html',
      minify: { collapseWhitespace: true },
    }),
    new webpack.HashedModuleIdsPlugin(),
    new webpack.LoaderOptionsPlugin({
      debug: false,
      minimize: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: '"development"' } }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJsPlugin(),
  ],
  stats: {
    children: false,
  },
};

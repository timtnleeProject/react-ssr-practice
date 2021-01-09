const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  devtool: NODE_ENV !== 'production' ? 'source-map' : false,
  entry: [
    path.resolve(__dirname, 'entry.jsx'),
  ],
  output: {
    filename: 'clientBundle.js',
    path: path.resolve(__dirname, '../clientBuild'),
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin(),
    new HTMLWebpackPlugin({
      template: path.resolve(__dirname, 'static/index.html'),
    }),
    new ReactRefreshWebpackPlugin(),
  ],
  mode: NODE_ENV,
  devServer: {
    hot: true,
    compress: true,
    port: 6767,
    historyApiFallback: true,
    host: '0.0.0.0',
    open: true,
    openPage: '',
  },
  resolve: {
    extensions: [
      '.jsx',
      '.js',
    ],
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      use: [
        'babel-loader',
      ],
      include: [
        path.resolve(__dirname),
      ],
    }, {
      test: /\.css$/i,
      use: [MiniCssExtractPlugin.loader, 'css-loader'],
    }],
  },
};

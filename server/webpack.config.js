const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const nodeExternals = require('webpack-node-externals');

const NODE_ENV = process.env.NODE_ENV || 'development';

module.exports = {
  entry: [
    path.resolve(__dirname, 'server.js'),
  ],
  target: 'node',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../serverBuild'),
  },
  externals: [nodeExternals()],
  plugins: [
    new CleanWebpackPlugin(),
  ],
  mode: NODE_ENV,
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
      exclude: /node_modules/,
    }],
  },
};

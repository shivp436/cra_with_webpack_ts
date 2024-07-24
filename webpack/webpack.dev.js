const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const webpack = require('webpack');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    open: true,
    compress: true,
    port: 8080,
    historyApiFallback: true,
  },
  devtool: 'cheap-module-source-map',
  plugins: [
    new BundleAnalyzerPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        author: JSON.stringify('shivp436'),
      },
    }),
    new ReactRefreshWebpackPlugin(),
  ],
};
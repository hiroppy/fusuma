'use strict';

const webpack = require('webpack');

module.exports = {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [new webpack.HotModuleReplacementPlugin()],
  devServer: {
    hot: true,
    quiet: true,
    port: 8080,
    inline: true,
    contentBase: '.'
  }
};

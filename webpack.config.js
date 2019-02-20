const path = require('path');
const express = require('express')
const tlsOptions = require('dev-cert-authority')('spotihue.dev')

module.exports = {
  entry: './src/js/main.js',
  mode: 'none',
  output: {
    path: path.resolve(__dirname, 'src/dist'),
    filename: 's.js',
    publicPath: path.resolve(__dirname, 'assets')
  },
  devServer: {
    contentBase: path.join(__dirname, 'src'),
    hot: true,
    historyApiFallback: true,
    host: 'spotihue.dev',
    open: 'Google Chrome',
    https: {
      key: tlsOptions.key,
      cert: tlsOptions.cert
    },
    before (app) {
      app.use('/', express.static(__dirname + 'src'))
    }
  },
  node: {
    dgram: 'empty'
  }
};

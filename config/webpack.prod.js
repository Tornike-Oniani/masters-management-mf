const { merge } = require('webpack-merge');
const ModuleFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');

const prodConfig = {
  mode: 'production',
  output: {
    filename: '[name].[contenthash].js',
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'management',
      filename: 'remoteEntry.js',
      exposes: {
        './ManagementApp': './src/bootstrap',
      },
      shared: [
        '@reduxjs/toolkit',
        'axios',
        'history',
        'react',
        'react-dom',
        'react-router',
        'react-router-dom',
      ],
    }),
  ],
};

module.exports = merge(commonConfig, prodConfig);

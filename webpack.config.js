/* eslint-disable */
const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const dotenv = require("dotenv");

module.exports = (env) => {
  const { NODE_ENV } = env;
  console.log(`[NODE_ENV] >>> ${NODE_ENV}`);
  if (!['production', 'development'].includes(NODE_ENV))
    throw '[NODE_ENV] must be production or development';

  // dotenv.config();

  const DEV = NODE_ENV === 'development';
  const mode = DEV ? 'development' : 'production';
  const devtool = DEV ? 'eval-source-map' : false;
  const lastCssLoader = DEV ? "style-loader" : MiniCssExtractPlugin.loader;
  const miniCssExtractPlugin = DEV
    ? { apply: () => {} }
    : new MiniCssExtractPlugin({ filename: 'css/style.css' });
  const refreshWebpackPlugin = DEV ? new RefreshWebpackPlugin() : { apply: () => {} };
  const refreshBabel = DEV ? 'react-refresh/babel' : {};

  return {
    mode,
    devtool,
    resolve: {
      fallback: { fs: false, path: false },
      alias: {
        '@': path.resolve(__dirname, 'src'),
        '@Utils': path.resolve(__dirname, 'src/utils'),
      },
      extensions: ['.js', '.jsx'],
    },
    entry: {
      main: './src/index.js',
    },
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          options: {
            presets: [
              [
                '@babel/preset-env',
                {
                  targets: {
                    browsers: ['> 0.5% in KR, not dead'],
                  },
                  useBuiltIns: 'usage',
                  corejs: { version: 3, proposals: true },
                  debug: true,
                },
              ],
              '@babel/preset-react',
            ],
            plugins: [refreshBabel, 'styled-components'],
          },
        },
        {
          test: /\.(sc|c|sa)ss$/,
          use: [lastCssLoader, 'css-loader'],
        },
      ],
    },
    plugins: [
      miniCssExtractPlugin,
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'public', 'index.html'),
      }),
      refreshWebpackPlugin,
    ],
    devServer: {
      historyApiFallback: true,
      static: {
        directory: path.join(__dirname, 'public'),
      },
      hot: true,
    },
    output: {
      clean: true,
      path: path.resolve(__dirname, 'dist'),
    },
  };
};

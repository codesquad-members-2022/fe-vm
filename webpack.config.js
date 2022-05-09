const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const mode = process.env.NODE_ENV || 'development';

module.exports = {
  mode,
  entry: {
    app: path.join(__dirname, 'src', 'index.tsx'),
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          process.env.NODE_ENV === 'production'
            ? MiniCssExtractPlugin.loader
            : 'style-loader',
          'css-loader',
        ],
      },
      {
        test: /\.(ts|tsx)$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      templateParameters: {
        env: process.env.NODE_ENV === 'production' ? '' : 'development',
      },
      minify:
        process.env.NODE_ENV === 'production'
          ? {
              collapseWhitespace: true,
              removeComments: true,
            }
          : false,
    }),
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
      analyzerMode: 'static',
      reportFilename: './report.html',
    }),
  ],
};

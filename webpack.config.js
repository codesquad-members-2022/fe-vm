const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  name: 'Dott-react-boilerplate',
  mode: 'development',
  devtool: 'eval',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  entry: {
    app: ['./src/index'],
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: [
            [
              '@babel/preset-env',
              { targets: { browsers: ['> 1% in KR'] }, debug: true },
            ],
            '@babel/preset-react',
          ],
          plugins: ['react-refresh/babel'],
        },
      },
    ],
  },
  plugins: [
    new RefreshWebpackPlugin(),
    // new HtmlWebpackPlugin({
    //   template: path.join(__dirname + "/src", "index.html"),
    // }),
  ],
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'app.js',
    publicPath: './',
  },
  devServer: {
    devMiddleware: { publicPath: '/' },
    static: { directory: path.resolve(__dirname, 'public') },
    hot: true,
  },
};

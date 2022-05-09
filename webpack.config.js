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
              {targets: {browsers: ['> 1% in KR']}, debug: true},
            ],
            '@babel/preset-react',
          ],
          plugins: ['react-refresh/babel'],
        },
      },
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
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
    devMiddleware: {publicPath: '/'}, // devMiddleware의 publicPath는  빌드된 파일 넣는곳
    static: {directory: path.resolve(__dirname, 'public')}, // static은 빌드되기 전 파일이 있는 곳
    hot: true,
  },
};

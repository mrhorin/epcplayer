var path = require('path');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  entry: {
    "main": './src/main_process/main.js',
    "app": './src/jsx/app/index.jsx',
  },
  output: {
    path: path.resolve('./dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2'
  },
  node: {
    __dirname: false,
    __filename: false
  },
  resolve: {
    modules: [
      "node_modules",
      path.resolve('./src/')
    ],
    extensions: ['*', '.js', '.jsx', '.css', '.scss']
  },
  externals: [
    'electron',
    'electron-json-storage',
    'ipc'
  ],
  plugins: [
    new WebpackNotifierPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: ["transform-react-jsx", "transform-class-properties"]
        }
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loaders: ["style-loader", "css-loader", "resolve-url-loader", "sass-loader"]
      },
      {
        test: /\.png$/,
        loader: 'url-loader?mimetype=image/png'
      }
    ]
  },
};
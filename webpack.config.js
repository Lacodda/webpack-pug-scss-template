const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const merge = require('webpack-merge');
const babel = require('./webpack/modules/babel');
const pug = require('./webpack/modules/pug');
const devServer = require('./webpack/modules/devserver');
const style = require('./webpack/modules/style');
const styleExtract = require('./webpack/modules/style.extract');
const uglifyJs = require('./webpack/modules/js.uglify');
const images = require('./webpack/modules/images');
const svg = require('./webpack/modules/svg');
const html = require('./webpack/modules/html');
const fonts = require('./webpack/modules/fonts');
const favicons = require('./webpack/modules/favicons');

const PATHS = {
  source: path.join(__dirname, 'src'),
  build: path.join(__dirname, 'build'),
};

const common = merge([
  {
    stats: {
      colors: true,
      version: true,
    },
    entry: {
      'index': PATHS.source + '/js/index.js',
    },
    output: {
      path: PATHS.build,
      filename: 'js/[name].js',
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'index.html',
        chunks: ['index', 'common'],
        template: PATHS.source + '/templates/index.pug',
      }),
      // new webpack.optimize.splitChunks({
      //   name: 'common',
      // }),
      new CopyWebpackPlugin([
        {
          from: PATHS.source + '/static',
          to: PATHS.build + '/static',
        }]),
    ],
  },
  babel(),
  pug(),
  images(),
  // svg(),
  html(),
  fonts(),
]);

module.exports = function (env) {
  if (env === 'production') {
    return merge([
      common,
      favicons,
      styleExtract(),
      // uglifyJs(),
    ]);
  }
  if (env === 'development') {
    return merge([
      common,
      devServer(),
      style(),
    ]);
  }
};

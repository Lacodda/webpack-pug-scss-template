// const SpritePlugin = require('svg-sprite-loader/plugin');
module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.svg$/,
          loader: 'svg-url-loader',
          // loader: 'svg-sprite-loader',
          // options: {
          //   extract: true,
          //   spriteFilename: 'images/sprite-[hash:7].svg',
          //   esModule: false,
          // },
        },
      ],
    },
    // plugins: [
    //   new SpritePlugin(),
    // ],
  };
};

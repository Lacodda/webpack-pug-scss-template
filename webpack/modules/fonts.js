module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                name: '[name].[ext]',
                outputPath: 'fonts/',    // where the fonts will go
                publicPath: '../'       // override the default path
              },
            }],
        },
      ],
    },
  };
};

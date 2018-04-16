module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.(jpg|png|svg)$/,
          loader: 'file-loader',
          options: {
            name: 'img/[name].[hash:8].[ext]',
          },
        },
      ],
    },
  };
};

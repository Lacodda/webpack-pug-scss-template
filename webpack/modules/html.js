module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.html$/,
          loader: 'file-loader',
          options: {
            name: 'html/[name].[hash:8].[ext]',
          },
        },
      ],
    },
  };
};

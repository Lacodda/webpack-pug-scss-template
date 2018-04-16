module.exports = function () {
  return {
    module: {
      rules: [
        {
          test: /\.pug$/,
          use: {
            loader: 'pug-loader',
            options: {
              pretty: true,
            },
            // (node:85300) DeprecationWarning: loaderUtils.parseQuery()
            // received a non-string value which can be problematic, see
            // https://github.com/webpack/loader-utils/issues/56
            // parseQuery() will be replaced with getOptions() in the next
            // major version of loader-utils.
          },
        },
      ],
    },
  };
};

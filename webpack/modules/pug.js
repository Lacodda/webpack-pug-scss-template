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


// module.exports = {
//   // your config settings ...
//   module: {
//     // your modules...
//     rules: [
//       {
//         test: /\.pug/,
//         loaders: ['html-loader', 'pug-html-loader'],
//         options: {
//           // options to pass to the compiler same as: https://pugjs.org/api/reference.html
//           data: {
//             title: 'Hello World',
//           }, // set of data to pass to the pug render.
//         },
//       }],
//   },
// };

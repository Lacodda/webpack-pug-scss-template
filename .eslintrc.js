// https://eslint.org/docs/user-guide/configuring

module.exports = {
  root: true,

  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module',
  },

  env: {
    'browser': true,
    'commonjs': true,
    'es6': true,
    'node': true,
  },

  extends: ['airbnb-base'],

  // add your custom rules here
  rules: {
    'comma-dangle': [
      'error',
      'always-multiline',
    ],

    indent: [
      'error',
      2,
    ],

    quotes: [
      'error',
      'single',
    ],

    semi: [
      'error',
      'always',
    ],

    'no-unused-vars': [
      'warn',
    ],

    'no-console': 0,

    // disallow reassignment of function parameters
    // disallow parameter object manipulation except for specific exclusions
    'no-param-reassign': [
      'error', {
        props: true,
        ignorePropertyModificationsFor: [
          'acc', // for reduce accumulators
          'e', // for e.returnvalue
        ],
      },
    ],

    // allow optionalDependencies
    'import/no-extraneous-dependencies': [
      'error', {
        optionalDependencies: ['test/unit/index.js'],
      },
    ],

    'import/extensions': [
      'error', 'always', {
        js: 'never',
      },
    ],

    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',

    // indent: 'off',
  },
};

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    jquery: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended',
    'airbnb-base',
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'off' : 'off',
    'no-shadow': 'off',
    'no-param-reassign': 'off',
    'import/no-unresolved': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'max-len': 'off',
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'], // these modules are included in nuxt.js
  },
};

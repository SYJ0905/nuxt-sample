module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'airbnb-base',
    'plugin:nuxt/recommended'
  ],
  // add your custom rules here
  rules: {
    'no-undef': 'off',
  },
  settings: {
    'import/core-modules': ['vue', 'vuex'] // these modules are included in nuxt.js
  },
}

module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    commonjs: true
  },
  extends: [
    'standard-with-typescript',
    'plugin:vue/vue3-essential',
    'plugin:vue/vue3-recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module'
  },
  plugins: ['vue'],
  rules: {
    'vue/html-indent': [
      'error',
      4,
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: []
      }
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3
        },
        multiline: {
          max: 1
        }
      }
    ]
  }
}

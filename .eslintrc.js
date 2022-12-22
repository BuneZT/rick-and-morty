module.exports = {
  env: {
    browser: true
  },
  extends: ['plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    es2021: true
  },
  plugins: ['vue', '@typescript-eslint', 'vuetify'],

};

module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: ['plugin:vue/essential'],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module'
  },
  plugins: ['vue', '@typescript-eslint', 'vuetify'],
  rules: {
    'vue/max-attributes-per-line': 'off',
    'vue/attributes-order': [
      'warn',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ],
    'vue/no-v-html': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-template-shadow': 'off',
    'vue/return-in-computed-property': 'off',
    'vue/require-render-return': 'off',
    'vue/singleline-html-element-content-newline': 'off',
    'vuetify/no-deprecated-classes': 'error'
  }
};

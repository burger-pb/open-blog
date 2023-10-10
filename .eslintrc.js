module.exports = {
  root: true,

  env: {
	  node: true
  },

  extends: [
	  'plugin:vue/vue3-essential',
	  '@vue/standard'
  ],

  parserOptions: {
	  parser: 'babel-eslint'
  },

  rules: {
	  'no-console': 'off',
	  'no-debugger': 'off',
	  'no-irregular-whitespace': 'off',
	  'eslint-disable-next-line': 'off',
	  "space-before-function-paren": 0,
	  'comma-dangle': 'off',
	  quotes: 'off',
	  semi: 'off',
	  'vue/multi-word-component-names': "off"
  }
}

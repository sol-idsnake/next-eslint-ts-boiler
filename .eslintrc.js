module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'plugin:prettier/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', '@typescript-eslint'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto', singleQuote: true }],
    'react/react-in-jsx-scope': 0,
    'react/jsx-filename-extension': [1, { extensions: ['.ts', '.tsx'] }],
    'no-console': 0,
  },
};

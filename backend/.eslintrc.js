module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    target: {
      node: 'current',
    },
  },
  extends: 'eslint:recommended',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
  },
};


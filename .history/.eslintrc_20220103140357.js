module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    // 这里增加一行，用于支持后面的测试环境
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 13,
    sourceType: 'module',
  },
  rules: {
  },
};

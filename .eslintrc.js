/*
 * @Date: 2022-11-28 17:12:55
 * @LastEditors: zhangshuangli
 * @LastEditTime: 2022-11-28 22:30:58
 * @Description: 这是****文件
 */
module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'space-before-function-paren': 0,
    'indent': 'off',

  }
}

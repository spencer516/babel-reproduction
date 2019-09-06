const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const babel = require('rollup-plugin-babel');
const replace = require('rollup-plugin-replace');
const minify = require('rollup-plugin-babel-minify');
const babelrc = require('./babel');

module.exports = {
  input: 'app/index.js',
  plugins: [
    babel(babelrc),
    resolve({ jsnext: true, browser: true }),
    commonjs(),
    replace({
      'process.env.NODE_ENV': JSON.stringify('staging')
    }),
    minify({ comments: false, sourceMap: true })
  ].filter(Boolean),
  output: {
    name: 'studioDependencies',
    file: 'dist/vendor.js',
    format: 'iife'
  }
};

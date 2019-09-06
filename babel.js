module.exports = {
  babelrc: false,
  runtimeHelpers: true,
  include: ['app/**', 'tests/**'],
  presets: [
    [
      '@babel/env',
      {
        modules: false
      }
    ],
    '@babel/react'
  ],
  plugins: [
    '@babel/external-helpers',
    ['@babel/transform-runtime', { corejs: 2 }]
  ]
};

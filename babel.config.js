module.exports = {
  presets: [['@babel/preset-env', { targets: { node: 'current' } }]],
  plugins: [
    '@babel/plugin-transform-spread',
    '@babel/plugin-proposal-object-rest-spread'
  ]
};

module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    '@babel/preset-typescript'[
      ('@babel/preset-react', { runtime: 'automatic' })
    ]
  ],

  plugins: ['i18next-extract', '@babel/plugin-proposal-class-properties'],
  assumptions: {
    setPublicClassFields: false
  }
};

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: 'defaults',
        modules: false
      }
    ],
    [
      '@babel/preset-react',
      {
        pragma: 'h', // Tells Babel to use `h()` instead of `React.createElement`
        pragmaFrag: 'Fragment', // Optional: for fragments
        runtime: 'classic'
      }
    ]
  ],
  plugins: [
    ['@babel/plugin-transform-react-jsx', { pragma: 'h' }]
  ]
};
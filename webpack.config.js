const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],

    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@commons': path.resolve(__dirname, './src/common'),
      '@components': path.resolve(__dirname, './src/common'),
      '@icons': path.resolve(__dirname, './src/common'),
      '@layout': path.resolve(__dirname, './src/common'),
      '@pages': path.resolve(__dirname, './src/common'),
      '@types': path.resolve(__dirname, './src/common'),
    },
  },
}

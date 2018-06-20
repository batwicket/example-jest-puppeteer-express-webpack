const path = require('path')

module.exports = {
  entry: './index.ts',
  output: {
    filename: 'index.min.js',
    library: 'foo'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [
      { test: /.tsx?$/, loader: 'ts-loader' },
    ]
  },
  mode: 'production'
}
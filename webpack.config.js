// Manejo de paquetas
const path = require('path')

// Transpilacions webpack
const nodeExternals = require('webpack-node-externals')

module.exports = {
  mode: 'development',
  entry: {
    index: './index.ts'
  },
  outout: {
    path: path.join(__dirname, '/dist'),
    filename: '[name].js',
    publicPath: '/'
  },
  target: 'node',
  module: {
    rules: [
      {
        test: /\.tsx?S/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },

  resolve: {
    extensions: ['.tsx', '.ts', '.js']
  },
  externals: [nodeExternals()]
}

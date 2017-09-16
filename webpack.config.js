const webpack = require('webpack')
const path = require('path')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = {
  entry: path.join(__dirname, 'src', 'App.js'),
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'js/bundle.js?' + (new Date()).getTime()
  },
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader', exclude: '/node_modules/' },
      { test: /\.(css|styl)$/, use: [ 'style-loader', 'css-loader', 'stylus-loader' ] },
      { test: /\.(png|svg|jpg|gif|jpeg)$/, use: [ 'file-loader' ] },
      { test: /\.(woff|woff2|eot|ttf|otf)$/, use: [ 'file-loader' ] }
    ]
  },
  devServer: {
    contentBase: './build',
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new UglifyJSPlugin()
  ]
}

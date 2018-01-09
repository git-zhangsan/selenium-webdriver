/*
* @Author: zhanghuiming
* @Date:   2018-01-02 17:02:31
* @Last Modified by:   zhanghuiming
* @Last Modified time: 2018-01-02 17:20:19
*/
module.exports = {
  entry: './index.js',
  output: {
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader'
    }]
  }
}
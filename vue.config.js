const webpack = require('webpack')

module.exports = {
  configureWebpack: {
    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          PACKAGE_VERSION: '"' + require('./package.json').version + '"',
          PACKAGE_BUILD_DATE: new Date().getTime()
        }
      })
    ]
  }
}

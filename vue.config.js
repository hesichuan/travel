const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': path.resolve(__dirname, 'src/assets/styles'),
        'common': path.resolve(__dirname, 'src/common')
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': '/mock/'
        }
      }
    }
  },
  baseUrl: process.env.NODE_ENV === 'production'
    ? '/'
    : './'
}

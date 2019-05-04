const path = require('path')

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'styles': path.resolve(__dirname, 'src/assets/styles')
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

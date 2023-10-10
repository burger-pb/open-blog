const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}
const name = 'vue Admin Template' // page title
const port = process.env.port || process.env.npm_config_port || 9528 // dev port

module.exports = {
  publicPath: '/',

  outputDir: 'dist',
  assetsDir: 'static',
  productionSourceMap: false,

  devServer: {
    port: port,
    open: false,
    // proxy: {
    //   '/api': {
    //     target: "http://api.innovate.quwancode.com/api_1_0", // 实际跨域请求的API地址
    //     secure: false, // https请求则使用true
    //     ws: true,
    //     changeOrigin: true, // 跨域
    //     // 请求地址重写  http://front-end/api/login ⇒ http://api-url/login
    //     pathRewrite: {
    //       '^/api': '/',
    //     }
    //   }
    // },
  },
  configureWebpack: {
    name: name,
    resolve: {
      alias: {
        '@': resolve('src')
      }
    }
  }
}

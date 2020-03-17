const path = require('path')

function resolve(dir){
  return path.join(__dirname, dir)
}

module.exports = {
  publicPath: "/",
  outputDir: "dist",
  devServer: {
    host: "localhost",
    port: 8000,
    https: false,
    open: false,
    // 跨域处理
    proxy: {
      // 项目中请求路径为/api的替换为target
      "/api": {
        target: "http://210.22.114.226:22001", //代理地址，这里设置的地址会代替axios中设置的baseURL
        ws: true, // proxy websockets
        changeOrigin: true, // 如果接口跨域，需要进行这个参数配置
        pathRewrite: {}
      }
    }
  },
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': [
          './src/theme'
        ]
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: true,
      theme: true
    }
  },
  // Vue Cli内部 webpack配置
  chainWebpack(config) {
    config.resolve.alias
      .set('@', resolve('src'))
      .set('api', resolve('src/api'))
      .set('components', resolve('src/components'))
      .set('pages', resolve('src/pages'))
      .set('css', resolve('src/assets/css'))
      .set('js', resolve('src/assets/js'))
      .set('img', resolve('src/assets/img'))
  }
}

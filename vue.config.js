const path = require('path')

function resolve(dir){
  return path.join(__dirname, dir)
}

module.exports = {
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
      .set('api', resolve('src/api'))
      .set('components', resolve('src/components'))
      .set('pages', resolve('src/pages'))
      .set('css', resolve('src/assets/css'))
      .set('js', resolve('src/assets/js'))
      .set('img', resolve('src/assets/img'))
  }
}

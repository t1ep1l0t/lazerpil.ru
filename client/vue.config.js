const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
})

module.exports = {
  chainWebpack: config => {
    config
        .plugin('html')
        .tap(args => {
          args[0].template = './public/index.html'
          args[0].minify = false
          return args
        })
  }
};

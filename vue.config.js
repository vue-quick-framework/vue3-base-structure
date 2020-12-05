// const path = require('path')
// function resolve (dir) {
//   return path.join(__dirname, dir)
// }
module.exports = {
  // transpileDependencies: [/zzp-ui/],
  productionSourceMap: false,

  // publicPath: process.env.NODE_ENV !== 'development' ? './' : '/',
  // outputDir: 'dist',
  devServer: {
    open: true,
    host: '0.0.0.0',
    port: '8080',
    disableHostCheck: true, // 解决127.0.0.1指向其他域名时出现"Invalid Host header"问题
    proxy: {
      '/api': {
        target: '<url>',
        changOrigin: true // 配置跨域
        // ws: true, // 配置ws跨域
        // secure: false, // https协议才设置
      }
    },
    // before: app => {
    //   require('./mock')(app)
    // }
  },

  // 自定义入口和模板
  // pages: {
  //   index: {
  //     entry: 'src/main.js',
  //     template: 'public/index.html',
  //     filename: 'index.html'
  //   }
  // },
  // chainWebpack: config => {
  //   config.resolve.alias.set('@pages', resolve('src/pages'))
  //   // eg: 更改编译忽略某些svg文件的加载
  //   config.module.rule('svg').exclude.add(resolve('src/components/shared/SvgIcon')).end()
  //   config.module.rule('icons').test(/\.svg$/).include.add(resolve('src/components/shared/SvgIcon')).end().use('svg-sprite-loader').loader('svg-sprite-loader').options({ symbolId: 'icon-[name]' }).end()
  //   // 如果使用多页面打包，使用vue inspect --plugins查看html是否在结果数组中
  //   config.plugin('html').tap(args => {
  //     args[0].title = '前后端分离'
  //     return args
  //   })
  // },

  // configureWebpack: config => {
  //   config.module.rules.push({
  //     test: /.md$/,
  //     use: [{
  //       loader: 'text-loader'
  //     }]
  //   })
  // },
  css: {
    loaderOptions: {
      // pass options to sass-loader
      sass: {
        // @/ is an alias to src/
        // before key is 'data', now change to 'prependData'  so this assumes you have a file named `src/variables.scss`
        additionalData: '@import "@/assets/stylesheets/_variables.scss";'
      }
    }
  }
}

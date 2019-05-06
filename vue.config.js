const path = require('path');
const HtmlCompilerPlugin = require('./plugins/HtmlCompilerPlugin.js');

module.exports = {
  runtimeCompiler: true,
  chainWebpack: config => {
    // 使用自定义的 loader
    config.module
      .rule('txt')
      .test(/\.txt$/)
      .use('./loaders/txt-loader.js')
        .loader('./loaders/txt-loader.js')
        .options({
          name: 'yyt'
        })
        .end()
  },
  configureWebpack: {
    plugins: [
      new HtmlCompilerPlugin({
        template: './src/test.html',
        filename: path.resolve(__dirname, './test-compiler.html'),
        params: {
          title: '通过自定义 plugin 编译',
          name: 'yyt'
        }
      })
    ]
  }
};
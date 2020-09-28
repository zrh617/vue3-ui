module.exports = {
  configureWebpack: {
    resolve: {
      extensions: ['.js','.css','.vue'],
      alias: {
        'views': '@/views',
        'components': '@/components',
        'network': '@/network',
        'common': '@/common',
        'assets': '@/assets',
      }
    }
  }
}
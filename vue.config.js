module.exports = {
  css: {
    modules: true,
    loaderOptions: {
      sass: {
        data: `@import "@/styles/variables.scss";`
      }
    }
  },
  devServer: {
    host: 'dev.local.com',
  },
  configureWebpack: {
    devtool: 'source-map',
  },
}
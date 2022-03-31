const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  css: {
    loaderOptions: {
      scss: {
        additionalData: `
        @import "@/templates/mixin/_mixin.scss";
        @import "@/templates/helper/_variables.scss";
      `
      }
    }
  }
})

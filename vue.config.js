module.exports = {
  css: {
    requireModuleExtension: false,
    loaderOptions: {
      css: {
        modules: {
          localIdentName: "[name]-[hash]"
        }
      }
    }
  }
};

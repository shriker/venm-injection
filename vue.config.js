const path = require("path")

module.exports = {
  outputDir: path.resolve(__dirname, "./dist/client"),
  chainWebpack: config => {
    config
      .entry("app")
      .clear()
      .add("./client/main.ts")
      .end()
    config.resolve.alias.set("@", path.join(__dirname, "./client"))
  }
}

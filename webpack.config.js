const path = require("path");

module.exports = {
  entry: "./index",
  output: {
    filename: "[name].js",
    path: path.resolve(__dirname, "./build"),
    publicPath: 'build'
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"] // 能使用户引用时不带扩展
  },
  module: {
    rules: [
      {
        test: /\.tsx?/,
        loader: "awesome-typescript-loader"
      }
    ]
  }
};

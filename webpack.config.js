const path = require("path");

module.exports = {
  mode: "development",
  entry: "./packages/react/index.ts",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js"],
  },
  output: {
    filename: "react/index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd",
    library: "@kryptonium/beoble-ui-kit",
    umdNamedDefine: true,
    globalObject: "this",
  },
  devtool: "source-map",
};

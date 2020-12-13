const path = require("path");
const HtmlWebPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },

  cache: {
    type: "filesystem",
  },
  devtool: "inline-source-map",

  devServer: {
    contentBase: path.resolve(__dirname, "./dist"),
    open: true,
    compress: true,
    hot: true,
    port: 3000,
  },
  //   performance: {
  //     hints: false,
  //   },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.(s*)css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
  plugins: [
    new HtmlWebPlugin({
      template: path.resolve("./public/index.html"),
    }),
    new CleanWebpackPlugin(),
  ],
};

const path = require("path");
const MiniCSSExtractPLugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",

  entry: {
    home: path.resolve(__dirname, "src", "js", "index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist", "js"),
    filename: "bundle-[name].js",
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      title: "webpack-de-server",
    }),
  ],
};

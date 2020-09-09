"use strict";

var path = require("path");

var MiniCSSExtractPlugin = require("mini-css-extract-plugin");

var HtmlWebpackPlugin = require("html-webpack-plugin");

var webpack = require("webpack");

module.exports = {
  entry: {
    home: path.resolve(__dirname, "src/js/index.js")
  },
  mode: "development",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "js/[name].js"
  },
  devServer: {
    hot: true,
    open: true,
    port: 9000
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: "babel-loader",
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ["style-loader", "css-loader"]
    }, {
      test: /\.jpg|png|gif|woff|eot|ttf|svg|mp4|webm$/,
      use: {
        loader: "url-loader",
        options: {
          limit: 90000
        }
      }
    }]
  },
  plugins: [new webpack.HotModuleReplacementPlugin(), new HtmlWebpackPlugin({
    title: "webpack-dev-server",
    template: path.resolve(__dirname, "index.html")
  })]
};
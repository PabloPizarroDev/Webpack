const path = require("path");
const MiniCSSExtractPLugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",

  entry: {
    home: path.resolve(__dirname, "src", "js", "index.js"),
  },

  output: {
    path: path.resolve(__dirname, "dist", "js"),
    filename: "bundle-[name].js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCSSExtractPLugin.loader,
          },
          "css-loader",
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "Plugins",
    }),
    new MiniCSSExtractPLugin({
      filename: "css/[name].css",
    }),
  ],
};

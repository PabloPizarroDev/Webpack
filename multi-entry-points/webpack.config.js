const path = require("path");

module.exports = {
  mode: "development",

  entry: {
    home: path.resolve(__dirname, "src", "js", "index.js"),
    precios: path.resolve(__dirname, "src", "js", "precios"),
    contacto: path.resolve(__dirname, "src", "js", "contacto"),
  },

  output: {
    path: path.resolve(__dirname, "dist", "js"),
    filename: "bundle-[name].js",
  },
};

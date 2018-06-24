var webpack = require("webpack");
var path = require("path");

var DIST_DIR = path.resolve("dist");
var SRC_DIR = path.resolve("src");

var config = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR + "/app",
    filename: "bundle.js",
    publicPath: "/app/"
  },
   module: {
    rules: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: "babel-loader",
        query: {
            presets: ["react", "es2015", "stage-2"]
        }
      }
    ]
  }
};

module.exports = config;
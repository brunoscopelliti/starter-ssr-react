const path = require("path");

const CleanWebpackPlugin = require("clean-webpack-plugin");

const babel = require("./build/common/configure-babel");
const getModuleLocations = require("./build/common/base-folder");

const appFolder = path.resolve(__dirname, "app");
const distFolder = path.resolve(appFolder, "dist", "client", "js");

module.exports = {
  entry: "./app/client.js",
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /node_modules/,
          chunks: "initial",
          name: "vendor",
          priority: 10,
          enforce: true,
        },
      },
    },
  },
  module: {
    rules: [
      babel(appFolder),
    ],
  },
  resolve: {
    modules: getModuleLocations(),
  },
  plugins: [
    new CleanWebpackPlugin([distFolder]),
  ],
  output: {
    path: distFolder,
    filename: "[name].js",
    publicPath: "/js/",
  },
};

const path = require("path");
const nodeExternals = require("webpack-node-externals");

const CleanWebpackPlugin = require("clean-webpack-plugin");

const babel = require("./build/common/configure-babel");
const getModuleLocations = require("./build/common/base-folder");

const appFolder = path.resolve(__dirname, "app");
const distFolder = path.resolve(appFolder, "dist", "server");

module.exports = {
  target: "node",
  externals: [nodeExternals()],
  node: {
    __dirname: true,
  },
  entry: "./app/server.js",
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
    filename: "server.js",
  },
};

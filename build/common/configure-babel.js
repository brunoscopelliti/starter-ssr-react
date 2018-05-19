const configBabelLoader =
  (pathToInclude) => ({
    test: /\.js$/,
    include: pathToInclude,
    loader: "babel-loader",
  });

module.exports = configBabelLoader;

const path = require("path");

const getModuleLocations =
  () => [
    path.join(process.cwd(), "app"),
    "node_modules",
  ];

module.exports = getModuleLocations;

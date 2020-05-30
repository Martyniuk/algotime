const path = require("path");

module.exports = {
  testEnvironment: "jest-environment-node",
  moduleDirectories: ["node_modules", path.join(__dirname, "src"), "shared"],
  transform: {
    "^.+\\.js?$": "babel-jest",
  },
};

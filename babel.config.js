module.exports = {
  ignore: ["node_modules", "__test__"],
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "current",
        },
      },
    ],
  ],
};

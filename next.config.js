const path = require("path");

module.exports = {
  module: {
    loaders: [
      {
        test: /\.(scss|sass)$/i,
        include: [
          path.resolve(__dirname, "node_modules"),
          path.resolve(__dirname, "path/to/imported/file/dir"),
        ],
        loaders: ["css", "sass"],
      },
    ],
  },
};

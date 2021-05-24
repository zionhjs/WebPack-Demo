const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");

// common.js 代表的是公用的的配置放在这里
module.exports = {
  // webpack can setup multiple entry-point, entry point controls what gonna be trigger when $yarn start
  entry: {
    main: "./src/index.js",
    vendor: "./src/vendor.js"
  },
  module: {
    rules: [
      {
        test: /\.html$/,     // test: means which kind of files should be transformed
        use: ["html-loader"]  // use: means which loader we use to do the transform
      },
      {
        test: /\.(svg|png|jpg|gif)$/,
        use: {
          loader: "file-loader",
          options: {
            name: "[name].[hash].[ext]",
            outputPath: "imgs"
          }
        }
      }
    ]
  }
};




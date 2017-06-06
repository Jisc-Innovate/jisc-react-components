/* eslint-disable */

const webpack = require("webpack")
const path = require("path")

const APP_DIR = path.join(__dirname, "src")

module.exports = {
  entry: [APP_DIR + "/ButtonPrimary.jsx"],

  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    }
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  output: {
    path: path.join(__dirname, "lib"),
    filename: "jisc-button-primary.js",
    libraryTarget: "umd"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.optimize.UglifyJsPlugin()
  ]
}

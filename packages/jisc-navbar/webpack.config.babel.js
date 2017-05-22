/* eslint-disable */

const webpack = require("webpack")
const path = require("path")

const APP_DIR = path.join( __dirname, "src" )

module.exports = {
  entry: {
    navbar: APP_DIR + "/NavBar",
    "navbar-tab": APP_DIR + "/Tab"
  },

  resolve: {
    extensions: [ ".js", ".jsx" ],
    modules: [ path.resolve(__dirname, "src"), "node_modules" ]
  },

  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    "react-router": {
      root: "ReactRouter",
      commonjs2: "react-router",
      commonjs: "react-router",
      amd: "react-router"
    }
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  output: {
    path: path.join( __dirname, "lib" ),
    filename: "jisc-[name].js",
    library: "jisc-navbar",
    libraryTarget: "umd",
    umdNamedDefine: true
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
    new webpack.NoEmitOnErrorsPlugin( ),

    new webpack.optimize.UglifyJsPlugin( )
  ]
}

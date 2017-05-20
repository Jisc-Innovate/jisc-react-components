/* eslint-disable */

import webpack from "webpack"
import path from "path"

const APP_DIR = path.join( __dirname, "src" )

const config = {
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
    },
    "recompose": {
      root: "Recompose",
      commonjs2: "recompose",
      commonjs: "recompose",
      amd: "recompose"
    }
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  output: {
    path: path.join( __dirname, "lib" ),
    filename: "jisc-[name].js",
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
    new webpack.NoEmitOnErrorsPlugin( ),

    new webpack.optimize.UglifyJsPlugin( )
  ]
}

export default config

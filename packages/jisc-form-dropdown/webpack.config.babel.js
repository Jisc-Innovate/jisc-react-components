import webpack from "webpack"
import path from "path"

const APP_DIR = path.join( __dirname, "src" )

const config = {
  entry: APP_DIR + "/FormDropDown.jsx",

  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    }
  },

  resolve: {
    extensions: [ ".js", ".jsx" ],
    modules: [ path.resolve(__dirname, "src"), "node_modules" ]
  },

  output: {
    path: path.join( __dirname, "lib" ),
    filename: "jisc-form-dropdown.js",
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

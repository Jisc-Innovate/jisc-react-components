import webpack from "webpack"
import path from "path"

import ExtractTextPlugin from "extract-text-webpack-plugin"

const APP_DIR = path.join( __dirname, "src" )

const config = {
  entry: APP_DIR + "/FormInputText.jsx",

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
    filename: "jisc-form-input-text.js",
    libraryTarget: "umd"
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.scss?$/,
        include: path.resolve( __dirname, "src" ),
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            "css-loader",
            "postcss-loader",
            "sass-loader"
          ]
        })
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin( ),

    new webpack.optimize.UglifyJsPlugin( ),

    new ExtractTextPlugin( "jisc-form-input-text.css" )
  ]
}

export default config

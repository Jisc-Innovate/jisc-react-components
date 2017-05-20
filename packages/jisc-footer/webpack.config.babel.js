/* eslint-disable */

const webpack = require("webpack")
const path = require("path")

const APP_DIR = path.join( __dirname, "src" )

module.exports = {
  entry: [
    APP_DIR + "/Footer"
  ],

  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react"
    },
    'react-dom': {
      root: 'ReactDOM',
      commonjs2: 'react-dom',
      commonjs: 'react-dom',
      amd: 'react-dom',
      umd: 'react-dom',
    },
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  output: {
    path: path.join( __dirname, "lib" ),
    filename: "jisc-footer.js",
    library: "jisc-footer",
    libraryTarget: "umd",
    umdNamedDefine: true
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
        options: {
          presets: [
            'es2015'
          ]
        }
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin( ),

    new webpack.optimize.UglifyJsPlugin( )
  ]
}

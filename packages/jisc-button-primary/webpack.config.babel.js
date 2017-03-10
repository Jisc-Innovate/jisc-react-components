import webpack from "webpack"
import path from "path"

const APP_DIR = path.join( __dirname, "src" )

const config = {
  devtool: "source-map",

  entry: [
    APP_DIR + "/ButtonPrimary.jsx"
  ],

  externals: {
    react: "react"
  },

  resolve: {
    extensions: [".js", ".jsx"],
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },

  output: {
    path: path.join( __dirname, "lib" ),
    filename: "jisc-button-primary.js"
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

    new webpack.DefinePlugin({
      "process.env": {
        "NODE_ENV": "'development'"
      }
    }),

    new webpack.optimize.UglifyJsPlugin( )
  ]
}

export default config

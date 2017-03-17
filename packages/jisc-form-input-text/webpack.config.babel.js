import webpack from "webpack"
import path from "path"

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
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
          { loader: "sass-loader" }
        ]
      }
    ]
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin( ),

    new webpack.optimize.UglifyJsPlugin( )
  ]
}

export default config

const path = require("path")

module.exports = {
  resolve: {
    root: [path.resolve(__dirname, "../packages/jisc-navbar/src"), "node_modules"]
  },
  module: {
    loaders: [
      {
        test: /\.s?css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.(png|gif)$/,
        loader: "url-loader?limit=8192"
      },
      {
        test: /\.(woff(2)?|svg|ttf|eot)(\?[a-z0-9\.=#]+)?$/,
        loader: "url-loader?limit=30000&name=[name]-[hash].[ext]"
      }
    ]
  }
}

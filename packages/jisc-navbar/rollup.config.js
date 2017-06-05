import babel from "rollup-plugin-babel"
import image from "rollup-plugin-image"
import resolve from "rollup-plugin-node-resolve"

export default {
  dest: "lib/jisc-navbar.js",
  entry: "src/NavBar/index.js",
  external: ["react", "react-router", "recompose"],
  format: "umd",
  globals: {
    react: "React",
    "react-router": "ReactRouter",
    "recompose": "Recompose"
  },
  moduleName: "jisc-navbar",
  plugins: [
    babel({
      exclude: "**/node_modules/**"
    }),
    image(),
    resolve({
      browser: true,
      customResolveOptions: {
        moduleDirectory: "src"
      },
      extensions: [".js", ".jsx"],
      jsnext: true,
      main: true
    })
  ],
  sourceMap: "inline"
}

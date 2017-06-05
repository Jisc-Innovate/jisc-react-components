module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    jest: true,
    expect: true,
    describe: true,
    it: true
  },
  extends: "eslint:recommended",
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: "module"
  },
  plugins: ["react"],
  rules: {
    "no-unused-vars": 1,
    "linebreak-style": ["error", "unix"],
    quotes: [
      "error",
      "double",
      {
        allowTemplateLiterals: true,
        avoidEscape: true
      }
    ],
    semi: ["error", "never"],
    "react/jsx-uses-vars": 1,
    "react/jsx-indent": [2, 2],
    "react/jsx-indent-props": [2, 2],
    "react/jsx-max-props-per-line": [2, { maximum: 1 }],
    "react/no-danger": 0,
    "react/prefer-stateless-function": [1],
    "react/forbid-component-props": 0,
    "react/no-will-update-set-state": 0,
    "react/default-props-match-prop-types": 0,
    "react/no-redundant-should-component-update": 0,
    "react/jsx-wrap-multilines": [2],
    "react/jsx-no-undef": [1, { allowGlobals: true }],
    "no-console": 1,
    "no-inner-declarations": 1,
    indent: ["error", 2],
    "quote-props": 0,
    "object-curly-newline": 0,
    "dot-location": [1, "property"],
    "sort-vars": 0,
    "one-var": [1, "never"],
    "new-cap": [1, { capIsNew: false }],
    "no-console": 1,
    "no-inner-declarations": 1
  }
}

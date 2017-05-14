module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true
    },
    "globals": {
      "jest": true,
      "expect": true,
      "describe": true,
      "it": true,
      "beforeEach": true
    },
    "extends": [
      "eslint:all",
      "plugin:react/all",
      "plugin:flowtype/recommended",
      "plugin:jsx-control-statements/recommended"
    ],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "jsx-control-statements",
        "flowtype"
    ],
    "rules": {
        "no-unused-vars": 1,
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double",
            { "allowTemplateLiterals": true,
              "avoidEscape": true }
        ],
        "semi": [
            "error",
            "never"
        ],
        "react/jsx-uses-vars": 1,
        "react/jsx-indent": 0,
        "react/jsx-indent-props": 0,
        "react/no-danger": 0,
        "react/prefer-stateless-function": [ 1 ],
        "react/forbid-component-props": 0,
        "no-console": 1,
        "no-inner-declarations": 1,
        "indent": 0,
        "quote-props": 0,
        "object-curly-newline": 0,
        "dot-location": [ 1, "property" ],
        "sort-vars": 0,
        "one-var": [ 1, "never" ],
        "new-cap": [ 1, { capIsNew: false } ],
        "no-console": 1,
        "no-inner-declarations": 1
    }
};

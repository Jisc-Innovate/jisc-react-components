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
      "it": true
    },
    "extends": "eslint:recommended",
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
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
        "no-console": 1,
        "no-inner-declarations": 1
    }
};

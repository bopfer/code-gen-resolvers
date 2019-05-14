module.exports = {
  "env": {
    browser: true,
    es6: true,
    node: true,
    jest: true
  },
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "no-null",
    "react",
    "react-hooks"
  ],
  extends: [
    "airbnb",
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
  ],
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: "detect"
    },
    "import/resolver": {
      node: {
        extensions: [
          ".js",
          ".jsx",
          ".ts",
          ".tsx"
        ]
      }
    }
  },
  rules: {
    "@typescript-eslint/await-thenable": "error",
    "@typescript-eslint/indent": [ "error", 2, {
      "SwitchCase": 1
    } ],
    "@typescript-eslint/interface-name-prefix": [ "error", "never" ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/no-object-literal-type-assertion": [ "error", {
      allowAsParameter: true
    } ],
    "@typescript-eslint/no-unused-vars": "error",
    "@typescript-eslint/no-use-before-define": [ "error", {
      variables: false
    } ],
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-interface": "off",
    "@typescript-eslint/prefer-regexp-exec": "error",
    "@typescript-eslint/prefer-string-starts-ends-with": "error",
    "@typescript-eslint/semi": "error",
    "array-bracket-newline": [ "error", {
      multiline: true
    } ],
    "array-bracket-spacing": [ "error", "always", {
      singleValue: false
    } ],
    "arrow-body-style": [ "error", "as-needed" ],
    "arrow-parens": [ "error", "as-needed" ],
    "arrow-spacing": "error",
    "block-spacing": "error",
    "brace-style": [ "error", "stroustrup" ],
    "comma-dangle": ["error", {
      arrays: "always-multiline",
      objects: "always-multiline",
      imports: "always-multiline",
      exports: "always-multiline",
    }],
    "comma-spacing": "error",
    "computed-property-spacing": "error",
    curly: "error",
    "default-case": "error",
    eqeqeq: "error",
    "func-call-spacing": "error",
    "import/prefer-default-export": "off",
    "import/no-commonjs": "error",
    "import/no-default-export": "error",
    "import/no-extraneous-dependencies": context => [ 'error', {
      devDependencies: true,
      packageDir: [ context.getFilename(), __dirname ]
    } ],

    /* The @/ imports do not work with this on. */
    "import/no-unresolved": "off",

    "import/no-unassigned-import": [ "error", {
      allow: [
        "typeface-raleway",
      ]
    } ],
    "import/no-useless-path-segments": ["error", {
      noUselessIndex: true,
    } ],

    /* Needs to be off so `@typescript-eslint/indent` can do the work */
    indent: "off",

    "jsx-a11y/label-has-associated-control": [ "error", { assert: "either" } ],

    /* Deprecated rule... use jsx-a11y/label-has-associated-control */
    "jsx-a11y/label-has-for": "off",

    "jsx-quotes": "error",
    "key-spacing": "error",
    "keyword-spacing": "error",
    "linebreak-style": "error",
    "max-len": [ "error", {
      code: 100,
      comments: 100,
      ignoreUrls: true
    } ],
    "max-params": [ "error", 4 ],
    "multiline-ternary": [ "error", "always-multiline" ],
    "newline-per-chained-call": "error",
    "no-alert": "error",
    "no-console": "off",
    "no-eval": "error",
    "no-implied-eval": "error",
    "no-lonely-if": "error",
    "no-mixed-operators": "error",
    "no-multi-spaces": "error",
    "no-multiple-empty-lines": [ "error", {
      max: 1,
      maxEOF: 1
    } ],
    "no-null/no-null": "error",
    "no-plusplus": "error",
    "no-return-assign": [ "error", "always" ],
    "no-return-await": "error",
    "no-restricted-imports": ["error", {
      paths: [
        {
          name: "styled-components",
          importNames: ["default"],
          message: "Please use 'styled-components/macro' instead."
        },
      ]
    }],
    "no-sequences": "error",
    "no-shadow": "error",
    "no-shadow-restricted-names": "error",
    "no-trailing-spaces": "error",
    "no-unneeded-ternary": "error",
    "no-unused-expressions": "error",
    "no-useless-catch": "error",
    "no-useless-concat": "error",
    "no-useless-rename": "error",
    "no-whitespace-before-property": "error",
    "object-curly-newline": ["error", { consistent: true }],
    "object-curly-spacing": [ "error", "always" ],
    "object-shorthand": [ "error", "always", {
      avoidExplicitReturnArrows: true
    } ],
    "padding-line-between-statements": [ "error",
      { blankLine: "always", prev: "*", next: "return" }
    ],
    "prefer-arrow-callback": "error",
    "prefer-const": "error",
    "prefer-object-spread": "error",
    "prefer-template": "error",
    quotes: [ "error", "backtick" ],
    "react/jsx-filename-extension": [ 1, { extensions: [ ".tsx" ] } ],
    "react/jsx-boolean-value": [ "error", "always" ],
    "react/jsx-fragments": ["error", "syntax"],
    "react/jsx-key": "error",
    "react/jsx-no-bind": [ "error", {} ],
    "react/jsx-no-duplicate-props": [ "error", { ignoreCase: true } ],
    "react/jsx-props-no-multi-spaces": "error",
    "react/jsx-wrap-multilines": [ "error", {
      assignment: "parens-new-line",
      arrow: "parens-new-line",
      condition: "parens-new-line",
      declaration: "parens-new-line",
      logical: "parens-new-line",
      prop: "parens-new-line",
      return: "parens-new-line"
    } ],
    "react/prop-types": "off",
    "react/destructuring-assignment": "off",
    "react/forbid-component-props": [ "error", {
      forbid: [ 'className', 'style' ]
    } ],
    "react/forbid-dom-props": [ "error", { forbid: [ 'id', 'style' ]} ],
    "react/no-children-prop": "error",
    "react/no-danger": "error",
    "react/no-deprecated": "error",
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "require-atomic-updates": "error",
    "require-await": "error",
    "rest-spread-spacing": "error",

    /* Needs to be off so `@typescript-eslint/semi` can do the work */
    semi: "off",

    "semi-spacing": "error",
    "semi-style": "error",
    "space-before-function-paren": [ "error", {
      anonymous: "never",
      named: "never",
      asyncArrow: "always"
    } ],
    "space-in-parens": "error",
    "space-infix-ops": "error",
    "spaced-comment": "error",
    "switch-colon-spacing": "error",
    "template-tag-spacing": "error",
    yoda: "error"
  }
}

const { type } = require("jquery");

module.exports = {
    root: true,
    env: {
      // this section will be used to determine which APIs are available to us
      // (i.e are we running in a browser environment or a node.js env)
      node: true,
      browser: true
    },
    parserOptions: {
      parser: "babel-eslint",
      // specifying a module sourcetype prevent eslint from marking import statements as errors
      sourceType: "module"
    },
    extends: [
      // use the recommended rule set for both plain javascript and vue
      "eslint:recommended",
      "plugin:vue/recommended"
    ],
    rules: {
      "vue/no-parsing-error": ["error", {
        "abrupt-closing-of-empty-comment": true,
        "absence-of-digits-in-numeric-character-reference": true,
        "cdata-in-html-content": true,
        "character-reference-outside-unicode-range": true,
        "control-character-in-input-stream": true,
        "control-character-reference": true,
        "eof-before-tag-name": true,
        "eof-in-cdata": true,
        "eof-in-comment": true,
        "eof-in-tag": true,
        "incorrectly-closed-comment": true,
        "incorrectly-opened-comment": true,
        "invalid-first-character-of-tag-name": true,
        "missing-attribute-value": true,
        "missing-end-tag-name": true,
        "missing-semicolon-after-character-reference": true,
        "missing-whitespace-between-attributes": true,
        "nested-comment": true,
        "noncharacter-character-reference": true,
        "noncharacter-in-input-stream": true,
        "null-character-reference": true,
        "surrogate-character-reference": true,
        "surrogate-in-input-stream": true,
        "unexpected-character-in-attribute-name": true,
        "unexpected-character-in-unquoted-attribute-value": true,
        "unexpected-equals-sign-before-attribute-name": true,
        "unexpected-null-character": true,
        "unexpected-question-mark-instead-of-tag-name": true,
        "unexpected-solidus-in-tag": true,
        "unknown-named-character-reference": true,
        "end-tag-with-attributes": true,
        "duplicate-attribute": true,
        "end-tag-with-trailing-solidus": true,
        "non-void-html-element-start-tag-with-trailing-solidus": false,
        "x-invalid-end-tag": true,
        "x-invalid-namespace": true
      }],
      "vue/max-attributes-per-line": "off",
      "vue/singleline-html-element-content-newline" : "off",
      "vue/html-indent": "off",
      // we should always disable console logs and debugging in production
      "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
      "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off"
    }
  };
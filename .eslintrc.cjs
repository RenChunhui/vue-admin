/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript",
  ],
  rules: {
    semi: ["error", "never"],
    quotes: ["error", "single"],
    "vue/component-name-in-template-casing": ["error", "PascalCase"],
    "vue/custom-event-name-casing": ["error", "camelCase"],
    "vue/define-macros-order": [
      "error",
      {
        order: ["defineProps", "defineEmits"],
      },
    ],
    "vue/attribute-hyphenation": ["error", "always"],
    "vue/first-attribute-linebreak": [
      "error",
      {
        singleline: "ignore",
        multiline: "below",
      },
    ],
    "vue/html-closing-bracket-newline": [
      "error",
      {
        singleline: "never",
        multiline: "never",
      },
    ],
    "vue/html-closing-bracket-spacing": [
      "error",
      {
        startTag: "never",
        endTag: "never",
        selfClosingTag: "always",
      },
    ],
    "vue/html-indent": "error",
    "vue/html-quotes": ["error", "double"],
    "vue/max-attributes-per-line": [
      "error",
      {
        singleline: { max: 2 },
        multiline: { max: 1 },
      },
    ],
    "vue/mustache-interpolation-spacing": ["error", "always"],
    "vue/prop-name-casing": ["error", "camelCase"],
    "vue/multi-word-component-names": "off",
    "vue/no-multi-spaces": "error",
    "vue/no-textarea-mustache": "error",
    "vue/no-use-v-if-with-v-for": "error",
    "vue/no-watch-after-await": "error",
    "vue/block-lang": [
      "error",
      {
        script: {
          lang: "ts",
        },
      },
    ],
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};

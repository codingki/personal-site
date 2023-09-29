// @ts-check

const { getTsconfigPath } = require("@graz-sh/style-guide/eslint/helpers");

/** @type {import("eslint").Linter.Config} */
const eslintConfig = {
  extends: [
    require.resolve("@graz-sh/style-guide/eslint/browser-node"),
    require.resolve("@graz-sh/style-guide/eslint/react"),
    require.resolve("@graz-sh/style-guide/eslint/next"),
    require.resolve("@graz-sh/style-guide/eslint/typescript"),
  ],
  ignorePatterns: [".next", "node_modules", "out"],
  parserOptions: {
    project: getTsconfigPath(),
  },
  rules: {
    "@typescript-eslint/ban-ts-ignore": "off",
    "@typescript-eslint/ban-ts-comment": "off",
  },
  root: true,
};

module.exports = eslintConfig;

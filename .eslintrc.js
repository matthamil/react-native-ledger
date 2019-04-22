module.exports = {
  extends: ["plugin:@typescript-eslint/recommended", "prettier", "prettier/@typescript-eslint"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    sourceType: "module",
    ecmaVersion: 2018,
    project: "./tsconfig.json"
  },
  rules: {
    "@typescript-eslint/interface-name-prefix": "never",
    "@typescript-eslint/no-explicit-any": "always",
    "@typescript-eslint/explicit-function-return-type": "always",
    "@typescript-eslint/no-non-null-assertion": "always",
    "@typescript-eslint/no-use-before-define": ["error", { functions: true, classes: true }],
    "@typescript-eslint/member-delimiter-style": {
      delimiter: "semi",
      requireLast: true
    }
  }
};

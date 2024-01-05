module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {},
  all: {
    plugins: ["react"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: activeRulesConfig,
  },
  "jsx-runtime": {
    plugins: ["react"],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
    },
    rules: {
      "react/react-in-jsx-scope": 0,
      "react/jsx-uses-react": 0,
    },
  },
};

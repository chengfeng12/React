module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ["plugin:react/recommended"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["react"],
  rules: {
    // 解决 error 'React' must be in scope when using JSX react/react-in-jsx-scope
    "react/react-in-jsx-scope": "off",
  },
  // eslintrc.js
  // settings: {
  //   "import/resolver": {
  //     typescript: {},
  //   },
  // },
};

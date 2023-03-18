module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/eslint-recommended",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
    "prettier"
  ],
  plugins: [
    "simple-import-sort",
    "typescript-sort-keys",
    "sort-keys-fix",
    "sort-destructure-keys",
    "unused-imports",
    "import-access",
    "@typescript-eslint"
  ],
  parserOptions: {
    "project": "tsconfig.json",
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  rules: {
    "no-console": ["warn", { allow: ["warn", "info", "error"] }],
    "no-restricted-syntax": ["warn", { selector: "TSEnumDeclaration", message: "Don't declare enums" }],
    "prefer-arrow-callback": "warn",
    "prefer-const": "warn",
    "func-style": ["warn", "expression"],
    "arrow-body-style": ["warn", "always"],
    "no-restricted-imports": ["warn", { paths: [{ name: "react", importNames: ["default"] }] }],
    "react/display-name": "warn",
    "react/jsx-handler-names": "off",
    "react-hooks/rules-of-hooks": "warn",
    "react-hooks/exhaustive-deps": "warn",
    "import/newline-after-import": "warn",
    "import-access/jsdoc": "warn",
    "simple-import-sort/imports": "warn",
    "simple-import-sort/exports": "warn",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/consistent-type-imports": ["warn", { prefer: "type-imports" }],
    "@typescript-eslint/no-unused-vars": ["warn", { varsIgnorePattern: "^_", argsIgnorePattern: "^_" }],
    "jsx-a11y/no-autofocus": "off",
    "jsx-a11y/anchor-is-valid": [
      "warn",
      {
        components: ["Link"],
        specialLink: ["hrefLeft", "hrefRight"],
        aspects: ["invalidHref", "preferButton"],
      },
    ],
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "react/react-in-jsx-scope": "off",
    "react/prop-types": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "react/destructuring-assignment": ["warn", "always"],
    "react/function-component-definition": [
      "warn",
      {
        namedComponents: "arrow-function",
        unnamedComponents: "arrow-function",
      },
    ],
    "react/self-closing-comp": [
      "warn",
      {
        component: true,
        html: true,
      },
    ],
    "react/jsx-boolean-value": "warn",
    "react/jsx-curly-brace-presence": "warn",
    "react/jsx-no-useless-fragment": "warn",
    "react/jsx-pascal-case": "warn",
    "react/jsx-sort-props": [
      "warn",
      { callbacksLast: true, shorthandFirst: true },
    ],
  }
}

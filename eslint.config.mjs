import js from "@eslint/js";
import babelParser from "@babel/eslint-parser";
import globals from "globals";
import react from "eslint-plugin-react";
import unicorn from "eslint-plugin-unicorn";

export default [
  {
    ignores: ["node_modules/**", "build/**", "dist/**", "flow-typed/**"]
  },
  js.configs.recommended,
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021
      },
      parser: babelParser,
      parserOptions: {
        requireConfigFile: false,
        babelOptions: {
          configFile: "./.babelrc.js"
        },
        ecmaFeatures: {
          jsx: true
        }
      }
    },
    plugins: {
      react,
      unicorn
    },
    settings: {
      react: {
        version: "detect"
      }
    },
    rules: {
      ...react.configs.recommended.rules,
      "no-console": "off",
      "no-use-before-define": ["error", "nofunc"],
      "no-unused-vars": [
        "warn",
        {
          argsIgnorePattern: "^(e|_.*)$",
          vars: "local",
          varsIgnorePattern: "(debug|^_)"
        }
      ],
      "prefer-const": "error",
      "react/jsx-boolean-value": ["error", "always"],
      "unicorn/better-regex": "warn",
      "unicorn/expiring-todo-comments": "error",
      "unicorn/no-abusive-eslint-disable": "error"
    }
  }
];

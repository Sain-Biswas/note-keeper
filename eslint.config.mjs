import { defineConfig, globalIgnores } from "eslint/config";

import tseslint from "typescript-eslint";

import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

import pluginReact from "@eslint-react/eslint-plugin";
import pluginReactQuery from "@tanstack/eslint-plugin-query";
import pluginDrizzle from "eslint-plugin-drizzle";

import prettier from "eslint-plugin-prettier/recommended";

const eslintConfig = defineConfig([
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,

  pluginReact.configs["strict-type-checked"],
  pluginReactQuery.configs["flat/recommended"],

  prettier,

  {
    files: ["**/*.{ts,tsx,js,jsx,mjs}"],

    plugins: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      drizzle: pluginDrizzle
    },

    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
        ecmaFeatures: {
          jsx: true
        }
      }
    },

    settings: {
      react: {
        version: "detect"
      }
    },

    rules: {
      "@typescript-eslint/array-type": "off",
      "@typescript-eslint/consistent-type-definitions": "off",
      "@typescript-eslint/consistent-type-imports": [
        "warn",
        { prefer: "type-imports", fixStyle: "inline-type-imports" }
      ],
      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_" }
      ],
      "@typescript-eslint/require-await": "off",
      "@typescript-eslint/no-misused-promises": [
        "error",
        { checksVoidReturn: { attributes: false } }
      ],
      "@typescript-eslint/restrict-template-expressions": "off",

      "drizzle/enforce-delete-with-where": [
        "error",
        { drizzleObjectName: ["database", "ctx.database"] }
      ],
      "drizzle/enforce-update-with-where": [
        "error",
        { drizzleObjectName: ["database", "ctx.database"] }
      ],

      "@eslint-react/naming-convention/filename": [
        "error",
        { rule: "kebab-case" }
      ],
      "@eslint-react/naming-convention/component-name": [
        "error",
        { rule: "PascalCase", allowAllCaps: true }
      ]
    }
  },

  ...nextVitals,
  ...nextTs,

  globalIgnores([".next/**", "out/**", "build/**", "next-env.d.ts"])
]);

export default eslintConfig;

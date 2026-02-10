import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import unicorn from "eslint-plugin-unicorn";

const eslintConfig = defineConfig([
  ...nextVitals,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  {
    plugins: {
      unicorn,
    },
    rules: {
      // Enforce kebab-case for filenames
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: [
            // Allow PascalCase for React component files if needed
            // But we want kebab-case for everything, so no exceptions
          ],
        },
      ],
    },
  },
]);

export default eslintConfig;

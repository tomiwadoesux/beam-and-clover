import antfu from "@antfu/eslint-config";

export default antfu(
  {
    type: "app",
    nextjs: true,
    react: true,
    typescript: true,
    formatters: true,

    ignores: [
      "convex/**",
    ],

    stylistic: {
      indent: 2,
      semi: true,
      quotes: "double",
    },
  },
  {
    rules: {
      // Custom overrides
      "no-console": ["warn"],
      "antfu/no-top-level-await": "off",
      "node/prefer-global/process": "off",
      "node/no-process-env": "error",

      // Perfectionist sorting
      "perfectionist/sort-imports": [
        "error",
        {
          type: "alphabetical",
          order: "asc",
          ignoreCase: true,
        },
      ],

      // Filename convention (enforced kebab-case)
      "unicorn/filename-case": [
        "error",
        {
          case: "kebabCase",
          ignore: ["README.md"],
        },
      ],

      // Stylistic adjustments
      "style/operator-linebreak": ["error", "after"],
      "style/arrow-parens": "off",
      "style/jsx-one-expression-per-line": "off",
    },
  },
);
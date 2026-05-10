// @ts-check

import expectType from "eslint-plugin-expect-type/configs/recommended";
import tseslint, { parser } from "typescript-eslint";

/** @type {ReturnType<typeof tseslint.config>} */
const config = tseslint.config(
    tseslint.configs.base,
    expectType,
    // global ignore
    { ignores: ["build/*", "eslint.config.*"] },
    {
        rules: {
            "@typescript-eslint/no-invalid-void-type": "error",
        },
    },
    { files: ["src/**/*.ts", "dist/screeps-tests.ts"] },
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            parserOptions: {
                parser: parser,
                project: ["./tsconfig.json", "./dist/tsconfig.json"],
            },
        },
    },
);

export default config;

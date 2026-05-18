// @ts-check
import tseslint, { parser } from 'typescript-eslint';
import expectType from "eslint-plugin-expect-type/configs/recommended";

export default tseslint.config(
    tseslint.configs.base,
    expectType,
    // global ignore
    { ignores: ["build/*", "eslint.config.*"], },
    {
        rules: {
            "@typescript-eslint/no-invalid-void-type": "error",
        }
    },
    { files: ['src/**/*.ts', 'dist/screeps-tests.ts'], },
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            parserOptions: {
                parser: parser,
                project: ["./tsconfig.json", './dist/tsconfig.json'],
            },
        },
    },
)

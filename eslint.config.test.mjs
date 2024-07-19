// @ts-check
// only used for 'dist/screeps-tests.ts'
import tseslint, { parser } from 'typescript-eslint';
import { sharedOpts } from "./eslint.config.mjs";

export default tseslint.config(
    ...sharedOpts,
    { files: ['dist/screeps-tests.ts'], },
    {
        languageOptions: {
            ecmaVersion: 2022,
            sourceType: "module",
            parserOptions: {
                parser: parser,
                project: ['./dist/tsconfig.json'],
            },
        },
    },
)

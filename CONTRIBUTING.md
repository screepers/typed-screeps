# Thank you for contributing to `typed-screeps`!

This document contains guides on getting started with developing `typed-screeps`, as well as the guidelines for contributing to this repository.

This library will stay up to date only with the help of you! If active players don't update it, it'll get lost.

## The Five Golden Rules

The simple steps of contributing to any GitHub project are as follows:

1. [Fork the repository](https://github.com/screepers/typed-screeps/fork)
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push -u origin my-new-feature`
5. Create a [Pull Request](https://github.com/screepers/typed-screeps/pulls)!

To keep your fork of in sync with this repository, [follow this guide](https://help.github.com/articles/syncing-a-fork/).

## Getting Started

To get started, just clone this repository, and install the required dependencies.

```bash
npm install
```

The code lives in the `src/` directory. Feel free to make your changes, and when you're done, run the following command to build them:

```bash
npm run build
```

## Running Tests

To test your changes, run the following command.

```bash
npm test
```

This command will build your changes, lint `src/`, verify `$ExpectType` assertions in `dist/screeps-tests.ts`, and type-check that test file against the built declarations. The tests pass if all of those steps succeed.

The `dist/screeps-tests.ts` file also works as a sandbox for your additions. Use `// $ExpectType SomeType` comments to assert inferred types; they are checked by `npm run lint`. If you open this file and see no red squiggly lines, then you're good!

## Committing

This codebase uses [husky](https://github.com/typicode/husky) to auto-build changes on commit. When you commit the changes, husky will first automatically run `npm run build` and build your changes.

## Filing Issues

We've created [a handy template](ISSUE_TEMPLATE.md) for you to submit any issues with. Please use it! It will assist us in triaging your issues.

## Submitting a Pull Request

We accept almost all pull requests, provided your code passes all of the tests, and your pull request description follows the [template](PULL_REQUEST_TEMPLATE.md) we've set up for you.

When adding new features, don't forget to add tests for them at the `dist/screeps-tests.ts` file. Likewise, don't forget to edit the [readme](README.md) if you are introducing any major changes or updates.

When making changes that are potentially breaking, careful discussion must be done with the community at large. Generally we do this either on the [#typescript](https://screeps.slack.com/messages/typescript/) channel on the Screeps Slack, or on the corresponding pull request discussion thread.

## Update checklist

If you are just submitting a PR, this isn't needed, but for new maintainers, when preparing a new version or updates:

1. Update the changelog with links to each relevant PR
2. Update the contributors list.
3. Update version numbers if required
4. (If releasing) Package a release / Update the relevant draft release
5. Close / Update relevant issues
6. (If publishing) Sync to DefinitelyTyped (see below)

## Publishing to DefinitelyTyped

Consumers install `@types/screeps` from [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped/tree/master/types/screeps). This repo keeps a DT-shaped package under `dist/` and provides two maintainer scripts that use a **local sparse clone** of DefinitelyTyped at `./DefinitelyTyped` (gitignored) so you do not need a full DT checkout.

### Pull DT → `dist/` (do not revert upstream edits)

```bash
npm run dt:pull
```

First run only bootstraps the merge base (`refs/dt/base`) and leaves `dist/` unchanged. Later runs 3-way-merge the current `types/screeps` tree into `dist/` against that base, so DT-side tooling/config changes are preserved.

The script **never commits**. It leaves `dist/` dirty for you to review, port any declaration fixes into `src/`, and commit yourself. Re-run `dt:pull` after that commit to advance the merge base.

```bash
bash ./scripts/dt-pull.sh --reset-base   # set merge base to current DT; do not touch dist/
```

Note: husky regenerates `dist/index.d.ts` from `src/` on commit, so DT-only edits to that file will be lost unless ported into `src/` first.

### Push `dist/` → ready-to-PR DT branch

```bash
npm run dt:push
```

This updates the sparse DT clone from `master`, creates `screeps-v<version>`, and copies `dist/` into `types/screeps/`. Push that branch to your DefinitelyTyped fork and open the upstream PR yourself (DT may supply its own PR template).

Typical release sequence:

1. `npm run dt:pull` (merge any DT-side drift into `dist/`)
2. Finish the version/changelog/release checklist above
3. `npm run dt:push`, then push the branch from `./DefinitelyTyped` and open the DT PR
4. After DT CI is green, get an owner review and comment `Ready to merge` for typescript-bot

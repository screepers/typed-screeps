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

The code lives in the `src/` directory. Feel free to make your changes, and when you're done, run the following command to compile them:

```bash
npm run compile
```

## Running Tests

To test your changes, run the following command.

```bash
npm test
```

This command will compile your most recent changes, and then run linting checks. It will also test compiling against the `test/typed-screeps-tests.ts` file. The tests pass if all code is lint-checked and the tests file compiles without any errors.

The `test/typed-screeps-tests.ts` file also works as a sandbox for your additions. If you open this file and see no red squiggly lines, then you're good!

## Committing

This codebase uses [husky](https://github.com/typicode/husky) to auto-compile changes on commit. When you commit the changes, husky will first automatically run `npm run compile` and compile your changes.

## Filing Issues

We've created [a handy template](ISSUE_TEMPLATE.md) for you to submit any issues with. Please use it! It will assist us in triaging your issues.

## Submitting a Pull Request

We accept almost all pull requests, provided your code passes all of the tests, and your pull request description follows the [template](PULL_REQUEST_TEMPLATE.md) we've set up for you.

When adding new features, don't forget to add tests for them at the `test/typed-screeps-tests.ts` file. Likewise, don't forget to edit the [readme](README.md) if you are introducing any major changes or updates.

When making changes that are potentially breaking, careful discussion must be done with the community at large. Generally we do this either on the [#typescript](https://screeps.slack.com/messages/typescript/) channel on the Screeps Slack, or on the corresponding pull request discussion thread.

## Update checklist

If you are just submitting a PR, this isn't needed, but for new maintainers, when preparing a new version or updates:

1. Update the changelog with links to each relevant PR
2. Update the contributors list.
3. Update version numbers if required
4. (If releasing) Package a release / Update the relevant draft release
5. Close / Update relevant issues
6. (If publishing) Submit a PR to Definitely-Typed

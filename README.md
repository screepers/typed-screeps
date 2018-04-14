# typed-screeps

> Strong TypeScript declarations for the game Screeps.

[![Travis](https://img.shields.io/travis/screepers/typed-screeps.svg)](https://travis-ci.org/screepers/typed-screeps)

## Installation

The type definitions are published on [DefinitelyTyped](https://github.com/DefinitelyTyped/DefinitelyTyped). To install them, run the following.

```bash
# npm
npm install @types/screeps

# yarn
yarn add @types/screeps
```

## Differences from **[Screeps-Typescript-Declarations](https://github.com/screepers/Screeps-Typescript-Declarations)**

### Breaking Changes:

- `Memory` is typed by default.  The added typings are:
  - `CreepMemory`
  - `FlagMemory`
  - `SpawnMemory`
  - `RoomMemory`

  If you like the idea of typed memory, but aren't ready to just jump fully in, you only need to make sure you define an interface for the above four types. Then you can extend them at a later time.

  Example (this code needs to be in a file with a `.d.ts` extension and the name cannot match any of the other base names in the same directory, i.e. `memory.d.ts` without an adjecent `memory.ts`):

  ```TypeScript
  interface CreepMemory { [name: string]: any };
  interface FlagMemory { [name: string]: any };
  interface SpawnMemory { [name: string]: any };
  interface RoomMemory { [name: string]: any };
  ```

- Any place in code that uses a constant (ex `STRUCTURE_EXTENSION` or `FIND_MY_SPAWNS` is now constrained to use literal types. Here is the list of the new types:

  ```
  BodyPartConstant
  BuildableStructureConstant (this is a subset of StructureConstant)
  StructureConstant
  FindConstant
  LookConstant
  DirectionConstant
  ResourceConstant
  MineralConstant (this is a subset of ResourceConstant)
  ColorConstant
  ScreepsReturnCode
  Terrain
  ```

  To update your code, you just need to change any `string` types to match one of the above. For example, if your code had:

  ```TypeScript
  function getBody(): string[] {
    return [ WORK, MOVE, CARRY ];
  }

  ```

  Change it to:

  ```TypeScript
  function getBody(): BodyPartConstant[] {  // this line changed
    return [ WORK, MOVE, CARRY ];
  }
  ```

- Some original functions were incorrectly typed to not include `null` as a possible return. You may need to update your code to reflect this update (ex. `findClosestByPath` or `findClosestByRange`)

### Additional (non-breaking) Features:

- `ConstructionSite` can be optionally constrained by a structure type (ex. `ConstructionSite<STRUCTURE_CONTAINER>`). TypeScript will enforce that the `type` property of the `ConstructionSite` appropriately matches
- `Resource` can optionally be constrained (ex. `Resource<RESOURCE_ENERGY>`)
- `Mineral` can optionally be constrained by `MineralConstant` (ex. `Mineral<RESOURCE_GHODIUM>`)
- `Structure` can optionally be constrained (ex `Structure<STRUCTURE_SPAWN | STRUCTURE_EXTENSION>`)
- Screeps classes derived from `Structure` (ex `StructureContainer`) have their `type` property correspondingly constrained
- `LookAt` results are now constrained to the type looked for
- Results from `Find`-type functions are now constrained to have a `RoomPosition`
- Typings for new RawMemory and RoomVisuals

## Contribute

Issues and Pull Requests are welcome! Please read the [Contributing Guidelines](.github/CONTRIBUTING.md) and [Code of Conduct](.github/CODE_OF_CONDUCT.md) beforehand.

--------

### Workarounds / Caveats

Due to some unresolved issues in TypeScript, a few parts of the API can't currenty be typed perfectly without tradeoffs.

Below is a list (feel free to open an issue if you have any ideas, or wish to discuss):

- The API returned from `store` or `carry` (ex. `myContainter.store`) returns an object with optional keys for each Resource Type, but is guaranteed to have a key for `RESOURCE_ENERGY`. This is currently not (perfectly) typable in TypeScript (see issues [#13573](https://github.com/Microsoft/TypeScript/issues/13573) and [#12215](https://github.com/Microsoft/TypeScript/issues/12215)). The chosen workaround is to just manually list the types using a fake type `_ResourceConstantSansEnergy`

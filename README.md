# Typed-Screeps

> **Stronger** type declarations for the game Screeps. https://screeps.com/


## Installation

*Thanks to [@apemanzilla](https://github.com/apemanzilla) for their help on testing this installation path!*

Currently `typed-screeps` is not yet published to `npm`, but you can still install it by running:

```bash
npm install screepers/typed-screeps
```

However, since the typings aren't installed within the `@types/` scope, you'll have to include it in your `tsconfig.json`:

```json
{
  "compilerOptions": {
    "types": ["lodash", "typed-screeps"]
  }
}
```

An npm package for this repo will be published soon. Hang tight!

## Differences from **[Screeps-Typescript-Declarations](https://github.com/screepers/Screeps-Typescript-Declarations)**

### Breaking Changes:
- `Memory` is typed by default.  The added typings are:
  - `CreepMemory`
  - `FlagMemory`
  - `SpawnMemory`
  - `RoomMemory`

  If you like the idea of typed memory, but aren't ready to just jump fully in, you only need to make sure you define an interface for the above four types.  Then you can extend them at a later time.  Example:
  ```TypeScript
  interface CreepMemory { [name: string]: any };
  interface FlagMemory { [name: string]: any };
  interface SpawnMemory { [name: string]: any };
  interface RoomMemory { [name: string]: any };
  ```
  
- Any place in code that uses a constant (ex `STRUCTURE_EXTENSION` or `FIND_MY_SPAWNS` is now constrained to use literal types.  Here is the list of the new types:
  ```
  BodyPartConstant
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
    
  To update your code, you just need to change any `string` types to match one of the above.  For example, if your code had:
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
- Some original functions were incorrectly typed to not include `null` as a possible return.  You may need to update your code to reflect this update (ex. `findClosestByPath` or `findClosestByRange`)

### Additional (non-breaking) Features:
- `ConstructionSite` can be optionally constrained by a structure type (ex. `ConstructionSite<STRUCTURE_CONTAINER>`). TypeScript will enforce that the `type` property of the `ConstructionSite` appropriately matches
- `Resource` can optionally be constrained (ex. `Resource<RESOURCE_ENERGY>`)
- `Mineral` can optionally be constrained by `MineralConstant` (ex. `Mineral<RESOURCE_GHODIUM>`)
- `Structure` can optionally be constrained (ex `Structure<STRUCTURE_SPAWN | STRUCTURE_EXTENSION>`)
- Screeps classes derived from `Structure` (ex `StructureContainer`) have their `type` property correspondingly constrained
- `LookAt` results are now constrained to the type looked for
- Results from `Find`-type functions are now constrained to have a `RoomPosition`
- Typings for new RawMemory and RoomVisuals

## Usage

Note: When using this API, you can't access creeps in manner suggested in Screeps' tutorial:

```
Game.creeps.Worker1  // This is not allowed by TypeScript compiler
```

Instead, you have to use

```
Game.creeps['Worker1']
```

## Contribute

This library will stay up to date only with the help of you! If active players don't update it, it'll get lost.

This codebase uses [husky](https://github.com/typicode/husky) to auto-compile changes on commit.

To get started, just clone this repository, and run `npm install`.  After that, make any changes you want in `src/`.  When you commit the changes, husky will first automatically run `npm run compile` and compile your changes.

--------

### Workarounds / Caveats

Due to some unresolved issues in TypeScript, a few parts of the API can't currenty be typed perfectly without tradeoffs.  Below is a list (feel free to open an issue if you have any ideas, or wish to discuss):

- The API returned from `store` or `carry` (ex. `myContainter.store`) returns an object with optional keys for each Resource Type, but is guaranteed to have a key for `RESOURCE_ENERGY`.  This is currently not (perfectly) typable in TypeScript (see issues [#13573](https://github.com/Microsoft/TypeScript/issues/13573) and [#12215](https://github.com/Microsoft/TypeScript/issues/12215)).  The chosen workaround is to just manually list the types using a fake type `_ResourceConstantSansEnergy`



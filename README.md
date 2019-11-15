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

As of 29 Oct 19, the published version on [npm](https://www.npmjs.com/package/typed-screeps) is out of date, and the project is currently updating to reflect the [latest](https://screeps.com/forum/topic/2814/factories-new-resources-npc-strongholds) Screeps changes. If you wish to use these types, it is currently recommended that you copy the current [typings](dist/index.d.ts) manually.

## Differences from **[Screeps-Typescript-Declarations](https://github.com/screepers/Screeps-Typescript-Declarations)**

This repo has more activity and is considerably more up-to-date.

### Breaking Changes:

- `Memory` is typed by default. The added typings are:

  - `CreepMemory`
  - `FlagMemory`
  - `SpawnMemory`
  - `RoomMemory`

  If you like the idea of typed memory, but aren't ready to just jump fully in, you only need to make sure you define an interface for the above four types. Then you can extend them at a later time.

  Example:

  ```TypeScript
  interface CreepMemory { [name: string]: any };
  interface FlagMemory { [name: string]: any };
  interface SpawnMemory { [name: string]: any };
  interface RoomMemory { [name: string]: any };
  ```

  If you don't want to add types to the global `Memory` object, you will need to add the following interface along with the four above.

  Example:

  ```Typescript
  interface Memory { [key: string]: any };
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
- `Game.getObjectById()` now returns typed objects if given a typed Id (ex. `Id<StructureTower>`) according to the type of the Id.

  If given a `string` typed id, the type of the returned game object is `unknown` forcing manual type assertion. Previously this returned `any` typed objects which could accidently be left untyped;

  If you have code like this (un-type-asserted use of `Game.getObjectById`)

  ```TypeScript
  interface Memory{
    towerIds: string[];
  }

  Memory.towerIds.forEach((towerId) => {
    const tower = Game.getObjectById(towerId); // type of returned tower is 'unknown' instead of 'any'
    tower.attack(targetCreep); // Error Object is of type unknown ts(2571)
  })
  ```

  Change it to:

  ```TypeScript
  interface Memory{
    towerIds: Array<Id<StructureTower>>;
  }

  Memory.towerIds.forEach((towerId) => {
    const tower = Game.getObjectById(towerId); // type of returned tower is StructureTower
    tower.attack(targetCreep);
  })
  ```

  If you're already manually asserting the type of the game object, you're not required to change anything.

  ```TypeScript
  const tower1 = Game.getObjectById<StructureTower>(""); // previously possible, returns StructureTower type
  const tower2 = Game.getObjectById("") as StructureTower; // previously possible, returns StructureTower type
  const towerId: Id<StructureTower> = ""  as Id<StructureTower>;
  const tower3 = Game.getObjectById(towerId); // new option, returns StructureTower type
  const tower4 = Game.getObjectById(tower1!.id); // new option, returns StructureTower type
  ```

  `Id<T>` types are assignable to `string` but the reverse is not allowed implicitly. To assign a `string` type to an `Id<T>` type, you must explicitly assert the type.

  ```TypeScript
  const typedId: Id<Creep> = "123" as Id<Creep>; // assertion required
  const untypedId1: string = typedId; // no assertion required
  ```

- Game objects have typed id properties `id: Id<this>`. These typed ids can by passed to `Game.getObjectById()` to receive typed game objects matching the type of the Id. See above bullet for more details.

  ```TypeScript
  creep.id // has type Id<Creep>
  copy = Game.getObjectById(creep.id) // has type Creep
  tower.id // has type Id<StructureTower>
  ```

### Additional (non-breaking) Features:

- `ConstructionSite` can be optionally constrained by a structure type (ex. `ConstructionSite<STRUCTURE_CONTAINER>`). TypeScript will enforce that the `type` property of the `ConstructionSite` appropriately matches
- `Resource` can optionally be constrained (ex. `Resource<RESOURCE_ENERGY>`)
- `Mineral` can optionally be constrained by `MineralConstant` (ex. `Mineral<RESOURCE_GHODIUM>`)
- `Structure` can optionally be constrained (ex `Structure<STRUCTURE_SPAWN | STRUCTURE_EXTENSION>`)
- Screeps classes derived from `Structure` (ex `StructureContainer`) have their `type` property correspondingly constrained
- `LookAt` results are now constrained to the type looked for
- Results from `Find`-type functions are now constrained to have a `RoomPosition`
- Typings for new RawMemory and RoomVisuals
- New union type `AnyCreep` to represent `Creep` and `PowerCreep`

## Contribute

Issues and Pull Requests are welcome! Please read the [Contributing Guidelines](CONTRIBUTING.md) and [Code of Conduct](CODE_OF_CONDUCT.md) beforehand.

---

### Workarounds / Caveats

Due to some unresolved issues in TypeScript, a few parts of the API can't currenty be typed perfectly without tradeoffs.

Below is a list (feel free to open an issue if you have any ideas, or wish to discuss):

- The API returned from `store` or `carry` (ex. `myContainter.store`) returns an object with optional keys for each Resource Type, but is guaranteed to have a key for `RESOURCE_ENERGY`. This is currently not (perfectly) typable in TypeScript (see issues [#13573](https://github.com/Microsoft/TypeScript/issues/13573) and [#12215](https://github.com/Microsoft/TypeScript/issues/12215)). The chosen workaround is to just manually list the types using a fake type `_ResourceConstantSansEnergy`

# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.1.1] - 2020-04-23

### Fixed

- Added type `Ruin` to `PowerCreep.withdraw` parameter `target`

## [3.1.0] - 2020-04-01

- Fixed `StructureSpawn.renewCreep()` documentation ([#158](https://github.com/screepers/typed-screeps/pull/158))
- Added missing `PWR_OPERATE_FACTORY` constant ([#161](https://github.com/screepers/typed-screeps/pull/161))
- Changed `BodyPartConstant` to allow inferred Boost type from part type ([#162](https://github.com/screepers/typed-screeps/pull/162))
- Added `ConcreteStructure<T>` type
- Change `owner` to allow undefined on `StructureController` ([#164](https://github.com/screepers/typed-screeps/pull/164))
- Various updates from 2020-03-24 game update ([#163](https://github.com/screepers/typed-screeps/pull/163))
  - Added `Game.map.getRoomStauts(roomName)`
  - Added `RoomStatus` type, a discriminated union on `status` of `RoomStatusTemporary` and `RoomStatusPermanent`.
  - Added `StructureLab.reverseReaction(lab1,lab2)`
  - Changed `room.name` to be readonly
  - Changed typing of `StoreBase.getFreeCapacity()` to return `null` for invalid resources types on limited stores.
  - Changed documentation of `store` functions
  - Deprecated `Game.map.isRoomAvailable()`, see `Game.map.getRoomStatus()`

## [3.0.1] - 2019-11-27

- Fix POSSIBLE_RESSOURCES typo in store definition ([#151](https://github.com/screepers/typed-screeps/pull/151))
- Remove unecessary tslint:disable rules in OpaqueTag definition ([#151](https://github.com/screepers/typed-screeps/pull/151))

## [3.0.0] - 2019-11-23

### Added

- Add missing halt command to CPU ([#141](https://github.com/screepers/typed-screeps/pull/141))
- Add market price history and other updates ([#138](https://github.com/screepers/typed-screeps/pull/138))
- Add support for 'Natural Effects' on RoomObjects ([#135](https://github.com/screepers/typed-screeps/pull/135))
- Add support for Factories, Ruins, Deposits, and Strongholds ([#132](https://github.com/screepers/typed-screeps/pull/132))

### Changed

- Retype constants with same named types ([#143](https://github.com/screepers/typed-screeps/pull/143)), ([#147](https://github.com/screepers/typed-screeps/pull/147))
- Update StoreDefinition ([#130](https://github.com/screepers/typed-screeps/pull/130))
- Explicitly type game object Ids ([#139](https://github.com/screepers/typed-screeps/pull/139))

### Fixed

- Updated dependencies ([#133](https://github.com/screepers/typed-screeps/pull/133)), ([#134](https://github.com/screepers/typed-screeps/pull/134))

### Deprecated

- Deprecated use of string typed ids to get game objects ([#144](https://github.com/screepers/typed-screeps/pull/144))
- Deprecated `creep.carry` ([#130](https://github.com/screepers/typed-screeps/pull/130))

### Removed

- Remove deprecated FIND_DROPPED_ENERGY constant ([#129](https://github.com/screepers/typed-screeps/pull/129))

## [2.5.4] - 2019-05-12

### Added

- Add support for `PowerCreep`, `InterShardMemory` and an `AnyCreep` union ([#117](https://github.com/screepers/typed-screeps/pull/118))

## [2.5.3] - 2018-12-27

### Fixed

- Add missing properties to FindPathOpts (#106)

### Changed

- Change `EventType` to an interface with a type argument (#110)

## [2.5.2] - 2018-11-09

### Added

- Implements `Room.Terrain` and `room.getTerrain()` ([#103](https://github.com/screepers/typed-screeps/pull/103))

## [2.5.1] - 2018-10-11

### Fixed

- Fix definition of `RawMemory.segments`. ([#91](https://github.com/screepers/typed-screeps/pull/91))
- Fixed incorrect definition of `getEventLog()`. ([#101](https://github.com/screepers/typed-screeps/pull/101))

## [2.5.0] - 2018-10-04

### Added

- Added `getRoomTerrain` ([#98](https://github.com/screepers/typed-screeps/pull/98))
- Added WIP types for `room.eventLog` ([#88](https://github.com/screepers/typed-screeps/pull/88))
- Added missing safemode/downgrade constants ([#96](https://github.com/screepers/typed-screeps/pull/96))

### Changed

- `filterOptions` Revamp ([#87](https://github.com/screepers/typed-screeps/pull/87))

## [2.4.1] - 2018-08-24

### Added

- Added `INVADERS_ENERGY_GOAL` ([#83](https://github.com/screepers/typed-screeps/pull/83))

### Changed

- Update CREEP_CLAIM_LIFE_TIME to match with Screeps 2018-03-05 update ([#84](https://github.com/screepers/typed-screeps/pull/84))

## [2.4.0] - 2018-06-24

### Added

- Add inter-shard portals ([#74](https://github.com/screepers/typed-screeps/pull/74))

### Changed

- The findClosestBy\* functions potentially return null ([#69](https://github.com/screepers/typed-screeps/pull/69))

### Fixed

- Various improvements by @pmoehl (thank you!)
  - Fix type of StructureLab.mineralType ([#73](https://github.com/screepers/typed-screeps/pull/73))
  - Fix result type of Room.lookAtArea ([#75](https://github.com/screepers/typed-screeps/pull/75))
  - Add subscription token as market resource types ([#76](https://github.com/screepers/typed-screeps/pull/76))
  - Spawn options +directions ([#77](https://github.com/screepers/typed-screeps/pull/77))
  - Add createConstructionSite name parameter ([#78](https://github.com/screepers/typed-screeps/pull/78))
  - Updated Tombstone docs ([#79](https://github.com/screepers/typed-screeps/pull/79))
  - Improve exit typings ([#80](https://github.com/screepers/typed-screeps/pull/80))
- Fixed missing Constructor extends declarations ([#71](https://github.com/screepers/typed-screeps/pull/71))
- Fixed createFlag method return type to include string ([#72](https://github.com/screepers/typed-screeps/pull/72))
- claimController() uses GCL, not RCL ([#81](https://github.com/screepers/typed-screeps/pull/81))

## [2.3.0] - 2018-04-16

### Added

- `TERMINAL_COOLDOWN` constant ([#64](https://github.com/screepers/typed-screeps/pull/64))
- Better tombstone support ([#60](https://github.com/screepers/typed-screeps/pull/60))

### Fixed

- Declare `Game` with `var` instead of `let` ([#62](https://github.com/screepers/typed-screeps/pull/62))
- `ERR_NOT_ENOUGH_RESOURCES` missing in return codes for creep build action ([#66](https://github.com/screepers/typed-screeps/pull/66))

## [2.2.2] - 2018-03-17

### Added

- Added IVM typings ([#55](https://github.com/screepers/typed-screeps/pull/55))
- Added Tombstone typings ([#48](https://github.com/screepers/typed-screeps/pull/48))

### Fixed

- Fixed some DefinitelyTyped linting errors ([#54](https://github.com/screepers/typed-screeps/pull/54))

## [2.2.1] - 2018-03-09

### Added

- Added `StructureSpawn.Spawning` ([#52](https://github.com/screepers/typed-screeps/pull/52))

### Changed

- Changed `StructureLab.mineralType` from `MineralConstant` to `_ResourceConstantSansEnergy | undefined`. ([#49](https://github.com/screepers/typed-screeps/pull/49))

### Fixed

- `RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE` has a typo ([#51](https://github.com/screepers/typed-screeps/pull/51))

## [2.2.0] - 2018-01-26

### Added

- Added missing constants: `EXTRACTOR_COOLDOWN`, `SYSTEM_USERNAME` ([#34](https://github.com/screepers/typed-screeps/pull/34))
- Added missing `ScreepsReturnCode` definition: `ERR_NAME_EXISTS` ([#44](https://github.com/screepers/typed-screeps/pull/44))

### Removed

- Remove `FIND_DROPPED_ENERGY` ([#39](https://github.com/screepers/typed-screeps/pull/39) [#40](https://github.com/screepers/typed-screeps/pull/40))

### Fixed

- `Creep.attackController()` returns `ERR_TIRED` if the controller has upgrade blocked ([#32](https://github.com/screepers/typed-screeps/pull/32))
- `PowerBank`s are considered to be owned structures (and are owned by "Power Bank") ([#33](https://github.com/screepers/typed-screeps/pull/33))
- Allow `creep.ticksToLive` to be undefined ([#36](https://github.com/screepers/typed-screeps/pull/36))
- Fixes for `PathFinder.search`, `LookAtTypes` ([#41](https://github.com/screepers/typed-screeps/pull/41), [#47](https://github.com/screepers/typed-screeps/pull/47))

## [2.1.0] - 2017-12-22

### Changed

- Restuctured project for DefinitelyTyped publishing ([#24](https://github.com/screepers/typed-screeps/pull/24))

### Fixed

- Allow `Game` interface to be extended ([#29](https://github.com/screepers/typed-screeps/pull/29))
- Allow controller sign + reservation to be undefined ([#28](https://github.com/screepers/typed-screeps/pull/28))

## [2.0.1] - 2017-12-13

### Fixed

- Reduce package size when installing via npm ([#25](https://github.com/screepers/typed-screeps/pull/25))

## [2.0.0] - 2017-12-05

### Added

- Added contributing guidelines and Issue/PR templates ([#18](https://github.com/screepers/typed-screeps/pull/18))
- Added CI tests (thanks, [@Arcath](https://github.com/Arcath)!)
- [Constants] Added `BuildableStructureConstant`, which is a subset of `StructureConstant` ([#17](https://github.com/screepers/typed-screeps/pull/17))

### Changed

- Improved build tooling around compiling scripts and running tests.
- [Room][roomposition] Improved generic-based overloads for `.find*()`, `lookAt()`, and `lookForAt()` functions ([#14](https://github.com/screepers/typed-screeps/pull/14), [#19](https://github.com/screepers/typed-screeps/pull/19))
- [Constants] `OBSTACLE_OBJECT_TYPES` are now strictly defined ([#17](https://github.com/screepers/typed-screeps/pull/17))

### Fixed

- [RawMemory] On `setActiveForeignSegment`, id should be optional. ([commit](https://github.com/screepers/typed-screeps/pull/16/commits/9aa7e3efe457f5500cd0eb6a76804bff657db1db))

## [1.0.4] - 2017-11-09

### Added

- Added `Game.resources`
- Added `Game.map.getWorldSize()`
- Added `RawMemory.interShardSegment`

### Deprecated

- Deprecated `spawn.canCreateCreep(body, [name])`
- Deprecated `spawn.createCreep(body, [name], [memory])`
- Deprecated `spawn.transferEnergy(target, [amount])`
- Deprecated `PathFinder.use(isEnabled)`

## [1.0.3] - 2017-11-05

### Fixed

- Emergency patch to fix mismatched `STRUCTURE_WALL` constant.

## [1.0.2] - 2017-11-05

### Added

- Added `Game.cpu.setShardLimits(limits)`

### Fixed

- [Constants] `STRUCTURE_WALL` should be `'constructedWall'`, not `'wall'`

## [1.0.1] - 2017-11-05

### Changed

- Added forgotten documentation material from v1.0.0

## 1.0.0 - 2017-11-05

### Added

- Initial public `npm` release.

[unreleased]: https://github.com/screepers/typed-screeps/compare/v3.1.1...HEAD
[3.1.1]: https://github.com/screepers/typed-screeps/compare/v3.1.0...v3.1.1
[3.1.0]: https://github.com/screepers/typed-screeps/compare/v3.0.1...v3.1.0
[3.0.1]: https://github.com/screepers/typed-screeps/compare/v3.0.0...v3.0.1
[3.0.0]: https://github.com/screepers/typed-screeps/compare/v2.5.4...v3.0.0
[2.5.4]: https://github.com/screepers/typed-screeps/compare/v2.5.3...v2.5.4
[2.5.3]: https://github.com/screepers/typed-screeps/compare/v2.5.2...v2.5.3
[2.5.2]: https://github.com/screepers/typed-screeps/compare/v2.5.1...v2.5.2
[2.5.1]: https://github.com/screepers/typed-screeps/compare/v2.5.0...v2.5.1
[2.5.0]: https://github.com/screepers/typed-screeps/compare/v2.4.1...v2.5.0
[2.4.1]: https://github.com/screepers/typed-screeps/compare/v2.4.0...v2.4.1
[2.4.0]: https://github.com/screepers/typed-screeps/compare/v2.3.0...v2.4.0
[2.3.0]: https://github.com/screepers/typed-screeps/compare/v2.2.2...v2.3.0
[2.2.2]: https://github.com/screepers/typed-screeps/compare/v2.2.1...v2.2.2
[2.2.1]: https://github.com/screepers/typed-screeps/compare/v2.2.0...v2.2.1
[2.2.0]: https://github.com/screepers/typed-screeps/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/screepers/typed-screeps/compare/v2.0.1...v2.1.0
[2.0.1]: https://github.com/screepers/typed-screeps/compare/v2.0.0...v2.0.1
[2.0.0]: https://github.com/screepers/typed-screeps/compare/v1.0.4...v2.0.0
[1.0.4]: https://github.com/screepers/typed-screeps/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/screepers/typed-screeps/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/screepers/typed-screeps/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/screepers/typed-screeps/compare/v1.0.0...v1.0.1

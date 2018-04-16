# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

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
- [Room] [RoomPosition] Improved generic-based overloads for `.find*()`, `lookAt()`, and `lookForAt()` functions ([#14](https://github.com/screepers/typed-screeps/pull/14), [#19](https://github.com/screepers/typed-screeps/pull/19))
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

[Unreleased]: https://github.com/screepers/typed-screeps/compare/v2.2.2...HEAD
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

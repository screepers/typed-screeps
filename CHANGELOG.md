# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]
### Added
- Added CI tests (thanks, [@Arcath](https://github.com/Arcath)!)

### Changed
- Improved generic-based overloads for `.find()` functions ([#14](https://github.com/screepers/typed-screeps/pull/14))

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

[Unreleased]: https://github.com/screepers/typed-screeps/compare/v1.0.4...HEAD
[1.0.4]: https://github.com/screepers/typed-screeps/compare/v1.0.3...v1.0.4
[1.0.3]: https://github.com/screepers/typed-screeps/compare/v1.0.2...v1.0.3
[1.0.2]: https://github.com/screepers/typed-screeps/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/screepers/typed-screeps/compare/v1.0.0...v1.0.1

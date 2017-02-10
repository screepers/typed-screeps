declare var Memory: Memory;
declare var RawMemory: RawMemory;
declare var Game:Game;
declare var PathFinder: PathFinder;
type Controller= StructureController;
type Extension = StructureExtension;
type KeeperLair = StructureKeeperLair;
type Lab = StructureLab;
type Link = StructureLink;
type Observer = StructureObserver;
type PowerBank = StructurePowerBank;
type PowerSpawn = StructurePowerSpawn;
type Rampart = StructureRampart;
type Terminal = StructureTerminal;
type Container = StructureContainer;
type Tower = StructureTower;
type Spawn = StructureSpawn;//Legacy Alias
declare const Spawn: StructureSpawnConstructor;
interface Storage extends StructureStorage { }//Legacy Alias

interface Memory {
    creeps: { [name: Name<Creep>]: CreepMemory };
    powerCreeps: { [name: Name<PowerCreep>]: PowerCreepMemory };
    flags: { [name: Name<Flag>]: FlagMemory };
    rooms: { [name: Name<Room>]: RoomMemory };
    spawns: { [name: Name<StructureSpawn>]: SpawnMemory };
}

interface CreepMemory {}
interface FlagMemory {}
interface PowerCreepMemory {}
interface RoomMemory {}
interface SpawnMemory {}

declare const Memory: Memory;

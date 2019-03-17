interface Memory {
    [name: string]: any;
    creeps: { [name: string]: CreepMemory };
    flags: { [name: string]: FlagMemory };
    powerCreeps: { [name: string]: PowerCreepMemory };
    rooms: { [name: string]: RoomMemory };
    spawns: { [name: string]: SpawnMemory };
}

interface CreepMemory {}
interface FlagMemory {}
interface PowerCreepMemory {}
interface RoomMemory {}
interface SpawnMemory {}

declare const Memory: Memory;

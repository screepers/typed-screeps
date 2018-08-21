interface Memory {
    creeps: {[name: string]: CreepMemory};
    flags: {[name: string]: FlagMemory};
    rooms: {[name: string]: RoomMemory};
    spawns: {[name: string]: SpawnMemory};
}

interface CreepMemory {}
interface FlagMemory {}
interface RoomMemory {}
interface SpawnMemory {}

declare const Memory: Memory;

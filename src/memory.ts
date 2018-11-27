interface Memory {
    [name: string]: any;
    creeps: { [name: string]: CreepMemory | undefined };
    flags: { [name: string]: FlagMemory | undefined };
    rooms: { [name: string]: RoomMemory | undefined };
    spawns: { [name: string]: SpawnMemory | undefined };
}

interface CreepMemory {}
interface FlagMemory {}
interface RoomMemory {}
interface SpawnMemory {}

declare const Memory: Memory;

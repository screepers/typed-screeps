interface Memory {
    creeps: { [name: string]: Partial<CreepMemory> };
    powerCreeps: { [name: string]: Partial<PowerCreepMemory> };
    flags: { [name: string]: Partial<FlagMemory> };
    rooms: { [name: string]: Partial<RoomMemory> };
    spawns: { [name: string]: Partial<SpawnMemory> };
}

interface CreepMemory {}
interface FlagMemory {}
interface PowerCreepMemory {}
interface RoomMemory {}
interface SpawnMemory {}

declare const Memory: Memory;

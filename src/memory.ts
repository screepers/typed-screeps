interface Memory {
    creeps: {[name: string]: CreepMemory};
    powerCreeps: {[name: string]: PowerCreepMemory};
    flags: {[name: string]: FlagMemory};
    rooms: {[name: string]: RoomMemory};
    spawns: {[name: string]: SpawnMemory};

    [propName: string]: any;
}

interface CreepMemory {
    [propName: string]: any;
}
interface FlagMemory {
    [propName: string]: any;
}
interface PowerCreepMemory {
    [propName: string]: any;
}
interface RoomMemory {
    [propName: string]: any;
}
interface SpawnMemory {
    [propName: string]: any;
}

declare const Memory: Memory;

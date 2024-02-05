interface Memory {}

type MemoryType<K extends string> = Memory extends { [k in K]: Record<string, infer M> } ? M : unknown;

type CreepMemory = MemoryType<"creeps">;
type FlagMemory = MemoryType<"flags">;
type PowerCreepMemory = MemoryType<"powerCreeps">;
type RoomMemory = MemoryType<"rooms">;
type SpawnMemory = MemoryType<"spawns">;

declare const Memory: Memory;

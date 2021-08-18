// Sample inputs

const creep: Creep = Game.creeps.sampleCreep;
const room: Room = Game.rooms.W10S10;
const flag: Flag = Game.flags.Flag1;
const powerCreep: PowerCreep = Game.powerCreeps.samplePowerCreep;
const spawn: StructureSpawn = Game.spawns.Spawn1;
const body: BodyPartConstant[] = [WORK, WORK, CARRY, MOVE];

// Sample inputs for Game.map.findRoute testing
const anotherRoomName: Room = Game.rooms.W10S11;

// Sample memory extensions
interface CreepMemory {
    sourceId: Id<Source>;
    lastHits: number;
}

// Typescript always uses 'string' as the type of a key inside 'for in' loops.
// In case of objects with a restricted set of properties (e.g. ResourceConstant as key in StoreDefinition)
// the type of the key should be narrowed down in order to prevent casting (key as ResourceConstant).
// This helper function provides strongly typed keys for such objects.
// See discussion (https://github.com/Microsoft/TypeScript/pull/12253) why Object.keys does not return typed keys.
function keys<T>(o: T): Array<keyof T> {
    return Object.keys(o) as Array<keyof T>;
}

function resources(o: GenericStore): ResourceConstant[] {
    return Object.keys(o) as ResourceConstant[];
}

// tslint:disable:no-reference
/// <reference path="../dist/screeps.d.ts" />

// This file exists solely to test whether or not the typings actually work.
// After working on your changes, make sure to run `npm run compile` to build
// the declarations before opening this file.
//
// If you open this file and see no red squiggly lines, then you're good!
// Feel free to add more test cases in the form of a sample code.

// TODO: add more test cases.

////////
// Sample inputs

const creep: Creep = Game.creeps.sampleCreep;
const room: Room = Game.rooms.W10S10;
const flag: Flag = Game.flags.Flag1;
const body: BodyPartConstant[] = [WORK, WORK, CARRY, MOVE];

// Sample inputs for Game.map.findRoute testing
const anotherRoomName: Room = Game.rooms.W10S11;

// Sample memory extensions
interface CreepMemory {
    sourceId: string;
    lastHits: number;
}

////////
// Game.creeps

{
    for (const i in Game.creeps) {
        Game.creeps[i].moveTo(flag);
    }
}

////////
// Game.flags

{
    creep.moveTo(Game.flags.Flag1);
}

////////
// Game.spawns

{
    for (const i in Game.spawns) {
        Game.spawns[i].createCreep(body);
    }
}

////////
// Game.time

{
    console.log(Game.time);
}

////////
// Game.cpu.getUsed()

{
    if (Game.cpu.getUsed() > Game.cpu.tickLimit / 2) {
        console.log("Used half of CPU already!");
    }
}

{
    for (const name in Game.creeps) {
        const startCpu = Game.cpu.getUsed();

        // creep logic goes here

        const elapsed = Game.cpu.getUsed() - startCpu;
        console.log(`Creep ${name} has used ${elapsed} CPU time`);
    }
}

////////
// Game.cpu.setShardLimits()

{
    Game.cpu.setShardLimits({ shard0: 20, shard1: 10 });
}

////////
// Game.getObjectById(id)

{
    creep.memory.sourceId = creep.pos.findClosestByRange<Source>(FIND_SOURCES).id;
    const source = Game.getObjectById<Source>(creep.memory.sourceId);
}

////////
// Game.notify(message, [groupInterval])

{
    if (creep.hits < creep.memory.lastHits) {
        Game.notify(`Creep ${creep} has been attacked at ${creep.pos}!`);
    }
    creep.memory.lastHits = creep.hits;
}

{
    if (Game.spawns["Spawn1"].energy === 0) {
        Game.notify(
            "Spawn1 is out of energy",
            180  // group these notifications for 3 hours
        );
    }
}

//// Game.map

////////
// Game.map.describeExits()

{
    const exits = Game.map.describeExits("W8N3");
}

////////
// Game.map.findExit()

{
    if (creep.room !== anotherRoomName) {
        const exitDir = Game.map.findExit(creep.room, anotherRoomName);
        const exit = creep.pos.findClosestByRange(exitDir as FindConstant);
        creep.moveTo(exit);
    } else {
        // go to some place in another room
    }
}

{
    creep.moveTo(new RoomPosition(25, 25, anotherRoomName.name));
}

////////
// Game.map.findRoute()

{
    const route = Game.map.findRoute(creep.room, anotherRoomName);

    if (route !== ERR_NO_PATH && route.length > 0) {
        console.log(`Now heading to room ${route[0].room}`);
        const exit = creep.pos.findClosestByRange(route[0].exit);
        creep.moveTo(exit);
    }
}

{
    const route = Game.map.findRoute(creep.room, anotherRoomName, {
        routeCallback(roomName, fromRoomName) {
            if (roomName === "W10S10") {
                // avoid this room
                return Infinity;
            }
            return 1;
        }
    });
}

{
    const from = new RoomPosition(25, 25, "E1N1");
    const to = new RoomPosition(25, 25, "E4N1");

    // Use `findRoute` to calculate a high-level plan for this path,
    // prioritizing highways and owned rooms
    const allowedRooms = { [from.roomName]: true };
    const route = Game.map.findRoute(from.roomName, to.roomName, {
        routeCallback(roomName) {
            const parsed = /^[WE]([0-9]+)[NS]([0-9]+)$/.exec(roomName);
            const isHighway = (parseInt(parsed[1]) % 10 === 0) ||
                (parseInt(parsed[2]) % 10 === 0);
            const isMyRoom = Game.rooms[roomName] &&
                Game.rooms[roomName].controller &&
                Game.rooms[roomName].controller.my;
            if (isHighway || isMyRoom) {
                return 1;
            } else {
                return 2.5;
            }
        }
    });

    if (route !== ERR_NO_PATH) {
        route.forEach((info) => {
            allowedRooms[info.room] = true;
        });
    }

    // Invoke PathFinder, allowing access only to rooms from `findRoute`
    const ret = PathFinder.search(from, to, {
        roomCallback(roomName) {
            if (allowedRooms[roomName] === undefined) {
                return false;
            }
        }
    });

    console.log(ret.path);
}

////////
// Game.map.getRoomLinearDistance(roomName1, roomName2, [continuous])

{
    Game.map.getRoomLinearDistance("W1N1", "W4N2"); // 3
    Game.map.getRoomLinearDistance("E65S55", "W65S55", false); // 131
    Game.map.getRoomLinearDistance("E65S55", "W65S55", true); // 11
}

////////
// Game.map.getTerrainAt(x, y, roomName)
// Game.map.getTerrainAt(pos)

{
    console.log(Game.map.getTerrainAt(25, 20, "W10N10"));
}

{
    console.log(Game.map.getTerrainAt(new RoomPosition(25, 20, "W10N10")));
}

////////
// Game.map.isRoomAvailable(roomName)

{
    if (Game.map.isRoomAvailable(room.name)) {
        creep.moveTo(room.getPositionAt(25, 25));
    }
}

////////
// Find Overloads


{
  let creeps = room.find(FIND_HOSTILE_CREEPS)

  creeps[0].say(creeps[1].name)

  let flags = room.find(FIND_FLAGS)

  flags[0].remove()

  let spawns = room.find(FIND_HOSTILE_SPAWNS)

  spawns[0].spawning

  let sources = room.find(FIND_SOURCES)

  sources[0].ticksToRegeneration

  let resources = room.find(FIND_DROPPED_RESOURCES)

  resources[0].resourceType

  let sites = room.find(FIND_CONSTRUCTION_SITES)

  sites[0].remove()

  // Should have type (_HasRoomPosition | RoomPosition)[]
  let exits = room.find(FIND_EXIT)

  // Should support the old way
  let myCreeps = room.find<Creep>(FIND_MY_CREEPS)

  myCreeps[0].drop(resources[0].resourceType)

  let creepsHere = room.lookForAt(LOOK_CREEPS, 10, 10)

  creepsHere[0].getActiveBodyparts(ATTACK)
}

////////
// RoomPosition Finds

{
  // Should have type Creep
  let hostileCreep = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS)

  creep.say(hostileCreep.name)

  // Should have type Creep[]
  let hostileCreeps = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 10)
  hostileCreeps[0].saying
}

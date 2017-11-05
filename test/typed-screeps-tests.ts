// tslint:disable:no-reference
/// <reference path="../dist/screeps.d.ts" />

// This file exists solely to test whether or not the typings actually work.
// After working on your changes, make sure to run `npm run compile` to build
// the declarations before opening this file.
//
// If you open this file and see no red squiggly lines, then you're good!
// Feel free to add more test cases in the form of a sample code.

// TODO: add more test cases.

// Global sample inputs
const creep: Creep = Game.creeps.sampleCreep;
const room: Room = Game.rooms.W10S10;
const flag: Flag = Game.flags.Flag1;

// Sample inputs for Game.map.findRoute testing
const anotherRoomName: Room = Game.rooms.W10S11;

// Test `Game.creeps`
{
    for (const i in Game.creeps) {
        Game.creeps[i].moveTo(flag);
    }
}

// Test `Game.flags`
{
    creep.moveTo(Game.flags.Flag1);
}

// Test `Game.map.findRoute()` #1
{
    const route = Game.map.findRoute(creep.room, anotherRoomName);

    if (route !== -2 && route.length > 0) {
        console.log(`Now heading to room ${route[0].room}`);
        const exit = creep.pos.findClosestByRange(route[0].exit);
        creep.moveTo(exit);
    }
}

// Test `Game.map.findRoute()` #2
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

// Test `Game.map.findRoute()` #3
{
    const from = new RoomPosition(25, 25, "E1N1");
    const to = new RoomPosition(25, 25, "E4N1");

    // Use `findRoute` to calculate a high-level plan for this path,
    // prioritizing highways and owned rooms
    const allowedRooms = { [from.roomName]: true };
    const route = Game.map.findRoute(from.roomName, to.roomName, {
        routeCallback(roomName) {
            const parsed = /^[WE]([0-9]+)[NS]([0-9]+)$/.exec(roomName);
            const isHighway = (Number.parseInt(parsed[1]) % 10 === 0) ||
                (Number.parseInt(parsed[2]) % 10 === 0);
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

    if (route !== -2) {
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

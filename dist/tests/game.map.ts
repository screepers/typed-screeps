// Game.map.describeExits()

{
    const exits: ExitsInformation = Game.map.describeExits("W8N3"); // $ExpectType ExitsInformation
    // tslint:disable-next-line:newline-per-chained-call
    keys(exits).map(exitKey => {
        const nextRoom = exits[exitKey]; // $ExpectType string | undefined
        const exitDir = +exitKey as ExitConstant;
        const exitPos = creep.pos.findClosestByRange(exitDir); // $ExpectType RoomPosition | null
        return { nextRoom, exitPos };
    });
}

// Game.map.findExit()

{
    if (creep.room !== anotherRoomName) {
        const exitDir = Game.map.findExit(creep.room, anotherRoomName);
        if (exitDir !== ERR_NO_PATH && exitDir !== ERR_INVALID_ARGS) {
            const exit = creep.pos.findClosestByRange(exitDir); // $ExpectType RoomPosition | null
            if (exit !== null) {
                creep.moveTo(exit);
            }
        }
    } else {
        // go to some place in another room
    }
}

{
    creep.moveTo(new RoomPosition(25, 25, anotherRoomName.name));
}

// Game.map.findRoute()

{
    const route = Game.map.findRoute(creep.room, anotherRoomName); // $ExpectType -2 | { exit: ExitConstant; room: string; }[]

    if (route !== ERR_NO_PATH && route.length > 0) {
        const exit = creep.pos.findClosestByRange(route[0].exit); // $ExpectType RoomPosition | null
        if (exit !== null) {
            creep.moveTo(exit);
        }
    }
}

{
    // $ExpectType -2 | { exit: ExitConstant; room: string; }[]
    const route = Game.map.findRoute(creep.room, anotherRoomName, {
        routeCallback(roomName, fromRoomName) {
            if (roomName === "W10S10") {
                // avoid this room
                return Infinity;
            }
            return 1;
        },
    });
}

{
    const from = new RoomPosition(25, 25, "E1N1");
    const to = new RoomPosition(25, 25, "E4N1");

    // Use `findRoute` to calculate a high-level plan for this path,
    // prioritizing highways and owned rooms
    const allowedRooms = { [from.roomName]: true };
    // $ExpectType -2 | { exit: ExitConstant; room: string; }[]
    const route = Game.map.findRoute(from.roomName, to.roomName, {
        routeCallback(roomName) {
            const parsed = /^[WE]([0-9]+)[NS]([0-9]+)$/.exec(roomName);
            if (parsed !== null) {
                const isHighway = parseInt(parsed[1], 10) % 10 === 0 || parseInt(parsed[2], 10) % 10 === 0;
                const isMyRoom = Game.rooms[roomName] && Game.rooms[roomName].controller && Game.rooms[roomName].controller!.my;
                if (isHighway || isMyRoom) {
                    return 1;
                } else {
                    return 2.5;
                }
            } else {
                return 2.5;
            }
        },
    });

    if (route !== ERR_NO_PATH) {
        route.forEach(info => {
            allowedRooms[info.room] = true;
        });
    }

    // Invoke PathFinder, allowing access only to rooms from `findRoute`
    // $ExpectType PathFinderPath
    const ret = PathFinder.search(from, [to], {
        roomCallback: roomName => {
            if (allowedRooms[roomName] === undefined) {
                return false;
            } else {
                return true;
            }
        },
    });
}

// Game.map.getRoomLinearDistance(roomName1, roomName2, [continuous])

{
    Game.map.getRoomLinearDistance("W1N1", "W4N2"); // 3 $ExpectType number
    Game.map.getRoomLinearDistance("E65S55", "W65S55", false); // 131
    Game.map.getRoomLinearDistance("E65S55", "W65S55", true); // 11
}

// Game.map.getTerrainAt(x, y, roomName)
// Game.map.getTerrainAt(pos)

{
    Game.map.getTerrainAt(25, 20, "W10N10"); // $ExpectType Terrain
}

{
    Game.map.getTerrainAt(new RoomPosition(25, 20, "W10N10")); // $ExpectType Terrain
}

// Game.map.getRoomStatus(roomName)

{
    const roomStatus = Game.map.getRoomStatus(room.name); // $ExpectType RoomStatus
    if (roomStatus.status === "normal") {
        creep.moveTo(room.getPositionAt(25, 25)!);
    }
}

// Game.map.visual
{
    const mapVis = Game.map.visual; // $ExpectType MapVisual
    const point1 = new RoomPosition(1, 1, "E1N1");
    const point2 = new RoomPosition(1, 1, "E1N8");
    const point3 = new RoomPosition(1, 1, "E8N8");
    const point4 = new RoomPosition(1, 1, "E1N8");

    mapVis
        .line(point1, point2)
        .circle(point3, { fill: "#f2f2f2" })
        .poly([point1, point2, point3, point4])
        .rect(point3, 50, 50);

    const size: number = mapVis.getSize(); // $ExpectType number

    const visData = mapVis.export(); // $ExpectType string
    mapVis.clear(); // $ExpectType MapVisual
    mapVis.import(visData); // $ExpectType MapVisual
}

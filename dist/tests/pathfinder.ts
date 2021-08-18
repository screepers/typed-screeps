// PathFinder

{
    const pfCreep = Game.creeps.John; // $ExpectType Creep

    // tslint:disable-next-line:newline-per-chained-call
    const goals = pfCreep.room.find(FIND_SOURCES).map(source => {
        // We can't actually walk on sources-- set `range` to 1
        // so we path next to it.
        return { pos: source.pos, range: 1 };
    });

    // $ExpectType PathFinderPath
    const ret = PathFinder.search(pfCreep.pos, goals, {
        // We need to set the defaults costs higher so that we
        // can set the road cost lower in `roomCallback`
        plainCost: 2,
        swampCost: 10,

        roomCallback(roomName) {
            const curRoom = Game.rooms[roomName]; // $ExpectType Room

            // In this example `room` will always exist, but since
            // PathFinder supports searches which span multiple rooms
            // you should be careful!
            if (!curRoom) {
                return false;
            }
            const costs = new PathFinder.CostMatrix();

            // tslint:disable-next-line:newline-per-chained-call
            curRoom.find(FIND_STRUCTURES).forEach(struct => {
                if (struct.structureType === STRUCTURE_ROAD) {
                    // Favor roads over plain tiles
                    costs.set(struct.pos.x, struct.pos.y, 1);
                } else if (
                    struct.structureType !== STRUCTURE_CONTAINER &&
                    (struct.structureType !== STRUCTURE_RAMPART || !(struct as OwnedStructure).my)
                ) {
                    // Can't walk through non-walkable buildings
                    costs.set(struct.pos.x, struct.pos.y, 0xff);
                }
            });

            // Avoid creeps in the room
            // tslint:disable-next-line:newline-per-chained-call
            curRoom.find(FIND_CREEPS).forEach(thisCreep => {
                costs.set(thisCreep.pos.x, thisCreep.pos.y, 0xff);
            });

            return costs;
        },
    });

    const pos = ret.path[0]; // $ExpectType RoomPosition
    pfCreep.move(pfCreep.pos.getDirectionTo(pos));
}

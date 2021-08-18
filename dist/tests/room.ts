// Room event log

{
    room.getEventLog(); // $ExpectType EventItem[]
    room.getEventLog(true); // $ExpectType EventItem[]

    const events = room.getEventLog(); // $ExpectType EventItem[]

    const event = events[0]; // $ExpectType EventItem

    switch (event.event) {
        case EVENT_ATTACK:
            const attackType: EventAttackType = event.data.attackType; // $ExpectType EventAttackType
            break;
        case EVENT_BUILD:
            const energySpent: number = event.data.energySpent; // $ExpectTypenumber
            break;
        case EVENT_POWER:
            const power = event.data.power; // $ExpectType PowerConstant
            break;
    }
}

// Room.Terrain

{
    const room = Game.rooms[""];

    const myTerrain = room.getTerrain(); // $ExpectType RoomTerrain

    const ret = myTerrain.get(5, 5);
    if (ret === 0) {
        /*plain*/
    }
    if (ret === TERRAIN_MASK_SWAMP) {
        /*swamp*/
    }
    if (ret === TERRAIN_MASK_WALL) {
        /*wall*/
    }

    const enemyTerrain = new Room.Terrain("W2N5"); // $ExpectType RoomTerrain
}

// ConstructionSite

{
    room.createConstructionSite(10, 10, STRUCTURE_EXTENSION); // $ExpectType ScreepsReturnCode
    room.createConstructionSite(10, 11, STRUCTURE_SPAWN, "mySpawn"); // $ExpectType ScreepsReturnCode

    const pos = new RoomPosition(10, 10, room.name);
    room.createConstructionSite(pos, STRUCTURE_EXTENSION); // $ExpectType ScreepsReturnCode
    room.createConstructionSite(pos, STRUCTURE_SPAWN, "mySpawn"); // $ExpectType ScreepsReturnCode
    pos.createConstructionSite(STRUCTURE_EXTENSION); // $ExpectType ScreepsReturnCode
    pos.createConstructionSite(STRUCTURE_SPAWN, "mySpawn"); // $ExpectType ScreepsReturnCode
}

// Advanced Structure types
{
    const owned = Game.getObjectById<AnyOwnedStructure>("blah")!; // $ExpectType AnyOwnedStructure
    const owner = owned.owner && owned.owner.username; // $ExpectType string | undefined
    owned.notifyWhenAttacked(false);

    const structs = room.find(FIND_MY_STRUCTURES); // $ExpectType AnyOwnedStructure[]
    structs.forEach(struct => {
        switch (struct.structureType) {
            case STRUCTURE_CONTROLLER:
                const usernameOptional: string | undefined = struct.owner && struct.owner.username;
                break;
            default:
                const usernameRequired: string = struct.owner.username;
                break;
        }
    });

    const unowned = Game.getObjectById<AnyStructure>("blah2")!; // $ExpectType AnyStructure
    const hp = unowned.hits / unowned.hitsMax;

    // test discriminated union
    switch (unowned.structureType) {
        case STRUCTURE_TOWER:
            unowned; // $ExpectType StructureTower
            unowned.heal(Game.creeps.myCreep);
            break;
        case STRUCTURE_CONTAINER:
        case STRUCTURE_STORAGE:
        case STRUCTURE_TERMINAL:
            unowned.store; // $ExpectType StoreDefinition
            const energyPercent = unowned.store.energy / unowned.storeCapacity;
            break;
        case STRUCTURE_WALL:
        case STRUCTURE_RAMPART:
            const wallHp = unowned.hits / unowned.hitsMax;
            break;
    }

    // test discriminated union using filter functions on find
    const from = Game.rooms.myRoom.find(FIND_STRUCTURES, {
        filter: s => (s.structureType === STRUCTURE_CONTAINER || s.structureType === STRUCTURE_STORAGE) && s.store.energy > 0,
    })[0];
    const to = from.pos.findClosestByPath(FIND_MY_STRUCTURES, {
        filter: s => (s.structureType === STRUCTURE_SPAWN || s.structureType === STRUCTURE_EXTENSION) && s.energy < s.energyCapacity,
    });

    Game.rooms.myRoom
        .find(FIND_MY_STRUCTURES, {
            filter: s => s.structureType === STRUCTURE_RAMPART,
        })
        .forEach(r => r.notifyWhenAttacked(false));
}

// StructurePortal

{
    const portals = room.find<StructurePortal>(FIND_STRUCTURES, { filter: s => s.structureType === STRUCTURE_PORTAL }); // $ExpectType StructurePortal[]
    portals.forEach((p: StructurePortal) => {
        const state = p.ticksToDecay === undefined ? "stable" : "unstable";
        if (p.destination instanceof RoomPosition) {
            Game.notify(`Found ${state} inter-room portal to ${p.destination}`);
        } else {
            Game.notify(`Found ${state} inter-shard portal to ${p.destination.shard} ${p.destination.room}`);
        }
    });
}

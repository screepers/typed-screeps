// Game.creeps

{
    for (const i in Game.creeps) {
        Game.creeps[i].moveTo(flag);
    }
}

// Game.flags

{
    creep.moveTo(Game.flags.Flag1);
}

// Game.time

{
    let time = Game.time; // $ExpectType number
    time += 1;
}

// Game.getObjectById(id)

{
    creep.memory.sourceId = creep.pos.findClosestByRange(FIND_SOURCES)!.id; // $ExpectType Id<Source>
    const source = Game.getObjectById(creep.memory.sourceId); // $ExpectType Source | null
}

// Game.notify(message, [groupInterval])

{
    if (creep.hits < creep.memory.lastHits) {
        Game.notify(`Creep ${creep} has been attacked at ${creep.pos}!`); // $ExpectType void
    }
    creep.memory.lastHits = creep.hits; // $ExpectType number
}

{
    if (Game.spawns["Spawn1"].energy === 0) {
        Game.notify(
            "Spawn1 is out of energy",
            180, // group these notifications for 3 hours
        );
    }
}

// Find Overloads

{
    const creeps = room.find(FIND_HOSTILE_CREEPS); // $ExpectType Creep[]
    creeps[0].say(creeps[1].name);

    const flags = room.find(FIND_FLAGS); // $ExpectType Flag[]
    flags[0].remove();

    const spawns = room.find(FIND_HOSTILE_SPAWNS); // $ExpectType StructureSpawn[]
    spawns[0].spawning;

    const sources = room.find(FIND_SOURCES); // $ExpectType Source[]
    sources[0].ticksToRegeneration;

    const resources = room.find(FIND_DROPPED_RESOURCES); // $ExpectType Resource<ResourceConstant>[]
    resources[0].resourceType;

    const sites = room.find(FIND_CONSTRUCTION_SITES); // $ExpectType ConstructionSite<BuildableStructureConstant>[]
    sites[0].remove();

    // $ExpectType ConstructionSite<"extension">[]
    const extensionsites = room.find(FIND_CONSTRUCTION_SITES, {
        filter: (site): site is ConstructionSite<STRUCTURE_EXTENSION> => {
            return site.structureType === STRUCTURE_EXTENSION;
        },
    });
    // Should always be true. needs proper testing
    extensionsites[0].structureType === STRUCTURE_EXTENSION;

    // Should have type (_HasRoomPosition | RoomPosition)[]
    const exits = room.find(FIND_EXIT); // $ExpectType RoomPosition[]

    const creepsHere = room.lookForAt(LOOK_CREEPS, 10, 10); // $ExpectType Creep[]
    creepsHere[0].getActiveBodyparts(ATTACK);

    // $ExpectType StructureTower[]
    const towers = room.find<StructureTower>(FIND_MY_STRUCTURES, {
        filter: structure => {
            return structure.structureType === STRUCTURE_TOWER;
        },
    });
    towers[0].attack(creeps[0]);
    towers[0].attack(creeps[0] as AnyCreep);
    towers[0].attack(powerCreep);
    towers[0].attack(spawns[0]);
    towers[0].heal(powerCreep);

    const isTower = (structure: AnyStructure): structure is StructureTower => {
        return structure.structureType === STRUCTURE_TOWER;
    };

    // $ExpectType StructureTower
    const tower = room.find(FIND_MY_STRUCTURES, {
        filter: isTower,
    })[0];
    tower.attack(creeps[0]);
    tower.attack(creeps[0] as AnyCreep);
    tower.attack(powerCreep);
    tower.attack(spawns[0]);
    tower.heal(powerCreep);
}

// RoomPosition Finds

{
    // Should have type Creep
    const hostileCreep = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS); // $ExpectType Creep | null
    if (hostileCreep !== null) {
        creep.say(hostileCreep.name);
    }

    // $ExpectType StructureTower | null
    const tower = creep.pos.findClosestByPath<StructureTower>(FIND_HOSTILE_STRUCTURES, {
        filter: structure => {
            return structure.structureType === STRUCTURE_TOWER;
        },
        algorithm: "astar",
    });
    if (tower !== null) {
        tower.attack(creep);
        tower.attack(powerCreep);
    }

    // Generic type predicate filter
    const isStructureType = <T extends StructureConstant, S extends ConcreteStructure<T>>(structureType: T) => {
        return (structure: AnyStructure): structure is S => {
            return structure.structureType === structureType;
        };
    };

    // $ExpectType StructureTower | null
    const tower2 = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
        filter: isStructureType(STRUCTURE_TOWER),
        algorithm: "astar",
    });
    if (tower2 !== null) {
        tower2.attack(creep);
        tower2.attack(powerCreep);
    }

    const creepWithEnergy = creep.pos.findClosestByPath(creep.room.find(FIND_CREEPS), { filter: c => c.store.energy > 0 }); // $ExpectType Creep | null

    const creepAbove = creep.pos.findClosestByPath(creep.room.find(FIND_CREEPS).map(c => c.pos), {
        filter: p => p.getDirectionTo(creep) === TOP,
    });

    // $ExpectType StructureRampart | null
    const rampart = creep.pos.findClosestByRange<StructureRampart>(FIND_HOSTILE_STRUCTURES, {
        filter: structure => {
            return structure.structureType === STRUCTURE_RAMPART;
        },
    });
    if (rampart !== null) {
        rampart.isPublic;
    }

    // Should have type Creep[]
    const hostileCreeps = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 10); // $ExpectType Creep[]
    hostileCreeps[0].saying;

    // $ExpectType StructureLab[]
    const labs = creep.pos.findInRange<StructureLab>(FIND_MY_STRUCTURES, 4, {
        filter: structure => {
            return structure.structureType === STRUCTURE_LAB;
        },
    });

    labs[0].boostCreep(creep);
}

// LookAt Finds

{
    const matrix = room.lookAtArea(10, 10, 20, 20, false); // $ExpectType LookAtResultMatrix<LookConstant>
    for (const y in matrix) {
        const row = matrix[y];
        for (const x in row) {
            const pos = new RoomPosition(+x, +y, room.name);
            const objects = row[x];
            if (objects.length > 0) {
                objects.map(o => o.type);
            }
        }
    }

    const nukes = room.lookForAt(LOOK_NUKES, creep.pos); // $ExpectType Nuke[]

    nukes[0].launchRoomName;

    const flags = room.lookForAtArea(LOOK_FLAGS, 10, 10, 20, 20); // $ExpectType LookForAtAreaResultMatrix<Flag, "flag">

    const x = flags[10];
    const y = x[11];
    const entry = y[0];
    entry.flag.remove();

    const creeps = room.lookForAtArea(LOOK_CREEPS, 10, 10, 20, 20, true); // $ExpectType LookForAtAreaResultArray<Creep, "creep">

    creeps[0].x;
    creeps[0].y;
    creeps[0].creep.move(TOP);
}

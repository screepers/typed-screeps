/**
 * This file is Screeps API description file.
 * This might need some updates when Screeps publishes new features or changes it's existing API
 */

// Last update 2016-02-05
declare var FIND_EXIT_TOP: number;
declare var FIND_EXIT_RIGHT: number;
declare var FIND_EXIT_BOTTOM: number;
declare var FIND_EXIT_LEFT: number;
declare var FIND_EXIT: number;
declare var FIND_CREEPS: number;
declare var FIND_MY_CREEPS: number;
declare var FIND_HOSTILE_CREEPS: number;
declare var FIND_SOURCES_ACTIVE: number;
declare var FIND_SOURCES: number;
declare var FIND_DROPPED_RESOURCES: number;
declare var FIND_STRUCTURES: number;
declare var FIND_MY_STRUCTURES: number;
declare var FIND_HOSTILE_STRUCTURES: number;
declare var FIND_FLAGS: number;
declare var FIND_CONSTRUCTION_SITES: number;
declare var FIND_MY_CONSTRUCTION_SITES: number;
declare var FIND_HOSTILE_CONSTRUCTION_SITES: number;
declare var FIND_MY_SPAWNS: number;
declare var FIND_HOSTILE_SPAWNS: number;
declare var FIND_MINERALS: number;

// Last update 2016-02-05
declare var TOP: number;
declare var TOP_RIGHT: number;
declare var RIGHT: number;
declare var BOTTOM_RIGHT: number;
declare var BOTTOM: number;
declare var BOTTOM_LEFT: number;
declare var LEFT: number;
declare var TOP_LEFT: number;

// Last update 2016-02-05
declare var OK: number;
declare var ERR_NOT_OWNER: number;
declare var ERR_NO_PATH: number;
declare var ERR_NAME_EXISTS: number;
declare var ERR_BUSY: number;
declare var ERR_NOT_FOUND: number;
declare var ERR_NOT_ENOUGH_RESOURCES: number;
declare var ERR_NOT_ENOUGH_ENERGY: number;
declare var ERR_INVALID_TARGET: number;
declare var ERR_FULL: number;
declare var ERR_NOT_IN_RANGE: number;
declare var ERR_INVALID_ARGS: number;
declare var ERR_TIRED: number;
declare var ERR_NO_BODYPART: number;
declare var ERR_NOT_ENOUGH_EXTENSIONS: number;
declare var ERR_RCL_NOT_ENOUGH: number;
declare var ERR_GCL_NOT_ENOUGH: number;

// Last update 2016-02-05
declare var COLOR_RED: string;
declare var COLOR_PURPLE: string;
declare var COLOR_BLUE: string;
declare var COLOR_CYAN: string;
declare var COLOR_GREEN: string;
declare var COLOR_YELLOW: string;
declare var COLOR_ORANGE: string;
declare var COLOR_BROWN: string;
declare var COLOR_GREY: string;
declare var COLOR_WHITE: string;

declare var CREEP_SPAWN_TIME: number;
declare var CREEP_LIFE_TIME: number;

declare var OBSTACLE_OBJECT_TYPES: string[];

declare var ENERGY_REGEN_TIME: number;
declare var ENERGY_REGEN_AMOUNT: number;
declare var ENERGY_DECAY: number;

declare var CREEP_CORPSE_RATE: number;

declare var REPAIR_COST: number;

declare var RAMPART_DECAY_AMOUNT: number;
declare var RAMPART_DECAY_TIME: number;
declare var RAMPART_HITS_MAX: {
    2: number,
    3: number,
    4: number,
    5: number,
    6: number,
    7: number,
    8: number
};

declare var SPAWN_HITS: number;
declare var SPAWN_ENERGY_START: number;
declare var SPAWN_ENERGY_CAPACITY: number;

declare var SOURCE_ENERGY_CAPACITY: number;

declare var ROAD_HITS: number;

declare var WALL_HITS: number;
declare var WALL_HITS_MAX: number;

declare var EXTENSION_HITS: number;
declare var EXTENSION_ENERGY_CAPACITY: number;

declare var ROAD_WEAROUT: number;
declare var ROAD_DECAY_AMOUNT: number;
declare var ROAD_DECAY_TIME: number;

declare var LINK_HITS: number;
declare var LINK_HITS_MAX: number;
declare var LINK_CAPACITY: number;
declare var LINK_COOLDOWN: number;
declare var LINK_LOSS_RATION: number;

declare var STORAGE_CAPACITY: number;
declare var STORAGE_HITS: number;

declare var BODYPART_COST: {
    [part: string]: number;
    move: number;
    work: number;
    attack: number;
    carry: number;
    heal: number;
    ranged_attack: number;
    tough: number;
    claim: number;
};

declare var CARRY_CAPACITY: number;
declare var HARVEST_POWER: number;
declare var REPAIR_POWER: number;
declare var BUILD_POWER: number;
declare var ATTACK_POWER: number;
declare var UPGRADE_CONTROLLER_POWER: number;
declare var RANGED_ATTACK_POWER: number;
declare var HEAL_POWER: number;
declare var RANGED_HEAL_POWER: number;

// Last update 2016-02-05
declare var MOVE: string;
declare var WORK: string;
declare var CARRY: string;
declare var ATTACK: string;
declare var RANGED_ATTACK: string;
declare var TOUGH: string;
declare var HEAL: string;
declare var CLAIM: string;

declare var CONSTRUCTION_COST: {
    spawn: number;
    extension: number;
    road: number;
    constructedWall: number;
    rampart: number;
    link: number;
    storage: number;
    tower: number;
    observer: number;
    powerSpawn: number;
    extractor: number;
    lab: number;
    terminal: number;
    container: number;
};

declare var CONSTRUCTION_COST_ROAD_SWAMP_RATIO: number;

// Last update 2016-02-05
declare var STRUCTURE_EXTENSION: string;
declare var STRUCTURE_RAMPART: string;
declare var STRUCTURE_ROAD: string;
declare var STRUCTURE_SPAWN: string;
declare var STRUCTURE_LINK: string;
declare var STRUCTURE_WALL: string;
declare var STRUCTURE_KEEPER_LAIR: string;
declare var STRUCTURE_CONTROLLER: string;
declare var STRUCTURE_STORAGE: string;
declare var STRUCTURE_TOWER: string;
declare var STRUCTURE_OBSERVER: string;
declare var STRUCTURE_POWER_BANK: string;
declare var STRUCTURE_POWER_SPAWN: string;
declare var STRUCTURE_EXTRACTOR: string;
declare var STRUCTURE_LAB: string;
declare var STRUCTURE_TERMINAL: string;
declare var STRUCTURE_CONTAINER: string;

declare var RESOURCE_ENERGY: string;
declare var RESOURCE_POWER: string;
declare var RESOURCE_UTRIUM: string;
declare var RESOURCE_LEMERGIUM: string;
declare var RESOURCE_KEANIUM: string;
declare var RESOURCE_GHODIUM: string;
declare var RESOURCE_ZYNTHIUM: string;
declare var RESOURCE_OXYGEN: string;
declare var RESOURCE_HYDROGEN: string;
declare var RESOURCE_CATALYST: string;
declare var RESOURCE_HYDROXIDE: string;
declare var RESOURCE_ZYNTHIUM_KEANITE: string;
declare var RESOURCE_UTRIUM_LEMERGITE: string;
declare var RESOURCE_UTRIUM_HYDRIDE: string;
declare var RESOURCE_UTRIUM_OXIDE: string;
declare var RESOURCE_KEANIUM_HYDRIDE: string;
declare var RESOURCE_KEANIUM_OXIDE: string;
declare var RESOURCE_LEMERGIUM_HYDRIDE: string;
declare var RESOURCE_LEMERGIUM_OXIDE: string;
declare var RESOURCE_ZYNTHIUM_HYDRIDE: string;
declare var RESOURCE_ZYNTHIUM_OXIDE: string;
declare var RESOURCE_GHODIUM_HYDRIDE: string;
declare var RESOURCE_GHODIUM_OXIDE: string;
declare var RESOURCE_UTRIUM_ACID: string;
declare var RESOURCE_UTRIUM_ALKALIDE: string;
declare var RESOURCE_KEANIUM_ACID: string;
declare var RESOURCE_KEANIUM_ALKALIDE: string;
declare var RESOURCE_LEMERGIUM_ACID: string;
declare var RESOURCE_LEMERGIUM_ALKALIDE: string;
declare var RESOURCE_ZYNTHIUM_ACID: string;
declare var RESOURCE_ZYNTHIUM_ALKALIDE: string;
declare var RESOURCE_GHODIUM_ACID: string;
declare var RESOURCE_GHODIUM_ALKALIDE: string;
declare var RESOURCE_CATALYZED_UTRIUM_ACID: string;
declare var RESOURCE_CATALYZED_UTRIUM_ALKALIDE: string;
declare var RESOURCE_CATALYZED_KEANIUM_ACID: string;
declare var RESOURCE_CATALYZED_KEANIUM_ALKALIDE: string;
declare var RESOURCE_CATALYZED_LEMERGIUM_ACID: string;
declare var RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: string;
declare var RESOURCE_CATALYZED_ZYNTHIUM_ACID: string;
declare var RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: string;
declare var RESOURCE_CATALYZED_GHODIUM_ACID: string;
declare var RESOURCE_CATALYZED_GHODIUM_ALKALIDE: string;
declare var RESOURCES_ALL: string[];

declare var CONTROLLER_STRUCTURES: {
    spawn: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
    extension: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
    link: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
    constructedWall: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
    rampart: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
    storage: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
    tower: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
    observer: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
    powerSpawn: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
    extractor: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
    terminal: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
    lab: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
    container: {
        1: number;
        2: number;
        3: number;
        4: number;
        5: number;
        6: number;
        7: number;
        8: number;
    };
};

declare var GCL_POW: number;
declare var GCL_MULTIPLY: number;

// Updated 2016-02-05
declare var MODE_SIMULATION: string;
declare var MODE_WORLD: string;

declare var TERRAIN_MASK_WALL: number;
declare var TERRAIN_MASK_SWAMP: number;
declare var TERRAIN_MASK_LAVA: number;

declare var REACTIONS: {
    H: {
        O: string,
        L: string,
        K: string,
        U: string,
        Z: string,
        G: string
    },
    O: {
        H: string,
        L: string,
        K: string,
        U: string,
        Z: string,
        G: string
    },
    Z: {
        K: string,
        H: string,
        O: string
    },
    L: {
        U: string,
        H: string,
        O: string
    },
    K: {
        Z: string,
        H: string,
        O: string
    },
    G: {
        H: string,
        O: string
    },
    U: {
        L: string,
        H: string,
        O: string
    },
    OH: {
        UH: string,
        UO: string,
        ZH: string,
        ZO: string,
        KH: string,
        KO: string,
        LH: string,
        LO: string,
        GH: string,
        GO: string
    },
    X: {
        UH2O: string,
        UHO2: string,
        LH2O: string,
        LHO2: string,
        KH2O: string,
        KHO2: string,
        ZH2O: string,
        ZHO2: string,
        GH2O: string,
        GHO2: string
    },
    ZK: {
        UL: string
    },
    UL: {
        ZK: string
    },
    LH: {
        OH: string
    },
    ZH: {
        OH: string
    },
    GH: {
        OH: string
    },
    KH: {
        OH: string
    },
    UH: {
        OH: string
    },
    LO: {
        OH: string
    },
    ZO: {
        OH: string
    },
    KO: {
        OH: string
    },
    UO: {
        OH: string
    },
    GO: {
        OH: string
    },
    LH2O: {
        X: string
    },
    KH2O: {
        X: string
    },
    ZH2O: {
        X: string
    },
    UH2O: {
        X: string
    },
    GH2O: {
        X: string
    },
    LHO2: {
        X: string
    },
    UHO2: {
        X: string
    },
    KHO2: {
        X: string
    },
    ZHO2: {
        X: string
    },
    GHO2: {
        X: string
    }
}

declare var LOOK_CREEPS: string;
declare var LOOK_ENERGY: string;
declare var LOOK_RESOURCES: string;
declare var LOOK_SOURCES: string;
declare var LOOK_MINERALS: string;
declare var LOOK_STRUCTURES: string;
declare var LOOK_FLAGS: string;
declare var LOOK_CONSTRUCTION_SITES: string;
declare var LOOK_NUKES: string;
declare var LOOK_TERRAIN: string;

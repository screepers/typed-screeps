// Game Constants

declare const OK: OK;
declare const ERR_NOT_OWNER: ERR_NOT_OWNER;
declare const ERR_NO_PATH: ERR_NO_PATH;
declare const ERR_NAME_EXISTS: ERR_NAME_EXISTS;
declare const ERR_BUSY: ERR_BUSY;
declare const ERR_NOT_FOUND: ERR_NOT_FOUND;
declare const ERR_NOT_ENOUGH_RESOURCES: ERR_NOT_ENOUGH_RESOURCES;
declare const ERR_NOT_ENOUGH_ENERGY: ERR_NOT_ENOUGH_ENERGY;
declare const ERR_INVALID_TARGET: ERR_INVALID_TARGET;
declare const ERR_FULL: ERR_FULL;
declare const ERR_NOT_IN_RANGE: ERR_NOT_IN_RANGE;
declare const ERR_INVALID_ARGS: ERR_INVALID_ARGS;
declare const ERR_TIRED: ERR_TIRED;
declare const ERR_NO_BODYPART: ERR_NO_BODYPART;
declare const ERR_NOT_ENOUGH_EXTENSIONS: ERR_NOT_ENOUGH_EXTENSIONS;
declare const ERR_RCL_NOT_ENOUGH: ERR_RCL_NOT_ENOUGH;
declare const ERR_GCL_NOT_ENOUGH: ERR_GCL_NOT_ENOUGH;

declare const FIND_EXIT_TOP: FIND_EXIT_TOP;
declare const FIND_EXIT_RIGHT: FIND_EXIT_RIGHT;
declare const FIND_EXIT_BOTTOM: FIND_EXIT_BOTTOM;
declare const FIND_EXIT_LEFT: FIND_EXIT_LEFT;
declare const FIND_EXIT: FIND_EXIT;
declare const FIND_CREEPS: FIND_CREEPS;
declare const FIND_MY_CREEPS: FIND_MY_CREEPS;
declare const FIND_HOSTILE_CREEPS: FIND_HOSTILE_CREEPS;
declare const FIND_SOURCES_ACTIVE: FIND_SOURCES_ACTIVE;
declare const FIND_SOURCES: FIND_SOURCES;
declare const FIND_DROPPED_RESOURCES: FIND_DROPPED_RESOURCES;
declare const FIND_STRUCTURES: FIND_STRUCTURES;
declare const FIND_MY_STRUCTURES: FIND_MY_STRUCTURES;
declare const FIND_HOSTILE_STRUCTURES: FIND_HOSTILE_STRUCTURES;
declare const FIND_FLAGS: FIND_FLAGS;
declare const FIND_CONSTRUCTION_SITES: FIND_CONSTRUCTION_SITES;
declare const FIND_MY_SPAWNS: FIND_MY_SPAWNS;
declare const FIND_HOSTILE_SPAWNS: FIND_HOSTILE_SPAWNS;
declare const FIND_MY_CONSTRUCTION_SITES: FIND_MY_CONSTRUCTION_SITES;
declare const FIND_HOSTILE_CONSTRUCTION_SITES: FIND_HOSTILE_CONSTRUCTION_SITES;
declare const FIND_MINERALS: FIND_MINERALS;
declare const FIND_NUKES: FIND_NUKES;
declare const FIND_TOMBSTONES: FIND_TOMBSTONES;
declare const FIND_POWER_CREEPS: FIND_POWER_CREEPS;
declare const FIND_MY_POWER_CREEPS: FIND_MY_POWER_CREEPS;
declare const FIND_HOSTILE_POWER_CREEPS: FIND_HOSTILE_POWER_CREEPS;
declare const FIND_DEPOSITS: FIND_DEPOSITS;
declare const FIND_RUINS: FIND_RUINS;

declare const TOP: TOP;
declare const TOP_RIGHT: TOP_RIGHT;
declare const RIGHT: RIGHT;
declare const BOTTOM_RIGHT: BOTTOM_RIGHT;
declare const BOTTOM: BOTTOM;
declare const BOTTOM_LEFT: BOTTOM_LEFT;
declare const LEFT: LEFT;
declare const TOP_LEFT: TOP_LEFT;

declare const COLOR_RED: COLOR_RED;
declare const COLOR_PURPLE: COLOR_PURPLE;
declare const COLOR_BLUE: COLOR_BLUE;
declare const COLOR_CYAN: COLOR_CYAN;
declare const COLOR_GREEN: COLOR_GREEN;
declare const COLOR_YELLOW: COLOR_YELLOW;
declare const COLOR_ORANGE: COLOR_ORANGE;
declare const COLOR_BROWN: COLOR_BROWN;
declare const COLOR_GREY: COLOR_GREY;
declare const COLOR_WHITE: COLOR_WHITE;
declare const COLORS_ALL: ColorConstant[];

declare const CREEP_SPAWN_TIME: 3;
declare const CREEP_LIFE_TIME: 1500;
declare const CREEP_CLAIM_LIFE_TIME: 600;
declare const CREEP_CORPSE_RATE: 0.2;

declare const OBSTACLE_OBJECT_TYPES: [
    "spawn",
    "creep",
    "powerCreep",
    "source",
    "mineral",
    "deposit",
    "controller",
    "constructedWall",
    "extension",
    "link",
    "storage",
    "tower",
    "observer",
    "powerSpawn",
    "powerBank",
    "lab",
    "terminal",
    "nuker",
    "factory",
    "invaderCore",
];

declare const ENERGY_REGEN_TIME: 300;
declare const ENERGY_DECAY: 1000;

declare const REPAIR_COST: 0.01;

declare const RAMPART_DECAY_AMOUNT: 300;
declare const RAMPART_DECAY_TIME: 100;
declare const RAMPART_HITS: 1;
declare const RAMPART_HITS_MAX: {
    [rcl: number]: number;
    2: 300000;
    3: 1000000;
    4: 3000000;
    5: 10000000;
    6: 30000000;
    7: 100000000;
    8: 300000000;
};

declare const SPAWN_HITS: 5000;
declare const SPAWN_ENERGY_START: 300;
declare const SPAWN_ENERGY_CAPACITY: 300;

declare const SOURCE_ENERGY_CAPACITY: 3000;
declare const SOURCE_ENERGY_NEUTRAL_CAPACITY: 1500;
declare const SOURCE_ENERGY_KEEPER_CAPACITY: 4000;

declare const WALL_HITS: 1;
declare const WALL_HITS_MAX: 300000000;

declare const EXTENSION_HITS: 1000;
declare const EXTENSION_ENERGY_CAPACITY: {
    [rcl: number]: number;
    0: 50;
    1: 50;
    2: 50;
    3: 50;
    4: 50;
    5: 50;
    6: 50;
    7: 100;
    8: 200;
};

declare const ROAD_HITS: 5000;
declare const ROAD_WEAROUT: 1;
declare const ROAD_WEAROUT_POWER_CREEP: 100;
declare const ROAD_DECAY_AMOUNT: 100;
declare const ROAD_DECAY_TIME: 1000;

declare const LINK_HITS: 1000;
declare const LINK_HITS_MAX: 1000;
declare const LINK_CAPACITY: 800;
declare const LINK_COOLDOWN: 1;
declare const LINK_LOSS_RATIO: 0.03;

declare const STORAGE_CAPACITY: 1000000;
declare const STORAGE_HITS: 10000;

declare const FACTORY_HITS: 1000;
declare const FACTORY_CAPACITY: 50000;

declare const BODYPART_COST: Record<BodyPartConstant, number>;

declare const BODYPARTS_ALL: BodyPartConstant[];

declare const CARRY_CAPACITY: 50;
declare const HARVEST_POWER: 2;
declare const HARVEST_MINERAL_POWER: 1;
declare const HARVEST_DEPOSIT_POWER: 1;
declare const REPAIR_POWER: 100;
declare const DISMANTLE_POWER: 50;
declare const BUILD_POWER: 5;
declare const ATTACK_POWER: 30;
declare const UPGRADE_CONTROLLER_POWER: 1;
declare const RANGED_ATTACK_POWER: 10;
declare const HEAL_POWER: 12;
declare const RANGED_HEAL_POWER: 4;
declare const DISMANTLE_COST: 0.005;

declare const MOVE: MOVE;
declare const WORK: WORK;
declare const CARRY: CARRY;
declare const ATTACK: ATTACK;
declare const RANGED_ATTACK: RANGED_ATTACK;
declare const TOUGH: TOUGH;
declare const HEAL: HEAL;
declare const CLAIM: CLAIM;

declare const CONSTRUCTION_COST: Record<BuildableStructureConstant, number>;

declare const CONSTRUCTION_COST_ROAD_SWAMP_RATIO: 5;
declare const CONSTRUCTION_COST_ROAD_WALL_RATIO: 150;

declare const STRUCTURE_EXTENSION: STRUCTURE_EXTENSION;
declare const STRUCTURE_RAMPART: STRUCTURE_RAMPART;
declare const STRUCTURE_ROAD: STRUCTURE_ROAD;
declare const STRUCTURE_SPAWN: STRUCTURE_SPAWN;
declare const STRUCTURE_LINK: STRUCTURE_LINK;
declare const STRUCTURE_WALL: STRUCTURE_WALL;
declare const STRUCTURE_KEEPER_LAIR: STRUCTURE_KEEPER_LAIR;
declare const STRUCTURE_CONTROLLER: STRUCTURE_CONTROLLER;
declare const STRUCTURE_STORAGE: STRUCTURE_STORAGE;
declare const STRUCTURE_TOWER: STRUCTURE_TOWER;
declare const STRUCTURE_OBSERVER: STRUCTURE_OBSERVER;
declare const STRUCTURE_POWER_BANK: STRUCTURE_POWER_BANK;
declare const STRUCTURE_POWER_SPAWN: STRUCTURE_POWER_SPAWN;
declare const STRUCTURE_EXTRACTOR: STRUCTURE_EXTRACTOR;
declare const STRUCTURE_LAB: STRUCTURE_LAB;
declare const STRUCTURE_TERMINAL: STRUCTURE_TERMINAL;
declare const STRUCTURE_CONTAINER: STRUCTURE_CONTAINER;
declare const STRUCTURE_NUKER: STRUCTURE_NUKER;
declare const STRUCTURE_FACTORY: STRUCTURE_FACTORY;
declare const STRUCTURE_INVADER_CORE: STRUCTURE_INVADER_CORE;
declare const STRUCTURE_PORTAL: STRUCTURE_PORTAL;

declare const RESOURCE_ENERGY: RESOURCE_ENERGY;
declare const RESOURCE_POWER: RESOURCE_POWER;
declare const RESOURCE_OPS: RESOURCE_OPS;
declare const RESOURCE_UTRIUM: RESOURCE_UTRIUM;
declare const RESOURCE_LEMERGIUM: RESOURCE_LEMERGIUM;
declare const RESOURCE_KEANIUM: RESOURCE_KEANIUM;
declare const RESOURCE_GHODIUM: RESOURCE_GHODIUM;
declare const RESOURCE_ZYNTHIUM: RESOURCE_ZYNTHIUM;
declare const RESOURCE_OXYGEN: RESOURCE_OXYGEN;
declare const RESOURCE_HYDROGEN: RESOURCE_HYDROGEN;
declare const RESOURCE_CATALYST: RESOURCE_CATALYST;
declare const RESOURCE_HYDROXIDE: RESOURCE_HYDROXIDE;
declare const RESOURCE_ZYNTHIUM_KEANITE: RESOURCE_ZYNTHIUM_KEANITE;
declare const RESOURCE_UTRIUM_LEMERGITE: RESOURCE_UTRIUM_LEMERGITE;
declare const RESOURCE_UTRIUM_HYDRIDE: RESOURCE_UTRIUM_HYDRIDE;
declare const RESOURCE_UTRIUM_OXIDE: RESOURCE_UTRIUM_OXIDE;
declare const RESOURCE_KEANIUM_HYDRIDE: RESOURCE_KEANIUM_HYDRIDE;
declare const RESOURCE_KEANIUM_OXIDE: RESOURCE_KEANIUM_OXIDE;
declare const RESOURCE_LEMERGIUM_HYDRIDE: RESOURCE_LEMERGIUM_HYDRIDE;
declare const RESOURCE_LEMERGIUM_OXIDE: RESOURCE_LEMERGIUM_OXIDE;
declare const RESOURCE_ZYNTHIUM_HYDRIDE: RESOURCE_ZYNTHIUM_HYDRIDE;
declare const RESOURCE_ZYNTHIUM_OXIDE: RESOURCE_ZYNTHIUM_OXIDE;
declare const RESOURCE_GHODIUM_HYDRIDE: RESOURCE_GHODIUM_HYDRIDE;
declare const RESOURCE_GHODIUM_OXIDE: RESOURCE_GHODIUM_OXIDE;
declare const RESOURCE_UTRIUM_ACID: RESOURCE_UTRIUM_ACID;
declare const RESOURCE_UTRIUM_ALKALIDE: RESOURCE_UTRIUM_ALKALIDE;
declare const RESOURCE_KEANIUM_ACID: RESOURCE_KEANIUM_ACID;
declare const RESOURCE_KEANIUM_ALKALIDE: RESOURCE_KEANIUM_ALKALIDE;
declare const RESOURCE_LEMERGIUM_ACID: RESOURCE_LEMERGIUM_ACID;
declare const RESOURCE_LEMERGIUM_ALKALIDE: RESOURCE_LEMERGIUM_ALKALIDE;
declare const RESOURCE_ZYNTHIUM_ACID: RESOURCE_ZYNTHIUM_ACID;
declare const RESOURCE_ZYNTHIUM_ALKALIDE: RESOURCE_ZYNTHIUM_ALKALIDE;
declare const RESOURCE_GHODIUM_ACID: RESOURCE_GHODIUM_ACID;
declare const RESOURCE_GHODIUM_ALKALIDE: RESOURCE_GHODIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_UTRIUM_ACID: RESOURCE_CATALYZED_UTRIUM_ACID;
declare const RESOURCE_CATALYZED_UTRIUM_ALKALIDE: RESOURCE_CATALYZED_UTRIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_KEANIUM_ACID: RESOURCE_CATALYZED_KEANIUM_ACID;
declare const RESOURCE_CATALYZED_KEANIUM_ALKALIDE: RESOURCE_CATALYZED_KEANIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_LEMERGIUM_ACID: RESOURCE_CATALYZED_LEMERGIUM_ACID;
declare const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_ZYNTHIUM_ACID: RESOURCE_CATALYZED_ZYNTHIUM_ACID;
declare const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE;
declare const RESOURCE_CATALYZED_GHODIUM_ACID: RESOURCE_CATALYZED_GHODIUM_ACID;
declare const RESOURCE_CATALYZED_GHODIUM_ALKALIDE: RESOURCE_CATALYZED_GHODIUM_ALKALIDE;

declare const RESOURCE_BIOMASS: RESOURCE_BIOMASS;
declare const RESOURCE_METAL: RESOURCE_METAL;
declare const RESOURCE_MIST: RESOURCE_MIST;
declare const RESOURCE_SILICON: RESOURCE_SILICON;

declare const RESOURCE_UTRIUM_BAR: RESOURCE_UTRIUM_BAR;
declare const RESOURCE_LEMERGIUM_BAR: RESOURCE_LEMERGIUM_BAR;
declare const RESOURCE_ZYNTHIUM_BAR: RESOURCE_ZYNTHIUM_BAR;
declare const RESOURCE_KEANIUM_BAR: RESOURCE_KEANIUM_BAR;
declare const RESOURCE_GHODIUM_MELT: RESOURCE_GHODIUM_MELT;
declare const RESOURCE_OXIDANT: RESOURCE_OXIDANT;
declare const RESOURCE_REDUCTANT: RESOURCE_REDUCTANT;
declare const RESOURCE_PURIFIER: RESOURCE_PURIFIER;
declare const RESOURCE_BATTERY: RESOURCE_BATTERY;

declare const RESOURCE_COMPOSITE: RESOURCE_COMPOSITE;
declare const RESOURCE_CRYSTAL: RESOURCE_CRYSTAL;
declare const RESOURCE_LIQUID: RESOURCE_LIQUID;

declare const RESOURCE_WIRE: RESOURCE_WIRE;
declare const RESOURCE_SWITCH: RESOURCE_SWITCH;
declare const RESOURCE_TRANSISTOR: RESOURCE_TRANSISTOR;
declare const RESOURCE_MICROCHIP: RESOURCE_MICROCHIP;
declare const RESOURCE_CIRCUIT: RESOURCE_CIRCUIT;
declare const RESOURCE_DEVICE: RESOURCE_DEVICE;

declare const RESOURCE_CELL: RESOURCE_CELL;
declare const RESOURCE_PHLEGM: RESOURCE_PHLEGM;
declare const RESOURCE_TISSUE: RESOURCE_TISSUE;
declare const RESOURCE_MUSCLE: RESOURCE_MUSCLE;
declare const RESOURCE_ORGANOID: RESOURCE_ORGANOID;
declare const RESOURCE_ORGANISM: RESOURCE_ORGANISM;

declare const RESOURCE_ALLOY: RESOURCE_ALLOY;
declare const RESOURCE_TUBE: RESOURCE_TUBE;
declare const RESOURCE_FIXTURES: RESOURCE_FIXTURES;
declare const RESOURCE_FRAME: RESOURCE_FRAME;
declare const RESOURCE_HYDRAULICS: RESOURCE_HYDRAULICS;
declare const RESOURCE_MACHINE: RESOURCE_MACHINE;

declare const RESOURCE_CONDENSATE: RESOURCE_CONDENSATE;
declare const RESOURCE_CONCENTRATE: RESOURCE_CONCENTRATE;
declare const RESOURCE_EXTRACT: RESOURCE_EXTRACT;
declare const RESOURCE_SPIRIT: RESOURCE_SPIRIT;
declare const RESOURCE_EMANATION: RESOURCE_EMANATION;
declare const RESOURCE_ESSENCE: RESOURCE_ESSENCE;

declare const RESOURCES_ALL: ResourceConstant[];

declare const SUBSCRIPTION_TOKEN: SUBSCRIPTION_TOKEN;
declare const CPU_UNLOCK: CPU_UNLOCK;
declare const PIXEL: PIXEL;
declare const ACCESS_KEY: ACCESS_KEY;

declare const PIXEL_CPU_COST: 10000;

declare const CONTROLLER_LEVELS: { [level: number]: number };
declare const CONTROLLER_STRUCTURES: Record<BuildableStructureConstant, { [level: number]: number }>;

declare const CONTROLLER_DOWNGRADE: { [level: number]: number };
declare const CONTROLLER_DOWNGRADE_RESTORE: number;
declare const CONTROLLER_DOWNGRADE_SAFEMODE_THRESHOLD: number;
declare const CONTROLLER_CLAIM_DOWNGRADE: number;
declare const CONTROLLER_RESERVE: number;
declare const CONTROLLER_RESERVE_MAX: number;
declare const CONTROLLER_MAX_UPGRADE_PER_TICK: number;
declare const CONTROLLER_ATTACK_BLOCKED_UPGRADE: number;
declare const CONTROLLER_NUKE_BLOCKED_UPGRADE: number;

declare const SAFE_MODE_DURATION: 20000;
declare const SAFE_MODE_COOLDOWN: 50000;
declare const SAFE_MODE_COST: 1000;

declare const TOWER_HITS: number;
declare const TOWER_CAPACITY: number;
declare const TOWER_ENERGY_COST: number;
declare const TOWER_POWER_ATTACK: number;
declare const TOWER_POWER_HEAL: number;
declare const TOWER_POWER_REPAIR: number;
declare const TOWER_OPTIMAL_RANGE: number;
declare const TOWER_FALLOFF_RANGE: number;
declare const TOWER_FALLOFF: number;

declare const OBSERVER_HITS: number;
declare const OBSERVER_RANGE: number;

declare const POWER_BANK_HITS: number;
declare const POWER_BANK_CAPACITY_MAX: number;
declare const POWER_BANK_CAPACITY_MIN: number;
declare const POWER_BANK_CAPACITY_CRIT: number;
declare const POWER_BANK_DECAY: number;
declare const POWER_BANK_HIT_BACK: number;

declare const POWER_SPAWN_HITS: number;
declare const POWER_SPAWN_ENERGY_CAPACITY: number;
declare const POWER_SPAWN_POWER_CAPACITY: number;
declare const POWER_SPAWN_ENERGY_RATIO: number;

declare const EXTRACTOR_HITS: number;
declare const EXTRACTOR_COOLDOWN: number;

declare const LAB_HITS: number;
declare const LAB_MINERAL_CAPACITY: number;
declare const LAB_ENERGY_CAPACITY: number;
declare const LAB_BOOST_ENERGY: number;
declare const LAB_BOOST_MINERAL: number;
declare const LAB_COOLDOWN: number;
declare const LAB_REACTION_AMOUNT: number;

declare const GCL_POW: number;
declare const GCL_MULTIPLY: number;
declare const GCL_NOVICE: number;

declare const MODE_SIMULATION: string;
declare const MODE_SURVIVAL: string;
declare const MODE_WORLD: string;
declare const MODE_ARENA: string;

declare const TERRAIN_MASK_WALL: TERRAIN_MASK_WALL;
declare const TERRAIN_MASK_SWAMP: TERRAIN_MASK_SWAMP;
declare const TERRAIN_MASK_LAVA: TERRAIN_MASK_LAVA;

declare const MAX_CONSTRUCTION_SITES: number;
declare const MAX_CREEP_SIZE: number;

declare const MINERAL_REGEN_TIME: number;
declare const MINERAL_MIN_AMOUNT: Record<MineralConstant, number>;
declare const MINERAL_RANDOM_FACTOR: number;

declare const MINERAL_DENSITY: {
    [level: number]: number;
    1: number;
    2: number;
    3: number;
    4: number;
};

declare const MINERAL_DENSITY_PROBABILITY: {
    [level: number]: number;
    1: number;
    2: number;
    3: number;
    4: number;
};

declare const MINERAL_DENSITY_CHANGE: number;

declare const DENSITY_LOW: number;
declare const DENSITY_MODERATE: number;
declare const DENSITY_HIGH: number;
declare const DENSITY_ULTRA: number;

declare const DEPOSIT_EXHAUST_MULTIPLY: number;
declare const DEPOSIT_EXHAUST_POW: number;
declare const DEPOSIT_DECAY_TIME: number;

declare const TERMINAL_CAPACITY: number;
declare const TERMINAL_COOLDOWN: number;
declare const TERMINAL_HITS: number;
declare const TERMINAL_SEND_COST: number;
declare const TERMINAL_MIN_SEND: number;

declare const CONTAINER_HITS: number;
declare const CONTAINER_CAPACITY: number;
declare const CONTAINER_DECAY: number;
declare const CONTAINER_DECAY_TIME: number;
declare const CONTAINER_DECAY_TIME_OWNED: number;

declare const NUKER_HITS: number;
declare const NUKER_COOLDOWN: number;
declare const NUKER_ENERGY_CAPACITY: number;
declare const NUKER_GHODIUM_CAPACITY: number;
declare const NUKE_LAND_TIME: number;
declare const NUKE_RANGE: number;
declare const NUKE_DAMAGE: {
    [range: number]: number;
    0: number;
    1: number;
    4: number;
};

declare const REACTIONS: {
    [resource: string]: { [resource: string]: string };
    H: {
        O: "OH";
        L: "LH";
        K: "KH";
        U: "UH";
        Z: "ZH";
        G: "GH";
    };
    O: {
        H: "OH";
        L: "LO";
        K: "KO";
        U: "UO";
        Z: "ZO";
        G: "GO";
    };
    Z: {
        K: "ZK";
        H: "ZH";
        O: "ZO";
    };
    L: {
        U: "UL";
        H: "LH";
        O: "LO";
    };
    K: {
        Z: "ZK";
        H: "KH";
        O: "KO";
    };
    G: {
        H: "GH";
        O: "GO";
    };
    U: {
        L: "UL";
        H: "UH";
        O: "UO";
    };
    OH: {
        UH: "UH2O";
        UO: "UHO2";
        ZH: "ZH2O";
        ZO: "ZHO2";
        KH: "KH2O";
        KO: "KHO2";
        LH: "LH2O";
        LO: "LHO2";
        GH: "GH2O";
        GO: "GHO2";
    };
    X: {
        UH2O: "XUH2O";
        UHO2: "XUHO2";
        LH2O: "XLH2O";
        LHO2: "XLHO2";
        KH2O: "XKH2O";
        KHO2: "XKHO2";
        ZH2O: "XZH2O";
        ZHO2: "XZHO2";
        GH2O: "XGH2O";
        GHO2: "XGHO2";
    };
    ZK: {
        UL: "G";
    };
    UL: {
        ZK: "G";
    };
    LH: {
        OH: "LH2O";
    };
    ZH: {
        OH: "ZH2O";
    };
    GH: {
        OH: "GH2O";
    };
    KH: {
        OH: "KH2O";
    };
    UH: {
        OH: "UH2O";
    };
    LO: {
        OH: "LHO2";
    };
    ZO: {
        OH: "ZHO2";
    };
    KO: {
        OH: "KHO2";
    };
    UO: {
        OH: "UHO2";
    };
    GO: {
        OH: "GHO2";
    };
    LH2O: {
        X: "XLH2O";
    };
    KH2O: {
        X: "XKH2O";
    };
    ZH2O: {
        X: "XZH2O";
    };
    UH2O: {
        X: "XUH2O";
    };
    GH2O: {
        X: "XGH2O";
    };
    LHO2: {
        X: "XLHO2";
    };
    UHO2: {
        X: "XUHO2";
    };
    KHO2: {
        X: "XKHO2";
    };
    ZHO2: {
        X: "XZHO2";
    };
    GHO2: {
        X: "XGHO2";
    };
};

declare const REACTION_TIME: {
    OH: 20;
    ZK: 5;
    UL: 5;
    G: 5;
    UH: 10;
    UH2O: 5;
    XUH2O: 60;
    UO: 10;
    UHO2: 5;
    XUHO2: 60;
    KH: 10;
    KH2O: 5;
    XKH2O: 60;
    KO: 10;
    KHO2: 5;
    XKHO2: 60;
    LH: 15;
    LH2O: 10;
    XLH2O: 65;
    LO: 10;
    LHO2: 5;
    XLHO2: 60;
    ZH: 20;
    ZH2O: 40;
    XZH2O: 160;
    ZO: 10;
    ZHO2: 5;
    XZHO2: 60;
    GH: 10;
    GH2O: 15;
    XGH2O: 80;
    GO: 10;
    GHO2: 30;
    XGHO2: 150;
};

declare const BOOSTS: {
    [part: string]: { [boost: string]: { [action: string]: number } };
    work: {
        UO: {
            harvest: 3;
        };
        UHO2: {
            harvest: 5;
        };
        XUHO2: {
            harvest: 7;
        };
        LH: {
            build: 1.5;
            repair: 1.5;
        };
        LH2O: {
            build: 1.8;
            repair: 1.8;
        };
        XLH2O: {
            build: 2;
            repair: 2;
        };
        ZH: {
            dismantle: 2;
        };
        ZH2O: {
            dismantle: 3;
        };
        XZH2O: {
            dismantle: 4;
        };
        GH: {
            upgradeController: 1.5;
        };
        GH2O: {
            upgradeController: 1.8;
        };
        XGH2O: {
            upgradeController: 2;
        };
    };
    attack: {
        UH: {
            attack: 2;
        };
        UH2O: {
            attack: 3;
        };
        XUH2O: {
            attack: 4;
        };
    };
    ranged_attack: {
        KO: {
            rangedAttack: 2;
            rangedMassAttack: 2;
        };
        KHO2: {
            rangedAttack: 3;
            rangedMassAttack: 3;
        };
        XKHO2: {
            rangedAttack: 4;
            rangedMassAttack: 4;
        };
    };
    heal: {
        LO: {
            heal: 2;
            rangedHeal: 2;
        };
        LHO2: {
            heal: 3;
            rangedHeal: 3;
        };
        XLHO2: {
            heal: 4;
            rangedHeal: 4;
        };
    };
    carry: {
        KH: {
            capacity: 2;
        };
        KH2O: {
            capacity: 3;
        };
        XKH2O: {
            capacity: 4;
        };
    };
    move: {
        ZO: {
            fatigue: 2;
        };
        ZHO2: {
            fatigue: 3;
        };
        XZHO2: {
            fatigue: 4;
        };
    };
    tough: {
        GO: {
            damage: 0.7;
        };
        GHO2: {
            damage: 0.5;
        };
        XGHO2: {
            damage: 0.3;
        };
    };
};

declare const INTERSHARD_RESOURCES: InterShardResourceConstant[];

declare const COMMODITIES: Record<
    CommodityConstant | MineralConstant | RESOURCE_GHODIUM | RESOURCE_ENERGY,
    {
        level?: number;
        amount: number;
        cooldown: number;
        components: Record<DepositConstant | CommodityConstant | MineralConstant | RESOURCE_ENERGY | RESOURCE_GHODIUM, number>;
    }
>;

declare const LOOK_CREEPS: LOOK_CREEPS;
declare const LOOK_ENERGY: LOOK_ENERGY;
declare const LOOK_RESOURCES: LOOK_RESOURCES;
declare const LOOK_SOURCES: LOOK_SOURCES;
declare const LOOK_MINERALS: LOOK_MINERALS;
declare const LOOK_DEPOSITS: LOOK_DEPOSITS;
declare const LOOK_STRUCTURES: LOOK_STRUCTURES;
declare const LOOK_FLAGS: LOOK_FLAGS;
declare const LOOK_CONSTRUCTION_SITES: LOOK_CONSTRUCTION_SITES;
declare const LOOK_NUKES: LOOK_NUKES;
declare const LOOK_TERRAIN: LOOK_TERRAIN;
declare const LOOK_TOMBSTONES: LOOK_TOMBSTONES;
declare const LOOK_POWER_CREEPS: LOOK_POWER_CREEPS;
declare const LOOK_RUINS: LOOK_RUINS;

declare const ORDER_SELL: ORDER_SELL;
declare const ORDER_BUY: ORDER_BUY;

declare const MARKET_FEE: 0.05;
declare const MARKET_MAX_ORDERS: 300;
declare const MARKET_ORDER_LIFE_TIME: 2592000000; // 1000*60*60*24*30

declare const INVADERS_ENERGY_GOAL: number;

declare const SYSTEM_USERNAME: string;

declare const TOMBSTONE_DECAY_PER_PART: 5;
declare const TOMBSTONE_DECAY_POWER_CREEP: 500;

declare const RUIN_DECAY: 500;
declare const RUIN_DECAY_STRUCTURES: {
    powerBank: 10;
};

declare const EVENT_ATTACK: EVENT_ATTACK;
declare const EVENT_OBJECT_DESTROYED: EVENT_OBJECT_DESTROYED;
declare const EVENT_ATTACK_CONTROLLER: EVENT_ATTACK_CONTROLLER;
declare const EVENT_BUILD: EVENT_BUILD;
declare const EVENT_HARVEST: EVENT_HARVEST;
declare const EVENT_HEAL: EVENT_HEAL;
declare const EVENT_REPAIR: EVENT_REPAIR;
declare const EVENT_RESERVE_CONTROLLER: EVENT_RESERVE_CONTROLLER;
declare const EVENT_UPGRADE_CONTROLLER: EVENT_UPGRADE_CONTROLLER;
declare const EVENT_EXIT: EVENT_EXIT;
declare const EVENT_POWER: EVENT_POWER;
declare const EVENT_TRANSFER: EVENT_TRANSFER;

declare const EVENT_ATTACK_TYPE_MELEE: EVENT_ATTACK_TYPE_MELEE;
declare const EVENT_ATTACK_TYPE_RANGED: EVENT_ATTACK_TYPE_RANGED;
declare const EVENT_ATTACK_TYPE_RANGED_MASS: EVENT_ATTACK_TYPE_RANGED_MASS;
declare const EVENT_ATTACK_TYPE_DISMANTLE: EVENT_ATTACK_TYPE_DISMANTLE;
declare const EVENT_ATTACK_TYPE_HIT_BACK: EVENT_ATTACK_TYPE_HIT_BACK;
declare const EVENT_ATTACK_TYPE_NUKE: EVENT_ATTACK_TYPE_NUKE;

declare const EVENT_HEAL_TYPE_MELEE: EVENT_HEAL_TYPE_MELEE;
declare const EVENT_HEAL_TYPE_RANGED: EVENT_HEAL_TYPE_RANGED;

declare const POWER_LEVEL_MULTIPLY: 1000;
declare const POWER_LEVEL_POW: 2;
declare const POWER_CREEP_SPAWN_COOLDOWN: 28800000; // 8 * 3600 * 1000
declare const POWER_CREEP_DELETE_COOLDOWN: 86400000; // 24 * 3600 * 1000
declare const POWER_CREEP_MAX_LEVEL: 25;
declare const POWER_CREEP_LIFE_TIME: 5000;

declare const POWER_CLASS: {
    OPERATOR: "operator";
};

declare const PWR_GENERATE_OPS: PWR_GENERATE_OPS;
declare const PWR_OPERATE_SPAWN: PWR_OPERATE_SPAWN;
declare const PWR_OPERATE_TOWER: PWR_OPERATE_TOWER;
declare const PWR_OPERATE_STORAGE: PWR_OPERATE_STORAGE;
declare const PWR_OPERATE_LAB: PWR_OPERATE_LAB;
declare const PWR_OPERATE_EXTENSION: PWR_OPERATE_EXTENSION;
declare const PWR_OPERATE_OBSERVER: PWR_OPERATE_OBSERVER;
declare const PWR_OPERATE_TERMINAL: PWR_OPERATE_TERMINAL;
declare const PWR_DISRUPT_SPAWN: PWR_DISRUPT_SPAWN;
declare const PWR_DISRUPT_TOWER: PWR_DISRUPT_TOWER;
declare const PWR_DISRUPT_SOURCE: PWR_DISRUPT_SOURCE;
declare const PWR_SHIELD: PWR_SHIELD;
declare const PWR_REGEN_SOURCE: PWR_REGEN_SOURCE;
declare const PWR_REGEN_MINERAL: PWR_REGEN_MINERAL;
declare const PWR_DISRUPT_TERMINAL: PWR_DISRUPT_TERMINAL;
declare const PWR_OPERATE_POWER: PWR_OPERATE_POWER;
declare const PWR_FORTIFY: PWR_FORTIFY;
declare const PWR_OPERATE_CONTROLLER: PWR_OPERATE_CONTROLLER;
declare const PWR_OPERATE_FACTORY: PWR_OPERATE_FACTORY;

declare const EFFECT_INVULNERABILITY: EFFECT_INVULNERABILITY;
declare const EFFECT_COLLAPSE_TIMER: EFFECT_COLLAPSE_TIMER;

declare const INVADER_CORE_HITS: 1000000;
declare const INVADER_CORE_CREEP_SPAWN_TIME: {
    0: 0;
    1: 0;
    2: 6;
    3: 3;
    4: 2;
    5: 1;
};
declare const INVADER_CORE_EXPAND_TIME: 15000;
declare const INVADER_CORE_CONTROLLER_POWER: 100;
declare const INVADER_CORE_CONTROLLER_DOWNGRADE: 5000;
declare const STRONGHOLD_RAMPART_HITS: { 0: 0; 1: 50000; 2: 200000; 3: 500000; 4: 1000000; 5: 2000000 };
declare const STRONGHOLD_DECAY_TICKS: 150000;

declare const POWER_INFO: {
    [powerID: number]: {
        className: PowerClassConstant;
        level: number[];
        cooldown: number;
        effect?: number[];
        range?: number;
        ops?: number | number[];
        duration?: number | number[];
    };
    [PWR_GENERATE_OPS]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 50;
        effect: [1, 2, 4, 6, 8];
    };
    [PWR_OPERATE_SPAWN]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 300;
        duration: 1000;
        range: 3;
        ops: 100;
        effect: [0.9, 0.7, 0.5, 0.35, 0.2];
    };
    [PWR_OPERATE_TOWER]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 10;
        duration: 100;
        range: 3;
        ops: 10;
        effect: [1.1, 1.2, 1.3, 1.4, 1.5];
    };
    [PWR_OPERATE_STORAGE]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 800;
        duration: 1000;
        range: 3;
        ops: 100;
        effect: [500000, 1000000, 2000000, 4000000, 7000000];
    };
    [PWR_OPERATE_LAB]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 50;
        duration: 1000;
        range: 3;
        ops: 10;
        effect: [2, 4, 6, 8, 10];
    };
    [PWR_OPERATE_EXTENSION]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 50;
        range: 3;
        ops: 2;
        effect: [0.2, 0.4, 0.6, 0.8, 1.0];
    };
    [PWR_OPERATE_OBSERVER]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 400;
        duration: [200, 400, 600, 800, 1000];
        range: 3;
        ops: 10;
    };
    [PWR_OPERATE_TERMINAL]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 500;
        duration: 1000;
        range: 3;
        ops: 100;
        effect: [0.9, 0.8, 0.7, 0.6, 0.5];
    };
    [PWR_DISRUPT_SPAWN]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 5;
        range: 20;
        ops: 10;
        duration: [1, 2, 3, 4, 5];
    };
    [PWR_DISRUPT_TOWER]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 0;
        duration: 5;
        range: 50;
        ops: 10;
        effect: [0.9, 0.8, 0.7, 0.6, 0.5];
    };
    [PWR_DISRUPT_SOURCE]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 100;
        range: 3;
        ops: 100;
        duration: [100, 200, 300, 400, 500];
    };
    [PWR_SHIELD]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        effect: [5000, 10000, 15000, 20000, 25000];
        duration: 50;
        cooldown: 20;
        energy: 100;
    };
    [PWR_REGEN_SOURCE]: {
        className: POWER_CLASS["OPERATOR"];
        level: [10, 11, 12, 14, 22];
        cooldown: 100;
        duration: 300;
        range: 3;
        effect: [50, 100, 150, 200, 250];
        period: 15;
    };
    [PWR_REGEN_MINERAL]: {
        className: POWER_CLASS["OPERATOR"];
        level: [10, 11, 12, 14, 22];
        cooldown: 100;
        duration: 100;
        range: 3;
        effect: [2, 4, 6, 8, 10];
        period: 10;
    };
    [PWR_DISRUPT_TERMINAL]: {
        className: POWER_CLASS["OPERATOR"];
        level: [20, 21, 22, 23, 24];
        cooldown: 8;
        duration: 10;
        range: 50;
        ops: [50, 40, 30, 20, 10];
    };
    [PWR_FORTIFY]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 5;
        range: 3;
        ops: 5;
        duration: [1, 2, 3, 4, 5];
    };
    [PWR_OPERATE_POWER]: {
        className: POWER_CLASS["OPERATOR"];
        level: [10, 11, 12, 14, 22];
        cooldown: 800;
        range: 3;
        duration: 1000;
        ops: 200;
        effect: [1, 2, 3, 4, 5];
    };
    [PWR_OPERATE_CONTROLLER]: {
        className: POWER_CLASS["OPERATOR"];
        level: [20, 21, 22, 23, 24];
        cooldown: 800;
        range: 3;
        duration: 1000;
        ops: 200;
        effect: [10, 20, 30, 40, 50];
    };
    [PWR_OPERATE_FACTORY]: {
        className: POWER_CLASS["OPERATOR"];
        level: [0, 2, 7, 14, 22];
        cooldown: 1000;
        range: 3;
        duration: 1000;
        ops: 100;
    };
};

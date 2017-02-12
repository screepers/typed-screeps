/**
 * Screeps constants and types
 */

declare type OK = 0; declare const OK: OK;
declare type ERR_NOT_OWNER = -1; declare const ERR_NOT_OWNER: ERR_NOT_OWNER;
declare type ERR_NO_PATH = -2; declare const ERR_NO_PATH: ERR_NO_PATH;
declare type ERR_NAME_EXISTS = -3; declare const ERR_NAME_EXISTS: ERR_NAME_EXISTS;
declare type ERR_BUSY = -4; declare const ERR_BUSY: ERR_BUSY;
declare type ERR_NOT_FOUND = -5; declare const ERR_NOT_FOUND: ERR_NOT_FOUND;
declare type ERR_NOT_ENOUGH_RESOURCES = -6; declare const ERR_NOT_ENOUGH_RESOURCES: ERR_NOT_ENOUGH_RESOURCES;
declare type ERR_NOT_ENOUGH_ENERGY = -6; declare const ERR_NOT_ENOUGH_ENERGY: ERR_NOT_ENOUGH_ENERGY;
declare type ERR_INVALID_TARGET = -7; declare const ERR_INVALID_TARGET: ERR_INVALID_TARGET;
declare type ERR_FULL = -8; declare const ERR_FULL: ERR_FULL;
declare type ERR_NOT_IN_RANGE = -9; declare const ERR_NOT_IN_RANGE: ERR_NOT_IN_RANGE;
declare type ERR_INVALID_ARGS = -10; declare const ERR_INVALID_ARGS: ERR_INVALID_ARGS;
declare type ERR_TIRED = -11; declare const ERR_TIRED: ERR_TIRED;
declare type ERR_NO_BODYPART = -12; declare const ERR_NO_BODYPART: ERR_NO_BODYPART;
declare type ERR_NOT_ENOUGH_EXTENSIONS = -6; declare const ERR_NOT_ENOUGH_EXTENSIONS: ERR_NOT_ENOUGH_EXTENSIONS;
declare type ERR_RCL_NOT_ENOUGH = -14; declare const ERR_RCL_NOT_ENOUGH: ERR_RCL_NOT_ENOUGH;
declare type ERR_GCL_NOT_ENOUGH = -15; declare const ERR_GCL_NOT_ENOUGH: ERR_GCL_NOT_ENOUGH;
declare type ERRORCODE = (
    | ERR_NOT_OWNER
    | ERR_NO_PATH
    | ERR_NAME_EXISTS
    | ERR_BUSY
    | ERR_NOT_FOUND
    | ERR_NOT_ENOUGH_RESOURCES
    | ERR_NOT_ENOUGH_ENERGY
    | ERR_INVALID_TARGET
    | ERR_FULL
    | ERR_NOT_IN_RANGE
    | ERR_INVALID_ARGS
    | ERR_TIRED
    | ERR_NO_BODYPART
    | ERR_NOT_ENOUGH_EXTENSIONS
    | ERR_RCL_NOT_ENOUGH
    | ERR_GCL_NOT_ENOUGH
);
declare type RETURNCODE = OK | ERRORCODE;

declare type FIND_EXIT_TOP = 1; declare const FIND_EXIT_TOP: FIND_EXIT_TOP;
declare type FIND_EXIT_RIGHT = 3; declare const FIND_EXIT_RIGHT: FIND_EXIT_RIGHT;
declare type FIND_EXIT_BOTTOM = 5; declare const FIND_EXIT_BOTTOM: FIND_EXIT_BOTTOM;
declare type FIND_EXIT_LEFT = 7; declare const FIND_EXIT_LEFT: FIND_EXIT_LEFT;
declare type FIND_EXIT = 10; declare const FIND_EXIT: FIND_EXIT;
declare type FIND_CREEPS = 101; declare const FIND_CREEPS: FIND_CREEPS;
declare type FIND_MY_CREEPS = 102; declare const FIND_MY_CREEPS: FIND_MY_CREEPS;
declare type FIND_HOSTILE_CREEPS = 103; declare const FIND_HOSTILE_CREEPS: FIND_HOSTILE_CREEPS;
declare type FIND_SOURCES_ACTIVE = 104; declare const FIND_SOURCES_ACTIVE: FIND_SOURCES_ACTIVE;
declare type FIND_SOURCES = 105; declare const FIND_SOURCES: FIND_SOURCES;
declare type FIND_DROPPED_RESOURCES_OR_ENERGY = 106;//Yep. It's 106. And they're both the same.
declare type FIND_DROPPED_RESOURCES = FIND_DROPPED_RESOURCES_OR_ENERGY; declare const FIND_DROPPED_RESOURCES: FIND_DROPPED_RESOURCES;
declare type FIND_DROPPED_ENERGY = FIND_DROPPED_RESOURCES_OR_ENERGY; declare const FIND_DROPPED_ENERGY: FIND_DROPPED_ENERGY;
declare type FIND_STRUCTURES = 107; declare const FIND_STRUCTURES: FIND_STRUCTURES;
declare type FIND_MY_STRUCTURES = 108; declare const FIND_MY_STRUCTURES: FIND_MY_STRUCTURES;
declare type FIND_HOSTILE_STRUCTURES = 109; declare const FIND_HOSTILE_STRUCTURES: FIND_HOSTILE_STRUCTURES;
declare type FIND_FLAGS = 110; declare const FIND_FLAGS: FIND_FLAGS;
declare type FIND_CONSTRUCTION_SITES = 111; declare const FIND_CONSTRUCTION_SITES: FIND_CONSTRUCTION_SITES;
declare type FIND_MY_SPAWNS = 112; declare const FIND_MY_SPAWNS: FIND_MY_SPAWNS;
declare type FIND_HOSTILE_SPAWNS = 113; declare const FIND_HOSTILE_SPAWNS: FIND_HOSTILE_SPAWNS;
declare type FIND_MY_CONSTRUCTION_SITES = 114; declare const FIND_MY_CONSTRUCTION_SITES: FIND_MY_CONSTRUCTION_SITES;
declare type FIND_HOSTILE_CONSTRUCTION_SITES = 115; declare const FIND_HOSTILE_CONSTRUCTION_SITES: FIND_HOSTILE_CONSTRUCTION_SITES;
declare type FIND_MINERALS = 116; declare const FIND_MINERALS: FIND_MINERALS;
declare type FIND_NUKES = 117; declare const FIND_NUKES: FIND_NUKES;
declare type FIND = (
    | FIND_EXIT_TOP
    | FIND_EXIT_RIGHT
    | FIND_EXIT_BOTTOM
    | FIND_EXIT_LEFT
    | FIND_EXIT
    | FIND_CREEPS
    | FIND_MY_CREEPS
    | FIND_HOSTILE_CREEPS
    | FIND_SOURCES_ACTIVE
    | FIND_SOURCES
    | FIND_DROPPED_RESOURCES_OR_ENERGY
    | FIND_DROPPED_RESOURCES
    | FIND_DROPPED_ENERGY
    | FIND_STRUCTURES
    | FIND_MY_STRUCTURES
    | FIND_HOSTILE_STRUCTURES
    | FIND_FLAGS
    | FIND_CONSTRUCTION_SITES
    | FIND_MY_SPAWNS
    | FIND_HOSTILE_SPAWNS
    | FIND_MY_CONSTRUCTION_SITES
    | FIND_HOSTILE_CONSTRUCTION_SITES
    | FIND_MINERALS
    | FIND_NUKES
);

declare type TOP = 1; declare const TOP: TOP;
declare type TOP_RIGHT = 2; declare const TOP_RIGHT: TOP_RIGHT;
declare type RIGHT = 3; declare const RIGHT: RIGHT;
declare type BOTTOM_RIGHT = 4; declare const BOTTOM_RIGHT: BOTTOM_RIGHT;
declare type BOTTOM = 5; declare const BOTTOM: BOTTOM;
declare type BOTTOM_LEFT = 6; declare const BOTTOM_LEFT: BOTTOM_LEFT;
declare type LEFT = 7; declare const LEFT: LEFT;
declare type TOP_LEFT = 8; declare const TOP_LEFT: TOP_LEFT;
declare type DIRECTION = (
    | TOP
    | TOP_RIGHT
    | RIGHT
    | BOTTOM_RIGHT
    | BOTTOM
    | BOTTOM_LEFT
    | LEFT
    | TOP_LEFT
);

declare type COLOR_RED = 1; declare const COLOR_RED: COLOR_RED;
declare type COLOR_PURPLE = 2; declare const COLOR_PURPLE: COLOR_PURPLE;
declare type COLOR_BLUE = 3; declare const COLOR_BLUE: COLOR_BLUE;
declare type COLOR_CYAN = 4; declare const COLOR_CYAN: COLOR_CYAN;
declare type COLOR_GREEN = 5; declare const COLOR_GREEN: COLOR_GREEN;
declare type COLOR_YELLOW = 6; declare const COLOR_YELLOW: COLOR_YELLOW;
declare type COLOR_ORANGE = 7; declare const COLOR_ORANGE: COLOR_ORANGE;
declare type COLOR_BROWN = 8; declare const COLOR_BROWN: COLOR_BROWN;
declare type COLOR_GREY = 9; declare const COLOR_GREY: COLOR_GREY;
declare type COLOR_WHITE = 10; declare const COLOR_WHITE: COLOR_WHITE;
declare type COLOR = (
    | COLOR_RED
    | COLOR_PURPLE
    | COLOR_BLUE
    | COLOR_CYAN
    | COLOR_GREEN
    | COLOR_YELLOW
    | COLOR_ORANGE
    | COLOR_BROWN
    | COLOR_GREY
    | COLOR_WHITE
);
declare const COLORS_ALL: COLOR[];

declare const CREEP_SPAWN_TIME: 3;
declare const CREEP_LIFE_TIME: 1500;
declare const CREEP_CLAIM_LIFE_TIME: 500;
declare const CREEP_CORPSE_RATE: 0.2;

declare const OBSTACLE_OBJECT_TYPES: string[];

declare const ENERGY_REGEN_TIME: 300;
declare const ENERGY_DECAY: 1000;

declare const REPAIR_COST: 0.01;

declare const RAMPART_DECAY_AMOUNT: 300;
declare const RAMPART_DECAY_TIME: 100;
declare const RAMPART_HITS: 1;
declare const RAMPART_HITS_MAX: {
    2: 300000,
    3: 1000000,
    4: 3000000,
    5: 10000000,
    6: 30000000,
    7: 100000000,
    8: 300000000
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
    0: 50,
    1: 50,
    2: 50,
    3: 50,
    4: 50,
    5: 50,
    6: 50,
    7: 100,
    8: 200
};

declare const ROAD_HITS: 5000;
declare const ROAD_WEAROUT: 1;
declare const ROAD_DECAY_AMOUNT: 100;
declare const ROAD_DECAY_TIME: 1000;

declare const LINK_HITS: 1000;
declare const LINK_HITS_MAX: 1000;
declare const LINK_CAPACITY: 800;
declare const LINK_COOLDOWN: 1;
declare const LINK_LOSS_RATIO: 0.03;

declare const STORAGE_CAPACITY: 1000000;
declare const STORAGE_HITS: 10000;

declare const CARRY_CAPACITY: 50;
declare const ATTACK_POWER: 30;
declare const BUILD_POWER: 5;
declare const DISMANTLE_POWER: 50;
declare const HARVEST_MINERAL_POWER: 1;
declare const HARVEST_POWER: 2;
declare const HEAL_POWER: 12;
declare const RANGED_ATTACK_POWER: 10;
declare const RANGED_HEAL_POWER: 4;
declare const REPAIR_POWER: 100;
declare const UPGRADE_CONTROLLER_POWER: 1;
declare const DISMANTLE_COST: 0.005;

declare type ATTACK = "attack"; declare const ATTACK: ATTACK;
declare type CARRY = "carry"; declare const CARRY: CARRY;
declare type CLAIM = "claim"; declare const CLAIM: CLAIM;
declare type HEAL = "heal"; declare const HEAL: HEAL;
declare type MOVE = "move"; declare const MOVE: MOVE;
declare type RANGED_ATTACK = "ranged_attack"; declare const RANGED_ATTACK: RANGED_ATTACK;
declare type TOUGH = "tough"; declare const TOUGH: TOUGH;
declare type WORK = "work"; declare const WORK: WORK;

declare type BODYPART = (
    | ATTACK
    | CARRY
    | CLAIM
    | HEAL
    | MOVE
    | RANGED_ATTACK
    | TOUGH
    | WORK
);

declare const BODYPARTS_ALL: BODYPART[];

declare type __BODYPART_COST = (
    & Record<ATTACK, 80>
    & Record<CARRY, 50>
    & Record<CLAIM, 600>
    & Record<HEAL, 250>
    & Record<MOVE, 50>
    & Record<RANGED_ATTACK, 150>
    & Record<TOUGH, 10>
    & Record<WORK, 100>
);

declare const BODYPART_COST: {
    [part in BODYPART]: __BODYPART_COST[part];
}

declare type __CONSTRUCTION_COST = (
    & Record<STRUCTURE_CONTAINER, 5000>
    & Record<STRUCTURE_EXTENSION, 3000>
    & Record<STRUCTURE_EXTRACTOR, 5000>
    & Record<STRUCTURE_LAB, 50000>
    & Record<STRUCTURE_LINK, 5000>
    & Record<STRUCTURE_NUKER, 100000>
    & Record<STRUCTURE_OBSERVER, 8000>
    & Record<STRUCTURE_POWER_SPAWN, 100000>
    & Record<STRUCTURE_RAMPART, 1>
    & Record<STRUCTURE_ROAD, 300>
    & Record<STRUCTURE_SPAWN, 15000>
    & Record<STRUCTURE_STORAGE, 30000>
    & Record<STRUCTURE_TERMINAL, 100000>
    & Record<STRUCTURE_TOWER, 5000>
    & Record<STRUCTURE_WALL, 1>
);

declare const CONSTRUCTION_COST: {
    [construction in CONSTRUCTABLE_STRUCTURE]: __CONSTRUCTION_COST[construction];
}

declare const CONSTRUCTION_COST_ROAD_SWAMP_RATIO: 5;

declare type STRUCTURE_CONTAINER = "container"; declare const STRUCTURE_CONTAINER: STRUCTURE_CONTAINER;
declare type STRUCTURE_CONTROLLER = "controller"; declare const STRUCTURE_CONTROLLER: STRUCTURE_CONTROLLER;
declare type STRUCTURE_EXTENSION = "extension"; declare const STRUCTURE_EXTENSION: STRUCTURE_EXTENSION;
declare type STRUCTURE_EXTRACTOR = "extractor"; declare const STRUCTURE_EXTRACTOR: STRUCTURE_EXTRACTOR;
declare type STRUCTURE_KEEPER_LAIR = "keeperLair"; declare const STRUCTURE_KEEPER_LAIR: STRUCTURE_KEEPER_LAIR;
declare type STRUCTURE_LAB = "lab"; declare const STRUCTURE_LAB: STRUCTURE_LAB;
declare type STRUCTURE_LINK = "link"; declare const STRUCTURE_LINK: STRUCTURE_LINK;
declare type STRUCTURE_NUKER = "nuker"; declare const STRUCTURE_NUKER: STRUCTURE_NUKER;
declare type STRUCTURE_OBSERVER = "observer"; declare const STRUCTURE_OBSERVER: STRUCTURE_OBSERVER;
declare type STRUCTURE_PORTAL = "portal"; declare const STRUCTURE_PORTAL: STRUCTURE_PORTAL;
declare type STRUCTURE_POWER_BANK = "powerBank"; declare const STRUCTURE_POWER_BANK: STRUCTURE_POWER_BANK;
declare type STRUCTURE_POWER_SPAWN = "powerSpawn"; declare const STRUCTURE_POWER_SPAWN: STRUCTURE_POWER_SPAWN;
declare type STRUCTURE_RAMPART = "rampart"; declare const STRUCTURE_RAMPART: STRUCTURE_RAMPART;
declare type STRUCTURE_ROAD = "road"; declare const STRUCTURE_ROAD: STRUCTURE_ROAD;
declare type STRUCTURE_SPAWN = "spawn"; declare const STRUCTURE_SPAWN: STRUCTURE_SPAWN;
declare type STRUCTURE_STORAGE = "storage"; declare const STRUCTURE_STORAGE: STRUCTURE_STORAGE;
declare type STRUCTURE_TERMINAL = "terminal"; declare const STRUCTURE_TERMINAL: STRUCTURE_TERMINAL;
declare type STRUCTURE_TOWER = "tower"; declare const STRUCTURE_TOWER: STRUCTURE_TOWER;
declare type STRUCTURE_WALL = "constructedWall"; declare const STRUCTURE_WALL: STRUCTURE_WALL;
declare type CONSTRUCTABLE_STRUCTURE = (
    | STRUCTURE_CONTAINER
    | STRUCTURE_EXTENSION
    | STRUCTURE_EXTRACTOR
    | STRUCTURE_LAB
    | STRUCTURE_LINK
    | STRUCTURE_NUKER
    | STRUCTURE_OBSERVER
    | STRUCTURE_POWER_SPAWN
    | STRUCTURE_RAMPART
    | STRUCTURE_ROAD
    | STRUCTURE_SPAWN
    | STRUCTURE_STORAGE
    | STRUCTURE_TERMINAL
    | STRUCTURE_TOWER
    | STRUCTURE_WALL
);
declare type STRUCTURE = CONSTRUCTABLE_STRUCTURE | (
    | STRUCTURE_CONTROLLER
    | STRUCTURE_KEEPER_LAIR
    | STRUCTURE_PORTAL
    | STRUCTURE_POWER_BANK
);

declare const RESOURCE_ENERGY: "energy";
declare const RESOURCE_POWER: "power";
declare const RESOURCE_UTRIUM: "U";
declare const RESOURCE_LEMERGIUM: "L";
declare const RESOURCE_KEANIUM: "K";
declare const RESOURCE_GHODIUM: "G";
declare const RESOURCE_ZYNTHIUM: "Z";
declare const RESOURCE_OXYGEN: "O";
declare const RESOURCE_HYDROGEN: "H";
declare const RESOURCE_CATALYST: "X";
declare const RESOURCE_HYDROXIDE: "OH";
declare const RESOURCE_ZYNTHIUM_KEANITE: "ZK";
declare const RESOURCE_UTRIUM_LEMERGITE: "UL";
declare const RESOURCE_UTRIUM_HYDRIDE: "UH";
declare const RESOURCE_UTRIUM_OXIDE: "UO";
declare const RESOURCE_KEANIUM_HYDRIDE: "KH";
declare const RESOURCE_KEANIUM_OXIDE: "KO";
declare const RESOURCE_LEMERGIUM_HYDRIDE: "LH";
declare const RESOURCE_LEMERGIUM_OXIDE: "LO";
declare const RESOURCE_ZYNTHIUM_HYDRIDE: "ZH";
declare const RESOURCE_ZYNTHIUM_OXIDE: "ZO";
declare const RESOURCE_GHODIUM_HYDRIDE: "GH";
declare const RESOURCE_GHODIUM_OXIDE: "GO";
declare const RESOURCE_UTRIUM_ACID: "UH2O";
declare const RESOURCE_UTRIUM_ALKALIDE: "UHO2";
declare const RESOURCE_KEANIUM_ACID: "KH2O";
declare const RESOURCE_KEANIUM_ALKALIDE: "KHO2";
declare const RESOURCE_LEMERGIUM_ACID: "LH2O";
declare const RESOURCE_LEMERGIUM_ALKALIDE: "LHO2";
declare const RESOURCE_ZYNTHIUM_ACID: "ZH2O";
declare const RESOURCE_ZYNTHIUM_ALKALIDE: "ZHO2";
declare const RESOURCE_GHODIUM_ACID: "GH2O";
declare const RESOURCE_GHODIUM_ALKALIDE: "GHO2";
declare const RESOURCE_CATALYZED_UTRIUM_ACID: "XUH2O";
declare const RESOURCE_CATALYZED_UTRIUM_ALKALIDE: "XUHO2";
declare const RESOURCE_CATALYZED_KEANIUM_ACID: "XKH2O";
declare const RESOURCE_CATALYZED_KEANIUM_ALKALIDE: "XKHO2";
declare const RESOURCE_CATALYZED_LEMERGIUM_ACID: "XLH2O";
declare const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: "XLHO2";
declare const RESOURCE_CATALYZED_ZYNTHIUM_ACID: "XZH2O";
declare const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: "ZXHO2";
declare const RESOURCE_CATALYZED_GHODIUM_ACID: "XGH2O";
declare const RESOURCE_CATALYZED_GHODIUM_ALKALIDE: "XGHO2";
declare const RESOURCES_ALL: string[];

declare const SUBSCRIPTION_TOKEN: string;

declare const CONTROLLER_LEVELS: {[level: number]: number};
declare const CONTROLLER_STRUCTURES: {[structure: string]: {[level: number]: number}};
declare const CONTROLLER_DOWNGRADE: {[level: number]: number};
declare const CONTROLLER_CLAIM_DOWNGRADE: number;
declare const CONTROLLER_RESERVE: number;
declare const CONTROLLER_RESERVE_MAX: number;
declare const CONTROLLER_MAX_UPGRADE_PER_TICK: number;
declare const CONTROLLER_ATTACK_BLOCKED_UPGRADE: number;

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

declare const LAB_HITS: number;
declare const LAB_MINERAL_CAPACITY: number;
declare const LAB_ENERGY_CAPACITY: number;
declare const LAB_BOOST_ENERGY: number;
declare const LAB_BOOST_MINERAL: number;
declare const LAB_COOLDOWN: number;

declare const GCL_POW: number;
declare const GCL_MULTIPLY: number;
declare const GCL_NOVICE: number;

declare const MODE_SIMULATION: string;
declare const MODE_SURVIVAL: string;
declare const MODE_WORLD: string;
declare const MODE_ARENA: string;

declare type TERRAIN_PLAIN = "plain";
declare type TERRAIN_SWAMP = "swamp";
declare type TERRAIN_WALL = "wall";

declare const TERRAIN_MASK_WALL: number;
declare const TERRAIN_MASK_SWAMP: number;
declare const TERRAIN_MASK_LAVA: number;

declare const MAX_CONSTRUCTION_SITES: number;
declare const MAX_CREEP_SIZE: number;

declare const MINERAL_REGEN_TIME: number;
declare const MINERAL_MIN_AMOUNT: {
    H: number,
    O: number,
    L: number,
    K: number,
    Z: number,
    U: number,
    X: number
}
declare const MINERAL_RANDOM_FACTOR: number;


declare const MINERAL_DENSITY: {
        1: number,
        2: number,
        3: number,
        4: number
}
declare const MINERAL_DENSITY_PROBABILITY: {
        1: number,
        2: number,
        3: number,
        4: number
}
declare const MINERAL_DENSITY_CHANGE: number;

declare const DENSITY_LOW: number;
declare const DENSITY_MODERATE: number;
declare const DENSITY_HIGH: number;
declare const DENSITY_ULTRA: number;

declare const TERMINAL_CAPACITY: number;
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
    0: number,
    1: number,
    4: number
}

declare const REACTIONS: {
    [reagent: string]: {
        [reagent: string]: string
    }
}

declare const BOOSTS: {
    [part: string]: {
        [boost: string]: {
            [action: string]: number
        }
    }
}

declare type LOOK_CREEPS = "creep"; declare const LOOK_CREEPS: LOOK_CREEPS;
declare type LOOK_ENERGY = "energy"; declare const LOOK_ENERGY: LOOK_ENERGY;
declare type LOOK_RESOURCES = "resource"; declare const LOOK_RESOURCES: LOOK_RESOURCES;
declare type LOOK_SOURCES = "source"; declare const LOOK_SOURCES: LOOK_SOURCES;
declare type LOOK_MINERALS = "mineral"; declare const LOOK_MINERALS: LOOK_MINERALS;
declare type LOOK_STRUCTURES = "structure"; declare const LOOK_STRUCTURES: LOOK_STRUCTURES;
declare type LOOK_FLAGS = "flag"; declare const LOOK_FLAGS: LOOK_FLAGS;
declare type LOOK_CONSTRUCTION_SITES = "constructionSite"; declare const LOOK_CONSTRUCTION_SITES: LOOK_CONSTRUCTION_SITES;
declare type LOOK_NUKES = "nuke"; declare const LOOK_NUKES: LOOK_NUKES;
declare type LOOK_TERRAIN = "terrain"; declare const LOOK_TERRAIN: LOOK_TERRAIN;

declare type LOOK = (
    | LOOK_CREEPS
    | LOOK_ENERGY
    | LOOK_RESOURCES
    | LOOK_SOURCES
    | LOOK_MINERALS
    | LOOK_STRUCTURES
    | LOOK_FLAGS
    | LOOK_CONSTRUCTION_SITES
    | LOOK_NUKES
    | LOOK_TERRAIN
);

declare const ORDER_SELL: "sell";
declare const ORDER_BUY: "buy";

/**
 * This file is Screeps API description file.
 * This might need some updates when Screeps publishes new features or changes it's existing API
 */

declare const FIND_EXIT_TOP: number;
declare const FIND_EXIT_RIGHT: number;
declare const FIND_EXIT_BOTTOM: number;
declare const FIND_EXIT_LEFT: number;
declare const FIND_EXIT: number;
declare const FIND_CREEPS: number;
declare const FIND_MY_CREEPS: number;
declare const FIND_HOSTILE_CREEPS: number;
declare const FIND_SOURCES_ACTIVE: number;
declare const FIND_SOURCES: number;
declare const FIND_DROPPED_RESOURCES: number;
declare const FIND_DROPPED_ENERGY: number;
declare const FIND_STRUCTURES: number;
declare const FIND_MY_STRUCTURES: number;
declare const FIND_HOSTILE_STRUCTURES: number;
declare const FIND_FLAGS: number;
declare const FIND_CONSTRUCTION_SITES: number;
declare const FIND_MY_CONSTRUCTION_SITES: number;
declare const FIND_HOSTILE_CONSTRUCTION_SITES: number;
declare const FIND_MY_SPAWNS: number;
declare const FIND_HOSTILE_SPAWNS: number;
declare const FIND_MINERALS: number;

declare const TOP: number;
declare const TOP_RIGHT: number;
declare const RIGHT: number;
declare const BOTTOM_RIGHT: number;
declare const BOTTOM: number;
declare const BOTTOM_LEFT: number;
declare const LEFT: number;
declare const TOP_LEFT: number;

declare const OK: number;
declare const ERR_NOT_OWNER: number;
declare const ERR_NO_PATH: number;
declare const ERR_NAME_EXISTS: number;
declare const ERR_BUSY: number;
declare const ERR_NOT_FOUND: number;
declare const ERR_NOT_ENOUGH_RESOURCES: number;
declare const ERR_NOT_ENOUGH_ENERGY: number;
declare const ERR_INVALID_TARGET: number;
declare const ERR_FULL: number;
declare const ERR_NOT_IN_RANGE: number;
declare const ERR_INVALID_ARGS: number;
declare const ERR_TIRED: number;
declare const ERR_NO_BODYPART: number;
declare const ERR_NOT_ENOUGH_EXTENSIONS: number;
declare const ERR_RCL_NOT_ENOUGH: number;
declare const ERR_GCL_NOT_ENOUGH: number;

declare const COLOR_RED: number;
declare const COLOR_PURPLE: number;
declare const COLOR_BLUE: number;
declare const COLOR_CYAN: number;
declare const COLOR_GREEN: number;
declare const COLOR_YELLOW: number;
declare const COLOR_ORANGE: number;
declare const COLOR_BROWN: number;
declare const COLOR_GREY: number;
declare const COLOR_WHITE: number;
declare const COLORS_ALL: number[];

declare const CREEP_SPAWN_TIME: number;
declare const CREEP_LIFE_TIME: number;
declare const CREEP_CLAIM_LIFE_TIME: number;
declare const CREEP_CORPSE_RATE: number;

declare const OBSTACLE_OBJECT_TYPES: string[];

declare const ENERGY_REGEN_TIME: number;
declare const ENERGY_DECAY: number;

declare const REPAIR_COST: number;

declare const RAMPART_DECAY_AMOUNT: number;
declare const RAMPART_DECAY_TIME: number;
declare const RAMPART_HITS: number;
declare const RAMPART_HITS_MAX: {
    2: number,
    3: number,
    4: number,
    5: number,
    6: number,
    7: number,
    8: number
};

declare const SPAWN_HITS: number;
declare const SPAWN_ENERGY_START: number;
declare const SPAWN_ENERGY_CAPACITY: number;

declare const SOURCE_ENERGY_CAPACITY: number;
declare const SOURCE_ENERGY_NEUTRAL_CAPACITY: number;
declare const SOURCE_ENERGY_KEEPER_CAPACITY: number;

declare const WALL_HITS: number;
declare const WALL_HITS_MAX: number;

declare const EXTENSION_HITS: number;
declare const EXTENSION_ENERGY_CAPACITY: number;

declare const ROAD_HITS: number;
declare const ROAD_WEAROUT: number;
declare const ROAD_DECAY_AMOUNT: number;
declare const ROAD_DECAY_TIME: number;

declare const LINK_HITS: number;
declare const LINK_HITS_MAX: number;
declare const LINK_CAPACITY: number;
declare const LINK_COOLDOWN: number;
declare const LINK_LOSS_RATION: number;

declare const STORAGE_CAPACITY: number;
declare const STORAGE_HITS: number;

declare const BODYPART_COST: {
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
declare const BODYPARTS_ALL: string[];


declare const CARRY_CAPACITY: number;
declare const HARVEST_POWER: number;
declare const HARVEST_MINERAL_POWER: number;
declare const REPAIR_POWER: number;
declare const DISMANTLE_POWER: number;
declare const BUILD_POWER: number;
declare const ATTACK_POWER: number;
declare const UPGRADE_CONTROLLER_POWER: number;
declare const RANGED_ATTACK_POWER: number;
declare const HEAL_POWER: number;
declare const RANGED_HEAL_POWER: number;
declare const DISMANTLE_COST: number;

declare const MOVE: string;
declare const WORK: string;
declare const CARRY: string;
declare const ATTACK: string;
declare const RANGED_ATTACK: string;
declare const TOUGH: string;
declare const HEAL: string;
declare const CLAIM: string;

declare const CONSTRUCTION_COST: {
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
    nuker: number;
};

declare const CONSTRUCTION_COST_ROAD_SWAMP_RATIO: number;

declare const STRUCTURE_EXTENSION: string;
declare const STRUCTURE_RAMPART: string;
declare const STRUCTURE_ROAD: string;
declare const STRUCTURE_SPAWN: string;
declare const STRUCTURE_LINK: string;
declare const STRUCTURE_WALL: string;
declare const STRUCTURE_KEEPER_LAIR: string;
declare const STRUCTURE_CONTROLLER: string;
declare const STRUCTURE_STORAGE: string;
declare const STRUCTURE_TOWER: string;
declare const STRUCTURE_OBSERVER: string;
declare const STRUCTURE_POWER_BANK: string;
declare const STRUCTURE_POWER_SPAWN: string;
declare const STRUCTURE_EXTRACTOR: string;
declare const STRUCTURE_LAB: string;
declare const STRUCTURE_TERMINAL: string;
declare const STRUCTURE_CONTAINER: string;
declare const STRUCTURE_NUKER: string;
declare const STRUCTURE_PORTAL: string;

declare const RESOURCE_ENERGY: string;
declare const RESOURCE_POWER: string;
declare const RESOURCE_UTRIUM: string;
declare const RESOURCE_LEMERGIUM: string;
declare const RESOURCE_KEANIUM: string;
declare const RESOURCE_GHODIUM: string;
declare const RESOURCE_ZYNTHIUM: string;
declare const RESOURCE_OXYGEN: string;
declare const RESOURCE_HYDROGEN: string;
declare const RESOURCE_CATALYST: string;
declare const RESOURCE_HYDROXIDE: string;
declare const RESOURCE_ZYNTHIUM_KEANITE: string;
declare const RESOURCE_UTRIUM_LEMERGITE: string;
declare const RESOURCE_UTRIUM_HYDRIDE: string;
declare const RESOURCE_UTRIUM_OXIDE: string;
declare const RESOURCE_KEANIUM_HYDRIDE: string;
declare const RESOURCE_KEANIUM_OXIDE: string;
declare const RESOURCE_LEMERGIUM_HYDRIDE: string;
declare const RESOURCE_LEMERGIUM_OXIDE: string;
declare const RESOURCE_ZYNTHIUM_HYDRIDE: string;
declare const RESOURCE_ZYNTHIUM_OXIDE: string;
declare const RESOURCE_GHODIUM_HYDRIDE: string;
declare const RESOURCE_GHODIUM_OXIDE: string;
declare const RESOURCE_UTRIUM_ACID: string;
declare const RESOURCE_UTRIUM_ALKALIDE: string;
declare const RESOURCE_KEANIUM_ACID: string;
declare const RESOURCE_KEANIUM_ALKALIDE: string;
declare const RESOURCE_LEMERGIUM_ACID: string;
declare const RESOURCE_LEMERGIUM_ALKALIDE: string;
declare const RESOURCE_ZYNTHIUM_ACID: string;
declare const RESOURCE_ZYNTHIUM_ALKALIDE: string;
declare const RESOURCE_GHODIUM_ACID: string;
declare const RESOURCE_GHODIUM_ALKALIDE: string;
declare const RESOURCE_CATALYZED_UTRIUM_ACID: string;
declare const RESOURCE_CATALYZED_UTRIUM_ALKALIDE: string;
declare const RESOURCE_CATALYZED_KEANIUM_ACID: string;
declare const RESOURCE_CATALYZED_KEANIUM_ALKALIDE: string;
declare const RESOURCE_CATALYZED_LEMERGIUM_ACID: string;
declare const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: string;
declare const RESOURCE_CATALYZED_ZYNTHIUM_ACID: string;
declare const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: string;
declare const RESOURCE_CATALYZED_GHODIUM_ACID: string;
declare const RESOURCE_CATALYZED_GHODIUM_ALKALIDE: string;
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

declare const LOOK_CREEPS: string;
declare const LOOK_ENERGY: string;
declare const LOOK_RESOURCES: string;
declare const LOOK_SOURCES: string;
declare const LOOK_MINERALS: string;
declare const LOOK_STRUCTURES: string;
declare const LOOK_FLAGS: string;
declare const LOOK_CONSTRUCTION_SITES: string;
declare const LOOK_NUKES: string;
declare const LOOK_TERRAIN: string;

declare const ORDER_SELL: string;
declare const ORDER_BUY: string;

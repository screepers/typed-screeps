/*
 * This file creates literal versions of many of the constants
 * It should be kept in sync with constants.ts
 */

// Extras

type Terrain = "plain" | "swamp" | "wall";

type ExitKey = "1" | "3" | "5" | "7";

type AnyCreep = Creep | PowerCreep;

type FindClosestByPathAlgorithm = "astar" | "dijkstra";

// Return Codes

type ScreepsReturnCode =
    | OK
    | ERR_NOT_OWNER
    | ERR_NO_PATH
    | ERR_BUSY
    | ERR_NAME_EXISTS
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
    | ERR_GCL_NOT_ENOUGH;

type OK = 0;
type ERR_NOT_OWNER = -1;
type ERR_NO_PATH = -2;
type ERR_NAME_EXISTS = -3;
type ERR_BUSY = -4;
type ERR_NOT_FOUND = -5;
type ERR_NOT_ENOUGH_RESOURCES = -6;
type ERR_NOT_ENOUGH_ENERGY = -6;
type ERR_INVALID_TARGET = -7;
type ERR_FULL = -8;
type ERR_NOT_IN_RANGE = -9;
type ERR_INVALID_ARGS = -10;
type ERR_TIRED = -11;
type ERR_NO_BODYPART = -12;
type ERR_NOT_ENOUGH_EXTENSIONS = -6;
type ERR_RCL_NOT_ENOUGH = -14;
type ERR_GCL_NOT_ENOUGH = -15;

type CreepActionReturnCode = OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART | ERR_TIRED;

type CreepMoveReturnCode = OK | ERR_NOT_OWNER | ERR_BUSY | ERR_TIRED | ERR_NO_BODYPART;

// Find Constants

type ExitConstant = FIND_EXIT_TOP | FIND_EXIT_RIGHT | FIND_EXIT_BOTTOM | FIND_EXIT_LEFT;

type FindConstant =
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
    | FIND_DROPPED_RESOURCES
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
    | FIND_TOMBSTONES
    | FIND_POWER_CREEPS
    | FIND_MY_POWER_CREEPS
    | FIND_HOSTILE_POWER_CREEPS
    | FIND_DEPOSITS
    | FIND_RUINS;

type FIND_EXIT_TOP = 1;
type FIND_EXIT_RIGHT = 3;
type FIND_EXIT_BOTTOM = 5;
type FIND_EXIT_LEFT = 7;
type FIND_EXIT = 10;
type FIND_CREEPS = 101;
type FIND_MY_CREEPS = 102;
type FIND_HOSTILE_CREEPS = 103;
type FIND_SOURCES_ACTIVE = 104;
type FIND_SOURCES = 105;
type FIND_DROPPED_RESOURCES = 106;
type FIND_STRUCTURES = 107;
type FIND_MY_STRUCTURES = 108;
type FIND_HOSTILE_STRUCTURES = 109;
type FIND_FLAGS = 110;
type FIND_CONSTRUCTION_SITES = 111;
type FIND_MY_SPAWNS = 112;
type FIND_HOSTILE_SPAWNS = 113;
type FIND_MY_CONSTRUCTION_SITES = 114;
type FIND_HOSTILE_CONSTRUCTION_SITES = 115;
type FIND_MINERALS = 116;
type FIND_NUKES = 117;
type FIND_TOMBSTONES = 118;
type FIND_POWER_CREEPS = 119;
type FIND_MY_POWER_CREEPS = 120;
type FIND_HOSTILE_POWER_CREEPS = 121;
type FIND_DEPOSITS = 122;
type FIND_RUINS = 123;

// Filter Options

interface FilterOptions<T extends FindConstant, S extends FindTypes[T] = FindTypes[T]> {
    filter: FilterFunction<FindTypes[T], S> | FilterObject | string;
}
type FilterFunction<T, S extends T> = (object: T) => object is S;
interface FilterObject {
    [key: string]: any;
}

// Body Part Constants

type BodyPartConstant = MOVE | WORK | CARRY | ATTACK | RANGED_ATTACK | TOUGH | HEAL | CLAIM;

type MOVE = "move";
type WORK = "work";
type CARRY = "carry";
type ATTACK = "attack";
type RANGED_ATTACK = "ranged_attack";
type TOUGH = "tough";
type HEAL = "heal";
type CLAIM = "claim";

// Look Constants

type LookConstant =
    | LOOK_CREEPS
    | LOOK_ENERGY
    | LOOK_RESOURCES
    | LOOK_SOURCES
    | LOOK_MINERALS
    | LOOK_DEPOSITS
    | LOOK_STRUCTURES
    | LOOK_FLAGS
    | LOOK_CONSTRUCTION_SITES
    | LOOK_NUKES
    | LOOK_TERRAIN
    | LOOK_TOMBSTONES
    | LOOK_POWER_CREEPS
    | LOOK_RUINS;

type LOOK_CONSTRUCTION_SITES = "constructionSite";
type LOOK_CREEPS = "creep";
type LOOK_ENERGY = "energy";
type LOOK_FLAGS = "flag";
type LOOK_MINERALS = "mineral";
type LOOK_DEPOSITS = "deposit";
type LOOK_NUKES = "nuke";
type LOOK_RESOURCES = "resource";
type LOOK_SOURCES = "source";
type LOOK_STRUCTURES = "structure";
type LOOK_TERRAIN = "terrain";
type LOOK_TOMBSTONES = "tombstone";
type LOOK_POWER_CREEPS = "powerCreep";
type LOOK_RUINS = "ruin";

type ORDER_SELL = "sell";
type ORDER_BUY = "buy";

// Direction Constants

type DirectionConstant = TOP | TOP_RIGHT | RIGHT | BOTTOM_RIGHT | BOTTOM | BOTTOM_LEFT | LEFT | TOP_LEFT;

type TOP = 1;
type TOP_RIGHT = 2;
type RIGHT = 3;
type BOTTOM_RIGHT = 4;
type BOTTOM = 5;
type BOTTOM_LEFT = 6;
type LEFT = 7;
type TOP_LEFT = 8;

// Color Constants

type ColorConstant =
    | COLOR_RED
    | COLOR_PURPLE
    | COLOR_BLUE
    | COLOR_CYAN
    | COLOR_GREEN
    | COLOR_YELLOW
    | COLOR_ORANGE
    | COLOR_BROWN
    | COLOR_GREY
    | COLOR_WHITE;

type COLOR_RED = 1;
type COLOR_PURPLE = 2;
type COLOR_BLUE = 3;
type COLOR_CYAN = 4;
type COLOR_GREEN = 5;
type COLOR_YELLOW = 6;
type COLOR_ORANGE = 7;
type COLOR_BROWN = 8;
type COLOR_GREY = 9;
type COLOR_WHITE = 10;

// Structure Constants

type BuildableStructureConstant =
    | STRUCTURE_EXTENSION
    | STRUCTURE_RAMPART
    | STRUCTURE_ROAD
    | STRUCTURE_SPAWN
    | STRUCTURE_LINK
    | STRUCTURE_WALL
    | STRUCTURE_STORAGE
    | STRUCTURE_TOWER
    | STRUCTURE_OBSERVER
    | STRUCTURE_POWER_SPAWN
    | STRUCTURE_EXTRACTOR
    | STRUCTURE_LAB
    | STRUCTURE_TERMINAL
    | STRUCTURE_CONTAINER
    | STRUCTURE_NUKER
    | STRUCTURE_FACTORY;

type StructureConstant =
    | BuildableStructureConstant
    | STRUCTURE_KEEPER_LAIR
    | STRUCTURE_CONTROLLER
    | STRUCTURE_POWER_BANK
    | STRUCTURE_PORTAL
    | STRUCTURE_INVADER_CORE;

type STRUCTURE_EXTENSION = "extension";
type STRUCTURE_RAMPART = "rampart";
type STRUCTURE_ROAD = "road";
type STRUCTURE_SPAWN = "spawn";
type STRUCTURE_LINK = "link";
type STRUCTURE_WALL = "constructedWall";
type STRUCTURE_KEEPER_LAIR = "keeperLair";
type STRUCTURE_CONTROLLER = "controller";
type STRUCTURE_STORAGE = "storage";
type STRUCTURE_TOWER = "tower";
type STRUCTURE_OBSERVER = "observer";
type STRUCTURE_POWER_BANK = "powerBank";
type STRUCTURE_POWER_SPAWN = "powerSpawn";
type STRUCTURE_EXTRACTOR = "extractor";
type STRUCTURE_LAB = "lab";
type STRUCTURE_TERMINAL = "terminal";
type STRUCTURE_CONTAINER = "container";
type STRUCTURE_NUKER = "nuker";
type STRUCTURE_FACTORY = "factory";
type STRUCTURE_INVADER_CORE = "invaderCore";
type STRUCTURE_PORTAL = "portal";

// Terrain mask constants
type TERRAIN_MASK_WALL = 1;
type TERRAIN_MASK_SWAMP = 2;
type TERRAIN_MASK_LAVA = 4;

// Resource Constants

type ResourceConstant =
    | RESOURCE_ENERGY
    | RESOURCE_POWER
    | RESOURCE_OPS
    | MineralConstant
    | MineralCompoundConstant
    | DepositConstant
    | CommodityConstant;

type _ResourceConstantSansEnergy = Exclude<ResourceConstant, RESOURCE_ENERGY>;

/** The raw harvestable minerals */
type MineralConstant =
    | RESOURCE_UTRIUM
    | RESOURCE_LEMERGIUM
    | RESOURCE_KEANIUM
    | RESOURCE_ZYNTHIUM
    | RESOURCE_OXYGEN
    | RESOURCE_HYDROGEN
    | RESOURCE_CATALYST;

/** The compounds which can't boost */
type MineralBaseCompoundsConstant = RESOURCE_HYDROXIDE | RESOURCE_ZYNTHIUM_KEANITE | RESOURCE_UTRIUM_LEMERGITE | RESOURCE_GHODIUM;

/** The boosts (from tier 1 to tier 3) */
type MineralBoostConstant =
    | RESOURCE_UTRIUM_HYDRIDE
    | RESOURCE_UTRIUM_OXIDE
    | RESOURCE_KEANIUM_HYDRIDE
    | RESOURCE_KEANIUM_OXIDE
    | RESOURCE_LEMERGIUM_HYDRIDE
    | RESOURCE_LEMERGIUM_OXIDE
    | RESOURCE_ZYNTHIUM_HYDRIDE
    | RESOURCE_ZYNTHIUM_OXIDE
    | RESOURCE_GHODIUM_HYDRIDE
    | RESOURCE_GHODIUM_OXIDE
    | RESOURCE_UTRIUM_ACID
    | RESOURCE_UTRIUM_ALKALIDE
    | RESOURCE_KEANIUM_ACID
    | RESOURCE_KEANIUM_ALKALIDE
    | RESOURCE_LEMERGIUM_ACID
    | RESOURCE_LEMERGIUM_ALKALIDE
    | RESOURCE_ZYNTHIUM_ACID
    | RESOURCE_ZYNTHIUM_ALKALIDE
    | RESOURCE_GHODIUM_ACID
    | RESOURCE_GHODIUM_ALKALIDE
    | RESOURCE_CATALYZED_UTRIUM_ACID
    | RESOURCE_CATALYZED_UTRIUM_ALKALIDE
    | RESOURCE_CATALYZED_KEANIUM_ACID
    | RESOURCE_CATALYZED_KEANIUM_ALKALIDE
    | RESOURCE_CATALYZED_LEMERGIUM_ACID
    | RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE
    | RESOURCE_CATALYZED_ZYNTHIUM_ACID
    | RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE
    | RESOURCE_CATALYZED_GHODIUM_ACID
    | RESOURCE_CATALYZED_GHODIUM_ALKALIDE;

/** All the mineral compounds */
type MineralCompoundConstant = MineralBaseCompoundsConstant | MineralBoostConstant;

/** The raw deposits */
type DepositConstant = RESOURCE_MIST | RESOURCE_BIOMASS | RESOURCE_METAL | RESOURCE_SILICON;

/** The commodities, produced by the Factory */
type CommodityConstant =
    | RESOURCE_UTRIUM_BAR
    | RESOURCE_LEMERGIUM_BAR
    | RESOURCE_ZYNTHIUM_BAR
    | RESOURCE_KEANIUM_BAR
    | RESOURCE_GHODIUM_MELT
    | RESOURCE_OXIDANT
    | RESOURCE_REDUCTANT
    | RESOURCE_PURIFIER
    | RESOURCE_BATTERY
    | RESOURCE_COMPOSITE
    | RESOURCE_CRYSTAL
    | RESOURCE_LIQUID
    | RESOURCE_WIRE
    | RESOURCE_SWITCH
    | RESOURCE_TRANSISTOR
    | RESOURCE_MICROCHIP
    | RESOURCE_CIRCUIT
    | RESOURCE_DEVICE
    | RESOURCE_CELL
    | RESOURCE_PHLEGM
    | RESOURCE_TISSUE
    | RESOURCE_MUSCLE
    | RESOURCE_ORGANOID
    | RESOURCE_ORGANISM
    | RESOURCE_ALLOY
    | RESOURCE_TUBE
    | RESOURCE_FIXTURES
    | RESOURCE_FRAME
    | RESOURCE_HYDRAULICS
    | RESOURCE_MACHINE
    | RESOURCE_CONDENSATE
    | RESOURCE_CONCENTRATE
    | RESOURCE_EXTRACT
    | RESOURCE_SPIRIT
    | RESOURCE_EMANATION
    | RESOURCE_ESSENCE;

type InterShardResourceConstant = SUBSCRIPTION_TOKEN | CPU_UNLOCK | PIXEL | ACCESS_KEY;
type MarketResourceConstant = ResourceConstant | InterShardResourceConstant;

type RESOURCE_ENERGY = "energy";
type RESOURCE_POWER = "power";
type RESOURCE_OPS = "ops";

type RESOURCE_BIOMASS = "biomass";
type RESOURCE_METAL = "metal";
type RESOURCE_MIST = "mist";
type RESOURCE_SILICON = "silicon";

type RESOURCE_UTRIUM = "U";
type RESOURCE_LEMERGIUM = "L";
type RESOURCE_KEANIUM = "K";
type RESOURCE_ZYNTHIUM = "Z";
type RESOURCE_OXYGEN = "O";
type RESOURCE_HYDROGEN = "H";
type RESOURCE_CATALYST = "X";

type RESOURCE_HYDROXIDE = "OH";
type RESOURCE_ZYNTHIUM_KEANITE = "ZK";
type RESOURCE_UTRIUM_LEMERGITE = "UL";
type RESOURCE_GHODIUM = "G";

type RESOURCE_UTRIUM_HYDRIDE = "UH";
type RESOURCE_UTRIUM_OXIDE = "UO";
type RESOURCE_KEANIUM_HYDRIDE = "KH";
type RESOURCE_KEANIUM_OXIDE = "KO";
type RESOURCE_LEMERGIUM_HYDRIDE = "LH";
type RESOURCE_LEMERGIUM_OXIDE = "LO";
type RESOURCE_ZYNTHIUM_HYDRIDE = "ZH";
type RESOURCE_ZYNTHIUM_OXIDE = "ZO";
type RESOURCE_GHODIUM_HYDRIDE = "GH";
type RESOURCE_GHODIUM_OXIDE = "GO";

type RESOURCE_UTRIUM_ACID = "UH2O";
type RESOURCE_UTRIUM_ALKALIDE = "UHO2";
type RESOURCE_KEANIUM_ACID = "KH2O";
type RESOURCE_KEANIUM_ALKALIDE = "KHO2";
type RESOURCE_LEMERGIUM_ACID = "LH2O";
type RESOURCE_LEMERGIUM_ALKALIDE = "LHO2";
type RESOURCE_ZYNTHIUM_ACID = "ZH2O";
type RESOURCE_ZYNTHIUM_ALKALIDE = "ZHO2";
type RESOURCE_GHODIUM_ACID = "GH2O";
type RESOURCE_GHODIUM_ALKALIDE = "GHO2";

type RESOURCE_CATALYZED_UTRIUM_ACID = "XUH2O";
type RESOURCE_CATALYZED_UTRIUM_ALKALIDE = "XUHO2";
type RESOURCE_CATALYZED_KEANIUM_ACID = "XKH2O";
type RESOURCE_CATALYZED_KEANIUM_ALKALIDE = "XKHO2";
type RESOURCE_CATALYZED_LEMERGIUM_ACID = "XLH2O";
type RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE = "XLHO2";
type RESOURCE_CATALYZED_ZYNTHIUM_ACID = "XZH2O";
type RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE = "XZHO2";
type RESOURCE_CATALYZED_GHODIUM_ACID = "XGH2O";
type RESOURCE_CATALYZED_GHODIUM_ALKALIDE = "XGHO2";

type RESOURCE_UTRIUM_BAR = "utrium_bar";
type RESOURCE_LEMERGIUM_BAR = "lemergium_bar";
type RESOURCE_ZYNTHIUM_BAR = "zynthium_bar";
type RESOURCE_KEANIUM_BAR = "keanium_bar";
type RESOURCE_GHODIUM_MELT = "ghodium_melt";
type RESOURCE_OXIDANT = "oxidant";
type RESOURCE_REDUCTANT = "reductant";
type RESOURCE_PURIFIER = "purifier";
type RESOURCE_BATTERY = "battery";

type RESOURCE_COMPOSITE = "composite";
type RESOURCE_CRYSTAL = "crystal";
type RESOURCE_LIQUID = "liquid";

type RESOURCE_WIRE = "wire";
type RESOURCE_SWITCH = "switch";
type RESOURCE_TRANSISTOR = "transistor";
type RESOURCE_MICROCHIP = "microchip";
type RESOURCE_CIRCUIT = "circuit";
type RESOURCE_DEVICE = "device";

type RESOURCE_CELL = "cell";
type RESOURCE_PHLEGM = "phlegm";
type RESOURCE_TISSUE = "tissue";
type RESOURCE_MUSCLE = "muscle";
type RESOURCE_ORGANOID = "organoid";
type RESOURCE_ORGANISM = "organism";

type RESOURCE_ALLOY = "alloy";
type RESOURCE_TUBE = "tube";
type RESOURCE_FIXTURES = "fixtures";
type RESOURCE_FRAME = "frame";
type RESOURCE_HYDRAULICS = "hydraulics";
type RESOURCE_MACHINE = "machine";

type RESOURCE_CONDENSATE = "condensate";
type RESOURCE_CONCENTRATE = "concentrate";
type RESOURCE_EXTRACT = "extract";
type RESOURCE_SPIRIT = "spirit";
type RESOURCE_EMANATION = "emanation";
type RESOURCE_ESSENCE = "essence";

type SUBSCRIPTION_TOKEN = "token";
type CPU_UNLOCK = "cpuUnlock";
type PIXEL = "pixel";
type ACCESS_KEY = "accessKey";

type TOMBSTONE_DECAY_PER_PART = 5;

type EventConstant =
    | EVENT_ATTACK
    | EVENT_OBJECT_DESTROYED
    | EVENT_ATTACK_CONTROLLER
    | EVENT_BUILD
    | EVENT_HARVEST
    | EVENT_HEAL
    | EVENT_REPAIR
    | EVENT_RESERVE_CONTROLLER
    | EVENT_UPGRADE_CONTROLLER
    | EVENT_EXIT
    | EVENT_POWER
    | EVENT_TRANSFER;

type EVENT_ATTACK = 1;
type EVENT_OBJECT_DESTROYED = 2;
type EVENT_ATTACK_CONTROLLER = 3;
type EVENT_BUILD = 4;
type EVENT_HARVEST = 5;
type EVENT_HEAL = 6;
type EVENT_REPAIR = 7;
type EVENT_RESERVE_CONTROLLER = 8;
type EVENT_UPGRADE_CONTROLLER = 9;
type EVENT_EXIT = 10;
type EVENT_POWER = 11;
type EVENT_TRANSFER = 12;

type EventAttackType =
    | EVENT_ATTACK_TYPE_MELEE
    | EVENT_ATTACK_TYPE_RANGED
    | EVENT_ATTACK_TYPE_RANGED_MASS
    | EVENT_ATTACK_TYPE_DISMANTLE
    | EVENT_ATTACK_TYPE_HIT_BACK
    | EVENT_ATTACK_TYPE_NUKE;

type EVENT_ATTACK_TYPE_MELEE = 1;
type EVENT_ATTACK_TYPE_RANGED = 2;
type EVENT_ATTACK_TYPE_RANGED_MASS = 3;
type EVENT_ATTACK_TYPE_DISMANTLE = 4;
type EVENT_ATTACK_TYPE_HIT_BACK = 5;
type EVENT_ATTACK_TYPE_NUKE = 6;

type EventHealType = EVENT_HEAL_TYPE_MELEE | EVENT_HEAL_TYPE_RANGED;

type EVENT_HEAL_TYPE_MELEE = 1;
type EVENT_HEAL_TYPE_RANGED = 2;

type EventDestroyType = "creep" | StructureConstant;

type EventItem =
    | {
          event: EVENT_ATTACK;
          objectId: string;
          data: EventData[EVENT_ATTACK];
      }
    | {
          event: EVENT_OBJECT_DESTROYED;
          objectId: string;
          data: EventData[EVENT_OBJECT_DESTROYED];
      }
    | {
          event: EVENT_ATTACK_CONTROLLER;
          objectId: string;
          data: EventData[EVENT_ATTACK_CONTROLLER];
      }
    | {
          event: EVENT_BUILD;
          objectId: string;
          data: EventData[EVENT_BUILD];
      }
    | {
          event: EVENT_HARVEST;
          objectId: string;
          data: EventData[EVENT_HARVEST];
      }
    | {
          event: EVENT_HEAL;
          objectId: string;
          data: EventData[EVENT_HEAL];
      }
    | {
          event: EVENT_REPAIR;
          objectId: string;
          data: EventData[EVENT_REPAIR];
      }
    | {
          event: EVENT_RESERVE_CONTROLLER;
          objectId: string;
          data: EventData[EVENT_RESERVE_CONTROLLER];
      }
    | {
          event: EVENT_UPGRADE_CONTROLLER;
          objectId: string;
          data: EventData[EVENT_UPGRADE_CONTROLLER];
      }
    | {
          event: EVENT_EXIT;
          objectId: string;
          data: EventData[EVENT_EXIT];
      }
    | {
          event: EVENT_POWER;
          objectId: string;
          data: EventData[EVENT_POWER];
      }
    | {
          event: EVENT_TRANSFER;
          objectId: string;
          data: EventData[EVENT_TRANSFER];
      };

interface EventData {
    [EVENT_ATTACK]: {
        targetId: string;
        damage: number;
        attackType: EventAttackType;
    };
    [EVENT_OBJECT_DESTROYED]: {
        type: EventDestroyType;
    };
    [EVENT_ATTACK_CONTROLLER]: null;
    [EVENT_BUILD]: {
        targetId: string;
        amount: number;
        energySpent: number;
    };
    [EVENT_HARVEST]: {
        targetId: string;
        amount: number;
    };
    [EVENT_HEAL]: {
        targetId: string;
        amount: number;
        healType: EventHealType;
    };
    [EVENT_REPAIR]: {
        targetId: string;
        amount: number;
        energySpent: number;
    };
    [EVENT_RESERVE_CONTROLLER]: {
        amount: number;
    };
    [EVENT_UPGRADE_CONTROLLER]: {
        amount: number;
        energySpent: number;
    };
    [EVENT_EXIT]: {
        room: string;
        x: number;
        y: number;
    };
    [EVENT_POWER]: {
        targetId: string;
        power: PowerConstant;
    };
    [EVENT_TRANSFER]: {
        targetId: string;
        resourceType: ResourceConstant;
        amount: number;
    };
}

type PowerClassConstant = POWER_CLASS["OPERATOR"];

interface POWER_CLASS {
    OPERATOR: "operator";
}

type PowerConstant =
    | PWR_GENERATE_OPS
    | PWR_OPERATE_SPAWN
    | PWR_OPERATE_TOWER
    | PWR_OPERATE_STORAGE
    | PWR_OPERATE_LAB
    | PWR_OPERATE_EXTENSION
    | PWR_OPERATE_OBSERVER
    | PWR_OPERATE_TERMINAL
    | PWR_OPERATE_SPAWN
    | PWR_OPERATE_TOWER
    | PWR_DISRUPT_SPAWN
    | PWR_DISRUPT_TOWER
    | PWR_DISRUPT_SOURCE
    | PWR_SHIELD
    | PWR_REGEN_SOURCE
    | PWR_REGEN_MINERAL
    | PWR_DISRUPT_TERMINAL
    | PWR_OPERATE_POWER
    | PWR_FORTIFY
    | PWR_OPERATE_CONTROLLER
    | PWR_OPERATE_FACTORY;

type PWR_GENERATE_OPS = 1;
type PWR_OPERATE_SPAWN = 2;
type PWR_OPERATE_TOWER = 3;
type PWR_OPERATE_STORAGE = 4;
type PWR_OPERATE_LAB = 5;
type PWR_OPERATE_EXTENSION = 6;
type PWR_OPERATE_OBSERVER = 7;
type PWR_OPERATE_TERMINAL = 8;
type PWR_DISRUPT_SPAWN = 9;
type PWR_DISRUPT_TOWER = 10;
type PWR_DISRUPT_SOURCE = 11;
type PWR_SHIELD = 12;
type PWR_REGEN_SOURCE = 13;
type PWR_REGEN_MINERAL = 14;
type PWR_DISRUPT_TERMINAL = 15;
type PWR_OPERATE_POWER = 16;
type PWR_FORTIFY = 17;
type PWR_OPERATE_CONTROLLER = 18;
type PWR_OPERATE_FACTORY = 19;

type EffectConstant = EFFECT_INVULNERABILITY | EFFECT_COLLAPSE_TIMER;

type EFFECT_INVULNERABILITY = 1001;
type EFFECT_COLLAPSE_TIMER = 1002;

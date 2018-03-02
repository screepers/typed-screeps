// Game Constants

declare const OK: 0;
declare const ERR_NOT_OWNER: -1;
declare const ERR_NO_PATH: -2;
declare const ERR_NAME_EXISTS: -3;
declare const ERR_BUSY: -4;
declare const ERR_NOT_FOUND: -5;
declare const ERR_NOT_ENOUGH_RESOURCES: -6;
declare const ERR_NOT_ENOUGH_ENERGY: -6;
declare const ERR_INVALID_TARGET: -7;
declare const ERR_FULL: -8;
declare const ERR_NOT_IN_RANGE: -9;
declare const ERR_INVALID_ARGS: -10;
declare const ERR_TIRED: -11;
declare const ERR_NO_BODYPART: -12;
declare const ERR_NOT_ENOUGH_EXTENSIONS: -6;
declare const ERR_RCL_NOT_ENOUGH: -14;
declare const ERR_GCL_NOT_ENOUGH: -15;

declare const FIND_EXIT_TOP: 1;
declare const FIND_EXIT_RIGHT: 3;
declare const FIND_EXIT_BOTTOM: 5;
declare const FIND_EXIT_LEFT: 7;
declare const FIND_EXIT: 10;
declare const FIND_CREEPS: 101;
declare const FIND_MY_CREEPS: 102;
declare const FIND_HOSTILE_CREEPS: 103;
declare const FIND_SOURCES_ACTIVE: 104;
declare const FIND_SOURCES: 105;
/** `FIND_DROPPED_ENERGY` is deprecated the return value is the same as `FIND_DROPPED_RESOURCES` */
declare const FIND_DROPPED_ENERGY: -106;
declare const FIND_DROPPED_RESOURCES: 106;
declare const FIND_STRUCTURES: 107;
declare const FIND_MY_STRUCTURES: 108;
declare const FIND_HOSTILE_STRUCTURES: 109;
declare const FIND_FLAGS: 110;
declare const FIND_CONSTRUCTION_SITES: 111;
declare const FIND_MY_SPAWNS: 112;
declare const FIND_HOSTILE_SPAWNS: 113;
declare const FIND_MY_CONSTRUCTION_SITES: 114;
declare const FIND_HOSTILE_CONSTRUCTION_SITES: 115;
declare const FIND_MINERALS: 116;
declare const FIND_NUKES: 117;

declare const TOP: 1;
declare const TOP_RIGHT: 2;
declare const RIGHT: 3;
declare const BOTTOM_RIGHT: 4;
declare const BOTTOM: 5;
declare const BOTTOM_LEFT: 6;
declare const LEFT: 7;
declare const TOP_LEFT: 8;

declare const COLOR_RED: 1;
declare const COLOR_PURPLE: 2;
declare const COLOR_BLUE: 3;
declare const COLOR_CYAN: 4;
declare const COLOR_GREEN: 5;
declare const COLOR_YELLOW: 6;
declare const COLOR_ORANGE: 7;
declare const COLOR_BROWN: 8;
declare const COLOR_GREY: 9;
declare const COLOR_WHITE: 10;
declare const COLORS_ALL: ColorConstant[];

declare const CREEP_SPAWN_TIME: 3;
declare const CREEP_LIFE_TIME: 1500;
declare const CREEP_CLAIM_LIFE_TIME: 500;
declare const CREEP_CORPSE_RATE: 0.2;

declare const OBSTACLE_OBJECT_TYPES: [
  "spawn",
  "creep",
  "wall",
  "source",
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
  "nuker"
];

declare const ENERGY_REGEN_TIME: 300;
declare const ENERGY_DECAY: 1000;

declare const REPAIR_COST: 0.01;

declare const RAMPART_DECAY_AMOUNT: 300;
declare const RAMPART_DECAY_TIME: 100;
declare const RAMPART_HITS: 1;
declare const RAMPART_HITS_MAX: {
    [rcl: number]: number
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
    [rcl: number]: number
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

declare const BODYPART_COST: Record<BodyPartConstant, number>;

declare const BODYPARTS_ALL: BodyPartConstant[];

declare const CARRY_CAPACITY: 50;
declare const HARVEST_POWER: 2;
declare const HARVEST_MINERAL_POWER: 1;
declare const REPAIR_POWER: 100;
declare const DISMANTLE_POWER: 50;
declare const BUILD_POWER: 5;
declare const ATTACK_POWER: 30;
declare const UPGRADE_CONTROLLER_POWER: 1;
declare const RANGED_ATTACK_POWER: 10;
declare const HEAL_POWER: 12;
declare const RANGED_HEAL_POWER: 4;
declare const DISMANTLE_COST: 0.005;

declare const MOVE: "move";
declare const WORK: "work";
declare const CARRY: "carry";
declare const ATTACK: "attack";
declare const RANGED_ATTACK: "ranged_attack";
declare const TOUGH: "tough";
declare const HEAL: "heal";
declare const CLAIM: "claim";

declare const CONSTRUCTION_COST: Record<BuildableStructureConstant, number>;

declare const CONSTRUCTION_COST_ROAD_SWAMP_RATIO: 5;

declare const STRUCTURE_EXTENSION: "extension";
declare const STRUCTURE_RAMPART: "rampart";
declare const STRUCTURE_ROAD: "road";
declare const STRUCTURE_SPAWN: "spawn";
declare const STRUCTURE_LINK: "link";
declare const STRUCTURE_WALL: "constructedWall";
declare const STRUCTURE_KEEPER_LAIR: "keeperLair";
declare const STRUCTURE_CONTROLLER: "controller";
declare const STRUCTURE_STORAGE: "storage";
declare const STRUCTURE_TOWER: "tower";
declare const STRUCTURE_OBSERVER: "observer";
declare const STRUCTURE_POWER_BANK: "powerBank";
declare const STRUCTURE_POWER_SPAWN: "powerSpawn";
declare const STRUCTURE_EXTRACTOR: "extractor";
declare const STRUCTURE_LAB: "lab";
declare const STRUCTURE_TERMINAL: "terminal";
declare const STRUCTURE_CONTAINER: "container";
declare const STRUCTURE_NUKER: "nuker";
declare const STRUCTURE_PORTAL: "portal";

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
declare const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: "XZHO2";
declare const RESOURCE_CATALYZED_GHODIUM_ACID: "XGH2O";
declare const RESOURCE_CATALYZED_GHODIUM_ALKALIDE: "XGHO2";
declare const RESOURCES_ALL: ResourceConstant[];

declare const SUBSCRIPTION_TOKEN: string;

declare const CONTROLLER_LEVELS: {[level: number]: number};
declare const CONTROLLER_STRUCTURES: Record<BuildableStructureConstant, {[level: number]: number}>;

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

declare const TERRAIN_MASK_WALL: number;
declare const TERRAIN_MASK_SWAMP: number;
declare const TERRAIN_MASK_LAVA: number;

declare const MAX_CONSTRUCTION_SITES: number;
declare const MAX_CREEP_SIZE: number;

declare const MINERAL_REGEN_TIME: number;
declare const MINERAL_MIN_AMOUNT: Record<MineralConstant, number>;
declare const MINERAL_RANDOM_FACTOR: number;

declare const MINERAL_DENSITY: {
    [level: number]: number
    1: number,
    2: number,
    3: number,
    4: number
};

declare const MINERAL_DENSITY_PROBABILITY: {
    [level: number]: number
    1: number,
    2: number,
    3: number,
    4: number
};

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
    [range: number]: number
    0: number,
    1: number,
    4: number
};

declare const REACTIONS: {
  [resource: string]: {[resource: string]: string}
  H: {
      O: "OH",
      L: "LH",
      K: "KH",
      U: "UH",
      Z: "ZH",
      G: "GH"
  },
  O: {
      H: "OH",
      L: "LO",
      K: "KO",
      U: "UO",
      Z: "ZO",
      G: "GO"
  },
  Z: {
      K: "ZK",
      H: "ZH",
      O: "ZO"
  },
  L: {
      U: "UL",
      H: "LH",
      O: "LO"
  },
  K: {
      Z: "ZK",
      H: "KH",
      O: "KO"
  },
  G: {
      H: "GH",
      O: "GO"
  },
  U: {
      L: "UL",
      H: "UH",
      O: "UO"
  },
  OH: {
      UH: "UH2O",
      UO: "UHO2",
      ZH: "ZH2O",
      ZO: "ZHO2",
      KH: "KH2O",
      KO: "KHO2",
      LH: "LH2O",
      LO: "LHO2",
      GH: "GH2O",
      GO: "GHO2"
  },
  X: {
      UH2O: "XUH2O",
      UHO2: "XUHO2",
      LH2O: "XLH2O",
      LHO2: "XLHO2",
      KH2O: "XKH2O",
      KHO2: "XKHO2",
      ZH2O: "XZH2O",
      ZHO2: "XZHO2",
      GH2O: "XGH2O",
      GHO2: "XGHO2"
  },
  ZK: {
      UL: "G"
  },
  UL: {
      ZK: "G"
  },
  LH: {
      OH: "LH2O"
  },
  ZH: {
      OH: "ZH2O"
  },
  GH: {
      OH: "GH2O"
  },
  KH: {
      OH: "KH2O"
  },
  UH: {
      OH: "UH2O"
  },
  LO: {
      OH: "LHO2"
  },
  ZO: {
      OH: "ZHO2"
  },
  KO: {
      OH: "KHO2"
  },
  UO: {
      OH: "UHO2"
  },
  GO: {
      OH: "GHO2"
  },
  LH2O: {
      X: "XLH2O"
  },
  KH2O: {
      X: "XKH2O"
  },
  ZH2O: {
      X: "XZH2O"
  },
  UH2O: {
      X: "XUH2O"
  },
  GH2O: {
      X: "XGH2O"
  },
  LHO2: {
      X: "XLHO2"
  },
  UHO2: {
      X: "XUHO2"
  },
  KHO2: {
      X: "XKHO2"
  },
  ZHO2: {
      X: "XZHO2"
  },
  GHO2: {
      X: "XGHO2"
  }
};

declare const BOOSTS: {
  [part: string]: {[boost: string]: {[action: string]: number}}
  work: {
      UO: {
          harvest: 3
      },
      UHO2: {
          harvest: 5
      },
      XUHO2: {
          harvest: 7
      },
      LH: {
          build: 1.5,
          repair: 1.5
      },
      LH2O: {
          build: 1.8,
          repair: 1.8
      },
      XLH2O: {
          build: 2,
          repair: 2
      },
      ZH: {
          dismantle: 2
      },
      ZH2O: {
          dismantle: 3
      },
      XZH2O: {
          dismantle: 4
      },
      GH: {
          upgradeController: 1.5
      },
      GH2O: {
          upgradeController: 1.8
      },
      XGH2O: {
          upgradeController: 2
      }
  },
  attack: {
      UH: {
          attack: 2
      },
      UH2O: {
          attack: 3
      },
      XUH2O: {
          attack: 4
      }
  },
  ranged_attack: {
      KO: {
          rangedAttack: 2,
          rangedMassAttack: 2
      },
      KHO2: {
          rangedAttack: 3,
          rangedMassAttack: 3
      },
      XKHO2: {
          rangedAttack: 4,
          rangedMassAttack: 4
      }
  },
  heal: {
      LO: {
          heal: 2,
          rangedHeal: 2
      },
      LHO2: {
          heal: 3,
          rangedHeal: 3
      },
      XLHO2: {
          heal: 4,
          rangedHeal: 4
      }
  },
  carry: {
      KH: {
          capacity: 2
      },
      KH2O: {
          capacity: 3
      },
      XKH2O: {
          capacity: 4
      }
  },
  move: {
      ZO: {
          fatigue: 2
      },
      ZHO2: {
          fatigue: 3
      },
      XZHO2: {
          fatigue: 4
      }
  },
  tough: {
      GO: {
          damage: .7
      },
      GHO2: {
          damage: .5
      },
      XGHO2: {
          damage: .3
      }
  }
};

declare const LOOK_CREEPS: "creep";
declare const LOOK_ENERGY: "energy";
declare const LOOK_RESOURCES: "resource";
declare const LOOK_SOURCES: "source";
declare const LOOK_MINERALS: "mineral";
declare const LOOK_STRUCTURES: "structure";
declare const LOOK_FLAGS: "flag";
declare const LOOK_CONSTRUCTION_SITES: "constructionSite";
declare const LOOK_NUKES: "nuke";
declare const LOOK_TERRAIN: "terrain";

declare const ORDER_SELL: "sell";
declare const ORDER_BUY: "buy";

declare const SYSTEM_USERNAME: string;

/**
 * This file is Screeps API description file.
 * This might need some updates when Screeps publishes new features or changes it's existing API
 */
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
declare var FIND_DROPPED_ENERGY: number;
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
declare var TOP: number;
declare var TOP_RIGHT: number;
declare var RIGHT: number;
declare var BOTTOM_RIGHT: number;
declare var BOTTOM: number;
declare var BOTTOM_LEFT: number;
declare var LEFT: number;
declare var TOP_LEFT: number;
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
declare var COLOR_RED: number;
declare var COLOR_PURPLE: number;
declare var COLOR_BLUE: number;
declare var COLOR_CYAN: number;
declare var COLOR_GREEN: number;
declare var COLOR_YELLOW: number;
declare var COLOR_ORANGE: number;
declare var COLOR_BROWN: number;
declare var COLOR_GREY: number;
declare var COLOR_WHITE: number;
declare var COLORS_ALL: number[];
declare var CREEP_SPAWN_TIME: number;
declare var CREEP_LIFE_TIME: number;
declare var CREEP_CLAIM_LIFE_TIME: number;
declare var CREEP_CORPSE_RATE: number;
declare var OBSTACLE_OBJECT_TYPES: string[];
declare var ENERGY_REGEN_TIME: number;
declare var ENERGY_DECAY: number;
declare var CREEP_CORPSE_RATE: number;
declare var REPAIR_COST: number;
declare var RAMPART_DECAY_AMOUNT: number;
declare var RAMPART_DECAY_TIME: number;
declare var RAMPART_HITS: number;
declare var RAMPART_HITS_MAX: {
    2: number;
    3: number;
    4: number;
    5: number;
    6: number;
    7: number;
    8: number;
};
declare var SPAWN_HITS: number;
declare var SPAWN_ENERGY_START: number;
declare var SPAWN_ENERGY_CAPACITY: number;
declare var SOURCE_ENERGY_CAPACITY: number;
declare var SOURCE_ENERGY_NEUTRAL_CAPACITY: number;
declare var SOURCE_ENERGY_KEEPER_CAPACITY: number;
declare var WALL_HITS: number;
declare var WALL_HITS_MAX: number;
declare var EXTENSION_HITS: number;
declare var EXTENSION_ENERGY_CAPACITY: number;
declare var ROAD_HITS: number;
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
declare var BODYPARTS_ALL: string[];
declare var CARRY_CAPACITY: number;
declare var HARVEST_POWER: number;
declare var HARVEST_MINERAL_POWER: number;
declare var REPAIR_POWER: number;
declare var DISMANTLE_POWER: number;
declare var BUILD_POWER: number;
declare var ATTACK_POWER: number;
declare var UPGRADE_CONTROLLER_POWER: number;
declare var RANGED_ATTACK_POWER: number;
declare var HEAL_POWER: number;
declare var RANGED_HEAL_POWER: number;
declare var DISMANTLE_COST: number;
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
declare var STRUCTURE_NUKER: string;
declare var STRUCTURE_PORTAL: string;
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
declare var CONTROLLER_LEVELS: {
    [level: number]: number;
};
declare var CONTROLLER_STRUCTURES: {
    [structure: string]: {
        [level: number]: number;
    };
};
declare var CONTROLLER_DOWNGRADE: {
    [level: number]: number;
};
declare var CONTROLLER_CLAIM_DOWNGRADE: number;
declare var CONTROLLER_RESERVE: number;
declare var CONTROLLER_RESERVE_MAX: number;
declare var CONTROLLER_MAX_UPGRADE_PER_TICK: number;
declare var CONTROLLER_ATTACK_BLOCKED_UPGRADE: number;
declare var TOWER_HITS: number;
declare var TOWER_CAPACITY: number;
declare var TOWER_ENERGY_COST: number;
declare var TOWER_POWER_ATTACK: number;
declare var TOWER_POWER_HEAL: number;
declare var TOWER_POWER_REPAIR: number;
declare var TOWER_OPTIMAL_RANGE: number;
declare var TOWER_FALLOFF_RANGE: number;
declare var TOWER_FALLOFF: number;
declare var OBSERVER_HITS: number;
declare var OBSERVER_RANGE: number;
declare var POWER_BANK_HITS: number;
declare var POWER_BANK_CAPACITY_MAX: number;
declare var POWER_BANK_CAPACITY_MIN: number;
declare var POWER_BANK_CAPACITY_CRIT: number;
declare var POWER_BANK_DECAY: number;
declare var POWER_BANK_HIT_BACK: number;
declare var POWER_SPAWN_HITS: number;
declare var POWER_SPAWN_ENERGY_CAPACITY: number;
declare var POWER_SPAWN_POWER_CAPACITY: number;
declare var POWER_SPAWN_ENERGY_RATIO: number;
declare var EXTRACTOR_HITS: number;
declare var LAB_HITS: number;
declare var LAB_MINERAL_CAPACITY: number;
declare var LAB_ENERGY_CAPACITY: number;
declare var LAB_BOOST_ENERGY: number;
declare var LAB_BOOST_MINERAL: number;
declare var LAB_COOLDOWN: number;
declare var GCL_POW: number;
declare var GCL_MULTIPLY: number;
declare var GCL_NOVICE: number;
declare var MODE_SIMULATION: string;
declare var MODE_SURVIVAL: string;
declare var MODE_WORLD: string;
declare var MODE_ARENA: string;
declare var TERRAIN_MASK_WALL: number;
declare var TERRAIN_MASK_SWAMP: number;
declare var TERRAIN_MASK_LAVA: number;
declare var MAX_CONSTRUCTION_SITES: number;
declare var MAX_CREEP_SIZE: number;
declare var MINERAL_REGEN_TIME: number;
declare var MINERAL_MIN_AMOUNT: {
    H: number;
    O: number;
    L: number;
    K: number;
    Z: number;
    U: number;
    X: number;
};
declare var MINERAL_RANDOM_FACTOR: number;
declare var TERMINAL_CAPACITY: number;
declare var TERMINAL_HITS: number;
declare var TERMINAL_SEND_COST: number;
declare var TERMINAL_MIN_SEND: number;
declare var CONTAINER_HITS: number;
declare var CONTAINER_CAPACITY: number;
declare var CONTAINER_DECAY: number;
declare var CONTAINER_DECAY_TIME: number;
declare var CONTAINER_DECAY_TIME_OWNED: number;
declare var NUKER_HITS: number;
declare var NUKER_COOLDOWN: number;
declare var NUKER_ENERGY_CAPACITY: number;
declare var NUKER_GHODIUM_CAPACITY: number;
declare var NUKE_LAND_TIME: number;
declare var NUKE_RANGE: number;
declare var NUKE_DAMAGE: {
    0: number;
    1: number;
    4: number;
};
declare var REACTIONS: {
    H: {
        O: string;
        L: string;
        K: string;
        U: string;
        Z: string;
        G: string;
    };
    O: {
        H: string;
        L: string;
        K: string;
        U: string;
        Z: string;
        G: string;
    };
    Z: {
        K: string;
        H: string;
        O: string;
    };
    L: {
        U: string;
        H: string;
        O: string;
    };
    K: {
        Z: string;
        H: string;
        O: string;
    };
    G: {
        H: string;
        O: string;
    };
    U: {
        L: string;
        H: string;
        O: string;
    };
    OH: {
        UH: string;
        UO: string;
        ZH: string;
        ZO: string;
        KH: string;
        KO: string;
        LH: string;
        LO: string;
        GH: string;
        GO: string;
    };
    X: {
        UH2O: string;
        UHO2: string;
        LH2O: string;
        LHO2: string;
        KH2O: string;
        KHO2: string;
        ZH2O: string;
        ZHO2: string;
        GH2O: string;
        GHO2: string;
    };
    ZK: {
        UL: string;
    };
    UL: {
        ZK: string;
    };
    LH: {
        OH: string;
    };
    ZH: {
        OH: string;
    };
    GH: {
        OH: string;
    };
    KH: {
        OH: string;
    };
    UH: {
        OH: string;
    };
    LO: {
        OH: string;
    };
    ZO: {
        OH: string;
    };
    KO: {
        OH: string;
    };
    UO: {
        OH: string;
    };
    GO: {
        OH: string;
    };
    LH2O: {
        X: string;
    };
    KH2O: {
        X: string;
    };
    ZH2O: {
        X: string;
    };
    UH2O: {
        X: string;
    };
    GH2O: {
        X: string;
    };
    LHO2: {
        X: string;
    };
    UHO2: {
        X: string;
    };
    KHO2: {
        X: string;
    };
    ZHO2: {
        X: string;
    };
    GHO2: {
        X: string;
    };
};
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
/**
 * A site of a structure which is currently under construction.
 */
declare class ConstructionSite extends RoomObject {
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * Whether this is your own construction site.
     */
    my: boolean;
    /**
     * An object with the structure’s owner info
     */
    owner: Owner;
    /**
     * The current construction progress.
     */
    progress: number;
    /**
     * The total construction progress needed for the structure to be built.
     */
    progressTotal: number;
    /**
     * One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     */
    structureType: string;
    /**
     * Remove the construction site.
     * @returns Result Code: OK, ERR_NOT_OWNER
     */
    remove(): number;
}
declare var Memory: Memory;
declare var Game: Game;
declare var PathFinder: PathFinder;
declare type Controller = StructureController;
declare type Extension = StructureExtension;
declare type KeeperLair = StructureKeeperLair;
declare type Lab = StructureLab;
declare type Link = StructureLink;
declare type Observer = StructureObserver;
declare type PowerBank = StructurePowerBank;
declare type PowerSpawn = StructurePowerSpawn;
declare type Rampart = StructureRampart;
declare type Terminal = StructureTerminal;
declare type Container = StructureContainer;
declare type Tower = StructureTower;
interface Storage extends StructureStorage {
}
/**
 * Creeps are your units. Creeps can move, harvest energy, construct structures, attack another creeps, and perform other actions. Each creep consists of up to 50 body parts with the following possible types:
 */
declare class Creep extends RoomObject {
    /**
     * An array describing the creep’s body. Each element contains the following properties:
     * type: string
     * body part constant
     * hits: number
     * The remaining amount of hit points of this body part.
     */
    body: BodyPartDefinition[];
    /**
     * An object with the creep's cargo contents:
     * energy: number
     * The current amount of energy the creep is carrying.
     */
    carry: StoreDefinition;
    /**
     * The total amount of resources the creep can carry.
     */
    carryCapacity: number;
    /**
     * The movement fatigue indicator. If it is greater than zero, the creep cannot move.
     */
    fatigue: number;
    /**
     * The current amount of hit points of the creep.
     */
    hits: number;
    /**
     * The maximum amount of hit points of the creep.
     */
    hitsMax: number;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * A shorthand to Memory.creeps[creep.name]. You can use it for quick access the creep’s specific memory data object.
     */
    memory: any;
    /**
     * Whether it is your creep or foe.
     */
    my: boolean;
    /**
     * Creep’s name. You can choose the name while creating a new creep, and it cannot be changed later. This name is a hash key to access the creep via the Game.creeps object.
     */
    name: string;
    /**
     * An object with the creep’s owner info
     */
    owner: Owner;
    /**
     * Whether this creep is still being spawned.
     */
    spawning: boolean;
    /**
     * The text message that the creep was saying at the last tick.
     */
    saying: string;
    /**
     * The remaining amount of game ticks after which the creep will die.
     */
    ticksToLive: number;
    /**
     * Attack another creep or structure in a short-ranged attack. Needs the ATTACK body part. If the target is inside a rampart, then the rampart is attacked instead. The target has to be at adjacent square to the creep. If the target is a creep with ATTACK body parts and is not inside a rampart, it will automatically hit back at the attacker.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    attack(target: Creep | Spawn | Structure): number;
    /**
     * Decreases the controller's downgrade or reservation timer for 1 tick per every 5 CLAIM body parts (so the creep must have at least 5xCLAIM). The controller under attack cannot be upgraded for the next 1,000 ticks. The target has to be at adjacent square to the creep.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    attackController(target: Structure): number;
    /**
     * Build a structure at the target construction site using carried energy. Needs WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * @param target The target object to be attacked.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_RCL_NOT_ENOUGH
     */
    build(target: ConstructionSite): number;
    /**
     * Cancel the order given during the current game tick.
     * @param methodName The name of a creep's method to be cancelled.
     * @returns Result Code: OK, ERR_NOT_FOUND
     */
    cancelOrder(methodName: string): number;
    /**
     * Requires the CLAIM body part. If applied to a neutral controller, claims it under your control. If applied to a hostile controller, decreases its downgrade or reservation timer depending on the CLAIM body parts count. The target has to be at adjacent square to the creep.
     * @param target The target controller object.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_FULL, ERR_NOT_IN_RANGE, ERR_NO_BODYPART, ERR_GCL_NOT_ENOUGH
     */
    claimController(target: Controller): number;
    /**
     * Dismantles any (even hostile) structure returning 50% of the energy spent on its repair. Requires the WORK body part. If the creep has an empty CARRY body part, the energy is put into it; otherwise it is dropped on the ground. The target has to be at adjacent square to the creep.
     * @param target The target structure.
     */
    dismantle(target: Spawn | Structure): number;
    /**
     * Drop this resource on the ground.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     */
    drop(resourceType: string, amount?: number): number;
    /**
     * Get the quantity of live body parts of the given type. Fully damaged parts do not count.
     * @param type A body part type, one of the following body part constants: MOVE, WORK, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     */
    getActiveBodyparts(type: string): number;
    /**
     * Harvest energy from the source. Needs the WORK body part. If the creep has an empty CARRY body part, the harvested energy is put into it; otherwise it is dropped on the ground. The target has to be at an adjacent square to the creep.
     * @param target The source object to be harvested.
     */
    harvest(target: Source | Mineral): number;
    /**
     * Heal self or another creep. It will restore the target creep’s damaged body parts function and increase the hits counter. Needs the HEAL body part. The target has to be at adjacent square to the creep.
     * @param target The target creep object.
     */
    heal(target: Creep): number;
    /**
     * Move the creep one square in the specified direction. Needs the MOVE body part.
     * @param direction
     */
    move(direction: number): number;
    /**
     * Move the creep using the specified predefined path. Needs the MOVE body part.
     * @param path A path value as returned from Room.findPath or RoomPosition.findPathTo methods. Both array form and serialized string form are accepted.
     */
    moveByPath(path: PathStep[] | RoomPosition[] | string): number;
    /**
     * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of pos.findPathTo() and move() methods. If the target is in another room, then the corresponding exit will be used as a target. Needs the MOVE body part.
     * @param x X position of the target in the room.
     * @param y Y position of the target in the room.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
     */
    moveTo(x: number, y: number, opts?: MoveToOpts & FindPathOpts): number;
    /**
     * Find the optimal path to the target within the same room and move to it. A shorthand to consequent calls of pos.findPathTo() and move() methods. If the target is in another room, then the corresponding exit will be used as a target. Needs the MOVE body part.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
     */
    moveTo(target: RoomPosition | {
        pos: RoomPosition;
    }, opts?: MoveToOpts & FindPathOpts): number;
    /**
     * Toggle auto notification when the creep is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): number;
    /**
     * Pick up an item (a dropped piece of energy). Needs the CARRY body part. The target has to be at adjacent square to the creep or at the same square.
     * @param target The target object to be picked up.
     */
    pickup(target: Resource): number;
    /**
     * A ranged attack against another creep or structure. Needs the RANGED_ATTACK body part. If the target is inside a rampart, the rampart is attacked instead. The target has to be within 3 squares range of the creep.
     * @param target The target object to be attacked.
     */
    rangedAttack(target: Creep | Spawn | Structure): number;
    /**
     * Heal another creep at a distance. It will restore the target creep’s damaged body parts function and increase the hits counter. Needs the HEAL body part. The target has to be within 3 squares range of the creep.
     * @param target The target creep object.
     */
    rangedHeal(target: Creep): number;
    /**
     * A ranged attack against all hostile creeps or structures within 3 squares range. Needs the RANGED_ATTACK body part. The attack power depends on the range to each target. Friendly units are not affected.
     */
    rangedMassAttack(): number;
    /**
     * Repair a damaged structure using carried energy. Needs the WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * @param target he target structure to be repaired.
     */
    repair(target: Spawn | Structure): number;
    /**
     * Temporarily block a neutral controller from claiming by other players. Each tick, this command increases the counter of the period during which the controller is unavailable by 1 tick per each CLAIM body part. The maximum reservation period to maintain is 5,000 ticks. The target has to be at adjacent square to the creep....
     * @param target The target controller object to be reserved.
     * @return Result code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_INVALID_TARGET, ERR_NOT_IN_RANGE, ERR_NO_BODYPART
     */
    reserveController(target: Controller): number;
    /**
     * Display a visual speech balloon above the creep with the specified message. The message will disappear after a few seconds. Useful for debugging purposes. Only the creep's owner can see the speech message.
     * @param message The message to be displayed. Maximum length is 10 characters.
     * @param set to 'true' to allow other players to see this message. Default is 'false'.
     */
    say(message: string, toPublic?: boolean): number;
    /**
     * Kill the creep immediately.
     */
    suicide(): number;
    /**
     * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants
     * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used.
     */
    transfer(target: Creep | Spawn | Structure, resourceType: string, amount?: number): number;
    /**
     * Upgrade your controller to the next level using carried energy. Upgrading controllers raises your Global Control Level in parallel. Needs WORK and CARRY body parts. The target has to be at adjacent square to the creep. A fully upgraded level 8 controller can't be upgraded with the power over 15 energy units per tick regardless of creeps power. The cumulative effect of all the creeps performing upgradeController in the current tick is taken into account.
     * @param target The target controller object to be upgraded.
     */
    upgradeController(target: Controller): number;
    /**
     * Withdraw resources from a structure. The target has to be at adjacent square to the creep. Multiple creeps can withdraw from the same structure in the same tick. Your creeps can withdraw resources from hostile structures as well, in case if there is no hostile rampart on top of it.
     * @param target The target object.
     * @param resourceType The target One of the RESOURCE_* constants..
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     */
    withdraw(target: Structure, resourceType: string, amount?: number): number;
}
/**
 * A flag. Flags can be used to mark particular spots in a room. Flags are visible to their owners only.
 */
declare class Flag extends RoomObject {
    /**
     * Flag color. One of the following constants: COLOR_WHITE, COLOR_GREY, COLOR_RED, COLOR_PURPLE, COLOR_BLUE, COLOR_CYAN, COLOR_GREEN, COLOR_YELLOW, COLOR_ORANGE, COLOR_BROWN
     */
    color: number;
    /**
     * A shorthand to Memory.flags[flag.name]. You can use it for quick access the flag's specific memory data object.
     */
    memory: any;
    /**
     * Flag’s name. You can choose the name while creating a new flag, and it cannot be changed later. This name is a hash key to access the spawn via the Game.flags object.
     */
    name: string;
    /**
     * Flag secondary color. One of the COLOR_* constants.
     */
    secondaryColor: number;
    /**
     * Remove the flag.
     * @returns Result Code: OK
     */
    remove(): void;
    /**
     * Set new color of the flag.
     * @param color One of the following constants: COLOR_WHITE, COLOR_GREY, COLOR_RED, COLOR_PURPLE, COLOR_BLUE, COLOR_CYAN, COLOR_GREEN, COLOR_YELLOW, COLOR_ORANGE, COLOR_BROWN
     * @parma secondaryColor Secondary color of the flag. One of the COLOR_* constants.
     * @returns Result Code: OK, ERR_INVALID_ARGS
     */
    setColor(color: number, secondaryColor?: number): number;
    /**
     * Set new position of the flag.
     * @param x The X position in the room.
     * @param y The Y position in the room.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(x: number, y: number): number;
    /**
     * Set new position of the flag.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(pos: RoomPosition | {
        pos: RoomPosition;
    }): number;
}
/**
 * The main global game object containing all the gameplay information.
 */
interface Game {
    /**
     * An object containing information about your CPU usage with the following properties:
     */
    cpu: CPU;
    /**
     * A hash containing all your creeps with creep names as hash keys.
     */
    creeps: {
        [creepName: string]: Creep;
    };
    /**
     * A hash containing all your flags with flag names as hash keys.
     */
    flags: {
        [flagName: string]: Flag;
    };
    /**
     * Your Global Control Level, an object with the following properties :
     */
    gcl: GlobalControlLevel;
    /**
     * A global object representing world GameMap.
     */
    map: GameMap;
    /**
     * A global object representing the in-game market.
     */
    market: Market;
    /**
     * A hash containing all the rooms available to you with room names as hash keys.
     */
    rooms: {
        [roomName: string]: Room;
    };
    /**
     * A hash containing all your spawns with spawn names as hash keys.
     */
    spawns: {
        [spawnName: string]: Spawn;
    };
    /**
     * A hash containing all your structures with structure id as hash keys.
     */
    structures: {
        [structureId: string]: Structure;
    };
    /**
     * A hash containing all your construction sites with their id as hash keys.
     */
    constructionSites: {
        [constructionSiteId: string]: ConstructionSite;
    };
    /**
     * System game tick counter. It is automatically incremented on every tick.
     */
    time: number;
    /**
     * Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.
     * @param id The unique identificator.
     * @returns an object instance or null if it cannot be found.
     */
    getObjectById<T>(id: string): T;
    /**
     * Send a custom message at your profile email. This way, you can set up notifications to yourself on any occasion within the game. You can schedule up to 20 notifications during one game tick. Not available in the Simulation Room.
     * @param message Custom text which will be sent in the message. Maximum length is 1000 characters.
     * @param groupInterval If set to 0 (default), the notification will be scheduled immediately. Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
     */
    notify(message: string, groupInterval?: number): void;
}
interface GlobalControlLevel {
    level: number;
    progress: number;
    progressTotal: number;
}
interface CPU {
    limit: number;
    tickLimit: number;
    bucket: number;
    /**
     * Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.
     */
    getUsed(): number;
}
/**
 * An array describing the creep’s body. Each element contains the following properties:
 */
interface BodyPartDefinition {
    /**
     * If the body part is boosted, this property specifies the mineral type which is used for boosting. One of the RESOURCE_* constants.
     */
    boost: string;
    /**
     * One of the body part types constants.
     */
    type: string;
    /**
     * The remaining amount of hit points of this body part.
     */
    hits: number;
}
interface Owner {
    username: string;
}
interface ReservationDefinition {
    username: string;
    ticksToEnd: number;
}
interface StoreDefinition {
    [resource: string]: number;
    energy?: number;
    power?: number;
}
interface LookAtResultWithPos {
    x: number;
    y: number;
    type: string;
    creep?: Creep;
    terrain?: string;
    structure?: Structure;
    flag?: Flag;
    energy?: Resource;
    exit?: any;
    source?: Source;
}
interface LookAtResult {
    type: string;
    constructionSite?: ConstructionSite;
    creep?: Creep;
    energy?: Resource;
    exit?: any;
    flag?: Flag;
    source?: Source;
    structure?: Structure;
    terrain?: string;
}
interface LookAtResultMatrix {
    [coord: number]: LookAtResultMatrix | LookAtResult[];
}
interface FindPathOpts {
    /**
     * Treat squares with creeps as walkable. Can be useful with too many moving creeps around or in some other cases. The default
     * value is false.
     */
    ignoreCreeps?: boolean;
    /**
     * Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable. Use this flag when
     * you need to move through a territory blocked by hostile structures. If a creep with an ATTACK body part steps on such a square,
     * it automatically attacks the structure. The default value is false.
     */
    ignoreDestructibleStructures?: boolean;
    /**
     * Ignore road structures. Enabling this option can speed up the search. The default value is false. This is only used when the
     * new PathFinder is enabled.
     */
    ignoreRoads?: boolean;
    /**
     * You can use this callback to modify a CostMatrix for any room during the search. The callback accepts two arguments, roomName
     * and costMatrix. Use the costMatrix instance to make changes to the positions costs. If you return a new matrix from this callback,
     * it will be used instead of the built-in cached one. This option is only used when the new PathFinder is enabled.
     *
     * @param roomName The name of the room.
     * @param costMatrix The current CostMatrix
     * @returns The new CostMatrix to use
     */
    costCallback?(roomName: string, costMatrix: CostMatrix): CostMatrix;
    /**
     * An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search. This option
     * cannot be used when the new PathFinder is enabled (use costCallback option instead).
     */
    ignore?: any[] | RoomPosition[];
    /**
     * An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search. This option cannot
     * be used when the new PathFinder is enabled (use costCallback option instead).
     */
    avoid?: any[] | RoomPosition[];
    /**
     * The maximum limit of possible pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU.
     * The default value is 2000.
     */
    maxOps?: number;
    /**
     * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand the underlying
     * A* algorithm mechanics! The default value is 1.2.
     */
    heuristicWeight?: number;
    /**
     * If true, the result path will be serialized using Room.serializePath. The default is false.
     */
    serialize?: boolean;
    /**
     * The maximum allowed rooms to search. The default (and maximum) is 16. This is only used when the new PathFinder is enabled.
     */
    maxRooms?: number;
}
interface MoveToOpts {
    /**
     * This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly
     * slower creep reaction behavior. The path is stored into the creep's memory to the _move property. The reusePath value defines
     * the amount of ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease
     * to make the movement more consistent. Set to 0 if you want to disable path reusing.
     */
    reusePath?: number;
    /**
     * If reusePath is enabled and this option is set to true, the path will be stored in memory in the short serialized form using
     * Room.serializePath. The default value is true.
     */
    serializeMemory?: boolean;
    /**
     * If this option is set to true, moveTo method will return ERR_NOT_FOUND if there is no memorized path to reuse. This can
     * significantly save CPU time in some cases. The default value is false.
     */
    noPathFinding?: boolean;
}
interface PathStep {
    x: number;
    dx: number;
    y: number;
    dy: number;
    direction: number;
}
/**
 * An object with survival game info
 */
interface SurvivalGameInfo {
    /**
     * Current score.
     */
    score: number;
    /**
     * Time to the next wave of invaders.
     */
    timeToWave: number;
    /**
     * The number of the next wave.
     */
    wave: number;
}
/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 */
declare class GameMap {
    /**
     * List all exits available from the room with the given name.
     * @param roomName The room name.
     * @returns The exits information or null if the room not found.
     */
    describeExits(roomName: string): {
        "1": string;
        "3": string;
        "5": string;
        "7": string;
    };
    /**
     * Find the exit direction from the given room en route to another room.
     * @param fromRoom Start room name or room object.
     * @param toRoom Finish room name or room object.
     * @return The room direction constant, one of the following:
     * FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following Result codes:
     * ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExit(fromRoom: string | Room, toRoom: string | Room): string | number;
    /**
     * Find route from the given room to another room.
     * @param fromRoom Start room name or room object.
     * @param toRoom Finish room name or room object.
     * @returns the route array or ERR_NO_PATH code
     */
    findRoute(fromRoom: string | Room, toRoom: string | Room, opts?: {
        routeCallback: {
            (roomName: string, fromRoomName: string): any;
        };
    }): {
        exit: string;
        room: string;
    }[] | number;
    /**
     * Get the linear distance (in rooms) between two rooms. You can use this function to estimate the energy cost of
     * sending resources through terminals, or using observers and nukes.
     * @param roomName1 The name of the first room.
     * @param roomName2 The name of the second room.
     */
    getRoomLinearDistance(roomName1: string, roomName2: string): number;
    /**
     * Check if the room with the given name is protected by temporary "newbie" walls.
     * @param roomName The room name.
     */
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param roomName The room name.
     */
    getTerrainAt(x: number, y: number, roomName: string): string;
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param pos The position object.
     */
    getTerrainAt(pos: RoomPosition): string;
    /**
     * Check if the room with the given name is protected by temporary "newbie" walls.
     * @param roomName The room name.
     * @returns A boolean value.
     */
    isRoomProtected(roomName: string): boolean;
}
/**
 * A global object representing the in-game market. You can use this object to track resource transactions to/from your
 * terminals, and your buy/sell orders (in development). The object is accessible via the singleton Game.market property.
 */
declare class Market {
    /**
     * An array of the last 100 incoming transactions to your terminals
     */
    incomingTransactions: Transaction[];
    /**
     * An array of the last 100 outgoing transactions from your terminals
     */
    outgoingTransactions: Transaction[];
}
interface Transaction {
    transactionId: string;
    time: number;
    sender: {
        username: string;
    };
    recipient: {
        username: string;
    };
    resourceType: string;
    amount: number;
    from: string;
    to: string;
    description: string;
}
interface Memory {
    [name: string]: any;
    creeps: {
        [name: string]: any;
    };
    flags: {
        [name: string]: any;
    };
    rooms: {
        [name: string]: any;
    };
    spawns: {
        [name: string]: any;
    };
}
/**
 * A mineral deposit object. Can be harvested by creeps with a WORK body part using the extractor structure.
 */
interface Mineral extends RoomObject {
    /**
     * The prototype is stored in the Mineral.prototype global object. You can use it to extend game objects behaviour globally.
     */
    prototype: Mineral;
    /**
     * The remaining amount of resources.
     */
    mineralAmount: number;
    /**
     * The resource type, one of the RESOURCE_* constants.
     */
    mineralType: string;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * The remaining time after which the deposit will be refilled.
     */
    ticksToRegeneration: number;
}
/**
 * Contains powerful methods for pathfinding in the game world. Support exists for custom navigation costs and paths which span multiple rooms.
 * Additionally PathFinder can search for paths through rooms you can't see, although you won't be able to detect any dynamic obstacles like creeps or buildings.
 */
interface PathFinder {
    /**
     * Container for custom navigation cost data.
     */
    CostMatrix: CostMatrix;
    /**
     * Find an optimal path between origin and goal.
     *
     * @param origin The start position.
     * @param goal goal A RoomPosition or an object containing a RoomPosition and range
     * @param opts An object containing additional pathfinding flags.
     */
    search(origin: RoomPosition, goal: RoomPosition | {
        pos: RoomPosition;
        range: number;
    }, opts?: PathFinderOpts): {
        path: RoomPosition[];
        ops: number;
    };
    /**
     * Find an optimal path between origin and goal.
     *
     * @param origin The start position.
     * @param goal an array of goals, the cheapest path found out of all the goals will be returned.
     * @param opts An object containing additional pathfinding flags.
     */
    search(origin: RoomPosition, goal: RoomPosition[] | {
        pos: RoomPosition;
        range: number;
    }[], opts?: PathFinderOpts): {
        path: RoomPosition[];
        ops: number;
    };
    /**
     * Specify whether to use this new experimental pathfinder in game objects methods.
     * This method should be invoked every tick. It affects the following methods behavior:
     * Room.findPath, RoomPosition.findPathTo, RoomPosition.findClosestByPath, Creep.moveTo....
     *
     * @param isEnabled Whether to activate the new pathfinder or deactivate.
     */
    use(isEnabled: boolean): any;
}
/**
 * An object containing additional pathfinding flags.
 */
interface PathFinderOpts {
    /**
     * Cost for walking on plain positions. The default is 1.
     */
    plainCost?: number;
    /**
     * Cost for walking on swamp positions. The default is 5.
     */
    swampCost?: number;
    /**
     * Instead of searching for a path to the goals this will search for a path away from the goals.
     * The cheapest path that is out of range of every goal will be returned. The default is false.
     */
    flee?: boolean;
    /**
     * The maximum allowed pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     */
    maxOps?: number;
    /**
     * The maximum allowed rooms to search. The default (and maximum) is 16.
     */
    maxRooms?: number;
    /**
     * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand
     * the underlying A* algorithm mechanics! The default value is 1.
     */
    heuristicWeight?: number;
    /**
     * Request from the pathfinder to generate a CostMatrix for a certain room. The callback accepts one argument, roomName.
     * This callback will only be called once per room per search. If you are running multiple pathfinding operations in a
     * single room and in a single tick you may consider caching your CostMatrix to speed up your code. Please read the
     * CostMatrix documentation below for more information on CostMatrix.
     *
     * @param roomName
     */
    roomCallback?(roomName: string): boolean | CostMatrix;
}
/**
 * Container for custom navigation cost data.
 */
interface CostMatrix {
    /**
     * Creates a new CostMatrix containing 0's for all positions.
     * @constructor
     */
    new (): CostMatrix;
    /**
     * Set the cost of a position in this CostMatrix.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param cost Cost of this position. Must be a whole number. A cost of 0 will use the terrain cost for that tile. A cost greater than or equal to 255 will be treated as unwalkable.
     */
    set(x: number, y: number, cost: number): any;
    /**
     * Get the cost of a position in this CostMatrix.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    get(x: number, y: number): any;
    /**
     * Copy this CostMatrix into a new CostMatrix with the same data.
     */
    clone(): CostMatrix;
    /**
     * Returns a compact representation of this CostMatrix which can be stored via JSON.stringify.
     */
    serialize(): number[];
    /**
     * Static method which deserializes a new CostMatrix using the return value of serialize.
     * @param val Whatever serialize returned
     */
    deserialize(val: number[]): CostMatrix;
}
/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 */
interface RawMemory {
    /**
     * Get a raw string representation of the Memory object.
     */
    get(): string;
    /**
     * Set new memory value.
     * @param value New memory value as a string.
     */
    set(value: string): any;
}
/**
 * A dropped piece of resource. It will decay after a while if not picked up. Dropped resource pile decays for ceil(amount/1000) units per tick.
 */
declare class Resource extends RoomObject {
    /**
     * The amount of resource units containing.
     */
    amount: number;
    /**
     * A unique object identificator. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    id: string;
    /**
     * One of the `RESOURCE_*` constants.
     */
    resourceType: string;
}
/**
 * Any object with a position in a room. Almost all game objects prototypes
 * are derived from RoomObject.
 */
declare class RoomObject {
    prototype: RoomObject;
    /**
     * An object representing the position of this object in the room.
     */
    pos: RoomPosition;
    /**
     * The link to the Room object. May be undefined in case if an object is a
     * flag or a construction site and is placed in a room that is not visible
     * to you.
     */
    room: Room;
}
/**
 * An object representing the specified position in the room. Every object in the room contains RoomPosition as the pos property. The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 */
declare class RoomPosition {
    /**
     * You can create new RoomPosition object using its constructor.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param roomName The room name.
     */
    constructor(x: number, y: number, roomName: string);
    /**
     * The name of the room.
     */
    roomName: string;
    /**
     * X position in the room.
     */
    x: number;
    /**
     * Y position in the room.
     */
    y: number;
    /**
     * Create new ConstructionSite at the specified location.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     */
    createConstructionSite(structureType: string): number;
    /**
     * Create new Flag at the specified location.
     * @param name The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(name?: string, color?: number, secondaryColor?: number): number;
    /**
     * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param type See Room.find
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     */
    findClosestByPath<T>(type: number, opts?: FindPathOpts & {
        filter?: any | string;
        algorithm?: string;
    }): T;
    /**
     * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     */
    findClosestByPath<T>(objects: T[] | RoomPosition[], opts?: FindPathOpts & {
        filter?: any | string;
        algorithm?: string;
    }): T;
    /**
     * Find an object with the shortest linear distance from the given position.
     * @param type See Room.find.
     * @param opts
     */
    findClosestByRange<T>(type: number, opts?: {
        filter: any | string;
    }): T;
    /**
     * Find an object with the shortest linear distance from the given position.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param opts An object containing one of the following options: filter
     */
    findClosestByRange<T>(objects: T[] | RoomPosition[], opts?: {
        filter: any | string;
    }): T;
    /**
     * Find all objects in the specified linear range.
     * @param type See Room.find.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange<T>(type: number, range: number, opts?: {
        filter?: any | string;
    }): T[];
    /**
     * Find all objects in the specified linear range.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange<T>(objects: T[] | RoomPosition[], range: number, opts?: {
        filter?: any | string;
    }): T[];
    /**
     * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
     */
    findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];
    /**
     * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
     */
    findPathTo(target: RoomPosition | {
        pos: RoomPosition;
    }, opts?: FindPathOpts): PathStep[];
    /**
     * Get linear direction to the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    getDirectionTo(x: number, y: number): number;
    /**
     * Get linear direction to the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    getDirectionTo(target: RoomPosition | {
        pos: RoomPosition;
    }): number;
    /**
     * Get linear range to the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    getRangeTo(x: number, y: number): number;
    /**
     * Get linear range to the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    getRangeTo(target: RoomPosition | {
        pos: RoomPosition;
    }): number;
    /**
     * Check whether this position is in the given range of another position.
     * @param toPos The target position.
     * @param range The range distance.
     */
    inRangeTo(toPos: RoomPosition, range: number): boolean;
    /**
     * Check whether this position is the same as the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    isEqualTo(x: number, y: number): boolean;
    /**
     * Check whether this position is the same as the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    isEqualTo(target: RoomPosition | {
        pos: RoomPosition;
    }): boolean;
    /**
     * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    isNearTo(x: number, y: number): boolean;
    /**
     * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    isNearTo(target: RoomPosition | {
        pos: RoomPosition;
    }): boolean;
    /**
     * Get the list of objects at the specified room position.
     */
    look(): LookAtResult[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, exit, flag, resource, source, structure, terrain
     */
    lookFor<T>(type: string): T[];
}
/**
 * An object representing the room in which your units and structures are in. It can be used to look around, find paths, etc. Every object in the room contains its linked Room instance in the room property.
 */
declare class Room {
    /**
     * The Controller structure of this room, if present, otherwise undefined.
     */
    controller: Controller;
    /**
     * Total amount of energy available in all spawns and extensions in the room.
     */
    energyAvailable: number;
    /**
     * Total amount of energyCapacity of all spawns and extensions in the room.
     */
    energyCapacityAvailable: number;
    /**
     * A shorthand to Memory.rooms[room.name]. You can use it for quick access the room’s specific memory data object.
     */
    memory: any;
    /**
     * One of the following constants:
     * MODE_SIMULATION, MODE_SURVIVAL, MODE_WORLD, MODE_ARENA
     */
    mode: string;
    /**
     * The name of the room.
     */
    name: string;
    /**
     * The Storage structure of this room, if present, otherwise undefined.
     */
    storage: StructureStorage;
    /**
     * An object with survival game info if available
     */
    survivalInfo: SurvivalGameInfo;
    /**
     * The Terminal structure of this room, if present, otherwise undefined.
     */
    terminal: Terminal;
    /**
     * Create new ConstructionSite at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(x: number, y: number, structureType: string): number;
    /**
     * Create new ConstructionSite at the specified location.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(pos: RoomPosition | {
        pos: RoomPosition;
    }, structureType: string): number;
    /**
     * Create new Flag at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param name (optional) The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(x: number, y: number, name?: string, color?: number, secondaryColor?: number): number;
    /**
     * Create new Flag at the specified location.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param name (optional) The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(pos: RoomPosition | {
        pos: RoomPosition;
    }, name?: string, color?: number, secondaryColor?: number): number;
    /**
     * Find all objects of the specified type in the room.
     * @param type One of the following constants:FIND_CREEPS, FIND_MY_CREEPS, FIND_HOSTILE_CREEPS, FIND_MY_SPAWNS, FIND_HOSTILE_SPAWNS, FIND_SOURCES, FIND_SOURCES_ACTIVE, FIND_DROPPED_RESOURCES, FIND_DROPPED_ENERGY, FIND_STRUCTURES, FIND_MY_STRUCTURES, FIND_HOSTILE_STRUCTURES, FIND_FLAGS, FIND_CONSTRUCTION_SITES, FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT, FIND_EXIT
     * @param opts An object with additional options
     * @returns An array with the objects found.
     */
    find<T>(type: number, opts?: {
        filter: any | string;
    }): T[];
    /**
     * Find the exit direction en route to another room.
     * @param room Another room name or room object.
     * @returns The room direction constant, one of the following: FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following error codes: ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExitTo(room: string | Room): number;
    /**
     * Find an optimal path inside the room between fromPos and toPos using A* search algorithm.
     * @param fromPos The start position.
     * @param toPos The end position.
     * @param opts (optional) An object containing additonal pathfinding flags
     * @returns An array with path steps
     */
    findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[];
    /**
     * Creates a RoomPosition object at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @returns A RoomPosition object or null if it cannot be obtained.
     */
    getPositionAt(x: number, y: number): RoomPosition;
    /**
     * Get the list of objects at the specified room position.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array with objects at the specified position
     */
    lookAt(x: number, y: number): LookAtResult[];
    /**
     * Get the list of objects at the specified room position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array with objects at the specified position
     */
    lookAt(target: RoomPosition | {
        pos: RoomPosition;
    }): LookAtResult[];
    /**
     * Get the list of objects at the specified room area. This method is more CPU efficient in comparison to multiple lookAt calls.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @returns An object with all the objects in the specified area
     */
    lookAtArea(top: number, left: number, bottom: number, right: number, asArray?: boolean): LookAtResultMatrix | LookAtResultWithPos[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of objects of the given type at the specified position if found.
     */
    lookForAt<T>(type: string, x: number, y: number): T[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of objects of the given type at the specified position if found.
     */
    lookForAt<T>(type: string, target: RoomPosition | {
        pos: RoomPosition;
    }): T[];
    /**
     * Get the list of objects with the given type at the specified room area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @returns An object with all the objects of the given type in the specified area
     */
    lookForAtArea(type: string, top: number, left: number, bottom: number, right: number, asArray?: boolean): LookAtResultMatrix | LookAtResultWithPos[];
    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     * @param path A path array retrieved from Room.findPath.
     * @returns A serialized string form of the given path.
     */
    static serializePath(path: PathStep[]): string;
    /**
     * Deserialize a short string path representation into an array form.
     * @param path A serialized path string.
     * @returns A path array.
     */
    static deserializePath(path: string): PathStep[];
}
/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 */
declare class Source extends RoomObject {
    /**
     * The prototype is stored in the Source.prototype global object. You can use it to extend game objects behaviour globally:
     */
    prototype: Source;
    /**
     * The remaining amount of energy.
     */
    energy: number;
    /**
     * The total amount of energy in the source. Equals to 3000 in most cases.
     */
    energyCapacity: number;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * The remaining time after which the source will be refilled.
     */
    ticksToRegeneration: number;
}
/**
 * Spawns are your colony centers. You can transfer energy into it and create new creeps using createCreep() method.
 */
declare class Spawn extends OwnedStructure {
    /**
     * The amount of energy containing in the spawn.
     */
    energy: number;
    /**
     * The total amount of energy the spawn can contain
     */
    energyCapacity: number;
    /**
     * The current amount of hit points of the spawn.
     */
    hits: number;
    /**
     * The maximum amount of hit points of the spawn.
     */
    hitsMax: number;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * A shorthand to Memory.spawns[spawn.name]. You can use it for quick access the spawn’s specific memory data object.
     */
    memory: any;
    /**
     * Whether it is your spawn or foe.
     */
    my: boolean;
    /**
     * Spawn’s name. You choose the name upon creating a new spawn, and it cannot be changed later. This name is a hash key to access the spawn via the Game.spawns object.
     */
    name: string;
    /**
     * An object with the spawn’s owner info containing the following properties: username
     */
    owner: Owner;
    /**
     * An object representing the position of this spawn in a room.
     */
    pos: RoomPosition;
    /**
     * The link to the Room object of this spawn.
     */
    room: Room;
    /**
     * Always equal to ‘spawn’.
     */
    structureType: string;
    /**
     * If the spawn is in process of spawning a new creep, this object will contain the new creep’s information, or null otherwise.
     * @param name The name of a new creep.
     * @param needTime Time needed in total to complete the spawning.
     * @param remainingTime Remaining time to go.
     */
    spawning: {
        name: string;
        needTime: number;
        remainingTime: number;
    };
    /**
     * Check if a creep can be created.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     */
    canCreateCreep(body: string[], name?: string): number;
    /**
     * Start the creep spawning process.
     * The name of a new creep or one of these error codes
     * ERR_NOT_OWNER	-1	You are not the owner of this spawn.
     * ERR_NAME_EXISTS	-3	There is a creep with the same name already.
     * ERR_BUSY	-4	The spawn is already in process of spawning another creep.
     * ERR_NOT_ENOUGH_ENERGY	-6	The spawn and its extensions contain not enough energy to create a creep with the given body.
     * ERR_INVALID_ARGS	-10	Body is not properly described.
     * ERR_RCL_NOT_ENOUGH	-14	Your Room Controller level is not enough to use this spawn.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     * @param memory The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
     */
    createCreep(body: string[], name?: string, memory?: any): number | string;
    /**
     * Destroy this spawn immediately.
     */
    destroy(): number;
    /**
     * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the structure will be highlighted with red in the game.
     */
    isActive(): boolean;
    /**
     * Toggle auto notification when the spawn is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): number;
    /**
     * Increase the remaining time to live of the target creep. The target should be at adjacent square. The spawn should not be busy with the spawning process. Each execution increases the creep's timer by amount of ticks according to this formula: floor(500/body_size). Energy required for each execution is determined using this formula: ceil(creep_cost/3/body_size).
     * @param target The target creep object.
     */
    renewCreep(target: Creep): number;
    /**
     * Kill the creep and drop up to 100% of resources spent on its spawning and boosting depending on remaining life time. The target should be at adjacent square.
     * @param target The target creep object.
     */
    recycleCreep(target: Creep): number;
    /**
     * Transfer the energy from the spawn to a creep.
     * @param target The creep object which energy should be transferred to.
     * @param amount The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     */
    transferEnergy(target: Creep, amount?: number): number;
}
declare class StructureSpawn extends Spawn {
}
/**
 * Parent object for structure classes
 */
declare class Structure extends RoomObject {
    /**
     * The current amount of hit points of the structure.
     */
    hits: number;
    /**
     * The total amount of hit points of the structure.
     */
    hitsMax: number;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * One of the STRUCTURE_* constants.
     */
    structureType: string;
    /**
     * Destroy this structure immediately.
     */
    destroy(): number;
    /**
     * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the structure will be highlighted with red in the game.
     */
    isActive(): boolean;
    /**
     * Toggle auto notification when the structure is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): number;
}
/**
 * The base prototype for a structure that has an owner. Such structures can be
 * found using `FIND_MY_STRUCTURES` and `FIND_HOSTILE_STRUCTURES` constants.
 */
declare class OwnedStructure extends Structure {
    /**
     * Whether this is your own structure. Walls and roads don't have this property as they are considered neutral structures.
     */
    my: boolean;
    /**
     * An object with the structure’s owner info (if present) containing the following properties: username
     */
    owner: Owner;
}
/**
 * Claim this structure to take control over the room. The controller structure
 * cannot be damaged or destroyed. It can be addressed by `Room.controller`
 * property.
 */
declare class StructureController extends OwnedStructure {
    /**
     * Current controller level, from 0 to 8.
     */
    level: number;
    /**
     * The current progress of upgrading the controller to the next level.
     */
    progress: number;
    /**
     * The progress needed to reach the next level.
     */
    progressTotal: number;
    /**
     * An object with the controller reservation info if present: username, ticksToEnd
     */
    reservation: ReservationDefinition;
    /**
     * The amount of game ticks when this controller will lose one level. This timer can be reset by using Creep.upgradeController.
     */
    ticksToDowngrade: number;
    /**
     * Make your claimed controller neutral again.
     */
    unclaim(): number;
}
/**
 * Contains energy which can be spent on spawning bigger creeps. Extensions can
 * be placed anywhere in the room, any spawns will be able to use them regardless
 * of distance.
 */
declare class StructureExtension extends OwnedStructure {
    /**
     * The amount of energy containing in the extension.
     */
    energy: number;
    /**
     * The total amount of energy the extension can contain.
     */
    energyCapacity: number;
    /**
     * Transfer the energy from the extension to a creep.
     * @param target The creep object which energy should be transferred to.
     * @param amount The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     */
    transferEnergy(target: Creep, amount?: number): number;
}
/**
 * Remotely transfers energy to another Link in the same room.
 */
declare class StructureLink extends OwnedStructure {
    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     */
    cooldown: number;
    /**
     * The amount of energy containing in the link.
     */
    energy: number;
    /**
     * The total amount of energy the link can contain.
     */
    energyCapacity: number;
    /**
     * Transfer energy from the link to another link or a creep. If the target is a creep, it has to be at adjacent square to the link. If the target is a link, it can be at any location in the same room. Remote transfer process implies 3% energy loss and cooldown delay depending on the distance.
     * @param target The target object.
     * @param amount The amount of energy to be transferred. If omitted, all the available energy is used.
     */
    transferEnergy(target: Creep | StructureLink, amount?: number): number;
}
/**
 * Non-player structure. Spawns NPC Source Keepers that guards energy sources
 * and minerals in some rooms. This structure cannot be destroyed.
 */
declare class StructureKeeperLair extends OwnedStructure {
    /**
     * Time to spawning of the next Source Keeper.
     */
    ticksToSpawn: number;
}
/**
 * Provides visibility into a distant room from your script.
 */
declare class StructureObserver extends OwnedStructure {
    /**
     * Provide visibility into a distant room from your script. The target room object will be available on the next tick. The maximum range is 5 rooms.
     * @param roomName
     */
    observeRoom(roomName: string): number;
}
/**
 *
 */
declare class StructurePowerBank extends OwnedStructure {
    /**
     * The amount of power containing.
     */
    power: number;
    /**
     * The amount of game ticks when this structure will disappear.
     */
    ticksToDecay: number;
}
/**
 * Non-player structure. Contains power resource which can be obtained by
 * destroying the structure. Hits the attacker creep back on each attack.
 */
declare class StructurePowerSpawn extends OwnedStructure {
    /**
     * The amount of energy containing in this structure.
     */
    energy: number;
    /**
     * The total amount of energy this structure can contain.
     */
    energyCapacity: number;
    /**
     * The amount of power containing in this structure.
     */
    power: number;
    /**
     * The total amount of power this structure can contain.
     */
    powerCapacity: number;
    /**
     * Create a power creep. Currently in development
     * @param name The name of the power creep.
     */
    createPowerCreep(name: string): number;
    /**
     * Register power resource units into your account. Registered power allows to develop power creeps skills. Consumes 1 power resource unit and 50 energy resource units.
     */
    processPower(): number;
    /**
     * Transfer the energy from this structure to a creep.
     * @param target The creep object which energy should be transferred to.
     * @param amount The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     */
    transferEnergy(target: Creep, amount?: number): number;
}
/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on
 * the same tile. Can be used as a controllable gate.
 */
declare class StructureRampart extends OwnedStructure {
    /**
     * The amount of game ticks when this rampart will lose some hit points.
     */
    ticksToDecay: number;
    /**
     * If false (default), only your creeps can step on the same square. If true, any hostile creeps can pass through.
     */
    isPublic: boolean;
    /**
     * Make this rampart public to allow other players' creeps to pass through.
     * @param isPublic Whether this rampart should be public or non-public
     */
    setPublic(isPublic: boolean): any;
}
/**
 * Decreases movement cost to 1. Using roads allows creating creeps with less
 * `MOVE` body parts.
 */
declare class StructureRoad extends Structure {
    /**
     * The amount of game ticks when this road will lose some hit points.
     */
    ticksToDecay: number;
}
/**
 * A structure that can store huge amount of resource units. Only one structure
 * per room is allowed that can be addressed by `Room.storage` property.
 */
declare class StructureStorage extends OwnedStructure {
    /**
     * An object with the storage contents.
     */
    store: StoreDefinition;
    /**
     * The total amount of resources the storage can contain.
     */
    storeCapacity: number;
    /**
     * Transfer resource from this storage to a creep. The target has to be at adjacent square.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     */
    transfer(target: Creep, resourceType: string, amount?: number): number;
    /**
     * An alias for storage.transfer(target, RESOURCE_ENERGY, amount). This method is deprecated.
     * @param target The target object.
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     * @deprecated
     */
    transferEnergy(target: Creep, amount?: number): number;
}
/**
 * Remotely attacks or heals creeps, or repairs structures. Can be targeted to
 * any object in the room. However, its effectiveness highly depends on the
 * distance. Each action consumes energy.
 */
declare class StructureTower extends OwnedStructure {
    /**
     * The amount of energy containing in this structure.
     */
    energy: number;
    /**
     * The total amount of energy this structure can contain.
     */
    energyCapacity: number;
    /**
     * Remotely attack any creep in the room. Consumes 10 energy units per tick. Attack power depends on the distance to the target: from 600 hits at range 10 to 300 hits at range 40.
     * @param target The target creep.
     */
    attack(target: Creep): number;
    /**
     * Remotely heal any creep in the room. Consumes 10 energy units per tick. Heal power depends on the distance to the target: from 400 hits at range 10 to 200 hits at range 40.
     * @param target The target creep.
     */
    heal(target: Creep): number;
    /**
     * Remotely repair any structure in the room. Consumes 10 energy units per tick. Repair power depends on the distance to the target: from 600 hits at range 10 to 300 hits at range 40.
     * @param target The target structure.
     */
    repair(target: Spawn | Structure): number;
    /**
     *
     * @param target The creep object which energy should be transferred to.
     * @param amount The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     */
    transferEnergy(target: Creep, amount?: number): number;
}
/**
 * Blocks movement of all creeps.
 */
declare class StructureWall extends Structure {
    /**
     * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
     */
    ticksToLive: number;
}
/**
 * Allows to harvest mineral deposits.
 */
declare class StructureExtractor extends OwnedStructure {
}
/**
 * Produces mineral compounds from base minerals and boosts creeps.
 */
declare class StructureLab extends OwnedStructure {
    /**
     * The amount of game ticks the lab has to wait until the next reaction is possible.
     */
    cooldown: number;
    /**
     * The amount of energy containing in the lab. Energy is used for boosting creeps.
     */
    energy: number;
    /**
     * The total amount of energy the lab can contain.
     */
    energyCapacity: number;
    /**
     * The amount of mineral resources containing in the lab.
     */
    mineralAmount: number;
    /**
     * The type of minerals containing in the lab. Labs can contain only one mineral type at the same time.
     */
    mineralType: string;
    /**
     * The total amount of minerals the lab can contain.
     */
    mineralCapacity: number;
    /**
     * Boosts creep body part using the containing mineral compound. The creep has to be at adjacent square to the lab. Boosting one body part consumes 30 mineral units and 20 energy units.
     * @param creep The target creep.
     * @param bodyPartsCount The number of body parts of the corresponding type to be boosted. Body parts are always counted left-to-right for TOUGH, and right-to-left for other types. If undefined, all the eligible body parts are boosted.
     */
    boostCreep(creep: Creep, bodyPartsCount?: number): number;
    /**
     * Produce mineral compounds using reagents from two another labs. Each lab has to be within 2 squares range. The same input labs can be used by many output labs
     * @param lab1 The first source lab.
     * @param lab2 The second source lab.
     */
    runReaction(lab1: StructureLab, lab2: StructureLab): number;
    /**
     * Transfer resource from this structure to a creep. The target has to be at adjacent square.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     */
    transfer(target: Creep, resourceType: string, amount?: number): number;
}
/**
 * Sends any resources to a Terminal in another room.
 */
declare class StructureTerminal extends OwnedStructure {
    /**
     * An object with the storage contents. Each object key is one of the RESOURCE_* constants, values are resources amounts.
     */
    store: any;
    /**
     * The total amount of resources the storage can contain.
     */
    storeCapacity: number;
    /**
     * Sends resource to a Terminal in another room with the specified name.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be sent. The minimum amount is 100.
     * @param destination The name of the target room. You don't have to gain visibility in this room.
     * @param description The description of the transaction. It is visible to the recipient. The maximum length is 100 characters.
     */
    send(resourceType: string, amount: number, destination: string, description?: string): number;
    /**
     * Transfer resource from this terminal to a creep. The target has to be at adjacent square.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     */
    transfer(target: Creep, resourceType: String, amount?: number): number;
}
/**
 * Contains up to 2,000 resource units. Can be constructed in neutral rooms. Decays for 5,000 hits per 100 ticks.
 */
declare class StructureContainer extends Structure {
    /**
     * An object with the structure contents. Each object key is one of the RESOURCE_* constants, values are resources
     * amounts. Use _.sum(structure.store) to get the total amount of contents
     */
    store: any;
    /**
     * The total amount of resources the structure can contain.
     */
    storeCapacity: number;
    /**
     * Transfer resource from this structure to a creep. The target has to be at adjacent square.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     */
    transfer(target: Creep, resourceType: string, amount?: number): number;
}
/**
 * Launches a nuke to another room dealing huge damage to the landing area.
 * Each launch has a cooldown and requires energy and ghodium resources. Launching
 * creates a Nuke object at the target room position which is visible to any player
 * until it is landed. Incoming nuke cannot be moved or cancelled. Nukes cannot
 * be launched from or to novice rooms.
 */
declare class StructureNuker extends OwnedStructure {
    /**
     * The amount of energy contained in this structure.
     */
    energy: number;
    /**
     * The total amount of energy this structure can contain.
     */
    energyCapacity: number;
    /**
     * The amount of energy contained in this structure.
     */
    ghodium: number;
    /**
     * The total amount of energy this structure can contain.
     */
    ghodiumCapacity: number;
    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     */
    cooldown: number;
    /**
     * Launch a nuke to the specified position.
     * @param pos The target room position.
     */
    launchNuke(pos: RoomPosition): number;
}
/**
 * A non-player structure.
 * Instantly teleports your creeps to a distant room acting as a room exit tile.
 * Portals appear randomly in the central room of each sector.
 */
declare class StructurePortal extends Structure {
    /**
     * The position object in the destination room.
     */
    destination: RoomPosition;
    /**
     * The amount of game ticks when the portal disappears, or undefined when the portal is stable.
     */
    ticksToDecay: number;
}

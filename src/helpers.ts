interface _HasId {
    id: Id<this>;
}

interface _HasRoomPosition {
    pos: RoomPosition;
}

interface GlobalControlLevel {
    /**
     * The current level.
     */
    level: number;
    /**
     * The current progress to the next level.
     */
    progress: number;
    /**
     * The progress required to reach the next level.
     */
    progressTotal: number;
}

interface GlobalPowerLevel {
    /**
     * The current level.
     */
    level: number;
    /**
     * The current progress to the next level.
     */
    progress: number;
    /**
     * The progress required to reach the next level.
     */
    progressTotal: number;
}

interface Shard {
    /**
     * The name of the shard.
     */
    name: string;
    /**
     * Currently always equals to normal.
     */
    type: "normal";
    /**
     * Whether this shard belongs to the PTR.
     */
    ptr: boolean;
}

interface CPU {
    /**
     * Your assigned CPU limit for the current shard.
     */
    limit: number;
    /**
     * An amount of available CPU time at the current game tick.
     *
     * Usually it is higher than {@link Game.cpu.limit}.
     */
    tickLimit: number;
    /**
     * An amount of unused CPU accumulated in your bucket.
     *
     * @see http://docs.screeps.com/cpu-limit.html#Bucket
     */
    bucket: number;
    /**
     * An object with limits for each shard with shard names as keys.
     *
     * You can use {@link Game.cpu.setShardLimits} method to re-assign them.
     */
    shardLimits: CPUShardLimits;
    /**
     * Whether full CPU is currently unlocked for your account.
     */
    unlocked: boolean;
    /**
     * The time in milliseconds since UNIX epoch time until full CPU is unlocked for your account.
     *
     * This property is not defined when full CPU is not unlocked for your account or it's unlocked with a subscription.
     */
    unlockedTime: number | undefined;

    /**
     * Get amount of CPU time used from the beginning of the current game tick.
     *
     * Always returns 0 in the simulator.
     */
    getUsed(): number;
    /**
     * Allocate CPU limits to different shards.
     *
     * Total amount of CPU should remain equal to {@link Game.cpu.shardLimits}.
     * This method can be used only once per 12 hours.
     *
     * @param limits An object with CPU values for each shard in the same format as {@link Game.cpu.shardLimits}.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_BUSY: 12-hours cooldown period is not over yet.
     * - ERR_INVALID_ARGS: The argument is not a valid shard limits object.
     */
    setShardLimits(limits: CPUShardLimits): OK | ERR_BUSY | ERR_INVALID_ARGS;

    /**
     * Use this method to get heap statistics for your virtual machine.
     *
     * This method will be undefined if you are not using IVM.
     *
     * The return value is almost identical to Node's [v8.getHeapStatistics()](https://nodejs.org/docs/latest-v10.x/api/v8.html#v8_v8_getheapstatistics).
     *
     * This function returns one additional property: externally_allocated_size which is the total amount of currently
     * allocated memory which is not included in the v8 heap but counts against this isolate's memory limit.
     * ArrayBuffer instances over a certain size are externally allocated and will be counted here.
     */
    getHeapStatistics?(): HeapStatistics;

    /**
     * This method will be undefined if you are not using IVM.
     *
     * Reset your runtime environment and wipe all data in heap memory.
     * Player code execution stops immediately.
     */
    halt?(): never;
    /**
     * Generate 1 pixel resource unit for 10000 CPU from your bucket.
     *
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_ENOUGH_RESOURCES: Your bucket does not have enough CPU.
     */
    generatePixel(): OK | ERR_NOT_ENOUGH_RESOURCES;

    /**
     * Unlock full CPU for your account for additional 24 hours.
     *
     * This method will consume 1 CPU unlock bound to your account (See {@link Game.resources}).
     * If full CPU is not currently unlocked for your account, it may take some time (up to 5 minutes) before unlock is applied to your account.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_ENOUGH_RESOURCES: Your account does not have enough cpuUnlock resource.
     * - ERR_FULL: Your CPU is unlocked with a subscription.
     */
    unlock(): OK | ERR_NOT_ENOUGH_RESOURCES | ERR_FULL;
}

interface HeapStatistics {
    total_heap_size: number;
    total_heap_size_executable: number;
    total_physical_size: number;
    total_available_size: number;
    used_heap_size: number;
    heap_size_limit: number;
    malloced_memory: number;
    peak_malloced_memory: number;
    does_zap_garbage: 0 | 1;
    externally_allocated_size: number;
}

/**
 * Describes one part of a creep’s body.
 */
type BodyPartDefinition<T extends BodyPartConstant = BodyPartConstant> = T extends any
    ? {
          /**
           * One of the {@link ResourceConstant RESOURCE_*} constants.
           *
           * If the body part is boosted, this property specifies the mineral type which is used for boosting.
           */
          boost?: keyof (typeof BOOSTS)[T];
          /**
           * One of the body part types constants.
           */
          type: T;
          /**
           * The remaining amount of hit points of this body part.
           */
          hits: number;
      }
    : never;

interface Owner {
    /**
     * The name of the owner user.
     */
    username: string;
}
interface ReservationDefinition {
    username: string;
    ticksToEnd: number;
}
interface SignDefinition {
    username: string;
    text: string;
    time: number;
    datetime: Date;
}

interface CPUShardLimits {
    [shard: string]: number;
}

/** A general purpose Store, which has a limited capacity */
type StoreDefinition = Store<ResourceConstant, false>;

/** A general purpose Store, which has an unlimited capacity */
type StoreDefinitionUnlimited = Store<ResourceConstant, true>;

/**
 * @example
 * {
 *   "1": "W8N4",       // TOP
 *   "3": "W7N3",       // RIGHT
 *   // "5": "W8N2",    // BOTTOM
 *   "7": "W9N3"        // LEFT
 * }
 */
type ExitsInformation = Partial<Record<ExitKey, string>>;

interface AllLookAtTypes {
    [LOOK_CONSTRUCTION_SITES]: ConstructionSite;
    [LOOK_CREEPS]: Creep;
    [LOOK_ENERGY]: Resource<RESOURCE_ENERGY>;
    [LOOK_FLAGS]: Flag;
    [LOOK_MINERALS]: Mineral;
    [LOOK_DEPOSITS]: Deposit;
    [LOOK_NUKES]: Nuke;
    [LOOK_RESOURCES]: Resource;
    [LOOK_SOURCES]: Source;
    [LOOK_STRUCTURES]: AnyStructure;
    [LOOK_TERRAIN]: Terrain;
    [LOOK_TOMBSTONES]: Tombstone;
    [LOOK_POWER_CREEPS]: PowerCreep;
    [LOOK_RUINS]: Ruin;
}

type LookAtTypes = Partial<AllLookAtTypes>;

type LookAtResult<K extends LookConstant = LookConstant> = Pick<LookAtTypes, K> & { type: K };

type LookAtResultWithPos<K extends LookConstant = LookConstant> = LookAtResult<K> & {
    x: number;
    y: number;
};

interface LookAtResultMatrix<K extends LookConstant = LookConstant> {
    [y: number]: {
        [x: number]: Array<LookAtResult<K>>;
    };
}

interface LookForAtAreaResultMatrix<T> {
    [y: number]: {
        [x: number]: T[];
    };
}

type LookForAtAreaResult<T, K extends keyof LookAtTypes = keyof LookAtTypes> = { type: K } & { [P in K]: T };

type LookForAtAreaResultWithPos<T, K extends keyof LookAtTypes = keyof LookAtTypes> = LookForAtAreaResult<T, K> & { x: number; y: number };

type LookForAtAreaResultArray<T, K extends keyof LookAtTypes = keyof LookAtTypes> = Array<LookForAtAreaResultWithPos<T, K>>;

interface FindTypes {
    [key: number]:
        | RoomPosition
        | AnyCreep
        | Source
        | Resource
        | Structure
        | Flag
        | ConstructionSite
        | Mineral
        | Nuke
        | Tombstone
        | Deposit
        | Ruin;
    [FIND_EXIT_TOP]: RoomPosition;
    [FIND_EXIT_RIGHT]: RoomPosition;
    [FIND_EXIT_BOTTOM]: RoomPosition;
    [FIND_EXIT_LEFT]: RoomPosition;
    [FIND_EXIT]: RoomPosition;
    [FIND_CREEPS]: Creep;
    [FIND_MY_CREEPS]: Creep;
    [FIND_HOSTILE_CREEPS]: Creep;
    [FIND_SOURCES_ACTIVE]: Source;
    [FIND_SOURCES]: Source;
    [FIND_DROPPED_RESOURCES]: Resource;
    [FIND_STRUCTURES]: AnyStructure;
    [FIND_MY_STRUCTURES]: AnyOwnedStructure;
    [FIND_HOSTILE_STRUCTURES]: AnyOwnedStructure;
    [FIND_FLAGS]: Flag;
    [FIND_CONSTRUCTION_SITES]: ConstructionSite;
    [FIND_MY_SPAWNS]: StructureSpawn;
    [FIND_HOSTILE_SPAWNS]: StructureSpawn;
    [FIND_MY_CONSTRUCTION_SITES]: ConstructionSite;
    [FIND_HOSTILE_CONSTRUCTION_SITES]: ConstructionSite;
    [FIND_MINERALS]: Mineral;
    [FIND_NUKES]: Nuke;
    [FIND_TOMBSTONES]: Tombstone;
    [FIND_POWER_CREEPS]: PowerCreep;
    [FIND_MY_POWER_CREEPS]: PowerCreep;
    [FIND_HOSTILE_POWER_CREEPS]: PowerCreep;
    [FIND_DEPOSITS]: Deposit;
    [FIND_RUINS]: Ruin;
}

interface FindPathOpts {
    /**
     * Treat squares with creeps as walkable.
     *
     * Can be useful with too many moving creeps around or in some other cases.
     * @default false
     */
    ignoreCreeps?: boolean;

    /**
     * Treat squares with destructible structures (constructed walls, ramparts, spawns, extensions) as walkable.
     *
     * Use this flag when you need to move through a territory blocked by hostile structures.
     * If a creep with an ATTACK body part steps on such a square, it automatically attacks the structure.
     * @default false
     */
    ignoreDestructibleStructures?: boolean;

    /**
     * Ignore road structures.
     *
     * Enabling this option can speed up the search. This is only used when the new PathFinder is enabled.
     *
     * @default false
     */
    ignoreRoads?: boolean;

    /**
     * You can use this callback to modify a CostMatrix for any room during the search.
     *
     * The callback accepts two arguments, roomName and costMatrix. Use the costMatrix instance to make changes to the positions costs.
     * If you return a new matrix from this callback, it will be used instead of the built-in cached one.
     * This option is only used when the new PathFinder is enabled.
     *
     * @param roomName The name of the room.
     * @param costMatrix The current CostMatrix
     * @returns The new CostMatrix to use
     */
    costCallback?: (roomName: string, costMatrix: CostMatrix) => void | CostMatrix;

    /**
     * An array of the room's objects or RoomPosition objects which should be treated as walkable tiles during the search.
     *
     * This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     */
    ignore?: any[] | RoomPosition[];

    /**
     * An array of the room's objects or RoomPosition objects which should be treated as obstacles during the search.
     *
     * This option cannot be used when the new PathFinder is enabled (use costCallback option instead).
     */
    avoid?: any[] | RoomPosition[];

    /**
     * The maximum limit of possible pathfinding operations.
     *
     * You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU.
     * @default 2000
     */
    maxOps?: number;

    /**
     * Weight to apply to the heuristic in the A* formula `F = G + weight * H`.
     *
     * Use this option only if you understand the underlying A* algorithm mechanics!
     * @default 1.2
     */
    heuristicWeight?: number;

    /**
     * If true, the result path will be serialized using {@link Room.serializePath}.
     * @default false
     */
    serialize?: boolean;

    /**
     * The maximum allowed rooms to search.
     *
     * This is only used when the new PathFinder is enabled.
     * @default 16 (also maximum)
     */
    maxRooms?: number;

    /**
     * Path to within (range) tiles of target tile.
     *
     * The default is to path to the tile that the target is on.
     *
     * @default 0
     */
    range?: number;

    /**
     * Cost for walking on plain positions.
     * @default 1
     */
    plainCost?: number;

    /**
     * Cost for walking on swamp positions.
     * @default 5
     */
    swampCost?: number;
}

interface MoveToOpts extends FindPathOpts {
    /**
     * This option enables reusing the path found along multiple game ticks.
     *
     * It allows to save CPU time, but can result in a slightly slower creep reaction behavior.
     * The path is stored into the creep's memory to the `_move` property.
     * The `reusePath` value defines the amount of ticks which the path should be reused for.
     * Increase the amount to save more CPU, decrease to make the movement more consistent.
     * Set to 0 if you want to disable path reusing.
     * @default 5
     */
    reusePath?: number;

    /**
     * If `reusePath` is enabled and this option is set to true, the path will be stored in memory in the short serialized form using {@link Room.serializePath}.
     * @default true
     */
    serializeMemory?: boolean;

    /**
     * Force the use of a cached path.
     *
     * If this option is set to true, `moveTo` method will return `ERR_NOT_FOUND` if there is no memorized path to reuse.
     * This can significantly save CPU time in some cases.
     * @default false
     */
    noPathFinding?: boolean;

    /**
     * Draw a line along the creep’s path using {@link RoomVisual.poly}.
     *
     * You can provide either an empty object or custom style parameters.
     */
    visualizePathStyle?: PolyStyle;
}

interface PathStep {
    x: number;
    dx: number;
    y: number;
    dy: number;
    direction: DirectionConstant;
}

interface _Constructor<T> {
    readonly prototype: T;
}

interface _ConstructorById<T extends _HasId> extends _Constructor<T> {
    new (id: Id<T>): T;
    (id: Id<T>): T;
}

declare namespace Tag {
    const OpaqueTagSymbol: unique symbol;

    class OpaqueTag<T> {
        private [OpaqueTagSymbol]: T;
    }
}

type Id<T extends _HasId> = string & Tag.OpaqueTag<T>;

type fromId<T> = T extends Id<infer R> ? R : never;

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
     * An amount of available CPU time at the current game tick. Usually it is higher than `Game.cpu.limit`.
     */
    tickLimit: number;
    /**
     * An amount of unused CPU accumulated in your bucket.
     * @see http://docs.screeps.com/cpu-limit.html#Bucket
     */
    bucket: number;
    /**
     * An object with limits for each shard with shard names as keys. You can use `setShardLimits` method to re-assign them.
     */
    shardLimits: CPUShardLimits;

    /**
     * Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.
     */
    getUsed(): number;
    /**
     * Allocate CPU limits to different shards. Total amount of CPU should remain equal to `Game.cpu.shardLimits`.
     * This method can be used only once per 12 hours.
     *
     * @param limits An object with CPU values for each shard in the same format as `Game.cpu.shardLimits`.
     * @returns One of the following codes: `OK | ERR_BUSY | ERR_INVALID_ARGS`
     */
    setShardLimits(limits: CPUShardLimits): OK | ERR_BUSY | ERR_INVALID_ARGS;

    /**
     * Use this method to get heap statistics for your virtual machine.
     *
     * This method will be undefined if you are not using IVM.
     *
     * The return value is almost identical to the Node.js function v8.getHeapStatistics().
     * This function returns one additional property: externally_allocated_size which is the total amount of currently
     * allocated memory which is not included in the v8 heap but counts against this isolate's memory limit.
     * ArrayBuffer instances over a certain size are externally allocated and will be counted here.
     */
    getHeapStatistics?(): HeapStatistics;
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
 * An array describing the creep’s body. Each element contains the following properties:
 */
interface BodyPartDefinition {
    /**
     * One of the `RESOURCE_*` constants.
     *
     * If the body part is boosted, this property specifies the mineral type which is used for boosting.
     */
    boost?: ResourceConstant;
    /**
     * One of the body part types constants.
     */
    type: BodyPartConstant;
    /**
     * The remaining amount of hit points of this body part.
     */
    hits: number;
}
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

type StoreDefinition = Partial<Record<_ResourceConstantSansEnergy, number>> & { energy: number };
// type SD<K extends ResourceConstant> = {
//   [P in K]: number;
//   energy: number;
// }

type ExitsInformation = Partial<Record<ExitKey, string>>;

interface AllLookAtTypes {
    constructionSite: ConstructionSite;
    creep: Creep;
    energy: Resource<RESOURCE_ENERGY>;
    exit: any; // TODO what type is this?
    flag: Flag;
    mineral: Mineral;
    nuke: Nuke;
    resource: Resource;
    source: Source;
    structure: Structure;
    terrain: Terrain;
    tombstone: Tombstone;
    powerCreep: PowerCreep;
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

interface LookForAtAreaResultMatrix<T, K extends keyof LookAtTypes = keyof LookAtTypes> {
    [y: number]: {
        [x: number]: Array<LookForAtAreaResult<T, K>>;
    };
}

type LookForAtAreaResult<T, K extends keyof LookAtTypes = keyof LookAtTypes> = { type: K } & { [P in K]: T };

type LookForAtAreaResultWithPos<T, K extends keyof LookAtTypes = keyof LookAtTypes> = LookForAtAreaResult<T, K> & { x: number; y: number };

type LookForAtAreaResultArray<T, K extends keyof LookAtTypes = keyof LookAtTypes> = Array<LookForAtAreaResultWithPos<T, K>>;

interface FindTypes {
    [key: number]: RoomPosition | AnyCreep | Source | Resource | Structure | Flag | ConstructionSite | Mineral | Nuke | Tombstone | Ruin;
    1: RoomPosition; // FIND_EXIT_TOP
    3: RoomPosition; // FIND_EXIT_RIGHT
    5: RoomPosition; // FIND_EXIT_BOTTOM
    7: RoomPosition; // FIND_EXIT_LEFT
    10: RoomPosition; // FIND_EXIT
    101: Creep; // FIND_CREEPS
    102: Creep; // FIND_MY_CREEPS
    103: Creep; // FIND_HOSTILE_CREEPS
    104: Source; // FIND_SOURCES_ACTIVE
    105: Source; // FIND_SOURCES
    106: Resource; // FIND_DROPPED_RESOURCES
    107: AnyStructure; // FIND_STRUCTURES
    108: AnyOwnedStructure; // FIND_MY_STRUCTURES
    109: AnyOwnedStructure; // FIND_HOSTILE_STRUCTURES
    110: Flag; // FIND_FLAGS
    111: ConstructionSite; // FIND_CONSTRUCTION_SITES
    112: StructureSpawn; // FIND_MY_SPAWNS
    113: StructureSpawn; // FIND_HOSTILE_SPAWNS
    114: ConstructionSite; // FIND_MY_CONSTRUCTION_SITES
    115: ConstructionSite; // FIND_HOSTILE_CONSTRUCTION_SITES
    116: Mineral; // FIND_MINERALS
    117: Nuke; // FIND_NUKES
    118: Tombstone; // FIND_TOMBSTONES
    119: PowerCreep; // FIND_POWER_CREEPS
    120: PowerCreep; // FIND_MY_POWER_CREEPS
    121: PowerCreep; // FIND_HOSTILE_POWER_CREEPS
    123: Ruin; // FIND_RUINS
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
    costCallback?(roomName: string, costMatrix: CostMatrix): boolean | CostMatrix;

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

    /**
     * Path to within (range) tiles of target tile. The default is to path to the tile that the target is on (0).
     */
    range?: number;

    /**
     * Cost for walking on plain positions. The default is 1.
     */
    plainCost?: number;

    /**
     * Cost for walking on swamp positions. The default is 5.
     */
    swampCost?: number;
}

interface MoveToOpts extends FindPathOpts {
    /**
     * This option enables reusing the path found along multiple game ticks. It allows to save CPU time, but can result in a slightly
     * slower creep reaction behavior. The path is stored into the creep's memory to the `_move` property. The `reusePath` value defines
     * the amount of ticks which the path should be reused for. The default value is 5. Increase the amount to save more CPU, decrease
     * to make the movement more consistent. Set to 0 if you want to disable path reusing.
     */
    reusePath?: number;

    /**
     * If `reusePath` is enabled and this option is set to true, the path will be stored in memory in the short serialized form using
     * `Room.serializePath`. The default value is true.
     */
    serializeMemory?: boolean;

    /**
     * If this option is set to true, `moveTo` method will return `ERR_NOT_FOUND` if there is no memorized path to reuse. This can
     * significantly save CPU time in some cases. The default value is false.
     */
    noPathFinding?: boolean;

    /**
     * Draw a line along the creep’s path using `RoomVisual.poly`. You can provide either an empty object or custom style parameters.
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

interface _Constructor<T> {
    readonly prototype: T;
}

interface _ConstructorById<T> extends _Constructor<T> {
    new (id: string): T;
    (id: string): T;
}

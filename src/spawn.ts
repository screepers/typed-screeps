/**
 * Spawns are your colony centers.
 *
 * This structure can create, renew, and recycle creeps.
 * All your spawns are accessible through {@link Game.spawns} hash list.
 * Spawns auto-regenerate a little amount of energy each tick, so that you can easily recover even if all your creeps died.
 *
 * | Controller level |          |
 * | ---------------- | -------- |
 * |  1-6             | 1 spawn  |
 * |  7               | 2 spawns |
 * |  8               | 3 spawns |
 *
 * |                               |               |
 * | ----------------------------- | ------------- |
 * | **Cost**                      | 15,000
 * | **Hits**                      | 5,000
 * | **Capacity**                  | 300
 * | **Spawn time**                | 3 ticks per each body part
 * | **Energy auto-regeneration**  | 1 energy unit per tick while energy available | in the room (in all spawns and extensions) is less than 300
 */
interface StructureSpawn extends OwnedStructure<STRUCTURE_SPAWN> {
    readonly prototype: StructureSpawn;
    /**
     * The amount of energy containing in the spawn.
     * @deprecated An alias for .store[RESOURCE_ENERGY].
     */
    energy: number;
    /**
     * The total amount of energy the spawn can contain.
     * @deprecated An alias for .store.getCapacity(RESOURCE_ENERGY).
     */
    energyCapacity: number;
    /**
     * The spawn memory.
     *
     * A shorthand to `Memory.spawns[spawn.name]`. You can use it for quick access the spawn’s specific memory data object.
     *
     * @see http://docs.screeps.com/global-objects.html#Memory-object
     */
    memory: SpawnMemory;
    /**
     * The spawn name.
     *
     * You choose the name upon creating a new spawn, and it cannot be changed later.
     * This name is a hash key to access the spawn via the {@link Game.spawns} object.
     */
    name: string;
    /**
     * If the spawn is in process of spawning a new creep, this object will contain the new creep’s information, or null otherwise.
     */
    spawning: Spawning | null;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store<RESOURCE_ENERGY, false>;
    /**
     * Check if a creep can be created.
     *
     * @deprecated This method is deprecated and will be removed soon. Please use {@link StructureSpawn.spawnCreep} with `dryRun` flag instead.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of the {@link BodyPartConstant} constants:
     * - WORK
     * - MOVE
     * - CARRY
     * - ATTACK
     * - RANGED_ATTACK
     * - HEAL
     * - TOUGH
     * - CLAIM
     * @param name The name of a new creep.
     *
     * It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     *
     * If not defined, a random name will be generated.
     * @returns One of the following codes:
     * - OK: A creep with the given body and name can be created.
     * - ERR_NOT_OWNER: You are not the owner of this spawn.
     * - ERR_NAME_EXISTS: There is a creep with the same name already.
     * - ERR_BUSY: The spawn is already in process of spawning another creep.
     * - ERR_NOT_ENOUGH_ENERGY: The spawn and its extensions contain not enough energy to create a creep with the given body.
     * - ERR_INVALID_ARGS: Body is not properly described.
     * - ERR_RCL_NOT_ENOUGH: Your Room Controller level is insufficient to use this spawn.
     */
    canCreateCreep(body: BodyPartConstant[], name?: string): ScreepsReturnCode;
    /**
     * Start the creep spawning process.
     *
     * @deprecated This method is deprecated and will be removed soon. Please use {@link StructureSpawn.spawnCreep} instead.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of the {@link BodyPartConstant} constants:
     * - WORK
     * - MOVE
     * - CARRY
     * - ATTACK
     * - RANGED_ATTACK
     * - HEAL
     * - TOUGH
     * - CLAIM
     * @param name The name of a new creep.
     *
     * It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     *
     * If not defined, a random name will be generated.
     * @param memory The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
     * @returns The name of a new creep or one of these error codes:
     * - ERR_NOT_OWNER: You are not the owner of this spawn.
     * - ERR_NAME_EXISTS: There is a creep with the same name already.
     * - ERR_BUSY: The spawn is already in process of spawning another creep.
     * - ERR_NOT_ENOUGH_ENERGY: The spawn and its extensions contain not enough energy to create a creep with the given body.
     * - ERR_INVALID_ARGS: Body is not properly described.
     * - ERR_RCL_NOT_ENOUGH: Your Room Controller level is not enough to use this spawn.
     */
    createCreep(body: BodyPartConstant[], name?: string, memory?: CreepMemory): ScreepsReturnCode | string;
    /**
     * Start the creep spawning process. The required energy amount can be withdrawn from all spawns and extensions in the room.
     *
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of the {@link BodyPartConstant} constants:
     * - WORK
     * - MOVE
     * - CARRY
     * - ATTACK
     * - RANGED_ATTACK
     * - HEAL
     * - TOUGH
     * - CLAIM
     * @param name The name of a new creep. It must be a unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     * @param opts An object with additional options for the spawning process.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this spawn.
     * - ERR_NAME_EXISTS: There is a creep with the same name already.
     * - ERR_BUSY: The spawn is already in process of spawning another creep.
     * - ERR_NOT_ENOUGH_ENERGY: The spawn and its extensions contain not enough energy to create a creep with the given body.
     * - ERR_INVALID_ARGS: Body is not properly described or name was not provided.
     * - ERR_RCL_NOT_ENOUGH: Your Room Controller level is insufficient to use this spawn.
     */
    spawnCreep(body: BodyPartConstant[], name: string, opts?: SpawnOptions): ScreepsReturnCode;
    /**
     * Increase the remaining time to live of the target creep.
     *
     * The target should be at adjacent square.
     *
     * The spawn should not be busy with the spawning process.
     *
     * Each execution increases the creep's timer by amount of ticks according to this formula: `floor(600/body_size)`.
     *
     * Energy required for each execution is determined using this formula: `ceil(creep_cost/2.5/body_size)`.
     * @param target The target creep object.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of the spawn, or the creep.
     * - ERR_BUSY: The spawn is spawning another creep.
     * - ERR_NOT_ENOUGH_ENERGY: The spawn does not have enough energy.
     * - ERR_INVALID_TARGET: The specified target object is not a creep, or the creep has CLAIM body part.
     * - ERR_FULL: The target creep's time to live timer is full.
     * - ERR_NOT_IN_RANGE: The target creep is too far away.
     * - ERR_RCL_NOT_ENOUGH: Your Room Controller level is insufficient to use this spawn.
     */
    renewCreep(target: Creep): ScreepsReturnCode;
    /**
     * Kill the creep and drop up to 100% of resources spent on its spawning and boosting depending on remaining life time.
     *
     * The target should be at adjacent square. Energy return is limited to 125 units per body part.
     *
     * @param target The target creep object.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this spawn or the target creep.
     * - ERR_INVALID_TARGET: The specified target object is not a creep.
     * - ERR_NOT_IN_RANGE: The target creep is too far away.
     * - ERR_RCL_NOT_ENOUGH: Your Room Controller level is insufficient to use this spawn.
     */
    recycleCreep(target: Creep): ScreepsReturnCode;
}

interface StructureSpawnConstructor extends _Constructor<StructureSpawn>, _ConstructorById<StructureSpawn> {
    Spawning: SpawningConstructor;
}

declare const StructureSpawn: StructureSpawnConstructor;
declare const Spawn: StructureSpawnConstructor; // legacy alias
// declare type Spawn = StructureSpawn;

interface Spawning {
    readonly prototype: Spawning;

    /**
     * An array with the spawn directions
     *
     * @see http://docs.screeps.com/api/#StructureSpawn.Spawning.setDirections
     */
    directions?: DirectionConstant[];

    /**
     * The name of the creep
     */
    name: string;

    /**
     * Time needed in total to complete the spawning.
     */
    needTime: number;

    /**
     * Remaining time to go.
     */
    remainingTime: number;

    /**
     * A link to the spawn
     */
    spawn: StructureSpawn;

    /**
     * Cancel spawning immediately.
     *
     * Energy spent on spawning is not returned.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this spawn.
     */
    cancel(): ScreepsReturnCode & (OK | ERR_NOT_OWNER);

    /**
     * Set allowed directions the creep can move when spawned.
     *
     * @param directions An array with the spawn directions
     * @return One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this spawn.
     * - ERR_INVALID_ARGS: The directions is array is invalid.
     */
    setDirections(directions: DirectionConstant[]): ScreepsReturnCode & (OK | ERR_NOT_OWNER | ERR_INVALID_ARGS);
}

/**
 * An object with additional options for the spawning process.
 */
interface SpawnOptions {
    /**
     * Memory of the new creep.
     *
     * If provided, it will be immediately stored into Memory.creeps[name].
     */
    memory?: CreepMemory;
    /**
     * Array of spawns/extensions from which to draw energy for the spawning process.
     *
     * Structures will be used according to the array order.
     */
    energyStructures?: Array<StructureSpawn | StructureExtension>;
    /**
     * If dryRun is `true`, the operation will only check if it is possible to create a creep.
     */
    dryRun?: boolean;
    /**
     * Set allowed directions the creep can move when spawned.
     */
    directions?: DirectionConstant[];
}

interface SpawningConstructor extends _Constructor<Spawning> {
    new (id: Id<StructureSpawn>): Spawning;
    (id: Id<StructureSpawn>): Spawning;
}

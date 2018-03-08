/**
 * Spawns are your colony centers. This structure can create, renew, and recycle
 * creeps. All your spawns are accessible through `Game.spawns` hash list.
 * Spawns auto-regenerate a little amount of energy each tick, so that you can
 * easily recover even if all your creeps died.
 */
interface StructureSpawn extends OwnedStructure<STRUCTURE_SPAWN> {
    readonly prototype: StructureSpawn;
    /**
     * The amount of energy containing in the spawn.
     */
    energy: number;
    /**
     * The total amount of energy the spawn can contain
     */
    energyCapacity: number;
    /**
     * A shorthand to `Memory.spawns[spawn.name]`. You can use it for quick access
     * the spawn’s specific memory data object.
     *
     * @see http://docs.screeps.com/global-objects.html#Memory-object
     */
    memory: SpawnMemory;
    /**
     * Spawn's name. You choose the name upon creating a new spawn, and it cannot
     * be changed later. This name is a hash key to access the spawn via the
     * `Game.spawns` object.
     */
    name: string;
    /**
     * If the spawn is in process of spawning a new creep, this object will contain the new creep’s information, or null otherwise.
     */
    spawning: Spawning | null;

    /**
     * Check if a creep can be created.
     *
     * @deprecated This method is deprecated and will be removed soon. Please use `StructureSpawn.spawnCreep` with `dryRun` flag instead.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep.
     *
     * It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     *
     * If not defined, a random name will be generated.
     */
    canCreateCreep(body: BodyPartConstant[], name?: string): ScreepsReturnCode;
    /**
     * Start the creep spawning process.
     *
     * @deprecated This method is deprecated and will be removed soon. Please use `StructureSpawn.spawnCreep` instead.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH, CLAIM
     * @param name The name of a new creep.
     *
     * It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     *
     * If not defined, a random name will be generated.
     * @param memory The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
     * @returns The name of a new creep or one of these error codes:
     * ```
     * ERR_NOT_OWNER            -1  You are not the owner of this spawn.
     * ERR_NAME_EXISTS          -3  There is a creep with the same name already.
     * ERR_BUSY                 -4  The spawn is already in process of spawning another creep.
     * ERR_NOT_ENOUGH_ENERGY    -6  The spawn and its extensions contain not enough energy to create a creep with the given body.
     * ERR_INVALID_ARGS         -10 Body is not properly described.
     * ERR_RCL_NOT_ENOUGH       -14 Your Room Controller level is not enough to use this spawn.
     * ```
     */
    createCreep(body: BodyPartConstant[], name?: string, memory?: CreepMemory): ScreepsReturnCode | string;

    /**
     * Start the creep spawning process. The required energy amount can be withdrawn from all spawns and extensions in the room.
     *
     * @param {BodyPartConstant[]} body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants:
     *  * WORK
     *  * MOVE
     *  * CARRY
     *  * ATTACK
     *  * RANGED_ATTACK
     *  * HEAL
     *  * TOUGH
     *  * CLAIM
     * @param {string} name The name of a new creep. It must be a unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key).
     * @param {{memory?: CreepMemory; energyStructures?: (StructureSpawn | StructureExtension)[]; dryRun?: boolean}} opts An object with additional options for the spawning process.
     * @returns {ScreepsReturnCode} One of the following codes:
     * ```
     * OK                       0   The operation has been scheduled successfully.
     * ERR_NOT_OWNER            -1  You are not the owner of this spawn.
     * ERR_NAME_EXISTS          -3  There is a creep with the same name already.
     * ERR_BUSY                 -4  The spawn is already in process of spawning another creep.
     * ERR_NOT_ENOUGH_ENERGY    -6  The spawn and its extensions contain not enough energy to create a creep with the given body.
     * ERR_INVALID_ARGS         -10 Body is not properly described or name was not provided.
     * ERR_RCL_NOT_ENOUGH       -14 Your Room Controller level is insufficient to use this spawn.
     * ```
     */
    spawnCreep(body: BodyPartConstant[], name: string, opts?: { memory?: CreepMemory, energyStructures?: Array<(StructureSpawn | StructureExtension)>, dryRun?: boolean }): ScreepsReturnCode;

    /**
     * Destroy this spawn immediately.
     */
    destroy(): ScreepsReturnCode;
    /**
     * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the structure will be highlighted with red in the game.
     */
    isActive(): boolean;
    /**
     * Toggle auto notification when the spawn is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): ScreepsReturnCode;
    /**
     * Increase the remaining time to live of the target creep.
     *
     * The target should be at adjacent square.
     *
     * The spawn should not be busy with the spawning process.
     *
     * Each execution increases the creep's timer by amount of ticks according to this formula: floor(500/body_size).
     *
     * Energy required for each execution is determined using this formula: ceil(creep_cost/3/body_size).
     * @param target The target creep object.
     */
    renewCreep(target: Creep): ScreepsReturnCode;
    /**
     * Kill the creep and drop up to 100% of resources spent on its spawning and boosting depending on remaining life time. The target should be at adjacent square.
     * @param target The target creep object.
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
     * @see http://docs.screeps.com/api/#StructureSpawn.Spawning.setDirections
     */
    directions: DirectionConstant[];

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
     * Cancel spawning immediately. Energy spent on spawning is not returned.
     */
    cancel(): ScreepsReturnCode & (OK | ERR_NOT_OWNER);

    /**
     * Set desired directions where the creep should move when spawned.
     * @param directions An array with the spawn directions
     */
    setDirections(directions: DirectionConstant[]): ScreepsReturnCode & (OK | ERR_NOT_OWNER | ERR_INVALID_ARGS);
}

interface SpawningConstructor extends _Constructor<Spawning>, _ConstructorById<Spawning> {
}

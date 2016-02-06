// Updated 2016-02-05
/**
 * Spawns are your colony centers. You can transfer energy into it and create new creeps using createCreep() method.
 */
interface Spawn {
    /**
     * The prototype is stored in the Spawn.prototype global object. You can use it to extend game objects behaviour globally:
     */
    prototype: Spawn;
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
    memory: SpawnMemory;
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
    spawning: {name: string, needTime: number, remainingTime: number};

    /**
     * Check if a creep can be created.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH
     * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     */
    canCreateCreep(body: string[], name?: string): number;
    /**
     * Start the creep spawning process.
     * @param body An array describing the new creep’s body. Should contain 1 to 50 elements with one of these constants: WORK, MOVE, CARRY, ATTACK, RANGED_ATTACK, HEAL, TOUGH
     * @param name The name of a new creep. It should be unique creep name, i.e. the Game.creeps object should not contain another creep with the same name (hash key). If not defined, a random name will be generated.
     * @param memory The memory of a new creep. If provided, it will be immediately stored into Memory.creeps[name].
     */
    createCreep(body: string[], name?: string, memory?: any): number;
    /**
     * Destroy this spawn immediately.
     */
    destroy(): number;
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
     * Transfer the energy from the spawn to a creep.
     * @param target The creep object which energy should be transferred to.
     * @param amount The amount of energy to be transferred. If omitted, all the remaining amount of energy will be used.
     */
    transferEnergy(target: Creep, amount?: number): number;
}
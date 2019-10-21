/**
 * Power Creeps are immortal "heroes" that are tied to your account and can be respawned in any PowerSpawn after death.
 * You can upgrade their abilities ("powers") up to your account Global Power Level (see `Game.gpl`).
 */
interface PowerCreep extends RoomObject {
    /**
     * An object with the creep's cargo contents.
     */
    carry: StoreDefinition;
    /**
     * The total amount of resources the creep can carry.
     */
    carryCapacity: number;
    /**
     * The power creep's class, one of the `POWER_CLASS` constants.
     */
    className: PowerClassConstant;
    /**
     * A timestamp when this creeep is marked to be permanently deleted from the account, or undefined otherwise.
     */
    deleteTime: number | undefined;
    /**
     * The current amount of hit points of the creep.
     */
    hits: number;
    /**
     * The maximum amount of hit points of the creep.
     */
    hitsMax: number;
    /**
     * A unique identifier. You can use `Game.getObjectById` method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * The power creep's level.
     */
    level: number;
    /**
     * A shorthand to `Memory.powerCreeps[creep.name]`. You can use it for quick access to the creep's specific memory data object.
     */
    memory: PowerCreepMemory;
    /**
     * Whether it is your creep or foe.
     */
    my: boolean;
    /**
     * Power creep name. You can choose the name while creating a new power creep, and `rename` it while unspawned. This name is a hash key to access the creep via the `Game.powerCreeps` object.
     */
    name: string;
    /**
     * An object with the creep's owner information.
     */
    owner: Owner;
    /**
     * An object with the creep's available powers.
     */
    powers: PowerCreepPowers;
    /**
     * The text message that the creep was saying at the last tick.
     */
    saying: string;
    /**
     * The name of the shard where the power creeps is spawned, or undefined.
     */
    shard: string | undefined;
    /**
     * The timestamp when spawning or deleting this creep will become available. Undefined if the power creep is spawned in the world.
     * Note: This is a timestamp, not ticks as powerCreeps are not shard dependent.
     */
    spawnCooldownTime: number | undefined;
    /**
     * The remaining amount of game ticks after which the creep will die and become unspawned. Undefined if the creep is not spawned in the world.
     */
    ticksToLive: number | undefined;
    /**
     *
     * @param methodName Cancel the order given during the current game tick.
     */
    cancelOrder(methodName: string): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_FOUND;
    /**
     * Delete the power creep permanently from your account.
     * It should NOT be spawned in the world. The creep is not deleted immediately, but a 24-hour delete time is started (see `deleteTime`).
     * You can cancel deletion by calling `delete(true)`.
     */
    delete(cancel?: boolean): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Drop this resource on the ground.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     */
    drop(resourceType: ResourceConstant, amount?: number): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES;
    /**
     * Enable power usage in this room. The room controller should be at adjacent tile.
     * @param controller The room controller
     */
    enableRoom(controller: StructureController): OK | ERR_NOT_OWNER | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
    /**
     * Move the creep one square in the specified direction or towards a creep that is pulling it.
     *
     * Requires the MOVE body part if not being pulled.
     * @param direction The direction to move in (`TOP`, `TOP_LEFT`...)
     */
    move(direction: DirectionConstant): CreepMoveReturnCode;
    move(target: Creep): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS;
    /**
     * Move the creep using the specified predefined path. Needs the MOVE body part.
     * @param path A path value as returned from Room.findPath or RoomPosition.findPathTo methods. Both array form and serialized string form are accepted.
     */
    moveByPath(path: PathStep[] | RoomPosition[] | string): CreepMoveReturnCode | ERR_NOT_FOUND | ERR_INVALID_ARGS;
    /**
     * Find the optimal path to the target within the same room and move to it.
     * A shorthand to consequent calls of pos.findPathTo() and move() methods.
     * If the target is in another room, then the corresponding exit will be used as a target.
     *
     * Needs the MOVE body part.
     * @param x X position of the target in the room.
     * @param y Y position of the target in the room.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
     */
    moveTo(x: number, y: number, opts?: MoveToOpts): CreepMoveReturnCode | ERR_NO_PATH | ERR_INVALID_TARGET;
    /**
     * Find the optimal path to the target within the same room and move to it.
     * A shorthand to consequent calls of pos.findPathTo() and move() methods.
     * If the target is in another room, then the corresponding exit will be used as a target.
     *
     * Needs the MOVE body part.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more info) or one of the following: reusePath, serializeMemory, noPathFinding
     */
    moveTo(
        target: RoomPosition | { pos: RoomPosition },
        opts?: MoveToOpts,
    ): CreepMoveReturnCode | ERR_NO_PATH | ERR_INVALID_TARGET | ERR_NOT_FOUND;
    /**
     * Toggle auto notification when the creep is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_ARGS;
    /**
     * Pick up an item (a dropped piece of energy). Needs the CARRY body part. The target has to be at adjacent square to the creep or at the same square.
     * @param target The target object to be picked up.
     */
    pickup(target: Resource): CreepActionReturnCode | ERR_FULL;
    /**
     * Rename the power creep. It must not be spawned in the world.
     */
    rename(name: string): OK | ERR_NOT_OWNER | ERR_NAME_EXISTS | ERR_BUSY;
    /**
     * Instantly restore time to live to the maximum using a Power Spawn or a Power Bank nearby. It has to be at adjacent tile.
     * @param target The target structure
     */
    renew(target: StructurePowerBank | StructurePowerSpawn): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
    /**
     * Display a visual speech balloon above the creep with the specified message.
     *
     * The message will disappear after a few seconds. Useful for debugging purposes.
     *
     * Only the creep's owner can see the speech message unless toPublic is true.
     * @param message The message to be displayed. Maximum length is 10 characters.
     * @param set to 'true' to allow other players to see this message. Default is 'false'.
     */
    say(message: string, toPublic?: boolean): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Spawn this power creep in the specified Power Spawn.
     * @param powerSpawn Your Power Spawn structure
     */
    spawn(powerSpawn: StructurePowerSpawn): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_TIRED | ERR_RCL_NOT_ENOUGH;
    /**
     * Kill the power creep immediately. It will not be destroyed permanently, but will become unspawned, so that you can `spawn` it again.
     */
    suicide(): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Transfer resource from the creep to another object. The target has to be at adjacent square to the creep.
     * @param target The target object.
     * @param resourceType One of the RESOURCE_* constants
     * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used.
     */
    transfer(target: AnyCreep | Structure, resourceType: ResourceConstant, amount?: number): ScreepsReturnCode;
    /**
     * Upgrade the creep, adding a new power ability to it or increasing the level of the existing power. You need one free Power Level in your account to perform this action.
     */
    upgrade(power: PowerConstant): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_RESOURCES | ERR_FULL | ERR_INVALID_ARGS;
    /**
     * Apply one of the creep's powers on the specified target.
     */
    usePower(power: PowerConstant, target?: RoomObject): ScreepsReturnCode;
    /**
     * Withdraw resources from a structure.
     *
     * The target has to be at adjacent square to the creep.
     *
     * Multiple creeps can withdraw from the same structure in the same tick.
     *
     * Your creeps can withdraw resources from hostile structures as well, in case if there is no hostile rampart on top of it.
     * @param target The target object.
     * @param resourceType The target One of the RESOURCE_* constants..
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     */
    withdraw(target: Structure | Tombstone | Ruin, resourceType: ResourceConstant, amount?: number): ScreepsReturnCode;
}

interface PowerCreepConstructor extends _Constructor<PowerCreep>, _ConstructorById<PowerCreep> {
    /**
     * A static method to create new Power Creep instance in your account. It will be added in an unspawned state,
     * use spawn method to spawn it in the world.
     *
     * You need one free Power Level in your account to perform this action.
     *
     * @param name The name of the power creep.
     * @param className The class of the new power creep, one of the `POWER_CLASS` constants
     */
    create(name: string, className: PowerClassConstant): OK | ERR_NAME_EXISTS | ERR_NOT_ENOUGH_RESOURCES;
}

declare const PowerCreep: PowerCreepConstructor;

/**
 * Available powers, an object with power ID as a key, and the following properties
 */
interface PowerCreepPowers {
    [powerID: number]: {
        /**
         * Current level of the power
         */
        level: number;
        /**
         * Cooldown ticks remaining, or undefined if the power creep is not spawned in the world.
         */
        cooldown: number | undefined;
    };
}

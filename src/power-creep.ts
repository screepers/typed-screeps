/**
 * Power Creeps are immortal "heroes" that are tied to your account and can be respawned in any PowerSpawn after death.
 *
 * You can upgrade their abilities ("powers") up to your account Global Power Level (see {@link Game.gpl}).
 *
 * |                   |                  |
 * | ----------------- | ---------------- |
 * | **Time to live**  | 5,000
 * | **Hits**          | 1,000 per level
 * | **Capacity**      | 100 per level
 *
 * [Full list of available powers](https://docs.screeps.com/power.html#Powers)
 */
interface PowerCreep extends RoomObject {
    /**
     * An object with the creep's cargo contents.
     * @deprecated An alias for Creep.store.
     */
    carry: StoreDefinition;
    /**
     * The total amount of resources the creep can carry.
     * @deprecated An alias for Creep.store.getCapacity().
     */
    carryCapacity: number;
    /**
     * The power creep's class, one of the {@link PowerClassConstant POWER_CLASS} constants.
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
     * A unique identifier.
     *
     * You can use the {@link Game.getObjectById} to retrieve an object instance by its id.
     */
    id: Id<this>;
    /**
     * The power creep's level.
     */
    level: number;
    /**
     * The power creep's memory.
     *
     * A shorthand to `Memory.powerCreeps[creep.name]`.
     *
     * You can use it for quick access to the creep's specific memory data object.
     */
    memory: PowerCreepMemory;
    /**
     * Whether it is your creep or foe.
     */
    my: boolean;
    /**
     * The power creep name.
     *
     * You can choose the name while creating a new power creep, and `rename` it while unspawned.
     * This name is a hash key to access the creep via the {@link Game.powerCreeps} object.
     */
    name: string;
    /**
     * An object with the creep's owner information.
     */
    owner: Owner;
    /**
     * A Store object that contains cargo of this creep.
     */
    store: StoreDefinition;
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
     * The timestamp when spawning or deleting this creep will become available.
     *
     * Undefined if the power creep is spawned in the world.
     *
     * Note: This is a timestamp, not ticks as powerCreeps are not shard dependent.
     */
    spawnCooldownTime: number | undefined;
    /**
     * The remaining amount of game ticks after which the creep will die and become unspawned.
     *
     * Undefined if the creep is not spawned in the world.
     */
    ticksToLive: number | undefined;
    /**
     * Cancel the order given during the current game tick.
     * @param methodName Cancel the order given during the current game tick.
     * @returns One of the following codes:
     * - OK: The operation has been cancelled successfully.
     * - ERR_NOT_OWNER: You are not the owner of the creep.
     * - ERR_BUSY: The power creep is not spawned in the world.
     * - ERR_NOT_FOUND: The order with the specified name is not found.
     */
    cancelOrder(methodName: string): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_FOUND;
    /**
     * Delete the power creep permanently from your account.
     *
     * It should NOT be spawned in the world.
     * The creep is not deleted immediately, but a 24-hour delete time is started (see {@link PowerCreep.deleteTime}).
     * You can cancel deletion by calling `delete(true)`.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of the creep.
     * - ERR_BUSY: The power creep is spawned in the world.
     */
    delete(cancel?: boolean): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Drop this resource on the ground.
     * @param resourceType One of the {@link ResourceConstant RESOURCE_*} constants.
     * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The power creep is not spawned in the world.
     * - ERR_NOT_ENOUGH_RESOURCES: The creep does not have the given amount of energy.
     * - ERR_INVALID_ARGS: The resourceType is not a valid {@link ResourceConstant RESOURCE_*} constants.
     */
    drop(resourceType: ResourceConstant, amount?: number): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES;
    /**
     * Enable power usage in this room.
     *
     * The room controller should be at adjacent tile.
     * @param controller The room controller
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_INVALID_TARGET: The target is not a controller structure.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     */
    enableRoom(controller: StructureController): OK | ERR_NOT_OWNER | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
    /**
     * Move the creep one square in the specified direction or towards a creep that is pulling it.
     *
     * Requires the MOVE body part if not being pulled.
     * @param direction The direction to move in ({@link DirectionConstant `TOP`, `TOP_LEFT`...})
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The power creep is not spawned in the world.
     * - ERR_NOT_IN_RANGE: The target creep is too far away
     * - ERR_INVALID_ARGS: The provided direction is incorrect.
     */
    move(direction: DirectionConstant): CreepMoveReturnCode;
    move(target: Creep): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS;
    /**
     * Move the creep using the specified predefined path.
     *
     * @param path A path value as returned from {@link Room.findPath} or {@link RoomPosition.findPathTo} methods.
     * Both array form and serialized string form are accepted.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The power creep is not spawned in the world.
     * - ERR_NOT_FOUND: The specified path doesn't match the creep's location.
     * - ERR_INVALID_ARGS: path is not a valid path array.
     */
    moveByPath(path: PathStep[] | RoomPosition[] | string): CreepMoveReturnCode | ERR_NOT_FOUND | ERR_INVALID_ARGS;
    /**
     * Find the optimal path to the target within the same room and move to it.
     *
     * A shorthand to consequent calls of {@link RoomPosition.findPathTo()} and {@link Creep.move()} methods.
     * If the target is in another room, then the corresponding exit will be used as a target.
     *
     * @param x X position of the target in the room.
     * @param y Y position of the target in the room.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param opts An object containing pathfinding options flags (see {@link Room.findPath} for more info) or one of the following: reusePath, serializeMemory, noPathFinding
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_NO_PATH: No path to the target could be found.
     * - ERR_BUSY: The power creep is not spawned in the world.
     * - ERR_NOT_FOUND: The creep has no memorized path to reuse.
     * - ERR_INVALID_TARGET: The target provided is invalid.
     */
    moveTo(x: number, y: number, opts?: MoveToOpts): OK | ERR_NOT_OWNER | ERR_NO_PATH | ERR_BUSY | ERR_NOT_FOUND | ERR_INVALID_TARGET;
    moveTo(
        target: RoomPosition | { pos: RoomPosition },
        opts?: MoveToOpts,
    ): CreepMoveReturnCode | ERR_NO_PATH | ERR_INVALID_TARGET | ERR_NOT_FOUND;
    /**
     * Toggle auto notification when the creep is under attack.
     *
     * The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     * * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The power creep is not spawned in the world.
     * - ERR_INVALID_ARGS: enable argument is not a boolean value.
     */
    notifyWhenAttacked(enabled: boolean): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_ARGS;
    /**
     * Pick up an item (a dropped piece of energy).
     *
     * The target has to be at adjacent square to the creep or at the same square.
     * @param target The target object to be picked up.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The power creep is not spawned in the world.
     * - ERR_INVALID_TARGET: The target is not a valid object to pick up.
     * - ERR_FULL: The creep cannot receive any more resource.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     */
    pickup(target: Resource): CreepActionReturnCode | ERR_FULL;
    /**
     * Rename the power creep.
     *
     * It must not be spawned in the world.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of the creep.
     * - ERR_NAME_EXISTS: A power creep with the specified name already exists.
     * - ERR_BUSY: The power creep is spawned in the world.
     */
    rename(name: string): OK | ERR_NOT_OWNER | ERR_NAME_EXISTS | ERR_BUSY;
    /**
     * Instantly restore time to live to the maximum using a Power Spawn or a Power Bank nearby.
     *
     * It has to be at adjacent tile.
     * @param target The target structure
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The power creep is not spawned in the world.
     * - ERR_INVALID_TARGET: The target is not a valid power bank or power spawn.
     * - ERR_NOT_IN_RANGE: The target is too far away.
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
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The power creep is not spawned in the world.
     */
    say(message: string, toPublic?: boolean): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Spawn this power creep in the specified Power Spawn.
     * @param powerSpawn Your Power Spawn structure
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of the creep or the spawn.
     * - ERR_BUSY: The power creep is already spawned in the world.
     * - ERR_INVALID_TARGET: The specified object is not a Power Spawn.
     * - ERR_TIRED: The power creep cannot be spawned because of the cooldown.
     * - ERR_RCL_NOT_ENOUGH: Room Controller Level insufficient to use the spawn.
     */
    spawn(powerSpawn: StructurePowerSpawn): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_TIRED | ERR_RCL_NOT_ENOUGH;
    /**
     * Kill the power creep immediately.
     *
     * It will not be destroyed permanently, but will become unspawned, so that you can `spawn` it again.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The power creep is not spawned in the world.
     */
    suicide(): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Transfer resource from the creep to another object.
     *
     * The target has to be at adjacent square to the creep.
     * @param target The target object.
     * @param resourceType One of the {@link ResourceConstant RESOURCE_*} constants
     * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used.
     * @returns
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The power creep is not spawned in the world.
     * - ERR_NOT_ENOUGH_RESOURCES: The creep does not have the given amount of resources.
     * - ERR_INVALID_TARGET: The target is not a valid object which can contain the specified resource.
     * - ERR_FULL: The target cannot receive any more resources.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_INVALID_ARGS: The resourceType is not one of the {@link ResourceConstant RESOURCE_*} constants, or the amount is incorrect.
     */
    transfer(target: AnyCreep | Structure, resourceType: ResourceConstant, amount?: number): ScreepsReturnCode;
    /**
     * Upgrade the creep, adding a new power ability to it or increasing the level of the existing power.
     *
     * You need one free Power Level in your account to perform this action.
     * @param power	The power ability to upgrade, one of the {@link PowerConstant PWR_*} constants.
     * @returns
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of the creep.
     * - ERR_NOT_ENOUGH_RESOURCES: You account Power Level is not enough.
     * - ERR_FULL: The specified power cannot be upgraded on this creep's level, or the creep reached the maximum level.
     * - ERR_INVALID_ARGS: The specified power ID is not valid.
     */
    upgrade(power: PowerConstant): OK | ERR_NOT_OWNER | ERR_NOT_ENOUGH_RESOURCES | ERR_FULL | ERR_INVALID_ARGS;
    /**
     * Apply one of the creep's powers on the specified target.
     *
     * @param power The power ability to use, one of the {@link PowerConstant PWR_*} constants.
     * @param target A target object in the room.
     * @returns
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of the creep.
     * - ERR_BUSY: The creep is not spawned in the world.
     * - ERR_NOT_ENOUGH_RESOURCES: The creep doesn't have enough resources to use the power.
     * - ERR_INVALID_TARGET: The specified target is not valid.
     * - ERR_FULL: The target has the same active effect of a higher level.
     * - ERR_NOT_IN_RANGE: The specified target is too far away.
     * - ERR_INVALID_ARGS: Using powers is not enabled on the Room Controller.
     * - ERR_TIRED: The power ability is still on cooldown.
     * - ERR_NO_BODYPART: The creep doesn't have the specified power ability.
     */
    usePower(power: PowerConstant, target?: RoomObject): ScreepsReturnCode;
    /**
     * Withdraw resources from a structure, tombstone, or ruin.
     *
     * The target has to be at adjacent square to the creep.
     *
     * Multiple creeps can withdraw from the same structure in the same tick.
     *
     * Your creeps can withdraw resources from hostile structures as well, in case if there is no hostile rampart on top of it.
     * @param target The target object.
     * @param resourceType The target One of the {@link ResourceConstant RESOURCE_*} constants.
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     * @returns
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep, or there is a hostile rampart on top of the target.
     * - ERR_BUSY: The power creep is not spawned in the world.
     * - ERR_NOT_ENOUGH_RESOURCES: The target does not have the given amount of resources.
     * - ERR_INVALID_TARGET: The target is not a valid object which can contain the specified resource.
     * - ERR_FULL: The creep's carry is full.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_INVALID_ARGS: The resourceType is not one of the {@link ResourceConstant RESOURCE_*} constants, or the amount is incorrect.
     */
    withdraw(target: Structure | Tombstone | Ruin, resourceType: ResourceConstant, amount?: number): ScreepsReturnCode;
}

interface PowerCreepConstructor extends _Constructor<PowerCreep>, _ConstructorById<PowerCreep> {
    /**
     * A static method to create new Power Creep instance in your account.
     *
     * It will be added in an unspawned state, use the {@link PowerCreep.spawn} method to spawn it in the world.
     *
     * You need one free Power Level in your account to perform this action.
     *
     * @param name The name of the power creep.
     * @param className The class of the new power creep, one of the {@link PowerClassConstant POWER_CLASS} constants
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
         * Cooldown ticks remaining
         *
         * Will be undefined if the power creep is not spawned in the world.
         */
        cooldown: number | undefined;
    };
}

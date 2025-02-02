/**
 * Creeps are your units.
 *
 * Creeps can move, harvest energy, construct structures, attack another creeps, and perform other actions.
 * Each creep consists of up to 50 body parts represented by {@link BodyPartConstant}:.
 *
 * | Body part       | Build cost | Effect per one body part
 * | :-------------- | :--------: | :-----------------------
 * | MOVE            | 50         | Decreases fatigue by 2 points per tick.
 * | WORK            | 100        | Harvests 2 energy units from a source per tick.
 * |                 |            | Harvests 1 resource unit from a mineral or a deposit per tick.
 * |                 |            | Builds a structure for 5 energy units per tick.
 * |                 |            | Repairs a structure for 100 hits per tick consuming 1 energy unit per tick.
 * |                 |            | Dismantles a structure for 50 hits per tick returning 0.25 energy unit per tick.
 * |                 |            | Upgrades a controller for 1 energy unit per tick.
 * | CARRY           | 50         | Can contain up to 50 resource units.
 * | ATTACK          | 80         | Attacks another creep/structure with 30 hits per tick in a short-ranged attack.
 * | RANGED_ATTACK   | 150        | Attacks another single creep/structure with 10 hits per tick in a long-range attack up to 3 squares long.
 * |                 |            | Attacks all hostile creeps/structures within 3 squares range with 1-4-10 hits (depending on the range).
 * | HEAL            | 250        | Heals self or another creep restoring 12 hits per tick in short range or 4 hits per tick at a distance.
 * | CLAIM           | 600        | Claims a neutral room controller.
 * |                 |            | Reserves a neutral room controller for 1 tick per body part.
 * |                 |            | Attacks a hostile room controller downgrading its timer by 300 ticks per body parts.
 * |                 |            | Attacks a neutral room controller reservation timer by 1 tick per body parts.
 * |                 |            | A creep with this body part will have a reduced life time of 600 ticks and cannot be renewed.
 * | TOUGH           | 10         | No effect, just additional hit points to the creep's body. Can be boosted to resist damage.
 */
interface Creep extends RoomObject {
    readonly prototype: Creep;

    /**
     * An array describing the creep's body.
     */
    body: BodyPartDefinition[];
    /**
     * An object with the creep's cargo contents.
     * @deprecated Is an alias for Creep.store
     */
    carry: StoreDefinition;
    /**
     * The total amount of resources the creep can carry.
     * @deprecated alias for {@link Creep.store.getCapacity}
     */
    carryCapacity: number;
    /**
     * The movement fatigue indicator.
     *
     * If it is greater than zero, the creep cannot move.
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
     * A unique object identifier.
     *
     * You can use {@link Game.getObjectById} to retrieve an object instance by its `id`.
     */
    id: Id<this>;
    /**
     * A shorthand to `Memory.creeps[creep.name]`.
     *
     * You can use it for quick access the creep’s specific memory data object.
     */
    memory: CreepMemory;
    /**
     * Whether it is your creep or foe.
     */
    my: boolean;
    /**
     * The creep’s name.
     *
     * You can choose the name while creating a new creep, and it cannot be changed later.
     * This name is a hash key to access the creep via the {@link Game.creeps} object.
     */
    name: string;
    /**
     * An object with the creep’s owner info.
     */
    owner: Owner;
    /**
     * The {@link Room} the creep is in.
     *
     * Always defined because creeps give visibility into the room they're in.
     */
    room: Room;
    /**
     * Whether this creep is still being spawned.
     */
    spawning: boolean;
    /**
     * The text message that the creep was saying at the last tick.
     */
    saying: string;
    /**
     * A Store object that contains cargo of this creep.
     */
    store: StoreDefinition;
    /**
     * The remaining amount of game ticks after which the creep will die.
     *
     * Will be `undefined` if the creep is still spawning.
     */
    ticksToLive: number | undefined;
    /**
     * Attack another creep or structure in a short-ranged attack.
     *
     * Needs the ATTACK body part.
     * If the target is inside a rampart, then the rampart is attacked instead.
     *
     * The target has to be at adjacent square to the creep.
     * If the target is a creep with ATTACK body parts and is not inside a rampart, it will
     * automatically hit back at the attacker.
     *
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_INVALID_TARGET: The target is not a valid attackable object.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_NO_BODYPART: There are no ATTACK body parts in this creep’s body.
     */
    attack(target: AnyCreep | Structure): CreepActionReturnCode;
    /**
     * Attack a controller.
     *
     * Decreases the controller's downgrade or reservation timer for 1 tick per every 5 `CLAIM` body parts (so the creep must have at least 5x`CLAIM`).
     *
     * The controller under attack cannot be upgraded for the next 1,000 ticks.
     * The target has to be at adjacent square to the creep.
     *
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_INVALID_TARGET: The target is not a valid owned or reserved controller object.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_TIRED: You have to wait until the next attack is possible.
     * - ERR_NO_BODYPART: There are not enough CLAIM body parts in this creep’s body.
     */
    attackController(target: StructureController): CreepActionReturnCode;
    /**
     * Build a structure at the target construction site using carried energy.
     *
     * Needs WORK and CARRY body parts.
     * The target has to be within 3 squares range of the creep.
     *
     * @param target The target construction site to be built.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_NOT_ENOUGH_RESOURCES: The creep does not have any carried energy.
     * - ERR_INVALID_TARGET: The target is not a valid construction site object or the structure cannot be built here (probably because of a creep at the same square).
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_NO_BODYPART: There are no WORK body parts in this creep’s body.
     */
    build(target: ConstructionSite): CreepActionReturnCode | ERR_NOT_ENOUGH_RESOURCES | ERR_RCL_NOT_ENOUGH;
    /**
     * Cancel the order given during the current game tick.
     * @param methodName The name of a creep's method to be cancelled.
     * @returns One of the following codes:
     * - OK: The operation has been cancelled successfully.
     * - ERR_NOT_FOUND: The order with the specified name is not found.
     */
    cancelOrder(methodName: string): OK | ERR_NOT_FOUND;
    /**
     * Claim a controller.
     *
     * Requires the CLAIM body part.
     * If applied to a neutral controller, claims it under your control.
     * If applied to a hostile controller, decreases its downgrade or reservation timer depending on the CLAIM body parts count.
     *
     * The target has to be at adjacent square to the creep.
     * @param target The target controller object.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_INVALID_TARGET: The target is not a valid neutral controller object.
     * - ERR_FULL: You cannot claim more than 3 rooms in the Novice Area.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_NO_BODYPART: There are no CLAIM body parts in this creep’s body.
     * - ERR_GCL_NOT_ENOUGH: Your Global Control Level is not enough.
     */
    claimController(target: StructureController): CreepActionReturnCode | ERR_FULL | ERR_GCL_NOT_ENOUGH;
    /**
     * Dismantles any structure that can be constructed (even hostile) returning 50% of the energy spent on its repair.
     *
     * Requires the WORK body part.
     * If the creep has an empty CARRY body part, the energy is put into it; otherwise it is dropped on the ground.
     * The target has to be at adjacent square to the creep.
     * @param target The target structure.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_INVALID_TARGET: The target is not a valid structure object.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_NO_BODYPART: There are no WORK body parts in this creep’s body.
     */
    dismantle(target: Structure): CreepActionReturnCode;
    /**
     * Drop this resource on the ground.
     *
     * @param resourceType One of the {@link ResourceConstant RESOURCE_*} constants.
     * @param amount The amount of resource units to be dropped. If omitted, all the available carried amount is used.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_NOT_ENOUGH_RESOURCES: The creep does not have the given amount of resources.
     * - ERR_INVALID_ARGS: The resourceType is not a valid RESOURCE_* constants.
     */
    drop(resourceType: ResourceConstant, amount?: number): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_ENOUGH_RESOURCES;
    /**
     * Add one more available safe mode activation to a room controller.
     *
     * The creep has to be at adjacent square to the target room controller and have 1000 ghodium resource.
     * @param target The target room controller.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_NOT_ENOUGH_RESOURCES: The creep does not have enough ghodium.
     * - ERR_INVALID_TARGET: The target is not a valid controller object.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     */
    generateSafeMode(target: StructureController): CreepActionReturnCode;
    /**
     * Get the quantity of live body parts of the given type.
     *
     * Fully damaged parts do not count.
     * @param type A body part type, one of the {@link BodyPartConstant} constants.
     */
    getActiveBodyparts(type: BodyPartConstant): number;
    /**
     * Harvest energy from the source or resource from minerals or deposits.
     *
     * Needs the WORK body part.
     *
     * If the creep has an empty CARRY body part, the harvested resource is put into it; otherwise it is dropped on the ground.
     *
     * The target has to be at an adjacent square to the creep.
     * @param target The source object to be harvested.
     * @return One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep, or the room controller is owned or reserved by another player.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_NOT_FOUND: Extractor not found. You must build an extractor structure to harvest minerals. Learn more
     * - ERR_NOT_ENOUGH_RESOURCES: The target does not contain any harvestable energy or mineral.
     * - ERR_INVALID_TARGET: The target is not a valid source or mineral object.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_TIRED: The extractor or the deposit is still cooling down.
     * - ERR_NO_BODYPART: There are no WORK body parts in this creep’s body.
     */
    harvest(target: Source | Mineral | Deposit): CreepActionReturnCode | ERR_NOT_FOUND | ERR_NOT_ENOUGH_RESOURCES;
    /**
     * Heal self or another creep.
     *
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     *
     * Needs the HEAL body part.
     *
     * The target has to be at adjacent square to the creep.
     * @param target The target creep object.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_INVALID_TARGET: The target is not a valid creep object.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_NO_BODYPART: There are no HEAL body parts in this creep’s body.
     */
    heal(target: AnyCreep): CreepActionReturnCode;
    /**
     * Move the creep one square in the specified direction or towards a creep that is pulling it.
     *
     * Requires the MOVE body part if not being pulled.
     * @param direction The direction to move in ({@link DirectionConstant `TOP`, `TOP_LEFT`...}).
     * @param creep A creep nearby.
     * @return One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_NOT_IN_RANGE: The target creep is too far away
     * - ERR_INVALID_ARGS: The provided direction is incorrect.
     * - ERR_TIRED: The fatigue indicator of the creep is non-zero.
     * - ERR_NO_BODYPART: There are no MOVE body parts in this creep’s body.
     */
    move(direction: DirectionConstant): CreepMoveReturnCode;
    move(target: Creep): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NOT_IN_RANGE | ERR_INVALID_ARGS;
    /**
     * Move the creep using the specified predefined path.
     *
     * Needs the MOVE body part.
     * @param path A path value as returned from {@link Room.findPath} or {@link RoomPosition.findPathTo} methods. Both array form and serialized string form are accepted.
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
     * Toggle auto notification when the creep is under attack.
     *
     * The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_INVALID_ARGS: enable argument is not a boolean value.
     */
    notifyWhenAttacked(enabled: boolean): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_ARGS;
    /**
     * Pick up an item (a dropped piece of energy).
     *
     * Needs the CARRY body part.
     * The target has to be at adjacent square to the creep or at the same square.
     * @param target The target object to be picked up.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_INVALID_TARGET: The target is not a valid object to pick up.
     * - ERR_FULL: The creep cannot receive any more resource.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_NO_BODYPART: There are no CARRY body parts in this creep’s body.
     */
    pickup(target: Resource): CreepActionReturnCode | ERR_FULL;
    /**
     * Allow another creep to follow this creep.
     *
     * Requires the MOVE body part.
     *
     * The fatigue generated for the target's move will be added to the creep instead of the target.
     * The target must be adjacent to the creep. The creep must move elsewhere, and the target must move towards the creep.
     * @param target The target creep to be pulled.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_INVALID_TARGET: The target provided is invalid.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_NO_BODYPART: There are no MOVE body parts in this creep’s body.
     */
    pull(target: Creep): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE | ERR_NO_BODYPART;
    /**
     * A ranged attack against another creep or structure.
     *
     * Needs the RANGED_ATTACK body part.
     *
     * If the target is inside a rampart, the rampart is attacked instead.
     * The target has to be within 3 squares range of the creep.
     * @param target The target object to be attacked.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_INVALID_TARGET: The target is not a valid attackable object.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_NO_BODYPART: There are no RANGED_ATTACK body parts in this creep’s body.
     */
    rangedAttack(target: AnyCreep | Structure): CreepActionReturnCode;
    /**
     * Heal another creep at a distance.
     *
     * It will restore the target creep’s damaged body parts function and increase the hits counter.
     *
     * Needs the HEAL body part. The target has to be within 3 squares range of the creep.
     * @param target The target creep object.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_INVALID_TARGET: The target is not a valid creep object.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_NO_BODYPART: There are no HEAL body parts in this creep’s body.
     */
    rangedHeal(target: AnyCreep): CreepActionReturnCode;
    /**
     * A ranged attack against all hostile creeps or structures within 3 squares range.
     *
     * Needs the RANGED_ATTACK body part.
     *
     * The attack power depends on the range to each target. Friendly units are not affected.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_NO_BODYPART: There are no RANGED_ATTACK body parts in this creep’s body.
     */
    rangedMassAttack(): OK | ERR_NOT_OWNER | ERR_BUSY | ERR_NO_BODYPART;
    /**
     * Repair a damaged structure using carried energy. Needs the WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     * @param target The target structure to be repaired.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_NOT_ENOUGH_RESOURCES: The creep does not carry any energy.
     * - ERR_INVALID_TARGET: The target is not a valid structure object.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_NO_BODYPART: There are no WORK body parts in this creep’s body.
     */
    repair(target: Structure): CreepActionReturnCode | ERR_NOT_ENOUGH_RESOURCES;
    /**
     * Temporarily block a neutral controller from claiming by other players.
     *
     * Each tick, this command increases the counter of the period during which the controller is unavailable by 1 tick per each CLAIM body part.
     *
     * The maximum reservation period to maintain is 5,000 ticks.
     *
     * The target has to be at adjacent square to the creep....
     * @param target The target controller object to be reserved.
     * @return One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_INVALID_TARGET: The target is not a valid neutral controller object.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_NO_BODYPART: There are no CLAIM body parts in this creep’s body.
     */
    reserveController(target: StructureController): CreepActionReturnCode;
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
     * - ERR_BUSY: The creep is still being spawned.
     */
    say(message: string, toPublic?: boolean): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Sign a controller with a random text visible to all players.
     *
     * This text will appear in the room UI, in the world map, and can be accessed via the API.
     * You can sign unowned and hostile controllers.
     *
     * The target has to be at adjacent square to the creep. Pass an empty string to remove the sign.
     * @param target The target controller object to be signed.
     * @param text The sign text. The maximum text length is 100 characters.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_INVALID_TARGET: The target is not a valid controller object.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     */
    signController(target: StructureController, text: string): OK | ERR_BUSY | ERR_INVALID_TARGET | ERR_NOT_IN_RANGE;
    /**
     * Kill the creep immediately.
     *
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     */
    suicide(): OK | ERR_NOT_OWNER | ERR_BUSY;
    /**
     * Transfer resource from the creep to another object.
     *
     * The target has to be at adjacent square to the creep.
     * @param target The target object.
     * @param resourceType One of the {@link ResourceConstant RESOURCE_*} constants
     * @param amount The amount of resources to be transferred. If omitted, all the available carried amount is used.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_NOT_ENOUGH_RESOURCES: The creep does not have the given amount of resources.
     * - ERR_INVALID_TARGET: The target is not a valid object which can contain the specified resource.
     * - ERR_FULL: The target cannot receive any more resources.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_INVALID_ARGS: The resourceType is not one of the {@link ResourceConstant RESOURCE_*} constants, or the amount is incorrect.
     */
    transfer(target: AnyCreep | Structure, resourceType: ResourceConstant, amount?: number): ScreepsReturnCode;
    /**
     * Upgrade your controller to the next level using carried energy.
     *
     * Upgrading controllers raises your Global Control Level in parallel.
     * Requires WORK and CARRY body parts. The target has to be within 3 squares range of the creep.
     *
     * A fully upgraded level 8 controller can't be upgraded over 15 energy units per tick regardless of creeps abilities.
     * The cumulative effect of all the creeps performing upgradeController in the current tick is taken into account.
     * This limit can be increased by using ghodium mineral boost.
     *
     * Upgrading the controller raises its ticksToDowngrade timer by 100. The timer must be full in order for controller to be levelled up.
     * @param target The target controller object to be upgraded.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep or the target controller.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_NOT_ENOUGH_RESOURCES: The creep does not have any carried energy.
     * - ERR_INVALID_TARGET: The target is not a valid controller object, or the controller upgrading is blocked.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_NO_BODYPART: There are no WORK body parts in this creep’s body.
     */
    upgradeController(target: StructureController): ScreepsReturnCode;
    /**
     * Withdraw resources from a structure, a tombstone or a ruin.
     *
     * The target has to be at adjacent square to the creep. Multiple creeps can withdraw from the same object in the same tick.
     * Your creeps can withdraw resources from hostile structures/tombstones as well, in case if there is no hostile rampart on top of it.
     *
     * This method should not be used to transfer resources between creeps.
     * To transfer between creeps, use the {@link Creep.transfer} method on the original creep.
     *
     * @param target The target object.
     * @param resourceType One of the {@link ResourceConstant RESOURCE_*} constants.
     * @param amount The amount of resources to be transferred. If omitted, all the available amount is used.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of this creep, or there is a hostile rampart on top of the target.
     * - ERR_BUSY: The creep is still being spawned.
     * - ERR_NOT_ENOUGH_RESOURCES: The target does not have the given amount of resources.
     * - ERR_INVALID_TARGET: The target is not a valid object which can contain the specified resource.
     * - ERR_FULL: The creep's carry is full.
     * - ERR_NOT_IN_RANGE: The target is too far away.
     * - ERR_INVALID_ARGS: The resourceType is not one of the {@link ResourceConstant RESOURCE_*} constants, or the amount is incorrect.
     */
    withdraw(target: Structure | Tombstone | Ruin, resourceType: ResourceConstant, amount?: number): ScreepsReturnCode;
}

interface CreepConstructor extends _Constructor<Creep>, _ConstructorById<Creep> {}

declare const Creep: CreepConstructor;

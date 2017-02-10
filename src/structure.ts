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
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
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
     * How many ticks of safe mode are remaining, or undefined.
     */
    safeMode: number | undefined;
    /**
     * Safe mode activations available to use.
     */
    safeModeAvailable: number;
    /**
     * During this period in ticks new safe mode activations will be blocked, undefined if cooldown is inactive.
     */
    safeModeCooldown: number | undefined;
    /**
     * An object with the controller sign info if present
     */
    sign: SignDefinition;
    /**
     * The amount of game ticks when this controller will lose one level. This timer can be reset by using Creep.upgradeController.
     */
    ticksToDowngrade: number;
    /**
     * The amount of game ticks while this controller cannot be upgraded due to attack.
     */
    upgradeBlocked: number;
    /**
     * Activate safe mode if available.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_BUSY, ERR_NOT_ENOUGH_RESOURCES, ERR_TIRED
     */
    activateSafeMode(): number;
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
     * @deprecated
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
    ticksToSpawn: number | undefined;
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
     * @deprecated
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
    setPublic(isPublic: boolean): void;
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
     * @deprecated
     * An alias for storage.transfer(target, RESOURCE_ENERGY, amount).
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
     * @deprecated
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
    /**
     * The amount of game ticks until the next harvest action is possible.
     */
    cooldown: number;
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
    transfer(target: Creep, resourceType: string, amount?: number): number;
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
     * The amount of game ticks when this container will lose some hit points.
     */
    ticksToDecay: number;
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

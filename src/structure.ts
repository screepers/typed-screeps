/**
 * Parent object for structure classes
 */
interface Structure<T extends StructureConstant = StructureConstant> extends RoomObject {
    readonly prototype: Structure;

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
     * If you can get an instance of a Structure, you can see it.
     * If you can see the Structure, you can see the room it's in.
     */
    room: Room;
    /**
     * One of the STRUCTURE_* constants.
     */
    structureType: T;
    /**
     * Destroy this structure immediately.
     */
    destroy(): ScreepsReturnCode;
    /**
     * Check whether this structure can be used. If the room controller level is not enough, then this method will return false, and the structure will be highlighted with red in the game.
     */
    isActive(): boolean;
    /**
     * Toggle auto notification when the structure is under attack. The notification will be sent to your account email. Turned on by default.
     * @param enabled Whether to enable notification or disable.
     */
    notifyWhenAttacked(enabled: boolean): ScreepsReturnCode;
}

interface StructureConstructor extends _Constructor<Structure>, _ConstructorById<Structure> {}

declare const Structure: StructureConstructor;

/**
 * The base prototype for a structure that has an owner. Such structures can be
 * found using `FIND_MY_STRUCTURES` and `FIND_HOSTILE_STRUCTURES` constants.
 */
interface OwnedStructure<T extends StructureConstant = StructureConstant> extends Structure<T> {
    readonly prototype: OwnedStructure;

    /**
     * Whether this is your own structure. Walls and roads don't have this property as they are considered neutral structures.
     */
    my: boolean;
    /**
     * An object with the structure’s owner info (if present) containing the following properties: username
     */
    owner: Owner;
    /**
     * The link to the Room object. Is always present because owned structures give visibility.
     */
    room: Room;
}

interface OwnedStructureConstructor extends _Constructor<OwnedStructure>, _ConstructorById<OwnedStructure> {}

declare const OwnedStructure: OwnedStructureConstructor;

/**
 * Claim this structure to take control over the room. The controller structure
 * cannot be damaged or destroyed. It can be addressed by `Room.controller`
 * property.
 */
interface StructureController extends OwnedStructure<STRUCTURE_CONTROLLER> {
    readonly prototype: StructureController;

    /**
     * Whether using power is enabled in this room.
     *
     * Use `PowerCreep.enableRoom()` to turn powers on.
     */
    isPowerEnabled: boolean;
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
    reservation: ReservationDefinition | undefined;
    /**
     * How many ticks of safe mode are remaining, or undefined.
     */
    safeMode?: number;
    /**
     * Safe mode activations available to use.
     */
    safeModeAvailable: number;
    /**
     * During this period in ticks new safe mode activations will be blocked, undefined if cooldown is inactive.
     */
    safeModeCooldown?: number;
    /**
     * An object with the controller sign info if present
     */
    sign: SignDefinition | undefined;
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
    activateSafeMode(): ScreepsReturnCode;
    /**
     * Make your claimed controller neutral again.
     */
    unclaim(): ScreepsReturnCode;
}

interface StructureControllerConstructor extends _Constructor<StructureController>, _ConstructorById<StructureController> {}

declare const StructureController: StructureControllerConstructor;

/**
 * Contains energy which can be spent on spawning bigger creeps. Extensions can
 * be placed anywhere in the room, any spawns will be able to use them regardless
 * of distance.
 */
interface StructureExtension extends OwnedStructure<STRUCTURE_EXTENSION> {
    readonly prototype: StructureExtension;

    /**
     * The amount of energy containing in the extension.
     * @deprecated An alias for .store[RESOURCE_ENERGY].
     */
    energy: number;
    /**
     * The total amount of energy the extension can contain.
     * @deprecated An alias for .store.getCapacity(RESOURCE_ENERGY).
     */
    energyCapacity: number;

    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store<RESOURCE_ENERGY, false>;
}

interface StructureExtensionConstructor extends _Constructor<StructureExtension>, _ConstructorById<StructureExtension> {}

declare const StructureExtension: StructureExtensionConstructor;

/**
 * Remotely transfers energy to another Link in the same room.
 */
interface StructureLink extends OwnedStructure<STRUCTURE_LINK> {
    readonly prototype: StructureLink;

    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     */
    cooldown: number;
    /**
     * The amount of energy containing in the link.
     * @deprecated An alias for .store[RESOURCE_ENERGY].
     */
    energy: number;
    /**
     * The total amount of energy the link can contain.
     * @deprecated An alias for .store.getCapacity(RESOURCE_ENERGY).
     */
    energyCapacity: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store<RESOURCE_ENERGY, false>;
    /**
     * Transfer energy from the link to another link or a creep.
     *
     * If the target is a creep, it has to be at adjacent square to the link.
     *
     * If the target is a link, it can be at any location in the same room.
     *
     * Remote transfer process implies 3% energy loss and cooldown delay depending on the distance.
     * @param target The target object.
     * @param amount The amount of energy to be transferred. If omitted, all the available energy is used.
     */
    transferEnergy(target: Creep | StructureLink, amount?: number): ScreepsReturnCode;
}

interface StructureLinkConstructor extends _Constructor<StructureLink>, _ConstructorById<StructureLink> {}

declare const StructureLink: StructureLinkConstructor;

/**
 * Non-player structure. Spawns NPC Source Keepers that guards energy sources
 * and minerals in some rooms. This structure cannot be destroyed.
 */
interface StructureKeeperLair extends OwnedStructure<STRUCTURE_KEEPER_LAIR> {
    readonly prototype: StructureKeeperLair;

    /**
     * Time to spawning of the next Source Keeper.
     */
    ticksToSpawn?: number;
}

interface StructureKeeperLairConstructor extends _Constructor<StructureKeeperLair>, _ConstructorById<StructureKeeperLair> {}

declare const StructureKeeperLair: StructureKeeperLairConstructor;

/**
 * Provides visibility into a distant room from your script.
 */
interface StructureObserver extends OwnedStructure<STRUCTURE_OBSERVER> {
    readonly prototype: StructureObserver;

    /**
     * Provide visibility into a distant room from your script. The target room object will be available on the next tick. The maximum range is 5 rooms.
     * @param roomName The room to observe.
     */
    observeRoom(roomName: string): ScreepsReturnCode;
}

interface StructureObserverConstructor extends _Constructor<StructureObserver>, _ConstructorById<StructureObserver> {}

declare const StructureObserver: StructureObserverConstructor;

/**
 * Non-player structure. Contains power resource which can be obtained by destroying the structure. Hits the attacker creep back on each attack.
 */
interface StructurePowerBank extends OwnedStructure<STRUCTURE_POWER_BANK> {
    readonly prototype: StructurePowerBank;

    /**
     * The amount of power containing.
     */
    power: number;
    /**
     * The amount of game ticks when this structure will disappear.
     */
    ticksToDecay: number;
}

interface StructurePowerBankConstructor extends _Constructor<StructurePowerBank>, _ConstructorById<StructurePowerBank> {}

declare const StructurePowerBank: StructurePowerBankConstructor;

/**
 * Non-player structure. Contains power resource which can be obtained by
 * destroying the structure. Hits the attacker creep back on each attack.
 */
interface StructurePowerSpawn extends OwnedStructure<STRUCTURE_POWER_SPAWN> {
    readonly prototype: StructurePowerSpawn;
    /**
     * The amount of energy containing in this structure.
     * @deprecated An alias for .store[RESOURCE_ENERGY].
     */
    energy: number;
    /**
     * The total amount of energy this structure can contain.
     * @deprecated An alias for .store.getCapacity(RESOURCE_ENERGY).
     */
    energyCapacity: number;
    /**
     * The amount of power containing in this structure.
     * @deprecated An alias for .store[RESOURCE_POWER].
     */
    power: number;
    /**
     * The total amount of power this structure can contain.
     * @deprecated An alias for .store.getCapacity(RESOURCE_POWER).
     */
    powerCapacity: number;
    /**
     *
     */
    store: Store<RESOURCE_ENERGY | RESOURCE_POWER, false>;

    /**
     * Register power resource units into your account. Registered power allows to develop power creeps skills. Consumes 1 power resource unit and 50 energy resource units.
     */
    processPower(): ScreepsReturnCode;
}

interface StructurePowerSpawnConstructor extends _Constructor<StructurePowerSpawn>, _ConstructorById<StructurePowerSpawn> {}

declare const StructurePowerSpawn: StructurePowerSpawnConstructor;

/**
 * Blocks movement of hostile creeps, and defends your creeps and structures on
 * the same tile. Can be used as a controllable gate.
 */
interface StructureRampart extends OwnedStructure<STRUCTURE_RAMPART> {
    readonly prototype: StructureRampart;

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
    setPublic(isPublic: boolean): undefined;
}

interface StructureRampartConstructor extends _Constructor<StructureRampart>, _ConstructorById<StructureRampart> {}

declare const StructureRampart: StructureRampartConstructor;

/**
 * Decreases movement cost to 1. Using roads allows creating creeps with less
 * `MOVE` body parts.
 */
interface StructureRoad extends Structure<STRUCTURE_ROAD> {
    readonly prototype: StructureRoad;

    /**
     * The amount of game ticks when this road will lose some hit points.
     */
    ticksToDecay: number;
}

interface StructureRoadConstructor extends _Constructor<StructureRoad>, _ConstructorById<StructureRoad> {}

declare const StructureRoad: StructureRoadConstructor;

/**
 * A structure that can store huge amount of resource units. Only one structure
 * per room is allowed that can be addressed by `Room.storage` property.
 */
interface StructureStorage extends OwnedStructure<STRUCTURE_STORAGE> {
    readonly prototype: StructureStorage;

    /**
     * An object with the storage contents.
     */
    store: GenericStore;
    /**
     * The total amount of resources the storage can contain.
     * @deprecated An alias for .store.getCapacity().
     */
    storeCapacity: number;
}

interface StructureStorageConstructor extends _Constructor<StructureStorage>, _ConstructorById<StructureStorage> {}

declare const StructureStorage: StructureStorageConstructor;

/**
 * Remotely attacks or heals creeps, or repairs structures. Can be targeted to
 * any object in the room. However, its effectiveness highly depends on the
 * distance. Each action consumes energy.
 */
interface StructureTower extends OwnedStructure<STRUCTURE_TOWER> {
    readonly prototype: StructureTower;

    /**
     * The amount of energy containing in this structure.
     * @deprecated An alias for .store[RESOURCE_ENERGY].
     */
    energy: number;
    /**
     * The total amount of energy this structure can contain.
     * @deprecated An alias for .store.getCapacity(RESOURCE_ENERGY).
     */
    energyCapacity: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store<RESOURCE_ENERGY, false>;

    /**
     * Remotely attack any creep in the room. Consumes 10 energy units per tick. Attack power depends on the distance to the target: from 600 hits at range 10 to 300 hits at range 40.
     * @param target The target creep.
     */
    attack(target: AnyCreep): ScreepsReturnCode;
    /**
     * Remotely heal any creep in the room. Consumes 10 energy units per tick. Heal power depends on the distance to the target: from 400 hits at range 10 to 200 hits at range 40.
     * @param target The target creep.
     */
    heal(target: AnyCreep): ScreepsReturnCode;
    /**
     * Remotely repair any structure in the room. Consumes 10 energy units per tick. Repair power depends on the distance to the target: from 600 hits at range 10 to 300 hits at range 40.
     * @param target The target structure.
     */
    repair(target: Structure): ScreepsReturnCode;
}

interface StructureTowerConstructor extends _Constructor<StructureTower>, _ConstructorById<StructureTower> {}

declare const StructureTower: StructureTowerConstructor;

/**
 * Blocks movement of all creeps.
 */
interface StructureWall extends Structure<STRUCTURE_WALL> {
    readonly prototype: StructureWall;
    /**
     * The amount of game ticks when the wall will disappear (only for automatically placed border walls at the start of the game).
     */
    ticksToLive: number;
}

interface StructureWallConstructor extends _Constructor<StructureWall>, _ConstructorById<StructureWall> {}

declare const StructureWall: StructureWallConstructor;

/**
 * Allows to harvest mineral deposits.
 */
interface StructureExtractor extends OwnedStructure<STRUCTURE_EXTRACTOR> {
    readonly prototype: StructureExtractor;
    /**
     * The amount of game ticks until the next harvest action is possible.
     */
    cooldown: number;
}

interface StructureExtractorConstructor extends _Constructor<StructureExtractor>, _ConstructorById<StructureExtractor> {}

declare const StructureExtractor: StructureExtractorConstructor;

/**
 * Produces mineral compounds from base minerals and boosts creeps.
 */
interface StructureLab extends OwnedStructure<STRUCTURE_LAB> {
    readonly prototype: StructureLab;
    /**
     * The amount of game ticks the lab has to wait until the next reaction is possible.
     */
    cooldown: number;
    /**
     * The amount of energy containing in the lab. Energy is used for boosting creeps.
     * @deprecated An alias for .store[RESOURCE_ENERGY].
     */
    energy: number;
    /**
     * The total amount of energy the lab can contain.
     * @deprecated An alias for .store.getCapacity(RESOURCE_ENERGY).
     */
    energyCapacity: number;
    /**
     * The amount of mineral resources containing in the lab.
     * @deprecated An alias for lab.store[lab.mineralType].
     */
    mineralAmount: number;
    /**
     * The type of minerals containing in the lab. Labs can contain only one mineral type at the same time.
     * Null in case there is no mineral resource in the lab.
     */
    mineralType: _ResourceConstantSansEnergy | null;
    /**
     * The total amount of minerals the lab can contain.
     * @deprecated An alias for lab.store.getCapacity(lab.mineralType || yourMineral).
     */
    mineralCapacity: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: GenericStore;
    /**
     * Boosts creep body part using the containing mineral compound. The creep has to be at adjacent square to the lab. Boosting one body part consumes 30 mineral units and 20 energy units.
     * @param creep The target creep.
     * @param bodyPartsCount The number of body parts of the corresponding type to be boosted.
     *
     * Body parts are always counted left-to-right for TOUGH, and right-to-left for other types.
     *
     * If undefined, all the eligible body parts are boosted.
     */
    boostCreep(creep: Creep, bodyPartsCount?: number): ScreepsReturnCode;
    /**
     * Produce mineral compounds using reagents from two another labs. Each lab has to be within 2 squares range. The same input labs can be used by many output labs
     * @param lab1 The first source lab.
     * @param lab2 The second source lab.
     */
    runReaction(lab1: StructureLab, lab2: StructureLab): ScreepsReturnCode;
}

interface StructureLabConstructor extends _Constructor<StructureLab>, _ConstructorById<StructureLab> {}

declare const StructureLab: StructureLabConstructor;

/**
 * Sends any resources to a Terminal in another room.
 */
interface StructureTerminal extends OwnedStructure<STRUCTURE_TERMINAL> {
    readonly prototype: StructureTerminal;
    /**
     * The remaining amount of ticks while this terminal cannot be used to make StructureTerminal.send or Game.market.deal calls.
     */
    cooldown: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: GenericStore;
    /**
     * The total amount of resources the storage can contain.
     * @deprecated An alias for .store.getCapacity().
     */
    storeCapacity: number;
    /**
     * Sends resource to a Terminal in another room with the specified name.
     * @param resourceType One of the RESOURCE_* constants.
     * @param amount The amount of resources to be sent. The minimum amount is 100.
     * @param destination The name of the target room. You don't have to gain visibility in this room.
     * @param description The description of the transaction. It is visible to the recipient. The maximum length is 100 characters.
     */
    send(resourceType: ResourceConstant, amount: number, destination: string, description?: string): ScreepsReturnCode;
}

interface StructureTerminalConstructor extends _Constructor<StructureTerminal>, _ConstructorById<StructureTerminal> {}

declare const StructureTerminal: StructureTerminalConstructor;

/**
 * Contains up to 2,000 resource units. Can be constructed in neutral rooms. Decays for 5,000 hits per 100 ticks.
 */
interface StructureContainer extends Structure<STRUCTURE_CONTAINER> {
    readonly prototype: StructureContainer;
    /**
     * An object with the structure contents. Each object key is one of the RESOURCE_* constants, values are resources
     * amounts. Use _.sum(structure.store) to get the total amount of contents
     */
    store: GenericStore;
    /**
     * The total amount of resources the structure can contain.
     * @deprecated An alias for .store.getCapacity().
     */
    storeCapacity: number;
    /**
     * The amount of game ticks when this container will lose some hit points.
     */
    ticksToDecay: number;
}

interface StructureContainerConstructor extends _Constructor<StructureContainer>, _ConstructorById<StructureContainer> {}

declare const StructureContainer: StructureContainerConstructor;

/**
 * Launches a nuke to another room dealing huge damage to the landing area.
 * Each launch has a cooldown and requires energy and ghodium resources. Launching
 * creates a Nuke object at the target room position which is visible to any player
 * until it is landed. Incoming nuke cannot be moved or cancelled. Nukes cannot
 * be launched from or to novice rooms.
 */
interface StructureNuker extends OwnedStructure<STRUCTURE_NUKER> {
    readonly prototype: StructureNuker;
    /**
     * The amount of energy contained in this structure.
     * @deprecated An alias for .store[RESOURCE_ENERGY].
     */
    energy: number;
    /**
     * The total amount of energy this structure can contain.
     * @deprecated An alias for .store.getCapacity(RESOURCE_ENERGY).
     */
    energyCapacity: number;
    /**
     * The amount of energy contained in this structure.
     * @deprecated An alias for .store[RESOURCE_GHODIUM].
     */
    ghodium: number;
    /**
     * The total amount of energy this structure can contain.
     * @deprecated An alias for .store.getCapacity(RESOURCE_GHODIUM).
     */
    ghodiumCapacity: number;
    /**
     * The amount of game ticks the link has to wait until the next transfer is possible.
     */
    cooldown: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store<RESOURCE_ENERGY | RESOURCE_GHODIUM, false>;
    /**
     * Launch a nuke to the specified position.
     * @param pos The target room position.
     */
    launchNuke(pos: RoomPosition): ScreepsReturnCode;
}

interface StructureNukerConstructor extends _Constructor<StructureNuker>, _ConstructorById<StructureNuker> {}

declare const StructureNuker: StructureNukerConstructor;

/**
 * A non-player structure.
 * Instantly teleports your creeps to a distant room acting as a room exit tile.
 * Portals appear randomly in the central room of each sector.
 */
interface StructurePortal extends Structure<STRUCTURE_PORTAL> {
    readonly prototype: StructurePortal;
    /**
     * If this is an inter-room portal, then this property contains a RoomPosition object leading to the point in the destination room.
     * If this is an inter-shard portal, then this property contains an object with shard and room string properties.
     * Exact coordinates are undetermined, the creep will appear at any free spot in the destination room.
     */
    destination: RoomPosition | { shard: string; room: string };
    /**
     * The amount of game ticks when the portal disappears, or undefined when the portal is stable.
     */
    ticksToDecay: number | undefined;
}

interface StructurePortalConstructor extends _Constructor<StructurePortal>, _ConstructorById<StructurePortal> {}

declare const StructurePortal: StructurePortalConstructor;

/**
 * A discriminated union on Structure.type of all owned structure types
 */
type AnyOwnedStructure =
    | StructureController
    | StructureExtension
    | StructureExtractor
    | StructureKeeperLair
    | StructureLab
    | StructureLink
    | StructureNuker
    | StructureObserver
    | StructurePowerBank
    | StructurePowerSpawn
    | StructureRampart
    | StructureSpawn
    | StructureStorage
    | StructureTerminal
    | StructureTower;

/**
 * A discriminated union on Structure.type of all structure types
 */
type AnyStructure = AnyOwnedStructure | StructureContainer | StructurePortal | StructureRoad | StructureWall;

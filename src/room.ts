/**
 * An object representing the room in which your units and structures are in.
 *
 * It can be used to look around, find paths, etc.
 *
 * Every object in the room contains its linked Room instance in the {@link RoomObject.room} property.
 */
interface Room {
    readonly prototype: Room;

    /**
     * The Controller structure of this room, if present, otherwise undefined.
     */
    controller?: StructureController;
    /**
     * Total amount of energy available in all spawns and extensions in the room.
     */
    energyAvailable: number;
    /**
     * Total amount of energyCapacity of all spawns and extensions in the room.
     */
    energyCapacityAvailable: number;
    /**
     * Returns an array of events happened on the previous tick in this room.
     */
    getEventLog(raw?: false): EventItem[];
    /**
     * Returns an raw JSON string of events happened on the previous tick in this room.
     */
    getEventLog(raw: true): string;
    /**
     * The room's memory.
     *
     * A shorthand to `Memory.rooms[room.name]`. You can use it for quick access the room’s specific memory data object.
     */
    memory: RoomMemory;
    /**
     * One of the `MODE_*` constants.
     */
    mode: string;
    /**
     * The name of the room.
     */
    readonly name: string;
    /**
     * The {@link StructureStorage} of this room, if present, otherwise undefined.
     */
    storage?: StructureStorage;
    /**
     * The {@link StructureTerminal} of this room, if present, otherwise undefined.
     */
    terminal?: StructureTerminal;
    /**
     * A {@link RoomVisual} object for this room.
     *
     * You can use this object to draw simple shapes (lines, circles, text labels) in the room.
     */
    visual: RoomVisual;
    /**
     * Create new {@link ConstructionSite} at the specified location.
     * @param x The X position
     * @param y The Y position
     * @param structureType One of {@link BuildableStructureConstant}.
     * @returns
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: The room is claimed or reserved by a hostile player.
     * - ERR_INVALID_TARGET: The structure cannot be placed at the specified location.
     * - ERR_FULL: You have too many construction sites. The maximum number of construction sites per player is 100.
     * - ERR_INVALID_ARGS: The location is incorrect.
     * - ERR_RCL_NOT_ENOUGH: Room Controller Level insufficient.
     */
    createConstructionSite(
        x: number,
        y: number,
        structureType: BuildableStructureConstant,
    ): OK | ERR_NOT_OWNER | ERR_INVALID_TARGET | ERR_FULL | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
    /**
     * Create new {@link ConstructionSite} at the specified location.
     * @param pos Can be a {@link RoomPosition} object or any object containing RoomPosition.
     * @param structureType One of {@link BuildableStructureConstant}.
     * @returns
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: The room is claimed or reserved by a hostile player.
     * - ERR_INVALID_TARGET: The structure cannot be placed at the specified location.
     * - ERR_FULL: You have too many construction sites. The maximum number of construction sites per player is 100.
     * - ERR_INVALID_ARGS: The location is incorrect.
     * - ERR_RCL_NOT_ENOUGH: Room Controller Level insufficient.
     */
    createConstructionSite(
        pos: RoomPosition | _HasRoomPosition,
        structureType: StructureConstant,
    ): OK | ERR_NOT_OWNER | ERR_INVALID_TARGET | ERR_FULL | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
    /**
     * Create new {@link ConstructionSite} at the specified location.
     * @param x The X position
     * @param y The Y position
     * @param structureType One of {@link BuildableStructureConstant}.
     * @returns
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: The room is claimed or reserved by a hostile player.
     * - ERR_INVALID_TARGET: The structure cannot be placed at the specified location.
     * - ERR_FULL: You have too many construction sites. The maximum number of construction sites per player is 100.
     * - ERR_INVALID_ARGS: The location is incorrect.
     * - ERR_RCL_NOT_ENOUGH: Room Controller Level insufficient.
     */
    createConstructionSite(
        x: number,
        y: number,
        structureType: STRUCTURE_SPAWN,
        name?: string,
    ): OK | ERR_NOT_OWNER | ERR_INVALID_TARGET | ERR_FULL | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
    /**
     * Create new {@link ConstructionSite} at the specified location.
     * @param pos Can be a {@link RoomPosition} object or any object containing RoomPosition.
     * @param structureType One of {@link BuildableStructureConstant}.
     * @returns
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: The room is claimed or reserved by a hostile player.
     * - ERR_INVALID_TARGET: The structure cannot be placed at the specified location.
     * - ERR_FULL: You have too many construction sites. The maximum number of construction sites per player is 100.
     * - ERR_INVALID_ARGS: The location is incorrect.
     * - ERR_RCL_NOT_ENOUGH: Room Controller Level insufficient.
     */
    createConstructionSite(
        pos: RoomPosition | _HasRoomPosition,
        structureType: STRUCTURE_SPAWN,
        name?: string,
    ): OK | ERR_NOT_OWNER | ERR_INVALID_TARGET | ERR_FULL | ERR_INVALID_ARGS | ERR_RCL_NOT_ENOUGH;
    /**
     * Create new {@link Flag} at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param name (optional) The name of a new flag.
     *
     * It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key).
     *
     * If not defined, a random name will be generated.
     *
     * The maximum length is 60 characters.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     * @returns The name of a new flag, or one of the following error codes:
     * - ERR_NAME_EXISTS: There is a flag with the same name already.
     * - ERR_FULL: You have too many flags. The maximum number of flags per player is 10000.
     * - ERR_INVALID_ARGS: The location or the name or the color constant is incorrect.
     */
    createFlag(
        x: number,
        y: number,
        name?: string,
        color?: ColorConstant,
        secondaryColor?: ColorConstant,
    ): ERR_NAME_EXISTS | ERR_FULL | ERR_INVALID_ARGS | string;
    /**
     * Create new {@link Flag} at the specified location.
     * @param pos Can be a {@link RoomPosition} object or any object containing RoomPosition.
     * @param name (optional) The name of a new flag.
     *
     * It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key).
     *
     * If not defined, a random name will be generated.
     *
     * The maximum length is 60 characters.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     * @returns The name of a new flag, or one of the following error codes:
     * - ERR_NAME_EXISTS: There is a flag with the same name already.
     * - ERR_FULL: You have too many flags. The maximum number of flags per player is 10000.
     * - ERR_INVALID_ARGS: The location or the name or the color constant is incorrect.
     */
    createFlag(
        pos: RoomPosition | { pos: RoomPosition },
        name?: string,
        color?: ColorConstant,
        secondaryColor?: ColorConstant,
    ): ERR_NAME_EXISTS | ERR_FULL | ERR_INVALID_ARGS | string;
    /**
     * Find all objects of the specified type in the room.
     * @param type One of the {@link FindConstant} constants.
     * @param opts An object with additional options
     * @returns An array with the objects found.
     */
    find<K extends FindConstant, S extends FindTypes[K]>(type: K, opts?: FilterOptions<FindTypes[K], S>): S[];
    find<S extends AnyStructure>(
        type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES,
        opts?: FilterOptions<FindTypes[FIND_STRUCTURES], S>,
    ): S[];
    /**
     * Find the exit direction en route to another room.
     * @param room Another room name or room object.
     * @returns The room direction constant, one of the following: FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following error codes: ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExitTo(room: string | Room): ExitConstant | ERR_NO_PATH | ERR_INVALID_ARGS;
    /**
     * Find an optimal path inside the room between fromPos and toPos using A* search algorithm.
     * @param fromPos The start position.
     * @param toPos The end position.
     * @param opts (optional) An object containing additional pathfinding flags
     * @returns An array with path steps
     */
    findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[];
    /**
     * Creates a {@link RoomPosition} object at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @returns A RoomPosition object or null if it cannot be obtained.
     */
    getPositionAt(x: number, y: number): RoomPosition | null;
    /**
     * Get a {@link RoomTerrain} object which provides fast access to static terrain data.
     *
     * This method works for any room in the world even if you have no access to it.
     */
    getTerrain(): RoomTerrain;
    /**
     * Get the list of objects at the specified room position.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array with objects at the specified position
     * @throws if `x` or `y` are out of bounds.
     */
    lookAt(x: number, y: number): LookAtResult[];
    /**
     * Get the list of objects at the specified room position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array with objects at the specified position
     */
    lookAt(target: RoomPosition | { pos: RoomPosition }): LookAtResult[];
    /**
     * Get the list of objects at the specified room area.
     *
     * This method is more CPU efficient in comparison to multiple {@link Room.lookAt} calls.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray Set to true if you want to get the result as a plain array.
     * @returns An object with all the objects in the specified area
     */
    lookAtArea(top: number, left: number, bottom: number, right: number, asArray?: false): LookAtResultMatrix;
    lookAtArea(top: number, left: number, bottom: number, right: number, asArray: true): LookAtResultWithPos[];
    /**
     * Get the objects at the given position.
     *
     * @param type One of the {@link LookConstant} constants.
     * @param x The X position.
     * @param y The Y position.
     * @param target A RoomPosition. Its room name will be ignored.
     * @returns An array of objects of the requested type at the given position, or ERR_INVALID_ARGS.
     */
    lookForAt<T extends keyof AllLookAtTypes>(type: T, x: number, y: number): Array<AllLookAtTypes[T]> | ERR_INVALID_ARGS;
    lookForAt<T extends keyof AllLookAtTypes>(type: T, target: RoomPosition | _HasRoomPosition): Array<AllLookAtTypes[T]>;
    /**
     * Get the given objects in the supplied area.
     * @param type One of the {@link LookConstant} constants
     * @param top The top (Y) boundary of the area.
     * @param left The left (X) boundary of the area.
     * @param bottom The bottom (Y) boundary of the area.
     * @param right The right(X) boundary of the area.
     * @param asArray Flatten the results into an array?
     * @returns Either an array of found objects with an x & y property or a nested object keyed by x, then y coordinate.
     */
    lookForAtArea<T extends keyof AllLookAtTypes>(
        type: T,
        top: number,
        left: number,
        bottom: number,
        right: number,
        asArray?: false,
    ): LookForAtAreaResultMatrix<AllLookAtTypes[T]>;
    lookForAtArea<T extends keyof AllLookAtTypes>(
        type: T,
        top: number,
        left: number,
        bottom: number,
        right: number,
        asArray: true,
    ): LookForAtAreaResultArray<AllLookAtTypes[T], T>;
}

interface RoomConstructor extends _Constructor<Room> {
    new (id: string): Room;

    Terrain: RoomTerrainConstructor;

    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     * @param path A path array retrieved from {@link Room.findPath}.
     * @returns A serialized string form of the given path.
     */
    serializePath(path: PathStep[]): string;
    /**
     * Deserialize a short string path representation into an array form.
     * @param path A serialized path string.
     * @returns A path array.
     */
    deserializePath(path: string): PathStep[];
}

declare const Room: RoomConstructor;

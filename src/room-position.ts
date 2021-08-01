/**
 * An object representing the specified position in the room.
 *
 * Every object in the room contains RoomPosition as the pos property.
 *
 * The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 */
interface RoomPosition {
    readonly prototype: RoomPosition;

    /**
     * The name of the room.
     */
    roomName: string;
    /**
     * X position in the room.
     */
    x: number;
    /**
     * Y position in the room.
     */
    y: number;
    /**
     * Create new ConstructionSite at the specified location.
     * @param structureType One of the following constants:
     *  * STRUCTURE_EXTENSION
     *  * STRUCTURE_RAMPART
     *  * STRUCTURE_ROAD
     *  * STRUCTURE_SPAWN
     *  * STRUCTURE_WALL
     *  * STRUCTURE_LINK
     */
    createConstructionSite(structureType: BuildableStructureConstant): ScreepsReturnCode;
    /**
     * Create new ConstructionSite at the specified location.
     * @param structureType One of the following constants:
     *  * STRUCTURE_EXTENSION
     *  * STRUCTURE_RAMPART
     *  * STRUCTURE_ROAD
     *  * STRUCTURE_SPAWN
     *  * STRUCTURE_WALL
     *  * STRUCTURE_LINK
     * @param name The name of the structure, for structures that support it (currently only spawns).
     */
    createConstructionSite(structureType: STRUCTURE_SPAWN, name?: string): ScreepsReturnCode;
    /**
     * Create new Flag at the specified location.
     * @param name The name of a new flag.
     * It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key).
     * If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     * @returns The name of the flag if created, or one of the following error codes: ERR_NAME_EXISTS, ERR_INVALID_ARGS
     */
    createFlag(name?: string, color?: ColorConstant, secondaryColor?: ColorConstant): ERR_NAME_EXISTS | ERR_INVALID_ARGS | string;
    /**
     * Find the object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param type Any of the FIND_* constants.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     * @returns An instance of a RoomObject.
     */
    findClosestByPath<K extends FindConstant, S extends FindTypes[K]>(
        type: K,
        opts?: FindPathOpts & Partial<FilterOptions<K, S>> & { algorithm?: FindClosestByPathAlgorithm },
    ): S | null;
    findClosestByPath<S extends AnyStructure>(
        type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES,
        opts?: FindPathOpts & Partial<FilterOptions<FIND_STRUCTURES, S>> & { algorithm?: FindClosestByPathAlgorithm },
    ): S | null;
    /**
     * Find the object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param objects An array of RoomPositions or objects with a RoomPosition
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     * @returns One of the supplied objects
     */
    findClosestByPath<T extends _HasRoomPosition | RoomPosition>(
        objects: T[],
        opts?: FindPathOpts & { filter?: ((object: T) => boolean) | FilterObject | string; algorithm?: FindClosestByPathAlgorithm },
    ): T | null;
    /**
     * Find the object with the shortest linear distance from the given position.
     * @param type Any of the FIND_* constants.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     */
    findClosestByRange<K extends FindConstant, S extends FindTypes[K]>(type: K, opts?: FilterOptions<K, S>): S | null;
    findClosestByRange<S extends AnyStructure>(
        type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES,
        opts?: FilterOptions<FIND_STRUCTURES, S>,
    ): S | null;
    /**
     * Find the object with the shortest linear distance from the given position.
     * @param objects An array of RoomPositions or objects with a RoomPosition.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     */
    findClosestByRange<T extends _HasRoomPosition | RoomPosition>(objects: T[], opts?: { filter: any | string }): T | null;
    /**
     * Find all objects in the specified linear range.
     * @param type Any of the FIND_* constants.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange<K extends FindConstant, S extends FindTypes[K]>(type: K, range: number, opts?: FilterOptions<K, S>): S[];
    findInRange<S extends AnyStructure>(
        type: FIND_STRUCTURES | FIND_MY_STRUCTURES | FIND_HOSTILE_STRUCTURES,
        range: number,
        opts?: FilterOptions<FIND_STRUCTURES, S>,
    ): S[];
    /**
     * Find all objects in the specified linear range.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange<T extends _HasRoomPosition | RoomPosition>(objects: T[], range: number, opts?: { filter?: any | string }): T[];
    /**
     * Find an optimal path to the specified position using A* search algorithm.
     *
     * This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
     */
    findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];
    /**
     * Find an optimal path to the specified position using A* search algorithm.
     *
     * This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
     */
    findPathTo(target: RoomPosition | _HasRoomPosition, opts?: FindPathOpts): PathStep[];
    /**
     * Get linear direction to the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    getDirectionTo(x: number, y: number): DirectionConstant;
    /**
     * Get linear direction to the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    getDirectionTo(target: RoomPosition | _HasRoomPosition): DirectionConstant;
    /**
     * Get linear range to the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    getRangeTo(x: number, y: number): number;
    /**
     * Get linear range to the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    getRangeTo(target: RoomPosition | { pos: RoomPosition }): number;
    /**
     * Check whether this position is in the given range of another position.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param range The range distance.
     */
    inRangeTo(x: number, y: number, range: number): boolean;
    /**
     * Check whether this position is in the given range of another position.
     * @param toPos The target position.
     * @param range The range distance.
     */
    inRangeTo(target: RoomPosition | { pos: RoomPosition }, range: number): boolean;
    /**
     * Check whether this position is the same as the specified position.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    isEqualTo(x: number, y: number): boolean;
    /**
     * Check whether this position is the same as the specified position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    isEqualTo(target: RoomPosition | { pos: RoomPosition }): boolean;
    /**
     * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    isNearTo(x: number, y: number): boolean;
    /**
     * Check whether this position is on the adjacent square to the specified position. The same as inRangeTo(target, 1).
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     */
    isNearTo(target: RoomPosition | { pos: RoomPosition }): boolean;
    /**
     * Get the list of objects at the specified room position.
     */
    look(): LookAtResult[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, exit, flag, resource, source, structure, terrain
     */
    lookFor<T extends keyof AllLookAtTypes>(type: T): Array<AllLookAtTypes[T]>;
}

interface RoomPositionConstructor extends _Constructor<RoomPosition> {
    /**
     * You can create new RoomPosition object using its constructor.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param roomName The room name.
     */
    new (x: number, y: number, roomName: string): RoomPosition;
    (x: number, y: number, roomName: string): RoomPosition;
}

declare const RoomPosition: RoomPositionConstructor;

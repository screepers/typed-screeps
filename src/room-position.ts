/**
 * An object representing the specified position in the room. Every object in the room contains RoomPosition as the pos property. The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
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
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     */
    createConstructionSite(structureType: StructureConstant): ScreepsReturnCode;
    /**
     * Create new Flag at the specified location.
     * @param name The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(name?: string, color?: ColorConstant, secondaryColor?: ColorConstant): ScreepsReturnCode;
    /**
     * Find the creep with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param type FIND_CREEPS or FIND_MY_CREEPS or FIND_HOSTILE_CREEPS.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     * @returns a Creep.
     */
    findClosestByPath(type: FIND_CREEPS | FIND_MY_CREEPS | FIND_HOSTILE_CREEPS, opts?: FindPathOpts & {filter?: any | string, algorithm?: string}): Creep;
    /**
     * Find the flag with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param type FIND_FLAGS.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     * @returns a Flag.
     */
    findClosestByPath(type: FIND_FLAGS, opts?: FindPathOpts & {filter?: any | string, algorithm?: string}): Flag;
    /**
     * Find the spawn with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param type FIND_MY_SPAWNS or FIND_HOSTILE_SPAWNS.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     * @returns a Spawn.
     */
    findClosestByPath(type: FIND_MY_SPAWNS | FIND_HOSTILE_SPAWNS, opts?: FindPathOpts & {filter?: any | string, algorithm?: string}): StructureSpawn;
    /**
     * Find the source with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param type FIND_SOURCES or FIND_SOURCES_ACTIVE.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     * @returns a Source.
     */
    findClosestByPath(type: FIND_SOURCES | FIND_SOURCES_ACTIVE, opts?: FindPathOpts & {filter?: any | string, algorithm?: string}): Source;
    /**
     * Find the dropped resource with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param type FIND_DROPPED_RESOURCES or FIND_DROPPED_ENERGY.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     * @returns a Resource.
     */
    findClosestByPath(type: FIND_DROPPED_RESOURCES | FIND_DROPPED_ENERGY, opts?: FindPathOpts & {filter?: any | string, algorithm?: string}): Resource;
    /**
     * Find the construction site with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param type FIND_CONSTRUCTION_SITES.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     * @returns a ConstructionSite.
     */
    findClosestByPath(type: FIND_CONSTRUCTION_SITES, opts?: FindPathOpts & {filter?: any | string, algorithm?: string}): ConstructionSite;
    /**
     * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param type See Room.find
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     */
    findClosestByPath<T extends _HasRoomPosition | RoomPosition>(type: FindConstant, opts?: FindPathOpts & { filter?: any | string, algorithm?: string }): T | null;
    /**
     * Find an object with the shortest path from the given position. Uses A* search algorithm and Dijkstra's algorithm.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param opts An object containing pathfinding options (see Room.findPath), or one of the following: filter, algorithm
     */
    findClosestByPath<T extends _HasRoomPosition | RoomPosition>(objects: T[], opts?: FindPathOpts & { filter?: any | string, algorithm?: string }): T;
    /**
     * Find the creep with the shortest linear distance from the given position.
     * @param type FIND_CREEPS or FIND_MY_CREEPS or FIND_HOSTILE_CREEPS.
     * @param opts
     */
    findClosestByRange(type: FIND_CREEPS | FIND_MY_CREEPS | FIND_HOSTILE_CREEPS, opts?: {filter: any | string}): Creep;
    /**
     * Find the flag with the shortest linear distance from the given position.
     * @param type FIND_FLAGS.
     * @param opts
     */
    findClosestByRange(type: FIND_FLAGS, opts?: {filter: any | string}): Flag;
    /**
     * Find the spawn with the shortest linear distance from the given position.
     * @param type FIND_MY_SPAWNS or FIND_HOSTILE_SPAWNS.
     * @param opts
     */
    findClosestByRange(type: FIND_MY_SPAWNS | FIND_HOSTILE_SPAWNS, opts?: {filter: any | string}): StructureSpawn;
    /**
     * Find the source with the shortest linear distance from the given position.
     * @param type FIND_SOURCES or FIND_SOURCES_ACTIVE.
     * @param opts
     */
    findClosestByRange(type: FIND_SOURCES | FIND_SOURCES_ACTIVE, opts?: {filter: any | string}): Source;
    /**
     * Find the dropped resources with the shortest linear distance from the given position.
     * @param type FIND_DROPPED_RESOURCES or FIND_DROPPED_ENERGY.
     * @param opts
     */
    findClosestByRange(type: FIND_DROPPED_RESOURCES | FIND_DROPPED_ENERGY, opts?: {filter: any | string}): Resource;
    /**
     * Find the construction site with the shortest linear distance from the given position.
     * @param type FIND_CONSTRUCTION_SITES.
     * @param opts
     */
    findClosestByRange(type: FIND_CONSTRUCTION_SITES, opts?: {filter: any | string}): ConstructionSite;
    /**
     * Find an object with the shortest linear distance from the given position.
     * @param type See Room.find.
     * @param opts
     */
    findClosestByRange<T extends _HasRoomPosition | RoomPosition>(type: FindConstant, opts?: { filter: any | string }): T | null;
    /**
     * Find an object with the shortest linear distance from the given position.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param opts An object containing one of the following options: filter
     */
    findClosestByRange<T extends _HasRoomPosition | RoomPosition>(objects: T[], opts?: { filter: any | string }): T;
    /**
     * Find all creeps in the specified linear range.
     * @param type FIND_CREEPS or FIND_MY_CREEPS or FIND_HOSTILE_CREEPS.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange(type: FIND_CREEPS | FIND_MY_CREEPS | FIND_HOSTILE_CREEPS, range: number, opts?: {filter: any| string}): Creep[];
    /**
     * Find all flags in the specified linear range.
     * @param type FIND_FLAGS.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange(type: FIND_FLAGS, range: number, opts?: {filter: any| string}): Flag[];
    /**
     * Find all spawns in the specified linear range.
     * @param type FIND_MY_SPAWNS or FIND_HOSTILE_SPAWNS.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange(type: FIND_MY_SPAWNS | FIND_HOSTILE_SPAWNS, range: number, opts?: {filter: any| string}): StructureSpawn[];
    /**
     * Find all sources in the specified linear range.
     * @param type FIND_SOURCES or FIND_SOURCES_ACTIVE.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange(type: FIND_SOURCES | FIND_SOURCES_ACTIVE, range: number, opts?: {filter: any| string}): Source[];
    /**
     * Find all dropped resources in the specified linear range.
     * @param type FIND_DROPPED_RESOURCES or FIND_DROPPED_ENERGY.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange(type: FIND_DROPPED_RESOURCES | FIND_DROPPED_ENERGY, range: number, opts?: {filter: any| string}): Resource[];
    /**
     * Find all construction sites in the specified linear range.
     * @param type FIND_CONSTRUCTION_SITES.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange(type: FIND_CONSTRUCTION_SITES, range: number, opts?: {filter: any| string}): ConstructionSite[];
    findInRange<T extends _HasRoomPosition | RoomPosition>(type: FindConstant, range: number, opts?: { filter?: any | string }): T[];
    /**
     * Find all objects in the specified linear range.
     * @param objects An array of room's objects or RoomPosition objects that the search should be executed against.
     * @param range The range distance.
     * @param opts See Room.find.
     */
    findInRange<T extends _HasRoomPosition | RoomPosition>(objects: T[], range: number, opts?: { filter?: any | string }): T[];
    /**
     * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param opts An object containing pathfinding options flags (see Room.findPath for more details).
     */
    findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];
    /**
     * Find an optimal path to the specified position using A* search algorithm. This method is a shorthand for Room.findPath. If the target is in another room, then the corresponding exit will be used as a target.
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
     * @param toPos The target position.
     * @param range The range distance.
     */
    inRangeTo(target: RoomPosition|{pos: RoomPosition}, range: number): boolean;
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
    lookFor<T extends RoomObject>(type: LookConstant): T[];
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

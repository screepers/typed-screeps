/**
 * An object representing the room in which your units and structures are in. It can be used to look around, find paths, etc. Every object in the room contains its linked Room instance in the room property.
 */
interface Room {
    readonly prototype: Room;

    /**
     * The Controller structure of this room, if present, otherwise undefined.
     */
    controller?: Controller;
    /**
     * Total amount of energy available in all spawns and extensions in the room.
     */
    energyAvailable: number;
    /**
     * Total amount of energyCapacity of all spawns and extensions in the room.
     */
    energyCapacityAvailable: number;
    /**
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
    name: string;
    /**
     * The Storage structure of this room, if present, otherwise undefined.
     */
    storage?: StructureStorage;
    /**
     * The Terminal structure of this room, if present, otherwise undefined.
     */
    terminal?: Terminal;
    /**
     * A RoomVisual object for this room. You can use this object to draw simple shapes (lines, circles, text labels) in the room.
     */
    visual: RoomVisual;
    /**
     * Create new ConstructionSite at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(x: number, y: number, structureType: StructureConstant): ScreepsReturnCode;
    /**
     * Create new ConstructionSite at the specified location.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param structureType One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     * @returns Result Code: OK, ERR_INVALID_TARGET, ERR_INVALID_ARGS, ERR_RCL_NOT_ENOUGH
     */
    createConstructionSite(pos: RoomPosition | _HasRoomPosition, structureType: StructureConstant): ScreepsReturnCode;
    /**
     * Create new Flag at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @param name (optional) The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(x: number, y: number, name?: string, color?: ColorConstant, secondaryColor?: ColorConstant): ScreepsReturnCode;
    /**
     * Create new Flag at the specified location.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @param name (optional) The name of a new flag. It should be unique, i.e. the Game.flags object should not contain another flag with the same name (hash key). If not defined, a random name will be generated.
     * @param color The color of a new flag. Should be one of the COLOR_* constants. The default value is COLOR_WHITE.
     * @param secondaryColor The secondary color of a new flag. Should be one of the COLOR_* constants. The default value is equal to color.
     */
    createFlag(pos: RoomPosition | { pos: RoomPosition }, name?: string, color?: ColorConstant, secondaryColor?: ColorConstant): ScreepsReturnCode;
    /**
     * Find all Creeps in the room.
     * @param type FIND_CREEPS
     * @param opts An object with additional options
     * @returns An array with the objects found.
     */
     find(type: FIND_CREEPS | FIND_MY_CREEPS | FIND_HOSTILE_CREEPS, opts?: { filter: Object | Function | string }): Creep[];
     /**
      * Find all Flags in the room.
      * @param type FIND_FLAGS
      * @param opts An object with additional options
      * @returns An array with the objects found.
      */
     find(type: FIND_FLAGS, opts?: { filter: Object | Function | string }): Flag[];
     /**
      * Find all Spawns in the room.
      * @param type Either FIND_MY_SPAWNS or FIND_HOSTILE_SPAWNS
      * @param opts An object with additional options
      * @returns An array with the objects found.
      */
     find(type: FIND_MY_SPAWNS | FIND_HOSTILE_SPAWNS, opts?: { filter: Object | Function | string }): StructureSpawn[];
     /**
      * Find all Sources in the room.
      * @param type Either FIND_SOURCES or FIND_SOURCES_ACTIVE
      * @param opts An object with additional options
      * @returns An array with the objects found.
      */
     find(type: FIND_SOURCES | FIND_SOURCES_ACTIVE, opts?: { filter: Object | Function | string }): Source[];
     /**
      * Find dropped resources in the room.
      * @param type Either FIND_DROPPED_RESOURCES or FIND_DROPPED_ENERGY
      * @param opts An object with additional options
      * @returns An array with the objects found.
      */
     find(type: FIND_DROPPED_RESOURCES | FIND_DROPPED_ENERGY, opts?: { filter: Object | Function | string }): Resource[];
     /**
      * Find all construction sites in the room.
      * @param type FIND_CONSTRUCTION_SITES
      * @param opts An object with additional options
      * @returns An array with the objects found.
      */
     find(type: FIND_CONSTRUCTION_SITES, opts?: { filter: Object | Function | string }): ConstructionSite[];
     /**
      * Find all objects of the specified type in the room.
      * @param type One of the following constants:FIND_CREEPS, FIND_MY_CREEPS, FIND_HOSTILE_CREEPS, FIND_MY_SPAWNS, FIND_HOSTILE_SPAWNS, FIND_SOURCES, FIND_SOURCES_ACTIVE, FIND_DROPPED_RESOURCES, FIND_DROPPED_ENERGY, FIND_STRUCTURES, FIND_MY_STRUCTURES, FIND_HOSTILE_STRUCTURES, FIND_FLAGS, FIND_CONSTRUCTION_SITES, FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT, FIND_EXIT
      * @param opts An object with additional options
      * @returns An array with the objects found.
      */
     find<T extends _HasRoomPosition | RoomPosition>(type: FindConstant, opts?: { filter: Object | Function | string }): T[];
    /**
     * Find the exit direction en route to another room.
     * @param room Another room name or room object.
     * @returns The room direction constant, one of the following: FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following error codes: ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExitTo(room: string | Room): ScreepsReturnCode | FIND_EXIT_TOP | FIND_EXIT_RIGHT | FIND_EXIT_BOTTOM | FIND_EXIT_LEFT;
    /**
     * Find an optimal path inside the room between fromPos and toPos using A* search algorithm.
     * @param fromPos The start position.
     * @param toPos The end position.
     * @param opts (optional) An object containing additonal pathfinding flags
     * @returns An array with path steps
     */
    findPath(fromPos: RoomPosition, toPos: RoomPosition, opts?: FindPathOpts): PathStep[];
    /**
     * Creates a RoomPosition object at the specified location.
     * @param x The X position.
     * @param y The Y position.
     * @returns A RoomPosition object or null if it cannot be obtained.
     */
    getPositionAt(x: number, y: number): RoomPosition | null;
    /**
     * Get the list of objects at the specified room position.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array with objects at the specified position
     */
    lookAt(x: number, y: number): LookAtResult[];
    /**
     * Get the list of objects at the specified room position.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array with objects at the specified position
     */
    lookAt(target: RoomPosition | { pos: RoomPosition }): LookAtResult[];
    /**
     * Get the list of objects at the specified room area. This method is more CPU efficient in comparison to multiple lookAt calls.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray Set to true if you want to get the result as a plain array.
     * @returns An object with all the objects in the specified area
     */
    lookAtArea(top: number, left: number, bottom: number, right: number, asArray?: boolean): LookAtResultMatrix | LookAtResultWithPos[];
    /**
     * Get the creeps at the given position.
     * @param type LOOK_CREEPS.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of Creep at the given position.
     */
    lookForAt(type: LOOK_CREEPS, x: number, y: number): Creep[];
    /**
     * Get the flags at the given position.
     * @param type LOOK_FLAGS.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of Flag at the given position.
     */
    lookForAt(type: LOOK_FLAGS, x: number, y: number): Flag[];
    /**
     * Get the nukes at the given position.
     * @param type LOOK_NUKES.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of Nuke at the given position.
     */
    lookForAt(type: LOOK_NUKES, x: number, y: number): Nuke[];
    /**
     * Get the dropped energy at the given position.
     * @param type LOOK_ENERGY.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of Resource<RESOURCE_ENERGY> at the given position.
     */
    lookForAt(type: LOOK_ENERGY, x: number, y: number): Array<Resource<RESOURCE_ENERGY>>;
    /**
     * Get the source at the given position.
     * @param type LOOK_NUKES.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of Resource<RESOURCE_ENERGY> at the given position.
     */
    lookForAt(type: LOOK_SOURCES, x: number, y: number): Source[];
    /**
     * Get the terrain at the given position.
     * @param type LOOK_TERRAIN.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of Terrain at the given position.
     */
    lookForAt(type: LOOK_TERRAIN, x: number, y: number): Terrain[];
    /**
     * Get the mineral at the given position.
     * @param type LOOK_MINERALS.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of Mineral at the given position.
     */
    lookForAt(type: LOOK_MINERALS, x: number, y: number): Mineral[];
    /**
     * Get the dropped resources at the given position.
     * @param type LOOK_RESOURCES.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of Resource at the given position.
     */
    lookForAt(type: LOOK_RESOURCES, x: number, y: number): Resource[];
    /**
     * Get the structures at the given position.
     * @param type LOOK_STRUCTURES.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of Structure at the given position.
     */
    lookForAt(type: LOOK_STRUCTURES, x: number, y: number): Structure[];
    /**
     * Get the construction site at the given position.
     * @param type LOOK_CONSTRUCTION_SITES.
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of ConstructionSite at the given position.
     */
    lookForAt(type: LOOK_CONSTRUCTION_SITES, x: number, y: number): ConstructionSite[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param x The X position.
     * @param y The Y position.
     * @returns An array of objects of the given type at the specified position if found.
     */
    lookForAt<T extends _HasRoomPosition>(type: LookConstant, x: number, y: number): T[];
    /**
     * Get the Creeps at the given RoomPosition.
     * @param type LOOK_CREEPS.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of Creeps at the specified position if found.
     */
    lookForAt(type: LOOK_CREEPS, target: RoomPosition | _HasRoomPosition): Creep[];
    /**
     * Get the Flags at the given RoomPosition.
     * @param type LOOK_FLAGS.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of Creeps at the specified position if found.
     */
    lookForAt(type: LOOK_FLAGS, target: RoomPosition | _HasRoomPosition): Flag[];
    /**
     * Get the Nukes at the given RoomPosition.
     * @param type LOOK_NUKES.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of Nukes at the specified position if found.
     */
    lookForAt(type: LOOK_NUKES, target: RoomPosition | _HasRoomPosition): Nuke[];
    /**
     * Get the dropped energy at the given RoomPosition.
     * @param type LOOK_ENERGY.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of Resource<RESOURCE_ENERGY> at the specified position if found.
     */
    lookForAt(type: LOOK_ENERGY, target: RoomPosition | _HasRoomPosition): Array<Resource<RESOURCE_ENERGY>>;
    /**
     * Get the Sources at the given RoomPosition.
     * @param type LOOK_SOURCES.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of Sources at the specified position if found.
     */
    lookForAt(type: LOOK_SOURCES, target: RoomPosition | _HasRoomPosition): Source[];
    /**
     * Get the Terrain at the given RoomPosition.
     * @param type LOOK_TERRAIN.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of Terrain at the specified position if found.
     */
    lookForAt(type: LOOK_TERRAIN, target: RoomPosition | _HasRoomPosition): Terrain[];
    /**
     * Get the Mineral at the given RoomPosition.
     * @param type LOOK_MINERALS.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of Mineral at the specified position if found.
     */
    lookForAt(type: LOOK_MINERALS, target: RoomPosition | _HasRoomPosition): Mineral[];
    /**
     * Get the Resources at the given RoomPosition.
     * @param type LOOK_RESOURCES.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of Resource at the specified position if found.
     */
    lookForAt(type: LOOK_RESOURCES, target: RoomPosition | _HasRoomPosition): Resource[];
    /**
     * Get the Structures at the given RoomPosition.
     * @param type LOOK_STRUCTURES.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of Structures at the specified position if found.
     */
    lookForAt(type: LOOK_STRUCTURES, target: RoomPosition | _HasRoomPosition): Structure[];
    /**
     * Get the Construction Sites at the given RoomPosition.
     * @param type LOOK_CONSTRUCTION_SITES.
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of ConstructionSites at the specified position if found.
     */
    lookForAt(type: LOOK_CONSTRUCTION_SITES, target: RoomPosition | _HasRoomPosition): ConstructionSite[];
    /**
     * Get an object with the given type at the specified room position.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param target Can be a RoomPosition object or any object containing RoomPosition.
     * @returns An array of objects of the given type at the specified position if found.
     */
    lookForAt<T extends _HasRoomPosition>(type: LookConstant, target: RoomPosition | { pos: RoomPosition }): T[];
    /**
     * Get the creeps in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_CREEPS.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to false returns a matrix of results
     * @returns An object with all creeps in the specified area
     */
    lookForAtArea(type: LOOK_CREEPS, top: number, left: number, bottom: number, right: number, asArray?: false): LookForAtAreaResultMatrix<Creep, LOOK_CREEPS>;
    /**
     * Get the flags in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_FLAGS.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to false returns a matrix of results
     * @returns An object with all Flags in the specified area
     */
    lookForAtArea(type: LOOK_FLAGS, top: number, left: number, bottom: number, right: number, asArray?: false): LookForAtAreaResultMatrix<Flag, LOOK_FLAGS>;
    /**
     * Get the nukes in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_NUKES.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to false returns a matrix of results
     * @returns An object with all Nukes in the specified area
     */
    lookForAtArea(type: LOOK_NUKES, top: number, left: number, bottom: number, right: number, asArray?: false): LookForAtAreaResultMatrix<Nuke, LOOK_NUKES>;
    /**
     * Get the dropped energy in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_ENERGY.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to false returns a matrix of results
     * @returns An object with all Resource<RESOURCE_ENERGY> in the specified area
     */
    lookForAtArea(type: LOOK_ENERGY, top: number, left: number, bottom: number, right: number, asArray?: false): LookForAtAreaResultMatrix<Resource<RESOURCE_ENERGY>, LOOK_ENERGY>;
    /**
     * Get the sources in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_SOURCES.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to false returns a matrix of results
     * @returns An object with all Sources in the specified area
     */
    lookForAtArea(type: LOOK_SOURCES, top: number, left: number, bottom: number, right: number, asArray?: false): LookForAtAreaResultMatrix<Source, LOOK_SOURCES>;
    /**
     * Get the terrain in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_TERRAIN.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to false returns a matrix of results
     * @returns An object with all Terrain in the specified area
     */
    lookForAtArea(type: LOOK_TERRAIN, top: number, left: number, bottom: number, right: number, asArray?: false): LookForAtAreaResultMatrix<Terrain, LOOK_TERRAIN>;
    /**
     * Get the minerals in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_MINERALS.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to false returns a matrix of results
     * @returns An object with all Minerals in the specified area
     */
    lookForAtArea(type: LOOK_MINERALS, top: number, left: number, bottom: number, right: number, asArray?: false): LookForAtAreaResultMatrix<Mineral, LOOK_MINERALS>;
    /**
     * Get the resources in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_RESOURCES.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to false returns a matrix of results
     * @returns An object with all Resources in the specified area
     */
    lookForAtArea(type: LOOK_RESOURCES, top: number, left: number, bottom: number, right: number, asArray?: false): LookForAtAreaResultMatrix<Resource, LOOK_RESOURCES>;
    /**
     * Get the structures in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_STRUCTURES.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to false returns a matrix of results
     * @returns An object with all Structures in the specified area
     */
    lookForAtArea(type: LOOK_STRUCTURES, top: number, left: number, bottom: number, right: number, asArray?: false): LookForAtAreaResultMatrix<Structure, LOOK_STRUCTURES>;
    /**
     * Get the construction sites in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_CONSTRUCTION_SITES.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to false returns a matrix of results
     * @returns An object with all ConstructionSites in the specified area
     */
    lookForAtArea(type: LOOK_CONSTRUCTION_SITES, top: number, left: number, bottom: number, right: number, asArray?: false): LookForAtAreaResultMatrix<ConstructionSite, LOOK_CONSTRUCTION_SITES>;
    /**
     * Get the creeps in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_CREEPS.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to true retuns the same as lookForAt with an additional x and y property in each object.
     * @returns An array with all Creeps in the specified area
     */
    lookForAtArea(type: LOOK_CREEPS, top: number, left: number, bottom: number, right: number, asArray: true): LookForAtAreaResultArray<Creep, LOOK_CREEPS>;
    /**
     * Get the flags in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_FLAGS.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to true retuns the same as lookForAt with an additional x and y property in each object.
     * @returns An array with all Flags in the specified area
     */
    lookForAtArea(type: LOOK_FLAGS, top: number, left: number, bottom: number, right: number, asArray: true): LookForAtAreaResultArray<Flag, LOOK_FLAGS>;
    /**
     * Get the nukes in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_NUKES.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to true retuns the same as lookForAt with an additional x and y property in each object.
     * @returns An array with all Nukes in the specified area
     */
    lookForAtArea(type: LOOK_NUKES, top: number, left: number, bottom: number, right: number, asArray: true): LookForAtAreaResultArray<Nuke, LOOK_NUKES>;
    /**
     * Get the dropped energy in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_ENERGY.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to true retuns the same as lookForAt with an additional x and y property in each object.
     * @returns An array with all Resource<RESOURCE_ENERGY> in the specified area
     */
    lookForAtArea(type: LOOK_ENERGY, top: number, left: number, bottom: number, right: number, asArray: true): LookForAtAreaResultArray<Resource<RESOURCE_ENERGY>, LOOK_ENERGY>;
    /**
     * Get the sources in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_SOURCES.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to true retuns the same as lookForAt with an additional x and y property in each object.
     * @returns An array with all Sources in the specified area
     */
    lookForAtArea(type: LOOK_SOURCES, top: number, left: number, bottom: number, right: number, asArray: true): LookForAtAreaResultArray<Source, LOOK_SOURCES>;
    /**
     * Get the terrain in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_TERRAIN.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to true retuns the same as lookForAt with an additional x and y property in each object.
     * @returns An array with all Terrain in the specified area
     */
    lookForAtArea(type: LOOK_TERRAIN, top: number, left: number, bottom: number, right: number, asArray: true): LookForAtAreaResultArray<Terrain, LOOK_TERRAIN>;
    /**
     * Get the terrain in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_TERRAIN.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to true retuns the same as lookForAt with an additional x and y property in each object.
     * @returns An array with all Terrain in the specified area
     */
    lookForAtArea(type: LOOK_MINERALS, top: number, left: number, bottom: number, right: number, asArray: true): LookForAtAreaResultArray<Mineral, LOOK_MINERALS>;
    /**
     * Get the resources in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_RESOURCES.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to true retuns the same as lookForAt with an additional x and y property in each object.
     * @returns An array with all Resource> in the specified area
     */
    lookForAtArea(type: LOOK_RESOURCES, top: number, left: number, bottom: number, right: number, asArray: true): LookForAtAreaResultArray<Resource, LOOK_RESOURCES>;
    /**
     * Get the structures in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_STRUCTURES.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to true retuns the same as lookForAt with an additional x and y property in each object.
     * @returns An array with all Structures in the specified area
     */
    lookForAtArea(type: LOOK_STRUCTURES, top: number, left: number, bottom: number, right: number, asArray: true): LookForAtAreaResultArray<Structure, LOOK_STRUCTURES>;
    /**
     * Get the construction sites in the given area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type LOOK_CONSTRUCTION_SITES.
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @param asArray (optional) set to true retuns the same as lookForAt with an additional x and y property in each object.
     * @returns An array with all ConstructionSites in the specified area
     */
    lookForAtArea(type: LOOK_CONSTRUCTION_SITES, top: number, left: number, bottom: number, right: number, asArray: true): LookForAtAreaResultArray<ConstructionSite, LOOK_CONSTRUCTION_SITES>;
    /**
     * Get the list of objects with the given type at the specified room area. This method is more CPU efficient in comparison to multiple lookForAt calls.
     * @param type One of the following string constants: constructionSite, creep, energy, exit, flag, source, structure, terrain
     * @param top The top Y boundary of the area.
     * @param left The left X boundary of the area.
     * @param bottom The bottom Y boundary of the area.
     * @param right The right X boundary of the area.
     * @returns An object with all the objects of the given type in the specified area
     */
    lookForAtArea<T extends LookConstant = LookConstant>(type: T, top: number, left: number, bottom: number, right: number, asArray?: boolean): LookAtResultMatrix<T> | Array<LookAtResultWithPos<T>>;

    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     * @param path A path array retrieved from Room.findPath.
     * @returns A serialized string form of the given path.
     */

    /**
     * Deserialize a short string path representation into an array form.
     * @param path A serialized path string.
     * @returns A path array.
     */
}

interface RoomConstructor {
    new (id: string): Room;
    /**
     * Serialize a path array into a short string representation, which is suitable to store in memory.
     * @param path A path array retrieved from `Room.findPath`.
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

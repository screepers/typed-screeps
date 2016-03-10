// Updated 2016-02-05
/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 */
interface Map {
    prototype: Map;
    /**
     * List all exits available from the room with the given name.
     * @param roomName The room name.
     * @returns The exits information or null if the room not found.
     */
    describeExits(roomName: string): {"1": string, "3": string, "5": string, "7": string};
    /**
     * Find the exit direction from the given room en route to another room.
     * @param fromRoom Start room name or room object.
     * @param toRoom Finish room name or room object.
     * @return The room direction constant, one of the following:
     * FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following Result codes:
     * ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExit(fromRoom: string|Room, toRoom: string|Room): string|number;
    /**
     * Find route from the given room to another room.
     * @param fromRoom Start room name or room object.
     * @param toRoom Finish room name or room object.
     * @returns the route array or ERR_NO_PATH code
     */
    findRoute(fromRoom: string|Room, toRoom: string|Room): [{exit: string, room: string}]|number;
    /**
     * Check if the room with the given name is protected by temporary "newbie" walls.
     * @param roomName The room name.
     */
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param roomName The room name.
     */
    getTerrainAt(x: number, y: number, roomName: string): string;
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param pos The position object.
     */
    getTerrainAt(pos: RoomPosition): string;

    isRoomProtected(roomName: string): boolean
}
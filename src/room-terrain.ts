/**
 * Result of Object that contains all terrain for a room
 */
interface RoomTerrain {
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @return number Number of terrain mask like: TERRAIN_MASK_SWAMP | TERRAIN_MASK_WALL
     */
    get(x: number, y: number): 0 | TERRAIN_MASK_WALL | TERRAIN_MASK_SWAMP;
    /**
     * Get copy of underlying static terrain buffer.
     * @param destinationArray (optional) A typed array view in which terrain will be copied to.
     * @throws {RangeError} if `destinationArray` is provided, it must have a length of at least 2500 (`50*50`).
     * @return Copy of underlying room terrain as a new typed array of size 2500.
     */
    getRawBuffer<T extends TypedArray>(destinationArray: T): T;
    getRawBuffer(): Uint8Array;
}

interface RoomTerrainConstructor extends _Constructor<RoomTerrain> {
    /**
     * Get room terrain for the specified room. This method works for any room in the world even if you have no access to it.
     * @param roomName String name of the room.
     */
    new (roomName: string): RoomTerrain;
}

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
     * @return Uint8Array Copy of underlying room terrain as a new Uint8Array typed array of size 2500.
     */
    getRawBuffer(destinationArray?: Uint8Array): Uint8Array;
}

interface RoomTerrainConstructor extends _Constructor<RoomTerrain> {
    /**
     * Get room terrain for the specified room. This method works for any room in the world even if you have no access to it.
     * @param roomName String name of the room.
     */
    new (roomName: string): RoomTerrain;
}

/**
 * An object which provides fast access to room terrain data.
 *
 * These objects can be constructed for any room in the world even if you have no access to it.
 *
 * Technically every Room.Terrain object is a very lightweight adapter to underlying static terrain buffers with corresponding minimal accessors.
 */
interface RoomTerrain {
    /**
     * Get terrain type at the specified room position.
     *
     * This method works for any room in the world even if you have no access to it.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @return A bitmask of {@link TERRAIN_MASK_WALL}, {@link TERRAIN_MASK_SWAMP}.
     */
    get(x: number, y: number): 0 | TERRAIN_MASK_WALL | TERRAIN_MASK_SWAMP;
    /**
     * Get a copy of the underlying static terrain buffer.
     * @param destinationArray (optional) A typed array view in which terrain will be copied to.
     * @throws {RangeError} if `destinationArray` is provided, it must have a length of at least 2500 (`50*50`).
     * @return Copy of underlying room terrain as a new typed array of size 2500.
     */
    getRawBuffer<
        T extends
            | Int8Array
            | Uint8Array
            | Int16Array
            | Uint16Array
            | Int32Array
            | Uint32Array
            | Uint8ClampedArray
            | Float32Array
            | Float64Array,
    >(
        destinationArray: T,
    ): T;
    getRawBuffer(): Uint8Array;
}

interface RoomTerrainConstructor extends _Constructor<RoomTerrain> {
    /**
     * Get room terrain for the specified room.
     *
     * This method works for any room in the world even if you have no access to it.
     * @param roomName String name of the room.
     */
    new (roomName: string): RoomTerrain;
}

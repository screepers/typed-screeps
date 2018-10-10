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
    get(x: number, y: number): number;
}

/**
 * A flag. Flags can be used to mark particular spots in a room. Flags are visible to their owners only.
 */
interface Flag {
    prototype: Energy;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * Flag color. One of the following constants: COLOR_WHITE, COLOR_GREY, COLOR_RED, COLOR_PURPLE, COLOR_BLUE, COLOR_CYAN, COLOR_GREEN, COLOR_YELLOW, COLOR_ORANGE, COLOR_BROWN
     */
    color: string;
    /**
     * A shorthand to Memory.flags[flag.name]. You can use it for quick access the flag's specific memory data object.
     */
    memory: any;
    /**
     * Flag’s name. You can choose the name while creating a new flag, and it cannot be changed later. This name is a hash key to access the spawn via the Game.flags object.
     */
    name: string;
    /**
     * An object representing the position of this structure in the room.
     */
    pos: RoomPosition;
    /**
     * The link to the Room object. May not be available in case a flag is placed in a room which you do not have access to.
     */
    room: Room;
    /**
     * The name of the room in which this flag is in. This property is deprecated and will be removed soon. Use pos.roomName instead.
     */
    roomName: string;
    /**
     * Remove the flag.
     * @returns Result Code: OK
     */
    remove(): void;
    /**
     * Set new color of the flag.
     * @param color One of the following constants: COLOR_WHITE, COLOR_GREY, COLOR_RED, COLOR_PURPLE, COLOR_BLUE, COLOR_CYAN, COLOR_GREEN, COLOR_YELLOW, COLOR_ORANGE, COLOR_BROWN
     * @returns Result Code: OK, ERR_INVALID_ARGS
     */
    setColor(color: string): number;
    /**
     * Set new position of the flag.
     * @param x The X position in the room.
     * @param y The Y position in the room.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(x: number,y: number): number;
    /**
     * Set new position of the flag.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(pos: RoomPosition|{pos: RoomPosition}): number;
}
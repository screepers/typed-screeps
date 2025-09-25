/**
 * A flag.
 *
 * Flags can be used to mark particular spots in a room. Flags are visible to their owners only. You cannot have more than 10,000 flags.
 */
interface Flag extends RoomObject {
    /**
     * Flag color. One of the {@link ColorConstant COLOR_*} constants.
     */
    color: ColorConstant;
    /**
     * The flag's memory.
     *
     * A shorthand to Memory.flags[flag.name]. You can use it for quick access the flag's specific memory data object.
     */
    memory: FlagMemory;
    /**
     * The flag’s name.
     *
     * You can choose the name while creating a new flag, and it cannot be changed later.
     *
     * This name is a hash key to access the flag via the {@link Game.flags} object. The maximum name length is 60 characters.
     */
    name: string;
    /**
     * Flag secondary color. One of the {@link ColorConstant COLOR_*} constants.
     */
    secondaryColor: ColorConstant;
    /**
     * Remove the flag.
     * @returns Result Code: OK
     */
    remove(): OK;
    /**
     * Set new color of the flag.
     * @param color One of the {@link ColorConstant COLOR_*} constants.
     * @param secondaryColor Secondary color of the flag. One of the {@link ColorConstant COLOR_*} constants.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_INVALID_ARGS: color or secondaryColor is not a valid color constant.
     */
    setColor(color: ColorConstant, secondaryColor?: ColorConstant): OK | ERR_INVALID_ARGS;
    /**
     * Set new position of the flag.
     * @param x The X position in the room.
     * @param y The Y position in the room.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_INVALID_TARGET: The target provided is invalid.
     */
    setPosition(x: number, y: number): OK | ERR_INVALID_ARGS;
    /**
     * Set new position of the flag.
     * @param pos Can be a {@link RoomPosition} object or any object containing RoomPosition.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_INVALID_TARGET: The target provided is invalid.
     */
    setPosition(pos: RoomPosition | { pos: RoomPosition }): OK | ERR_INVALID_ARGS;
}

interface FlagConstructor extends _Constructor<Flag> {
    new (name: string, color: ColorConstant, secondaryColor: ColorConstant, roomName: string, x: number, y: number): Flag;
    (name: string, color: ColorConstant, secondaryColor: ColorConstant, roomName: string, x: number, y: number): Flag;
}

declare const Flag: FlagConstructor;

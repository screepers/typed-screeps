/**
 * A flag. Flags can be used to mark particular spots in a room. Flags are visible to their owners only.
 */
interface Flag extends RoomObject {
    readonly prototype: Flag;

    /**
     * Flag color. One of the `COLOR_*` constants.
     */
    color: ColorConstant;
    /**
     * A shorthand to Memory.flags[flag.name]. You can use it for quick access the flag's specific memory data object.
     */
    memory: FlagMemory;
    /**
     * Flag’s name.
     *
     * You can choose the name while creating a new flag, and it cannot be changed later.
     *
     * This name is a hash key to access the flag via the `Game.flags` object. The maximum name length is 60 characters.
     */
    name: string;
    /**
     * Flag secondary color. One of the `COLOR_*` constants.
     */
    secondaryColor: ColorConstant;
    /**
     * Remove the flag.
     * @returns Result Code: OK
     */
    remove(): OK;
    /**
     * Set new color of the flag.
     * @param color One of the following constants: COLOR_WHITE, COLOR_GREY, COLOR_RED, COLOR_PURPLE, COLOR_BLUE, COLOR_CYAN, COLOR_GREEN, COLOR_YELLOW, COLOR_ORANGE, COLOR_BROWN
     * @parma secondaryColor Secondary color of the flag. One of the COLOR_* constants.
     * @returns Result Code: OK, ERR_INVALID_ARGS
     */
    setColor(color: ColorConstant, secondaryColor?: ColorConstant): OK | ERR_INVALID_ARGS;
    /**
     * Set new position of the flag.
     * @param x The X position in the room.
     * @param y The Y position in the room.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(x: number, y: number): OK | ERR_INVALID_ARGS;
    /**
     * Set new position of the flag.
     * @param pos Can be a RoomPosition object or any object containing RoomPosition.
     * @returns Result Code: OK, ERR_INVALID_TARGET
     */
    setPosition(pos: RoomPosition | { pos: RoomPosition }): OK | ERR_INVALID_ARGS;
}

interface FlagConstructor extends _Constructor<Flag> {
    new (name: string, color: ColorConstant, secondaryColor: ColorConstant, roomName: string, x: number, y: number): Flag;
    (name: string, color: ColorConstant, secondaryColor: ColorConstant, roomName: string, x: number, y: number): Flag;
}

declare const Flag: FlagConstructor;

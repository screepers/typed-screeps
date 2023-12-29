/**
 * The options that can be accepted by `findRoute()` and friends.
 */
interface RouteOptions {
    routeCallback: (roomName: string, fromRoomName: string) => any;
}

interface RoomStatusPermanent {
    status: "normal" | "closed";
    timestamp: null;
}

interface RoomStatusTemporary {
    status: "novice" | "respawn";
    timestamp: number;
}

type RoomStatus = RoomStatusPermanent | RoomStatusTemporary;

/**
 * A global object representing world map. Use it to navigate between rooms. The object is accessible via Game.map property.
 */
interface GameMap {
    /**
     * List all exits available from the room with the given name.
     * @param roomName The room name.
     * @returns The exits information or null if the room not found.
     */
    describeExits(roomName: string): ExitsInformation | null;
    /**
     * Find the exit direction from the given room en route to another room.
     * @param fromRoom Start room name or room object.
     * @param toRoom Finish room name or room object.
     * @param opts (optional) An object with the pathfinding options.
     * @returns The room direction constant, one of the following:
     * FIND_EXIT_TOP, FIND_EXIT_RIGHT, FIND_EXIT_BOTTOM, FIND_EXIT_LEFT
     * Or one of the following Result codes:
     * ERR_NO_PATH, ERR_INVALID_ARGS
     */
    findExit(fromRoom: string | Room, toRoom: string | Room, opts?: RouteOptions): ExitConstant | ERR_NO_PATH | ERR_INVALID_ARGS;
    /**
     * Find route from the given room to another room.
     * @param fromRoom Start room name or room object.
     * @param toRoom Finish room name or room object.
     * @param opts (optional) An object with the pathfinding options.
     * @returns the route array or ERR_NO_PATH code
     */
    findRoute(
        fromRoom: string | Room,
        toRoom: string | Room,
        opts?: RouteOptions,
    ):
        | Array<{
              exit: ExitConstant;
              room: string;
          }>
        | ERR_NO_PATH;
    /**
     * Get the linear distance (in rooms) between two rooms. You can use this function to estimate the energy cost of
     * sending resources through terminals, or using observers and nukes.
     * @param roomName1 The name of the first room.
     * @param roomName2 The name of the second room.
     * @param continuous Whether to treat the world map continuous on borders. Set to true if you
     *                   want to calculate the trade or terminal send cost. Default is false.
     */
    getRoomLinearDistance(roomName1: string, roomName2: string, continuous?: boolean): number;
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param roomName The room name.
     * @deprecated use `Game.map.getRoomTerrain` instead
     */
    getTerrainAt(x: number, y: number, roomName: string): Terrain;
    /**
     * Get terrain type at the specified room position. This method works for any room in the world even if you have no access to it.
     * @param pos The position object.
     * @deprecated use `Game.map.getRoomTerrain` instead
     */
    getTerrainAt(pos: RoomPosition): Terrain;
    /**
     * Get room terrain for the specified room. This method works for any room in the world even if you have no access to it.
     * @param roomName String name of the room.
     */
    getRoomTerrain(roomName: string): RoomTerrain;
    /**
     * Returns the world size as a number of rooms between world corners. For example, for a world with rooms from W50N50 to E50S50 this method will return 102.
     */
    getWorldSize(): number;

    /**
     * Check if the room is available to move into.
     * @param roomName The room name.
     * @returns A boolean value.
     * @deprecated Use `Game.map.getRoomStatus` instead
     */
    isRoomAvailable(roomName: string): boolean;

    /**
     * Get the room status to determine if it's available, or in a reserved area.
     * @param roomName The room name.
     * @returns An object with the following properties {status: "normal" | "closed" | "novice" | "respawn", timestamp: number}
     */
    getRoomStatus(roomName: string): RoomStatus;

    /**
     * Map visuals provide a way to show various visual debug info on the game map.
     * You can use the `Game.map.visual` object to draw simple shapes that are visible only to you.
     *
     * Map visuals are not stored in the database, their only purpose is to display something in your browser.
     * All drawings will persist for one tick and will disappear if not updated.
     * All `Game.map.visual` calls have no added CPU cost (their cost is natural and mostly related to simple JSON.serialize calls).
     * However, there is a usage limit: you cannot post more than 1000 KB of serialized data.
     *
     * All draw coordinates are measured in global game coordinates (`RoomPosition`).
     */
    visual: MapVisual;
}

// No static is available

interface MapVisual {
    /**
     * Draw a line.
     * @param pos1 The start position object.
     * @param pos2 The finish position object.
     * @param style The optional style
     * @returns The MapVisual object, for chaining.
     */
    line(pos1: RoomPosition, pos2: RoomPosition, style?: MapLineStyle): MapVisual;

    /**
     * Draw a circle.
     * @param pos The position object of the center.
     * @param style The optional style
     * @returns The MapVisual object, for chaining.
     */
    circle(pos: RoomPosition, style?: MapCircleStyle): MapVisual;

    /**
     * Draw a rectangle.
     * @param topLeftPos The position object of the top-left corner.
     * @param width The width of the rectangle.
     * @param height The height of the rectangle.
     * @param style The optional style
     * @returns The MapVisual object, for chaining.
     */
    rect(topLeftPos: RoomPosition, width: number, height: number, style?: MapPolyStyle): MapVisual;

    /**
     * Draw a polyline.
     * @param points An array of points. Every item should be a `RoomPosition` object.
     * @param style The optional style
     * @returns The MapVisual object, for chaining.
     */
    poly(points: RoomPosition[], style?: MapPolyStyle): MapVisual;

    /**
     * Draw a text label. You can use any valid Unicode characters, including emoji.
     * @param text The text message.
     * @param pos The position object of the label baseline.
     * @param style The optional style
     * @returns The MapVisual object, for chaining
     */
    text(text: string, pos: RoomPosition, style?: MapTextStyle): MapVisual;

    /**
     * Remove all visuals from the map.
     * @returns The MapVisual object, for chaining
     */
    clear(): MapVisual;

    /**
     * Get the stored size of all visuals added on the map in the current tick. It must not exceed 1024,000 (1000 KB).
     * @returns The size of the visuals in bytes.
     */
    getSize(): number;

    /**
     * Returns a compact representation of all visuals added on the map in the current tick.
     * @returns A string with visuals data. There's not much you can do with the string besides store them for later.
     */
    export(): string;

    /**
     * Add previously exported (with `Game.map.visual.export`) map visuals to the map visual data of the current tick.
     * @param data The string returned from `Game.map.visual.export`.
     * @returns The MapVisual object itself, so that you can chain calls.
     */
    import(data: string): MapVisual;
}

interface MapLineStyle {
    /**
     * Line width, default is 0.1.
     */
    width?: number;
    /**
     * Line color in the following format: #ffffff (hex triplet). Default is #ffffff.
     */
    color?: string;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Either undefined (solid line), dashed, or dotted. Default is undefined.
     */
    lineStyle?: "dashed" | "dotted" | "solid" | undefined;
}

interface MapPolyStyle {
    /**
     * Fill color in the following format: #ffffff (hex triplet). Default is undefined (no fill).
     */
    fill?: string | undefined;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Stroke color in the following format: #ffffff (hex triplet). Default is #ffffff.
     */
    stroke?: string;
    /**
     * Stroke line width, default is 0.5.
     */
    strokeWidth?: number;
    /**
     * Either undefined (solid line), dashed, or dotted. Default is undefined.
     */
    lineStyle?: "dashed" | "dotted" | "solid" | undefined;
}

interface MapCircleStyle extends MapPolyStyle {
    /**
     * Circle radius, default is 10.
     */
    radius?: number;
}

interface MapTextStyle {
    /**
     * Font color in the following format: #ffffff (hex triplet). Default is #ffffff.
     */
    color?: string;
    /**
     * The font family, default is sans-serif
     */
    fontFamily?: string;
    /**
     * The font size in game coordinates, default is 10
     */
    fontSize?: number;
    /**
     * The font style ('normal', 'italic' or 'oblique')
     */
    fontStyle?: string;
    /**
     * The font variant ('normal' or 'small-caps')
     */
    fontVariant?: string;
    /**
     * Stroke color in the following format: #ffffff (hex triplet). Default is undefined (no stroke).
     */
    stroke?: string | undefined;
    /**
     * Stroke width, default is 0.15.
     */
    strokeWidth?: number;
    /**
     * Background color in the following format: #ffffff (hex triplet). Default is undefined (no background). When background is enabled, text vertical align is set to middle (default is baseline).
     */
    backgroundColor?: string | undefined;
    /**
     * Background rectangle padding, default is 2.
     */
    backgroundPadding?: number;
    /**
     * Text align, either center, left, or right. Default is center.
     */
    align?: "center" | "left" | "right";
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
}

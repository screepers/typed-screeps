/**
 * Room visuals provide a way to show various visual debug info in game rooms.
 *
 * You can use the RoomVisual object to draw simple shapes that are visible only to you.
 * Every existing Room object already contains the visual property, but you also can create new RoomVisual objects for any room (even without visibility) using the constructor.
 *
 * Room visuals are not stored in the database, their only purpose is to display something in your browser.
 * All drawings will persist for one tick and will disappear if not updated. All RoomVisual API calls have no added CPU cost (their cost is natural and mostly related to simple `JSON.serialize` calls).
 * However, there is a usage limit: you cannot post more than 500 KB of serialized data per one room (see {@link RoomVisual.getSize} method).
 *
 * All draw coordinates are measured in game coordinates and centered to tile centers, i.e. (10,10) will point to the center of the creep at x:10; y:10 position.
 * Fractional coordinates are allowed.
 */
declare class RoomVisual {
    /**
     * You can create new RoomVisual object using its constructor.
     * @param roomName The room name. If undefined, visuals will be posted to all rooms simultaneously.
     */
    constructor(roomName?: string);

    /**
     * The name of the room.
     */
    roomName: string;

    /**
     * Draw a line.
     * @param x1 The start X coordinate.
     * @param y1 The start Y coordinate.
     * @param x2 The finish X coordinate.
     * @param y2 The finish Y coordinate.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    line(x1: number, y1: number, x2: number, y2: number, style?: LineStyle): RoomVisual;

    /**
     * Draw a line.
     * @param pos1 The start position object.
     * @param pos2 The finish position object.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    line(pos1: RoomPosition, pos2: RoomPosition, style?: LineStyle): RoomVisual;

    /**
     * Draw a circle.
     * @param x The X coordinate of the center.
     * @param y The Y coordinate of the center.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    circle(x: number, y: number, style?: CircleStyle): RoomVisual;

    /**
     * Draw a circle.
     * @param pos The position object of the center.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    circle(pos: RoomPosition, style?: CircleStyle): RoomVisual;

    /**
     * Draw a rectangle.
     * @param x The X coordinate of the top-left corner.
     * @param y The Y coordinate of the top-left corner.
     * @param w The width of the rectangle.
     * @param h The height of the rectangle.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    rect(x: number, y: number, w: number, h: number, style?: PolyStyle): RoomVisual;

    /**
     * Draw a line.
     * @param topLeftPos The position object of the top-left corner.
     * @param width The width of the rectangle.
     * @param height The height of the rectangle.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    rect(topLeftPos: RoomPosition, width: number, height: number, style?: PolyStyle): RoomVisual;
    /**
     * Draw a polygon.
     * @param points An array of points. Every array item should be either an array with 2 numbers (i.e. [10,15]), or a RoomPosition object.
     * @param style The (optional) style.
     * @returns The RoomVisual object, for chaining.
     */
    poly(points: Array<[number, number] | RoomPosition>, style?: PolyStyle): RoomVisual;

    /**
     * Draw a text label.
     * @param text The text message.
     * @param x The X coordinate of the label baseline center point.
     * @param y The Y coordinate of the label baseline center point.
     * @param style The (optional) text style.
     * @returns The RoomVisual object, for chaining.
     */
    text(text: string, x: number, y: number, style?: TextStyle): RoomVisual;

    /**
     * Draw a text label.
     *
     * You can use any valid Unicode characters, including emoji.
     * @param text The text message.
     * @param pos The position object of the center.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    text(text: string, pos: RoomPosition, style?: TextStyle): RoomVisual;

    /**
     * Remove all visuals from the room.
     * @returns The RoomVisual object, for chaining.
     */
    clear(): RoomVisual;

    /**
     * Get the stored size of all visuals added in the room in the current tick.
     * It must not exceed 512,000 (500 KB).
     * @returns The size of the visuals in bytes.
     */
    getSize(): number;

    /**
     * Returns a compact representation of all visuals added in the room in the current tick.
     * @returns A string with visuals data. There's not much you can do with the string besides store them for later.
     */
    export(): string;

    /**
     * Add previously exported (with {@link RoomVisual.export}) room visuals to the room visual data of the current tick.
     * @param data The string returned from `RoomVisual.export`.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
    import(data: string): RoomVisual;
}

interface LineStyle {
    /**
     * Line width.
     * @default 0.1
     */
    width?: number;
    /**
     * Line color in any web format.
     * @default #ffffff (white)
     */
    color?: string;
    /**
     * Opacity value.
     * @default 0.5
     */
    opacity?: number;
    /**
     * Either undefined (solid line), dashed, or dotted.
     * @default undefined
     */
    lineStyle?: "dashed" | "dotted" | "solid" | undefined;
}

interface PolyStyle {
    /**
     * Fill color in any web format.
     * @default undefined (no fill).
     */
    fill?: string | undefined;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Stroke color in any web format.
     * @default #ffffff (white)
     */
    stroke?: string;
    /**
     * Stroke line width.
     * @default 0.1
     */
    strokeWidth?: number;
    /**
     * Either undefined (solid line), dashed, or dotted.
     * @default undefined
     */
    lineStyle?: "dashed" | "dotted" | "solid" | undefined;
}

interface CircleStyle extends PolyStyle {
    /**
     * Circle radius.
     * @default 0.15
     */
    radius?: number;
}

interface TextStyle {
    /**
     * Font color in any web format.
     * @default #ffffff (white)
     */
    color?: string;
    /**
     * Either a number or a string in one of the following forms:
     * - 0.7 - relative size in game coordinates
     * - 20px - absolute size in pixels
     * - 0.7 serif
     * - bold italic 1.5 Times New Roman
     */
    font?: number | string;
    /**
     * Stroke color in any web format.
     * @default undefined (no stroke)
     */
    stroke?: string | undefined;
    /**
     * Stroke width.
     * @default 0.15
     */
    strokeWidth?: number;
    /**
     * Background color in any web format.
     * When background is enabled, text vertical align is set to middle (default is baseline).
     * @default undefined (no background)
     */
    backgroundColor?: string | undefined;

    /**
     * Background rectangle padding
     * @default 0.3
     */
    backgroundPadding?: number;
    align?: "center" | "left" | "right";
    /**
     * Opacity value.
     * @default 1.0
     */
    opacity?: number;
}

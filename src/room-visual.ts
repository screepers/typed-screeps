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
     * Draw a text label. You can use any valid Unicode characters, including emoji.
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
}

interface LineStyle {
    /**
     * Line width, default is 0.1.
     */
    width?: number;
    /**
     * Line color in any web format, default is #ffffff(white).
     */
    color?: string;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Either undefined (solid line), dashed, or dotted.Default is undefined.
     */
    lineStyle?: "dashed" | "dotted" | "solid";
}

interface PolyStyle {
    /**
     * Fill color in any web format, default is #ffffff(white).
     */
    fill?: string;
    /**
     * Opacity value, default is 0.5.
     */
    opacity?: number;
    /**
     * Stroke color in any web format, default is undefined (no stroke).
     */
    stroke?: string | undefined;
    /**
     * Stroke line width, default is 0.1.
     */
    strokeWidth?: number;
    /**
     * Either undefined (solid line), dashed, or dotted.Default is undefined.
     */
    lineStyle?: "dashed" | "dotted" | "solid";
}

interface CircleStyle extends PolyStyle {
    /**
     * Circle radius, default is 0.15.
     */
    radius?: number;
}

interface TextStyle {
    /**
     * Font color in any web format, default is #ffffff(white).
     */
    color?: string;
    /**
     * Either a number or a string in one of the following forms:
     * 0.7 - relative size in game coordinates
     * 20px - absolute size in pixels
     * 0.7 serif
     * bold italic 1.5 Times New Roman
     */
    font?: number | string;
    /**
     * Stroke color in any web format, default is undefined (no stroke).
     */
    stroke?: string;
    /**
     * Stroke width, default is 0.15.
     */
    strokeWidth?: number;
    /**
     * Background color in any web format, default is undefined (no background).When background is enabled, text vertical align is set to middle (default is baseline).
     */
    backgroundColor?: string;

    /**
     * Background rectangle padding, default is 0.3.
     */
    backgroundPadding?: number;
    align?: "center" | "left" | "right";
    /**
     * Opacity value, default is 1.0.
     */
    opacity?: number;
}

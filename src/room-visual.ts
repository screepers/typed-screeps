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
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
	 */
	line(x1: number, y1: number, x2: number, y2: number, style?: LineStyleOpts): RoomVisual;

	/**
     * Draw a line.
     * @param pos1 The start position object.
     * @param pos2 The finish position object.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
	line(pos1: RoomPosition, pos2: RoomPosition, style?: LineStyleOpts): RoomVisual;

    /**
     * Draw a circle.
     * @param x The X coordinate of the center.
     * @param y The Y coordinate of the center.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
	circle(x: number, y: number, style?: CircleStyleOpts): RoomVisual;

	/**
     * Draw a circle.
     * @param pos The position object of the center.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
	circle(pos: RoomPosition, style?: CircleStyleOpts): RoomVisual;

    /**
     * Draw a line.
     * @param x The X coordinate of the top-left corner.
     * @param y The Y coordinate of the top-left corner.
     * @param width The width of the rectangle.
     * @param height The height of the rectangle.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
	 */
	rect(x: number, y: number, width: number, height: number, style?: RectStyleOpts): RoomVisual;

	/**
     * Draw a line.
     * @param topLeftPos The position object of the top-left corner.
     * @param width The width of the rectangle.
     * @param height The height of the rectangle.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
	rect(topLeftPos: RoomPosition, width: number, height: number, style?: RectStyleOpts): RoomVisual;

	/**
     * Draw a line.
     * @param points An array of points. Every array item should be either an array with 2 numbers (i.e. [10,15]), or a RoomPosition object.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
	poly(points: (number[] | RoomPosition)[], style?: PolyStyleOpts): RoomVisual;

	/**
	 * Draw a text label. You can use any valid Unicode characters, including emoji.
	 * @param text The text message.
	 * @param x The X coordinate of the center.
	 * @param y The Y coordinate of the center.
	 * @param style An object describing the style.
	 * @returns The RoomVisual object itself, so that you can chain calls.
	 */
	text(text: string, x: number, y: number, style?: TextStyleOpts): RoomVisual;

	/**
     * Draw a text label. You can use any valid Unicode characters, including emoji.
	 * @param text The text message.
     * @param pos The position object of the center.
     * @param style An object describing the style.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
	text(text: string, pos: RoomPosition, style?: TextStyleOpts): RoomVisual;

	/**
     * Remove all visuals from the room.
     * @returns The RoomVisual object itself, so that you can chain calls.
     */
	clear(): RoomVisual;

	/**
     * Get the stored size of all visuals added in the room in the current tick. It must not exceed 512,000 (500 KB).
     * @returns The size of the visuals in bytes.
     */
	getSize(): number;
}

interface LineStyleOpts {
    /**
     * Line width, default is 0.1.
     */
	width: number;

    /**
     * Line color in any web format, default is #ffffff(white).
     */
	color: string;

    /**
     * Opacity value, default is 0.5.
     */
	opacity: number;

    /**
     * Either undefined (solid line), dashed, or dotted.Default is undefined.
     */
	lineStyle: string;
}

interface CircleStyleOpts {
    /**
     * Circle radius, default is 0.15.
     */
	radius: number;

    /**
     * Fill color in any web format, default is #ffffff(white).
     */
	fill: string;

    /**
     * Opacity value, default is 0.5.
     */
	opacity: number;

    /**
     * Stroke color in any web format, default is undefined (no stroke).
     */
	stroke: string;

    /**
     * Stroke line width, default is 0.1.
     */
	strokeWidth: number;

    /**
     * Either undefined (solid line), dashed, or dotted.Default is undefined.
     */
	lineStyle: string;
}

interface RectStyleOpts {
	/**
     * Fill color in any web format, default is #ffffff(white).
     */
	fill: string;

	/**
     * Opacity value, default is 0.5.
     */
	opacity: number;

	/**
     * Stroke color in any web format, default is undefined (no stroke).
     */
	stroke: string;

	/**
     * Stroke line width, default is 0.1.
     */
	strokeWidth: number;

	/**
     * Either undefined (solid line), dashed, or dotted.Default is undefined.
     */
	lineStyle: string;
}

interface PolyStyleOpts {
    /**
     * Fill color in any web format, default is undefined (no fill).
     */
	fill?: string,

    /**
     * Stroke color in any web format, default is #ffffff (white).
     */
	stroke?: string;

    /**
     * Either undefined (solid line), dashed, or dotted. Default is undefined.
     */
	lineStyle?: string;

    /**
     * Stroke line width, default is 0.1.
     */
	strokeWidth?: number;

    /**
     * Opacity value, default is 0.5.
     */
	opacity?: number;
}

interface TextStyleOpts {
    /**
     * Font color in any web format, default is #ffffff(white).
     */
	color: string;

    /**
     * Either a number or a string in one of the following forms:
     * 0.7 - relative size in game coordinates
     * 20px - absolute size in pixels
     * 0.7 serif
     * bold italic 1.5 Times New Roman
     */
	font: number | string;

    /**
     * Stroke color in any web format, default is undefined (no stroke).
     */
	stroke: string;

    /**
     * Stroke width, default is 0.15.
     */
	strokeWidth: number;

    /**
     * Background color in any web format, default is undefined (no background).When background is enabled, text vertical align is set to middle (default is baseline).
     */
	background: string;

    /**
     * Background rectangle padding, default is 0.3.
     */
	backgroundPadding: number;

    /**
     * Text align, either center, left, or right.Default is center.
     */
	align: string;

    /**
     * Opacity value, default is 1.0.
     */
	opacity: number;
}
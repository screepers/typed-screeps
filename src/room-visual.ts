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
     */
	line(x1: number, y1: number, x2: number, y2: number, style?: LineStyleOpts) : RoomVisual;

	/**
     * Draw a line.
     * @param pos1 The start position object.
     * @param pos2 The finish position object.
     */
	line(pos1: RoomPosition, pos2: RoomPosition, style?: LineStyleOpts): RoomVisual;
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
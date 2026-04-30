/**
 * The Console API defined by
 * [screeps/engine](https://github.com/screeps/engine/blob/1b9b1541923f061311474a2f1bac0fea37911f70/src/game/console.js#L10).
 *
 * Notes:
 * - This implementation is not compliant with the DOM [Console API](https://developer.mozilla.org/en-US/docs/Web/API/Console_API)
 *      - Ensure your project does not include "dom" in its tsconfig file's ".compilerOptions.lib" to avoid using the DOM version.
 * - `console` is not defined until the first tick. Any messages you log on init will not be emitted to the client.
 */
interface Console {
    /**
     * The **`console.log()`** static method outputs a message to the console.
     *
     * [MDN Reference](https://developer.mozilla.org/docs/Web/API/console/log_static).
     *
     * Unlike the DOM implementation, HTML special characters are escaped to mitigate XSS attacks.
     * To log HTML to the console, use {@link logUnsafe} instead.
     * For more context, see [screeps/engine issue 162](https://github.com/screeps/screeps/issues/162).
     */
    log(...data: any[]): void;

    /**
     * The **`console.logUnsafe()`** static method outputs a message to the console.
     *
     * This is identical to the DOM implementation of {@link log}.
     */
    logUnsafe(...data: any[]): void;

    /**
     * Record the evaluated value of a console expression sent via the client or API.
     *
     * @param message the result of evaluating the expression
     */
    commandResult(message: any): void;

    /**
     * Append custom CSS data to a {@link RoomVisual} or {@link MapVisual}.
     *
     * @param roomName the name of the room (or "map" for {@link MapVisual})
     * @param data the CSS to add; non-string data will be stringified via {@link JSON.stringify}
     */
    addVisual(roomName: string, data: any): void;

    /**
     * Get the size of the CSS data added to a {@link RoomVisual} or {@link MapVisual}
     *
     * @param roomName the name of the room (or "map" for {@link MapVisual})
     * @return the size in bytes of all CSS written to the specified room/map
     *
     * @see {@link RoomVisual.map} and {@link MapVisual.map}
     */
    getVisualSize(roomName: string): number;

    /**
     * Delete all data associated with a specific {@link RoomVisual} or {@link MapVisual}.
     *
     * @param roomName the name of the room (or "map" for {@link MapVisual})
     *
     * @see {@link RoomVisual.clear} and {@link MapVisual.clear}
     */
    clearVisual(roomName: string): void;

    /**
     * Get the CSS data added to a {@link RoomVisual} or {@link MapVisual}.
     *
     * @param roomName the name of the room (or "map" for {@link MapVisual})
     * @return all visual data for the specified room/map as a string of CSS,
     *  or undefined if data has not been written/cleared for this room/map on this tick.
     *
     * @see {@link RoomVisual.export} and {@link MapVisual.export}
     */
    getVisual(roomName: string): string | undefined;
}

declare const console: Console;

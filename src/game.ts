/**
 * The main global game object containing all the gameplay information.
 */
interface Game {
    /**
     * Game prototype. You can use this to extend functionality of game class
     */
    prototype: Game;
    /**
     * An object containing information about your CPU usage with the following properties:
     */
    cpu: CPU
    /**
     * A hash containing all your creeps with creep names as hash keys.
     */
    creeps: any;
    /**
     * A hash containing all your flags with flag names as hash keys.
     */
    flags: any;
    /**
     * Your Global Control Level, an object with the following properties :
     */
    gcl: GlobalControlLevel
    /**
     * A global object representing world GameMap.
     */
    map: Map;
    /**
     * A hash containing all the rooms available to you with room names as hash keys.
     */
    rooms: any;
    /**
     * A hash containing all your spawns with spawn names as hash keys.
     */
    spawns: any;
    /**
     * A hash containing all your structures with structure id as hash keys.
     */
    structures: any;
    /**
     * System game tick counter. It is automatically incremented on every tick.
     */
    time: number;

    /**
     * Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.
     * @param id The unique identificator.
     * @returns an object instance or null if it cannot be found.
     */
    getObjectById<T>(id: string): T;
    /**
     * Get amount of CPU time used from the beginning of the current game tick. Note: In the Simulation mode it depends on your local machine performance and cannot be used to estimate server-side scripts execution.
     * @returns currently used CPU time as a float number.
     */
    getUsedCpu(): number;
    /**
     * Send a custom message at your profile email. This way, you can set up notifications to yourself on any occasion within the game. You can schedule up to 20 notifications during one game tick. Not available in the Simulation Room.
     * @param message Custom text which will be sent in the message. Maximum length is 1000 characters.
     * @param groupInterval If set to 0 (default), the notification will be scheduled immediately. Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
     */
    notify(message: string, groupInterval: number): void;
}
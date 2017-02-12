/**
 * The main global game object containing all the gameplay information.
 */
interface Game {
    /**
     * An object containing information about your CPU usage with the following properties:
     */
    readonly cpu: CPU;
    /**
     * A hash containing all your creeps with creep names as hash keys.
     */
    readonly creeps: {[creepName: string]: Creep};
    /**
     * A hash containing all your flags with flag names as hash keys.
     */
    readonly flags: {[flagName: string]: Flag};
    /**
     * Your Global Control Level, an object with the following properties :
     */
    readonly gcl: GlobalControlLevel;
    /**
     * A global object representing world GameMap.
     */
    readonly map: GameMap;
    /**
     * A global object representing the in-game market.
     */
    readonly market: Market;
    /**
     * A hash containing all the rooms available to you with room names as hash keys.
     */
    readonly rooms: {[roomName: string]: Room};
    /**
     * A hash containing all your spawns with spawn names as hash keys.
     */
    readonly spawns: {[spawnName: string]: Spawn};
    /**
     * A hash containing all your structures with structure id as hash keys.
     */
    readonly structures: {[structureId: string]: Structure};
    /**
     * A hash containing all your construction sites with their id as hash keys.
     */
    readonly constructionSites: {[constructionSiteId: string]: ConstructionSite};
    /**
     * System game tick counter. It is automatically incremented on every tick.
     */
    readonly time: number;

    /**
     * Get an object with the specified unique ID. It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.
     * @param id The unique identifier.
     * @returns an object instance or null if it cannot be found.
     */
    getObjectById<T>(id: string | undefined): T | null;
    /**
     * Send a custom message at your profile email. This way, you can set up notifications to yourself on any occasion within the game. You can schedule up to 20 notifications during one game tick. Not available in the Simulation Room.
     * @param message Custom text which will be sent in the message. Maximum length is 1000 characters.
     * @param groupInterval If set to 0 (default), the notification will be scheduled immediately. Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
     */
    notify(message: string, groupInterval?: number): void;
}

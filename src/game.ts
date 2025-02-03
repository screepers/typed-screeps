/**
 * The main global game object containing all the gameplay information.
 */
interface Game {
    /**
     * An object containing information about your CPU usage.
     */
    cpu: CPU;
    /**
     * A hash containing all your creeps with creep names as hash keys.
     */
    creeps: { [creepName: string]: Creep };
    /**
     * A hash containing all your flags with flag names as hash keys.
     */
    flags: { [flagName: string]: Flag };
    /**
     * Your Global Control Level.
     */
    gcl: GlobalControlLevel;
    /**
     * Your clobal Power Level
     */
    gpl: GlobalPowerLevel;
    /**
     * A global object representing world GameMap.
     */
    map: GameMap;
    /**
     * A global object representing the in-game market.
     */
    market: Market;
    /**
     * A hash containing all your power creeps with their names as hash keys.
     *
     * Even power creeps not spawned in the world can be accessed here.
     */
    powerCreeps: { [creepName: string]: PowerCreep };
    /**
     * An object with your global resources that are bound to the account, like pixels or cpu unlocks.
     *
     * Each object key is a resource constant, values are resources amounts.
     */
    resources: { [key: string]: any };
    /**
     * A hash containing all the rooms available to you with room names as hash keys.
     *
     * A room is visible if you have a creep or an owned structure in it.
     */
    rooms: { [roomName: string]: Room };
    /**
     * A hash containing all your spawns with spawn names as hash keys.
     */
    spawns: { [spawnName: string]: StructureSpawn };
    /**
     * A hash containing all your structures with structure id as hash keys.
     */
    structures: { [structureId: string]: OwnedStructure };

    /**
     * A hash containing all your construction sites with their id as hash keys.
     */
    constructionSites: { [constructionSiteId: string]: ConstructionSite };

    /**
     * An object describing the world shard where your script is currently being executed in.
     */
    shard: Shard;

    /**
     * System game tick counter.
     *
     * It is automatically incremented on every tick.
     */
    time: number;

    /**
     * Get an object with the specified unique ID.
     *
     * It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.
     * @param id The unique identifier.
     * @returns an object instance or null if it cannot be found.
     */
    getObjectById<T extends Id<_HasId>>(id: T): fromId<T> | null;
    getObjectById<T extends _HasId>(id: Id<T>): T | null;
    /**
     * Get an object with the specified unique ID.
     *
     * It may be a game object of any type. Only objects from the rooms which are visible to you can be accessed.
     * @param id The unique identifier.
     * @returns an object instance or null if it cannot be found.
     * @deprecated Use Id<T>, instead of strings, to increase type safety.
     *
     * If you are using JavaScript, just ignore this deprecation warning.
     *
     * If you are using TypeScript, and you are using strings as IDs, you should change your code to use Id<T> instead.
     *
     * see [this section of README](https://github.com/screepers/typed-screeps?tab=readme-ov-file#Game.getObjectById()) for more information.
     */
    getObjectById<T extends _HasId>(id: string): T | null;
    /**
     * Send a custom message at your profile email.
     *
     * This way, you can set up notifications to yourself on any occasion within the game.
     *
     * You can schedule up to 20 notifications during one game tick. Not available in the Simulator.
     * @param message Custom text which will be sent in the message. Maximum length is 1000 characters.
     * @param groupInterval If set to 0 (default), the notification will be scheduled immediately.
     * Otherwise, it will be grouped with other notifications and mailed out later using the specified time in minutes.
     * @returns One of the following codes:
     * - OK: The message has been sent successfully.
     * - ERR_FULL: More than 20 notifications sent this tick.
     */
    notify(message: string, groupInterval?: number): OK | ERR_FULL;
}

declare var Game: Game;

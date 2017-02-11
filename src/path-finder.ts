/**
 * Contains powerful methods for pathfinding in the game world. Support exists for custom navigation costs and paths which span multiple rooms. 
 * Additionally PathFinder can search for paths through rooms you can't see, although you won't be able to detect any dynamic obstacles like creeps or buildings.
 */
interface PathFinder {
    /**
     * Container for custom navigation cost data.
     */
    CostMatrix: CostMatrix;

    /**
     * Find an optimal path between origin and goal.
     *
     * @param origin The start position.
     * @param goal goal A RoomPosition or an object containing a RoomPosition and range
     * @param opts An object containing additional pathfinding flags.
     */
    search(origin: RoomPosition, goal:  RoomPosition|{pos: RoomPosition, range: number}, opts?: PathFinderOpts): PathFinderPath;
    /**
     * Find an optimal path between origin and goal.
     *
     * @param origin The start position.
     * @param goal an array of goals, the cheapest path found out of all the goals will be returned.
     * @param opts An object containing additional pathfinding flags.
     */
    search(origin: RoomPosition, goal:  RoomPosition[]|{pos: RoomPosition, range: number}[], opts?: PathFinderOpts): PathFinderPath;
    /**
     * Specify whether to use this new experimental pathfinder in game objects methods.
     * This method should be invoked every tick. It affects the following methods behavior:
     * Room.findPath, RoomPosition.findPathTo, RoomPosition.findClosestByPath, Creep.moveTo....
     *
     * @param isEnabled Whether to activate the new pathfinder or deactivate.
     */
    use(isEnabled: boolean): void;
}

/**
 * An object containing:
 * path - An array of RoomPosition objects.
 * ops - Total number of operations performed before this path was calculated.
 * cost - The total cost of the path as derived from `plainCost`, `swampCost` and any given CostMatrix instances.
 * incomplete - If the pathfinder fails to find a complete path, this will be true.
 *   Note that `path` will still be populated with a partial path which represents the closest path it could find given the search parameters.
 */
interface PathFinderPath {
    path: RoomPosition[];
    ops: number;
    cost: number;
    incomplete: boolean;
}

/**
 * An object containing additional pathfinding flags.
 */
interface PathFinderOpts {
    /**
     * Cost for walking on plain positions. The default is 1.
     */
    plainCost?: number;
    /**
     * Cost for walking on swamp positions. The default is 5.
     */
    swampCost?: number;
    /**
     * Instead of searching for a path to the goals this will search for a path away from the goals.
     * The cheapest path that is out of range of every goal will be returned. The default is false.
     */
    flee?: boolean;
    /**
     * The maximum allowed pathfinding operations. You can limit CPU time used for the search based on ratio 1 op ~ 0.001 CPU. The default value is 2000.
     */
    maxOps?: number;
    /**
     * The maximum allowed rooms to search. The default (and maximum) is 16.
     */
    maxRooms?: number;
    /**
     * Weight to apply to the heuristic in the A* formula F = G + weight * H. Use this option only if you understand
     * the underlying A* algorithm mechanics! The default value is 1.
     */
    heuristicWeight?: number;

    /**
     * Request from the pathfinder to generate a CostMatrix for a certain room. The callback accepts one argument, roomName.
     * This callback will only be called once per room per search. If you are running multiple pathfinding operations in a
     * single room and in a single tick you may consider caching your CostMatrix to speed up your code. Please read the
     * CostMatrix documentation below for more information on CostMatrix.
     *
     * @param roomName
     */
    roomCallback?(roomName: string): boolean | CostMatrix;
}

/**
 * Container for custom navigation cost data.
 */
interface CostMatrix {
    /**
     * Creates a new CostMatrix containing 0's for all positions.
     * @constructor
     */
    new(): CostMatrix;
    /**
     * Set the cost of a position in this CostMatrix.
     * @param x X position in the room.
     * @param y Y position in the room.
     * @param cost Cost of this position. Must be a whole number. A cost of 0 will use the terrain cost for that tile. A cost greater than or equal to 255 will be treated as unwalkable.
     */
    set(x: number, y: number, cost: number): void;
    /**
     * Get the cost of a position in this CostMatrix.
     * @param x X position in the room.
     * @param y Y position in the room.
     */
    get(x: number, y: number): number;
    /**
     * Copy this CostMatrix into a new CostMatrix with the same data.
     */
    clone(): CostMatrix;
    /**
     * Returns a compact representation of this CostMatrix which can be stored via JSON.stringify.
     */
    serialize(): number[];
    /**
     * Static method which deserializes a new CostMatrix using the return value of serialize.
     * @param val Whatever serialize returned
     */
    deserialize(val: number[]): CostMatrix;
}

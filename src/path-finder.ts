// Updated 2016-02-24
/**
 * Contains powerful methods for pathfinding in the game world. Support exists for custom navigation costs and paths which span multiple rooms. 
 * Additionally PathFinder can search for paths through rooms you can't see, although you won't be able to detect any dynamic obstacles like creeps or buildings.
 */
declare var PathFinder: PathFinder;
interface PathFinderOps {
    roomCallback(roomName: string): CostMatrix;
    plainCost: number;
    swampCost: number;
    flee: boolean;
    maxOps: number;
    maxRooms: number;
    heuristicWeight: number;
}

interface CostMatrix {
    set(x: number, y: number, cost: number);
    get(x: number, y: number);
    clone(): CostMatrix;
    serialize(): number[];
    deserialize(val: number[]): CostMatrix;
}
interface PathFinder {
    CostMatrix: CostMatrix;
    /**
     * Find an optimal path between origin and goal.
     */
    search(origin: RoomPosition, goal:  RoomPosition|{pos: RoomPosition, range: number}, opts?:PathFinderOps): {path: RoomPosition[], ops:number};
    /**
     * Set new memory value.
     * @param isEnabled .
     * Specify whether to use this new experimental pathfinder in game objects methods. 
     * This method should be invoked every tick. It affects the following methods behavior: 
     * Room.findPath, RoomPosition.findPathTo, RoomPosition.findClosestByPath, Creep.moveTo....
     */
    use(isEnabled: boolean);
}
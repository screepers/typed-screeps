interface GlobalControlLevel {
    level: number;
    progress: number;
    progressTotal: number;
}

interface CPU {
    limit: number;
    tickLimit: number;
    bucket: number;

    /**
     * Get amount of CPU time used from the beginning of the current game tick. Always returns 0 in the Simulation mode.
     */
    getUsed(): number;
}

interface BodyPartDefinition {
    type: string;
    hits: number;
}
interface Owner {
    username: string;
}
interface ReservationDefinition {
    username: string,
    ticksToEnd: number
}
interface StoreDefinition {
    energy: number,
    power?: number
}

/**
 * A dropped piece of energy. It will decay after a while if not picked up.
 */
interface Energy {
    prototype: Energy;
    /**
     * The amount of energy containing.
     */
    energy: number;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * An object representing the position in the room.
     */
    pos: RoomPosition;
    /**
     * The link to the Room object of this structure.
     */
    room: Room;
}

interface LookAtResult {
    type: string;
    constructionSite?: ConstructionSite;
    creep?: Creep;
    energy?: Energy;
    exit?: any;
    flag?: Flag;
    source?: Source;
    structure?: Structure;
    terrain?: string;
}

interface LookAtResultMatrix {
    [coord: number]: LookAtResultMatrix|LookAtResult[]
}

interface FindPathOpts {
    ignoreCreeps?: boolean;
    ignoreDestructibleStructures?: boolean;
    ignore?: [any|RoomPosition];
    avoid?: any[]|RoomPosition[];
    maxOps?: number;
    heuristicWeight?: number;
}

interface MoveToOpts {
    reusePath?: number;
    noPathFinding?: boolean;
}

interface PathStep {
    x: number;
    dx: number;
    y: number;
    dy: number;
    direction: number;
}

/**
 * An object with survival game info
 */
interface SurvivalGameInfo {
    /**
     * Current score.
     */
    score: number;
    /**
     * Time to the next wave of invaders.
     */
    timeToWave: number;
    /**
     * The number of the next wave.
     */
    wave: number;
}
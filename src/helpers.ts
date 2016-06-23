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

/**
 * An array describing the creep’s body. Each element contains the following properties:
 */
interface BodyPartDefinition {
    /**
     * If the body part is boosted, this property specifies the mineral type which is used for boosting. One of the RESOURCE_* constants.
     */
    boost: string;
    /**
     * One of the body part types constants.
     */
    type: string;
    /**
     * The remaining amount of hit points of this body part.
     */
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
    amount: number;
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

interface LookAtResultWithPos {
    x: number;
    y: number;
    type: string;
    creep?: Creep;
    terrain?: string;
    structure?: Structure;
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

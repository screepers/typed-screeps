/**
 * A site of a structure which is currently under construction.
 */
interface ConstructionSite {
    /**
     * The prototype is stored in the ConstructionSite.prototype global object. You can use it to extend game objects behaviour globally:
     */
    prototype: ConstructionSite;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * Whether this is your own construction site.
     */
    my: boolean;
    /**
     * An object with the structure’s owner info
     */
    owner: Owner;
    /**
     * An object representing the position of this structure in the room.
     */
    pos: RoomPosition;
    /**
     * The current construction progress.
     */
    progress: number;
    /**
     * The total construction progress needed for the structure to be built.
     */
    progressTotal: number;
    /**
     * The link to the Room object of this structure.
     */
    room: Room;
    /**
     * One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     */
    structureType: string;
    /**
     * Remove the construction site.
     * @returns Result Code: OK, ERR_NOT_OWNER
     */
    remove(): number;
}
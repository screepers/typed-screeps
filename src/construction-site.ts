/**
 * A site of a structure which is currently under construction.
 */
interface ConstructionSite extends RoomObject {
    readonly prototype: ConstructionSite;
    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    readonly id: string;
    /**
     * Whether this is your own construction site.
     */
    readonly my: boolean;
    /**
     * An object with the structure’s owner info
     */
    readonly owner: Owner;
    /**
     * The current construction progress.
     */
    readonly progress: number;
    /**
     * The total construction progress needed for the structure to be built.
     */
    readonly progressTotal: number;
    /**
     * One of the following constants: STRUCTURE_EXTENSION, STRUCTURE_RAMPART, STRUCTURE_ROAD, STRUCTURE_SPAWN, STRUCTURE_WALL, STRUCTURE_LINK
     */
    readonly structureType: STRUCTURE;
    /**
     * Remove the construction site.
     * @returns Result Code: OK, ERR_NOT_OWNER
     */
    remove(): OK | ERR_NOT_OWNER;
}

interface ConstructionSiteConstructor extends _Constructor<ConstructionSite>, _ConstructorById<ConstructionSite> {
}

declare const ConstructionSite: ConstructionSiteConstructor;

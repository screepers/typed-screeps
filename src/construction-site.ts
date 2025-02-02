/**
 * A site of a structure which is currently under construction.
 *
 * A construction site can be created using the 'Construct' button at the left of the game field or the {@link Room.createConstructionSite} method.
 *
 * To build a structure on the construction site, give a worker creep some amount of energy and perform {@link Creep.build} action.
 *
 * You can remove enemy construction sites by moving a creep on it.
 */
interface ConstructionSite<T extends BuildableStructureConstant = BuildableStructureConstant> extends RoomObject {
    /**
     * A unique object identifier.
     *
     * You can use {@link Game.getObjectById} to retrieve an object instance by its `id`.
     */
    id: Id<this>;
    /**
     * Whether this is your own construction site.
     */
    my: boolean;
    /**
     * An object with the structure’s owner info.
     */
    owner: Owner;
    /**
     * The current construction progress.
     */
    progress: number;
    /**
     * The total construction progress needed for the structure to be built.
     */
    progressTotal: number;
    /**
     * One of the {@link StructureConstant STRUCTURE_*} constants.
     */
    structureType: T;
    /**
     * Remove the construction site.
     * @returns Result Code: OK, ERR_NOT_OWNER
     */
    remove(): number;
}

interface ConstructionSiteConstructor extends _Constructor<ConstructionSite>, _ConstructorById<ConstructionSite> {}

declare const ConstructionSite: ConstructionSiteConstructor;

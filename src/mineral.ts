/**
 * A mineral deposit object. Can be harvested by creeps with a WORK body part using the extractor structure.
 */
interface Mineral extends RoomObject{
    /**
     * The prototype is stored in the Mineral.prototype global object. You can use it to extend game objects behaviour globally.
     */
    prototype: Mineral;

    /**
     * The remaining amount of resources.
     */
    mineralAmount: number;
    /**
     * The resource type, one of the RESOURCE_* constants.
     */
    mineralType: string;
    /**
     * A unique object identificator. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * The remaining time after which the deposit will be refilled.
     */
    ticksToRegeneration: number;

}

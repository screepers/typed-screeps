// Updated 2016-02-05
/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 */
declare class Source extends RoomObject{
    /**
     * The prototype is stored in the Source.prototype global object. You can use it to extend game objects behaviour globally:
     */
    prototype: Source;
    /**
     * The remaining amount of energy.
     */
    energy: number;
    /**
     * The total amount of energy in the source. Equals to 3000 in most cases.
     */
    energyCapacity: number;
    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * The remaining time after which the source will be refilled.
     */
    ticksToRegeneration: number;
}

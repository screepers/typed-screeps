// Updated 2016-02-05
/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 */
interface Source extends RoomObject {
    /**
     * The prototype is stored in the Source.prototype global object. You can use it to extend game objects behaviour globally:
     */
    readonly prototype: Source;
    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    readonly id: string;
    /**
     * The remaining amount of energy.
     */
    readonly energy: number;
    /**
     * The total amount of energy in the source. Equals to 3000 in most cases.
     */
    readonly energyCapacity: number;
    /**
     * The remaining time after which the source will be refilled.
     */
    readonly ticksToRegeneration: number;
}

interface SourceConstructor extends _Constructor<Source>, _ConstructorById<Source> {
}

declare const Source: SourceConstructor;

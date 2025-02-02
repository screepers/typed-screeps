/**
 * An energy source object. Can be harvested by creeps with a WORK body part.
 */
interface Source extends RoomObject {
    /**
     * The prototype is stored in the {@link Source.prototype} global object.
     *
     * You can use it to extend game objects behaviour globally.
     */
    readonly prototype: Source;
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
    id: Id<this>;
    /**
     * If you can get an instance of Source, you can see it.
     * If you can see a Source, you can see the room it's in.
     */
    room: Room;
    /**
     * The remaining time after which the source will be refilled.
     */
    ticksToRegeneration: number;
}

interface SourceConstructor extends _Constructor<Source>, _ConstructorById<Source> {}

declare const Source: SourceConstructor;

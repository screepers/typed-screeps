/**
 * An energy source object.
 *
 * Can be harvested by creeps with a WORK body part.
 *
 * |                     |                                    |
 * | ------------------- | ---------------------------------- |
 * | Energy amount       | 4000 in center rooms
 * |                     | 3000 in an owned or reserved room
 * |                     | 1500 in an unreserved room
 * | Energy regeneration | Every 300 game ticks
 */
interface Source extends RoomObject {
    /**
     * The prototype is stored in the Source.prototype global object. You can use it to extend game objects behaviour globally:
     */
    readonly prototype: Source;
    /**
     * The remaining amount of energy.
     */
    energy: number;
    /**
     * The total amount of energy in the source.
     *
     * Equals to 3000 in most cases.
     */
    energyCapacity: number;
    /**
     * A unique object identifier.
     *
     * You can use {@link Game.getObjectById} to retrieve an object instance by its id.
     */
    id: Id<this>;
    /**
     * The room the source is in.
     */
    room: Room;
    /**
     * The remaining time after which the source will be refilled.
     */
    ticksToRegeneration: number;
}

interface SourceConstructor extends _Constructor<Source>, _ConstructorById<Source> {}

declare const Source: SourceConstructor;

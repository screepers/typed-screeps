/**
 * A destroyed structure. This is a walkable object.
 */
interface Ruin<T = AnyStructure> extends RoomObject {
    readonly prototype: Ruin;

    /**
     * The time when the structure has been destroyed.
     */
    destroyTime: number;

    /**
     * A unique object identificator. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    id: string;

    /**
     * A Store object that contains resources of this structure
     */
    store: StoreDefinition;

    /**
     * An object containing basic data of the destroyed structure.
     */
    structure: T;

    /**
     * The amount of game ticks before this ruin decays.
     * 500 ticks except some special cases
     */
    ticksToDecay: number;
}

interface RuinConstructor extends _Constructor<Ruin>, _ConstructorById<Ruin> {}

declare const Ruin: RuinConstructor;

/**
 * A destroyed structure.
 *
 * This is a walkable object.
 *
 * Usually decays in 500 ticks except some special cases.
 */
interface Ruin extends RoomObject {
    /**
     * The prototype is stored in the {@link Ruin.prototype} global object.
     *
     * You can use it to extend game objects behaviour globally.
     */
    readonly prototype: Ruin;
    /**
     * A unique object identifier.
     * You can use {@link Game.getObjectById} to retrieve an object instance by its id.
     */
    id: Id<this>;
    /**
     * Time of destruction.
     */
    destroyTime: number;
    /**
     * An object with the ruin contents.
     */
    store: StoreDefinitionUnlimited;
    /**
     * The amount of game ticks before this ruin decays.
     */
    ticksToDecay: number;
    /**
     * An object containing the destroyed structure.
     */
    structure: AnyStructure;
}

interface RuinConstructor extends _Constructor<Ruin>, _ConstructorById<Ruin> {}

declare const Ruin: RuinConstructor;

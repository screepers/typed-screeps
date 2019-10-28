/**
 * A destroyed structure. This is a walkable object.
 * <ul>
 *     <li>Decay: 500 ticks except some special cases</li>
 * </ul>
 */
interface Ruin extends RoomObject {
    /**
     * A unique object identificator.
     * You can use {@link Game.getObjectById} method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * Time of destruction.
     */
    destroyTime: number;
    /**
     * An object with the ruin contents.
     */
    store: StoreDefinition;
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

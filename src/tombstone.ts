/**
 * A remnant of dead creeps. This is a walkable structure.
 * <ul>
 *     <li>Decay: 5 ticks per body part of the deceased creep</li>
 * </ul>
 */
interface Tombstone extends RoomObject {
    /**
     * A unique object identificator.
     * You can use {@link Game.getObjectById} method to retrieve an object instance by its id.
     */
    id: string;
    /**
     * Time of death.
     */
    deathTime: number;
    /**
     * An object with the tombstone contents.
     * Each object key is one of the RESOURCE_* constants, values are resources amounts.
     * RESOURCE_ENERGY is always defined and equals to 0 when empty,
     * other resources are undefined when empty.
     * You can use lodash.sum to get the total amount of contents.
     */
    store: StoreDefinition;
    /**
     * The amount of game ticks before this tombstone decays.
     */
    ticksToDecay: number;
    /**
     * An object containing the deceased creep.
     */
    creep: AnyCreep;
}

interface TombstoneConstructor extends _Constructor<Tombstone>, _ConstructorById<Tombstone> {}

declare const Tombstone: TombstoneConstructor;

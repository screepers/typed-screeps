/**
 * A creep's final resting place.
 *
 * This is a walkable structure.
 * Will decay 5 ticks per body part of the deceased creep.
 */
interface Tombstone extends RoomObject {
    /**
     * A unique object identifier.
     *
     * You can use {@link Game.getObjectById} to retrieve an object instance by its id.
     */
    id: Id<this>;
    /**
     * Time of death.
     */
    deathTime: number;
    /**
     * An object with the tombstone contents.
     *
     * Each object key is one of the {@link ResourceConstant RESOURCE_*} constants, values are resources amounts.
     * {@link RESOURCE_ENERGY} is always defined and equals to 0 when empty, other resources are undefined when empty.
     * You can use `_.sum(tombstone.store)` to get the total amount of contents.
     */
    store: StoreDefinitionUnlimited;
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

interface Tombstone extends RoomObject {
    /** The tick that the creep died. */
    deathTime: number;
    store: StoreDefinition;
    /** How many ticks until this tombstone decays */
    ticksToDecay: number;
    /** The creep that died to create this tombstone */
    creep: Creep;
}

interface TombstoneConstructor extends _Constructor<Tombstone>, _ConstructorById<Tombstone> {
}

declare const Tombstone: TombstoneConstructor;

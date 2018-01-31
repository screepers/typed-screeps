interface Tombstone extends RoomObject {
    /** The tick that the creep died. */
    deathTime: number;
    store: StoreDefinition;
    /** How many ticks until this tombstone decays */
    ticksToDecay: number;
    /** The creep that died to create this tombstone */
    creep: Creep;
}

declare const Tombstone: Tombstone;

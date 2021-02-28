interface SymbolDecoder extends RoomObject {
    /**
     * A unique object identificator. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    id: Id<this>;

    /**
     * The symbol type that this object accepts, one of the `RESOURCE_*` constants from `SYMBOLS`.
     */
    resourceType: SymbolConstant;

    /**
     * The number of symbols to be enrolled into your account for each resource unit accepted by this object.
     * The score multiplier depends on the level of the room controller (see `CONTROLLER_LEVEL_SCORE_MULTIPLIERS` constant).
     */
    scoreMultiplier: number;
}

interface SymbolContainer extends RoomObject {
    /**
     * A unique object identificator. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    id: Id<this>;

    /**
     * The resource type, one of the `RESOURCE_*` constants from `SYMBOLS`.
     */
    resourceType: SymbolConstant;

    /**
     * A `Store` object that contains resources of this object.
     */
    store: Store<SymbolConstant, false>;

    /**
     * The amount of game ticks before this container decays.
     */
    ticksToDecay: number;
}

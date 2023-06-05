/**
 * An object that process Thorium into season score.
 */
interface Reactor extends RoomObject {
    /**
     * A unique object identifier. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    id: Id<this>;
    /**
     * Ticks of continuous work of this reactor.
     */
    continuousWork: number;
    /**
     * A Store object that contains cargo of this structure.
     */
    store: Store<RESOURCE_THORIUM, false>;
    /**
     * Whether you control this reactor.
     */
    my: boolean;
    /**
     * An object with the reactor's owner info.
     */
    owner: Owner;
}

interface ReactorConstructor extends _Constructor<Reactor> {}

declare const Reactor: ReactorConstructor;

/**
 * An object that process Thorium into season score.
 */
interface Reactor extends RoomObject {
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

/**
 * A nuke landing position. This object cannot be removed or modified. You can find incoming nukes in the room using the FIND_NUKES constant.
 */
interface Nuke extends RoomObject {
    /**
     * The prototype is stored in the {@link Nuke.prototype} global object.
     *
     * You can use it to extend game objects behaviour globally.
     */
    readonly prototype: Nuke;

    /**
     * A unique object identifier. You can use Game.getObjectById method to retrieve an object instance by its id.
     */
    id: Id<this>;
    /**
     * The name of the room where this nuke has been launched from.
     */
    launchRoomName: string;
    /**
     * The remaining landing time.
     */
    timeToLand: number;
}

interface NukeConstructor extends _Constructor<Nuke>, _ConstructorById<Nuke> {}

declare const Nuke: NukeConstructor;

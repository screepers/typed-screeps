/**
 * A nuke landing position.
 *
 * This object cannot be removed or modified. You can find incoming nukes in the room using the {@link FIND_NUKES} constant.
 *
 * Landing time: 50,000 ticks
 * All creeps, construction sites and dropped resources in the room are removed immediately, even inside ramparts.
 *
 * Damage to structures:
 * - 10,000,000 hits at the landing position;
 * - 5,000,000 hits to all structures in 5x5 area.
 *
 * Note that you can stack multiple nukes from different rooms at the same target position to increase damage.
 *
 * Nuke landing does not generate tombstones and ruins, and destroys all existing tombstones and ruins in the room.
 *
 * If the room is in safe mode, then the safe mode is cancelled immediately, and the safe mode cooldown is reset to 0.
 *
 * The room controller is hit by triggering {@link StructureController.upgradeBlocked} period, which means it is unavailable to activate safe mode again within the next 200 ticks.
 */
interface Nuke extends RoomObject {
    readonly prototype: Nuke;

    /**
     * A unique object identifier.
     *
     * You can use {@link Game.getObjectById} to retrieve an object instance by its id.
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

/**
 * Accepts score resource and enrolls it into your account. Use Creep.transfer to put scores into the collector.
 *
 * **Only available in the Season 1 world.**
 *
 * > Note: The capacity of each collector is limited.
 * When your creep transfers some amount of score resource into the collector, its capacity decreases correspondingly.
 * The limit recovers by 20 units per tick.
 */
interface ScoreCollector extends RoomObject {
    /**
     * A unique object identificator.
     * You can use {@link Game.getObjectById} method to retrieve an object instance by its id.
     */
    id: Id<this>;
    /**
     * A Store object that contains score resource
     */
    store: StoreDefinitionUnlimited;
}

interface ScoreCollectorConstructor extends _Constructor<ScoreCollector>, _ConstructorById<ScoreCollector> {}

declare const ScoreCollector: ScoreCollectorConstructor;

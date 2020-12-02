/**
 * Contains score resource which can be withdrawn by creeps with a CARRY part.
 *
 * **Only available in the Season 1 world.**
 */
interface ScoreContainer extends RoomObject {
    /**
     * A unique object identificator.
     * You can use {@link Game.getObjectById} method to retrieve an object instance by its id.
     */
    id: Id<this>;
    /**
     * A Store object that contains score resource
     */
    store: Store<RESOURCE_SCORE, false>;
    /**
     * The amount of game ticks before this ScoreContainer decays.
     */
    ticksToDecay: number;
}

interface ScoreContainerConstructor extends _Constructor<ScoreContainer>, _ConstructorById<ScoreContainer> {}

declare const ScoreContainer: ScoreContainerConstructor;

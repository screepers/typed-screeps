/**
 * A rare resource deposit needed for producing commodities.
 * Can be harvested by creeps with a WORK body part.
 * Each harvest operation triggers a cooldown period, which becomes longer and longer over time.
 */
interface Deposit extends RoomObject {
    /**
     * A unique object identificator.
     * You can use {@link Game.getObjectById} method to retrieve an object instance by its id.
     */
    id: Id<this>;
    /**
     * The amount of game ticks until the next harvest action is possible.
     */
    depositType: DepositConstant;
    /**
     * The amount of game ticks until the next harvest action is possible.
     */
    cooldown: number;
    /**
     * The cooldown of the last harvest operation on this deposit.
     */
    lastCooldown: number;
    /**
     * The amount of game ticks when this deposit will disappear.
     */
    ticksToDecay: number;
}

interface DepositConstructor extends _Constructor<Deposit>, _ConstructorById<Deposit> {}

declare const Deposit: DepositConstructor;

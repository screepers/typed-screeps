/**
 * A rare resource deposit needed for producing commodities.
 *
 * Can be harvested by creeps with a WORK body part. Each harvest operation triggers a cooldown period, which becomes longer and longer over time.
 *
 * Learn more about deposits from [this article](https://docs.screeps.com/resources.html).
 *
 * |              |             |
 * | ------------ | ----------- |
 * | **Cooldown** | 0.001 * totalHarvested ^ 1.2
 * | **Decay**    | 50,000 ticks after appearing or last harvest operation
 */
interface Deposit extends RoomObject {
    /**
     * A unique object identifier.
     *
     * You can use {@link Game.getObjectById} to retrieve an object instance by its id.
     */
    id: Id<this>;
    /**
     * The deposit type, one of the {@link DepositConstant}.
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

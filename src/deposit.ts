/**
 * A rare resource deposit needed for producing commodities.
 * Can be harvested by creeps with a WORK body part.
 * Each harvest operation triggers a cooldown period, which becomes longer and longer over time.
 */
interface Deposit extends RoomObject {
    /**
     * The prototype is stored in the {@link Deposit.prototype} global object.
     *
     * You can use it to extend game objects behaviour globally.
     */
    readonly prototype: Deposit;
    /**
     * A unique object identificator.
     * You can use {@link Game.getObjectById} method to retrieve an object instance by its id.
     */
    id: Id<this>;
    /**
     * The deposit type, one of the following constants:
     * * `RESOURCE_MIST`
     * * `RESOURCE_BIOMASS`
     * * `RESOURCE_METAL`
     * * `RESOURCE_SILICON`
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

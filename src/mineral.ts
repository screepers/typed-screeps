/**
 * A mineral deposit.
 *
 * Can be harvested by creeps with a WORK body part using the extractor structure.
 * Learn more about minerals from [this article](http://docs.screeps.com/api/#Mineral).
 *
 *
 * |                            |                              |
 * | ---------------------------| ---------------------------- |
 * | Regeneration amount        | DENSITY_LOW: 15,000
 * |                            | DENSITY_MODERATE: 35,000
 * |                            | DENSITY_HIGH: 70,000
 * |                            | DENSITY_ULTRA: 100,000
 * | Regeneration time          | 50,000 ticks
 * | Density change probability | DENSITY_LOW: 100% chance
 * |                            | DENSITY_MODERATE: 5% chance
 * |                            | DENSITY_HIGH: 5% chance
 * |                            | DENSITY_ULTRA: 100% chance*
 */
interface Mineral<T extends MineralConstant = MineralConstant> extends RoomObject {
    /**
     * The prototype is stored in the Mineral.prototype global object. You can use it to extend game objects behaviour globally.
     */
    readonly prototype: Mineral;
    /**
     * The density of this mineral deposit, one of the {@link DensityConstant} constants.
     */
    density: number;
    /**
     * The remaining amount of resources.
     */
    mineralAmount: number;
    /**
     * The resource type, one of the {@link MineralConstant} constants.
     */
    mineralType: T;
    /**
     * A unique object identifier.
     *
     * You can use {@link Game.getObjectById} to retrieve an object instance by its `id`.
     */
    id: Id<this>;
    /**
     * The remaining time after which the deposit will be refilled if is recharging, otherwise undefined.
     */
    ticksToRegeneration?: number;
}

interface MineralConstructor extends _Constructor<Mineral>, _ConstructorById<Mineral> {}

declare const Mineral: MineralConstructor;

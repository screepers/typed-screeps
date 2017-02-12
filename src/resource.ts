/**
 * A dropped piece of resource. It will decay after a while if not picked up. Dropped resource pile decays for ceil(amount/1000) units per tick.
 */

interface Resource extends RoomObject {
    readonly prototype: Resource;
    /**
     * A unique object identifier. You can use `Game.getObjectById` method to retrieve an object instance by its `id`.
     */
    readonly id: string;
    /**
     * The amount of resource units containing.
     */
    readonly amount: number;
    /**
     * One of the `RESOURCE_*` constants.
     */
    readonly resourceType: string;
}

interface ResourceConstructor {
    new (id: string): Resource;
}

declare const Resource: ResourceConstructor;

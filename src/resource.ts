/**
 * A dropped piece of resource.
 *
 * It will decay after a while if not picked up.
 * Dropped resource pile decays for `ceil(amount/1000)` units per tick.
 */

interface Resource<T extends ResourceConstant = ResourceConstant> extends RoomObject {
    readonly prototype: Resource;

    /**
     * The amount of resource units containing.
     */
    amount: number;
    /**
     * A unique object identifier.
     *
     * You can use {@link Game.getObjectById} to retrieve an object instance by its `id`.
     */
    id: Id<this>;
    /**
     * One of the {@link ResourceConstant RESOURCE_*} constants.
     */
    resourceType: T;
}

interface ResourceConstructor extends _Constructor<Resource>, _ConstructorById<Resource> {}

declare const Resource: ResourceConstructor;

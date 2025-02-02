interface StoreBase<POSSIBLE_RESOURCES extends ResourceConstant, UNLIMITED_STORE extends boolean> {
    /**
     * Returns capacity of this store for the specified resource.
     *
     * For a general purpose store, it returns total capacity if `resource` is undefined.
     * @param resource The type of the resource.
     * @returns Returns capacity number, or `null` in case of an invalid `resource` for this store type.
     */
    getCapacity<R extends ResourceConstant | undefined = undefined>(
        resource?: R,
    ): UNLIMITED_STORE extends true
        ? null
        : R extends undefined
        ? ResourceConstant extends POSSIBLE_RESOURCES
            ? number
            : null
        : R extends POSSIBLE_RESOURCES
        ? number
        : null;
    /**
     * Returns the capacity used by the specified resource, or total used capacity for general purpose stores if `resource` is undefined.
     * @param resource The type of the resource.
     * @returns Returns used capacity number, or `null` in case of a not valid `resource` for this store type.
     */
    getUsedCapacity<R extends ResourceConstant | undefined = undefined>(
        resource?: R,
    ): R extends undefined ? (ResourceConstant extends POSSIBLE_RESOURCES ? number : null) : R extends POSSIBLE_RESOURCES ? number : null;
    /**
     * Returns free capacity for the store.
     *
     * For a limited store, it returns the capacity available for the specified resource if `resource` is defined and valid for this store.
     * @param resource The type of the resource.
     * @returns Returns available capacity number, or `null` in case of an invalid `resource` for this store type.
     */
    getFreeCapacity<R extends ResourceConstant | undefined = undefined>(
        resource?: R,
    ): UNLIMITED_STORE extends true
        ? null
        : R extends undefined
        ? ResourceConstant extends POSSIBLE_RESOURCES
            ? number
            : null
        : R extends POSSIBLE_RESOURCES
        ? number
        : null;
}

type Store<POSSIBLE_RESOURCES extends ResourceConstant, UNLIMITED_STORE extends boolean> = StoreBase<
    POSSIBLE_RESOURCES,
    UNLIMITED_STORE
> & { [P in POSSIBLE_RESOURCES]: number } & { [P in Exclude<ResourceConstant, POSSIBLE_RESOURCES>]: 0 };

/**
 * An object that can contain resources in its cargo.
 *
 * There are two types of stores in the game: general purpose stores and limited stores.
 *
 * General purpose stores can contain any resource within its capacity (e.g. creeps, containers, storages, terminals).
 *
 * Limited stores can contain only a few types of resources needed for that particular object (e.g. spawns, extensions, labs, nukers).
 *
 * The Store prototype is the same for both types of stores, but they have different behavior depending on the resource argument in its methods.
 *
 * You can get specific resources from the store by addressing them as object properties:
 * ```
 * console.log(creep.store[RESOURCE_ENERGY]);
 * ```
 */
interface GenericStoreBase {
    /**
     * Returns capacity of this store for the specified resource.
     *
     * For a general purpose store, it returns total capacity if `resource` is undefined.
     * @param resource The type of the resource.
     * @returns Returns capacity number, or `null` in case of an invalid `resource` for this store type.
     */
    getCapacity(resource?: ResourceConstant): number | null;
    /**
     * Returns the capacity used by the specified resource, or total used capacity for general purpose stores if `resource` is undefined.
     * @param resource The type of the resource.
     * @returns Returns used capacity number, or `null` in case of a not valid `resource` for this store type.
     */
    getUsedCapacity(resource?: ResourceConstant): number | null;
    /**
     * Returns free capacity for the store.
     *
     * For a limited store, it returns the capacity available for the specified resource if `resource` is defined and valid for this store.
     * @param resource The type of the resource.
     * @returns Returns available capacity number, or `null` in case of an invalid `resource` for this store type.
     */
    getFreeCapacity(resource?: ResourceConstant): number | null;
}

type GenericStore = GenericStoreBase & { [P in ResourceConstant]: number };

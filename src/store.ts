interface StoreBase<POSSIBLE_RESOURCES extends ResourceConstant, UNLIMITED_STORE extends boolean> {
    readonly prototype: GenericStoreBase;

    /**
     * Returns capacity of this store for the specified resource. For a general purpose store, it returns total capacity if `resource` is undefined.
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
     * Returns free capacity for the store. For a limited store, it returns the capacity available for the specified resource if `resource` is defined and valid for this store.
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

interface GenericStoreBase {
    /**
     * The prototype is stored in the {@link GenericStoreBase.prototype} global object.
     *
     * You can use it to extend game objects behaviour globally.
     */
    readonly prototype: GenericStoreBase;
    /**
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
     * Returns free capacity for the store. For a limited store, it returns the capacity available for the specified resource if `resource` is defined and valid for this store.
     * @param resource The type of the resource.
     * @returns Returns available capacity number, or `null` in case of an invalid `resource` for this store type.
     */
    getFreeCapacity(resource?: ResourceConstant): number | null;
}

type GenericStore = GenericStoreBase & { [P in ResourceConstant]: number };

interface StoreConstructor extends _Constructor<GenericStoreBase> {}

declare const Store: StoreConstructor;

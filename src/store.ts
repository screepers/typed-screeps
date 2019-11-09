interface StoreBase<POSSIBLE_RESSOURCES extends ResourceConstant, UNLIMITED_STORE extends boolean> {
    /** Returns capacity of this store for the specified resource, or total capacity if resource is undefined. */
    getCapacity<R extends ResourceConstant | undefined>(
        resource?: R,
    ): UNLIMITED_STORE extends true
        ? null
        : (undefined extends R
              ? (ResourceConstant extends POSSIBLE_RESSOURCES ? number : null)
              : (R extends POSSIBLE_RESSOURCES ? number : null));
    /** Returns the capacity used by the specified resource, or total used capacity for general purpose stores if resource is undefined. */
    getUsedCapacity<R extends ResourceConstant | undefined>(
        resource?: R,
    ): undefined extends R ? (ResourceConstant extends POSSIBLE_RESSOURCES ? number : null) : (R extends POSSIBLE_RESSOURCES ? number : 0);
    /** A shorthand for getCapacity(resource) - getUsedCapacity(resource). */
    getFreeCapacity(resource?: ResourceConstant): number;
}

type Store<POSSIBLE_RESSOURCES extends ResourceConstant, UNLIMITED_STORE extends boolean> = StoreBase<
    POSSIBLE_RESSOURCES,
    UNLIMITED_STORE
> &
    { [P in POSSIBLE_RESSOURCES]: number } &
    { [P in Exclude<ResourceConstant, POSSIBLE_RESSOURCES>]: 0 };

interface GenericStoreBase {
    /** Returns capacity of this store for the specified resource, or total capacity if resource is undefined. */
    getCapacity(resource?: ResourceConstant): number | null;
    /** Returns the capacity used by the specified resource, or total used capacity for general purpose stores if resource is undefined. */
    getUsedCapacity(resource?: ResourceConstant): number | null;
    /** A shorthand for getCapacity(resource) - getUsedCapacity(resource). */
    getFreeCapacity(resource?: ResourceConstant): number;
}

type GenericStore = GenericStoreBase & { [P in ResourceConstant]: number };

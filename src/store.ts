interface Store extends Record<ResourceConstant, number> {
    readonly prototype: Store;
    /**
     * Returns capacity of this store for the specified resource, or total capacity if resource is undefined.
     * @param resource The type of the resource
     */
    getCapacity(resource?: ResourceConstant): number | null;

    /**
     * A shorthand for getCapacity(resource) - getUsedCapacity(resource)
     * @param resource The type of the resource
     */
    getFreeCapacity(resource?: ResourceConstant): number | null;

    /**
     * Returns the capacity used by the specified resource, or total used capacity for general purpose stores if resource is undefined.
     * @param resource The type of the resource.
     */
    getUsedCapacity(resource?: ResourceConstant): number | null;
}

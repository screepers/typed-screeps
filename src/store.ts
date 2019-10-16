interface Store extends Record<ResourceConstant, number> {
    /**
     * Returns capacity of this store for the specified resource, or total capacity if resource is undefined.
     * @param resource The type of the resource
     */
    getCapacity(resource?: ResourceConstant): Number | null;

    /**
     * A shorthand for getCapacity(resource) - getUsedCapacity(resource)
     * @param resource
     */
    getFreeCapacity(resource?: ResourceConstant): Number | null;

    /**
     * Returns the capacity used by the specified resource, or total used capacity for general purpose stores if resource is undefined.
     * @param resource The type of the resource.
     */
    getUsedCapacity(resource?: ResourceConstant): Number | null;
}

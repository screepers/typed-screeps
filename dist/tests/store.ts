// StoreDefinition

{
    for (const resourceType of resources(creep.carry)) {
        const amount = creep.carry[resourceType];
        creep.drop(resourceType, amount);
    }

    const extension = new StructureExtension("" as Id<StructureExtension>);

    const e1: number = extension.store.getUsedCapacity(RESOURCE_ENERGY); // $ExpectType number
    const e2: number = extension.store[RESOURCE_ENERGY]; // $ExpectType number

    // Invalid resource type for extension
    const eg1: null = extension.store.getUsedCapacity(RESOURCE_GHODIUM); // $ExpectType null
    const eg2: null = extension.store.getFreeCapacity(RESOURCE_GHODIUM); // $ExpectType null
    const eg3: null = extension.store.getCapacity(RESOURCE_GHODIUM); // $ExpectType null
    const eg4: 0 = extension.store.G; // $ExpectType 0

    const storage = new StructureStorage("" as Id<StructureStorage>);

    const sg1: number = storage.store.getUsedCapacity(RESOURCE_GHODIUM); // $ExpectType number
    const sg2: number = storage.store.getFreeCapacity(RESOURCE_GHODIUM); // $ExpectType number
    const sg3: number = storage.store.getCapacity(RESOURCE_GHODIUM); // $ExpectType number
}

// Game object Id types
{
    const creepId: Id<Creep> = "1" as Id<Creep>;
    const creepOne: Creep | null = Game.getObjectById(creepId); // $ExpectType Creep | null
    const creepTwo: Creep | null = Game.getObjectById<Creep>("2"); // deprecated $ExpectType Creep | null
    // Works with typed ID
    const creepThree: Creep = new Creep(creepId); // $ExpectType Creep

    if (creepOne) {
        creepOne.hits; // $ExpectType number
        const recycle = Game.getObjectById(creepOne.id); // $ExpectType Creep | null
    }

    type StoreStructure = StructureContainer | StructureStorage | StructureLink;
    const storeUnionID: Id<StoreStructure> = "1234" as Id<StoreStructure>; // Strict assertion required
    const storeIdUnion: StoreStructure["id"] = "1234" as StoreStructure["id"];
    const stringID: string = storeUnionID; // Id<T> assignable implicitly to string
    const stringID2: string = storeIdUnion; // Id<T> assignable implicitly to string
    const storeObject = Game.getObjectById(storeUnionID)!; // $ExpectType StoreStructure
    const storeObject2 = Game.getObjectById(storeIdUnion)!; // $ExpectType StructureContainer | StructureStorage | StructureLink

    // Object recognized
    switch (storeObject.structureType) {
        case STRUCTURE_CONTAINER:
            storeObject.structureType === "container";
        case STRUCTURE_STORAGE:
            storeObject.structureType === "storage";
        default:
            storeObject.structureType === "link";
    }

    // Default type is unknown if untyped Id provided
    const untyped = Game.getObjectById("untyped"); // $ExpectType unknown
}

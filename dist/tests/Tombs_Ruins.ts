// Tombstones

{
    const tombstone = room.find(FIND_TOMBSTONES)[0]; // $ExpectType Tombstone

    tombstone.creep; // $ExpectType AnyCreep
    (tombstone.creep as PowerCreep).spawnCooldownTime;
    (tombstone.creep as Creep).my;

    tombstone.store; // $ExpectType StoreDefinitionUnlimited

    tombstone.id; // $ExpectType Id<Tombstone>

    const creep = Game.creeps["dave"];
    creep.withdraw(tombstone, RESOURCE_ENERGY);
}

// Ruin

{
    const ruin = room.find(FIND_RUINS)[0]; // $ExpectType Ruin

    ruin.store; // $ExpectType StoreDefinitionUnlimited
    ruin.structure; // $ExpectType AnyStructure

    creep.withdraw(ruin, RESOURCE_ENERGY);
    powerCreep.withdraw(ruin, RESOURCE_ENERGY);
}

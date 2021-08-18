{
    // Test that you can use signatures
    EXTENSION_ENERGY_CAPACITY[Game.rooms.myRoom.controller!.level]; // $ExpectType number

    REACTIONS[Object.keys(creep.carry)[0]]; // $ExpectType { [resource: string]: string; }

    BOOSTS[creep.body[0].type as string]; // $ExpectType { [boost: string]: { [action: string]: number; }; }
}

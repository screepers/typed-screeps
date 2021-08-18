// Game.spawns

{
    for (const i in Game.spawns) {
        Game.spawns[i].createCreep(body);

        // Test StructureSpawn.Spawning
        let creep = Game.spawns[i].spawning; // $ExpectType Spawning | null
        if (creep) {
            const name: string = creep.name; // $ExpectType string
            const needTime: number = creep.needTime; // $ExpectType number
            const remainingTime: number = creep.remainingTime; // $ExpectType number
            const creepSpawn: StructureSpawn = creep.spawn; // $ExpectType StructureSpawn

            const cancelStatus: OK | ERR_NOT_OWNER = creep.cancel();
            const setDirectionStatus: OK | ERR_NOT_OWNER | ERR_INVALID_ARGS = creep.setDirections([TOP, BOTTOM, LEFT, RIGHT]);
        }

        creep = new StructureSpawn.Spawning("" as Id<Spawning>); // $ExpectType Spawning
        creep = StructureSpawn.Spawning("" as Id<Spawning>); // $ExpectType Spawning

        const invaderCore = new StructureInvaderCore("" as Id<StructureInvaderCore>);
        const invader = invaderCore.spawning; // $ExpectType Spawning | null
        if (invader) {
            const name = invader.name; // $ExpectType string
        }
    }
}

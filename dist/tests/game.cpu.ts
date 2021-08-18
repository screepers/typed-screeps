// Game.cpu.getUsed()

{
    if (Game.cpu.getUsed() > Game.cpu.tickLimit / 2) {
        // Half CPU Usged
    }
}

{
    for (const name in Game.creeps) {
        const startCpu = Game.cpu.getUsed(); // $ExpectType number

        // creep logic goes here

        const elapsed = Game.cpu.getUsed() - startCpu; // $ExpectType number
    }
}

// Game.cpu.setShardLimits()

{
    Game.cpu.setShardLimits({ shard0: 20, shard1: 10 });
}

// Game.cpu.halt()
{
    if (Game.cpu.hasOwnProperty("halt")) {
        Game.cpu.halt!(); // $ExpectType never
    }
}

// Game.cpu.unlock()
{
    if (!Game.cpu.unlocked) {
        if (!Game.cpu.unlockedTime) {
            const unlock_state = Game.cpu.unlock();
            if (unlock_state === OK) {
                // Unlimited cosmic power!
            }
        }
    }
}

{
    if (Game.cpu.hasOwnProperty("getHeapStatistics")) {
        const heap = Game.cpu.getHeapStatistics!();
        heap.total_heap_size;
    }
}

// <strike>Horse armor!</strike>Pixels!
{
    const ret: OK | ERR_NOT_ENOUGH_RESOURCES = Game.cpu.generatePixel(); // $ExpectType 0 | -6
}

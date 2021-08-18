// RawMemory

{
    // RawMemory.segments

    RawMemory.setActiveSegments([0, 3]);
    // on the next tick
    const segmentZero = RawMemory.segments[0];
    RawMemory.segments[3] = '{"foo": "bar", "counter": 15}';

    // RawMemory.foreignSegment

    RawMemory.setActiveForeignSegment("player");
    // on the next tick
    const playerSegment = RawMemory.foreignSegment;
    // --> {"username": "player", "id": 40, "data": "Hello!"}

    // RawMemory.interShardSegment

    RawMemory.interShardSegment = JSON.stringify({
        creeps: {
            Bob: { role: "claimer" },
        },
    });

    // on another shard
    const interShardData = JSON.parse(RawMemory.interShardSegment);
    if (interShardData.creeps[creep.name]) {
        creep.memory = interShardData[creep.name];
        delete interShardData.creeps[creep.name]; // tslint:disable-line no-dynamic-delete
    }
    RawMemory.interShardSegment = JSON.stringify(interShardData);

    // RawMemory.get()
    const myMemory = JSON.parse(RawMemory.get());

    // RawMemory.set(value)
    RawMemory.set(JSON.stringify(myMemory));

    // RawMemory.setActiveSegments(ids)
    RawMemory.setActiveSegments([0, 3]);

    // RawMemory.setActiveForeignSegment(username, [id])
    RawMemory.setActiveForeignSegment("player");
    RawMemory.setActiveForeignSegment("player", 10);
    RawMemory.setActiveForeignSegment(null);

    // RawMemory.setDefaultPublicSegment(id)
    RawMemory.setPublicSegments([5, 20, 21]);
    RawMemory.setDefaultPublicSegment(5);
    RawMemory.setDefaultPublicSegment(null);

    // RawMemory.setPublicSegments(ids)
    RawMemory.setPublicSegments([5, 3]);
    RawMemory.setPublicSegments([]);
}

// InterShardMemory

{
    let localShardData = "";
    InterShardMemory.setLocal(localShardData);
    localShardData = InterShardMemory.getLocal();

    const remoteShardData: string = InterShardMemory.getRemote("shard2") || "";
}

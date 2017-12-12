// This file exists solely to test whether or not the typings actually work.
// After working on your changes, make sure to run `npm run compile` to build
// the declarations before opening this file.
//
// If you open this file and see no red squiggly lines, then you're good!
// Feel free to add more test cases in the form of a sample code.
// TODO: add more test cases.
// Sample inputs
var creep = Game.creeps.sampleCreep;
var room = Game.rooms.W10S10;
var flag = Game.flags.Flag1;
var spawn = Game.spawns.Spawn1;
var body = [WORK, WORK, CARRY, MOVE];
// Sample inputs for Game.map.findRoute testing
var anotherRoomName = Game.rooms.W10S11;
// Game.creeps
{
    for (var i in Game.creeps) {
        Game.creeps[i].moveTo(flag);
    }
}
// Game.flags
{
    creep.moveTo(Game.flags.Flag1);
}
// Game.spawns
{
    for (var i in Game.spawns) {
        Game.spawns[i].createCreep(body);
    }
}
// Game.time
{
    var time = Game.time;
    time += 1;
}
// Game.cpu.getUsed()
{
    if (Game.cpu.getUsed() > Game.cpu.tickLimit / 2) {
        // Half CPU Usged
    }
}
{
    for (var name_1 in Game.creeps) {
        var startCpu = Game.cpu.getUsed();
        // creep logic goes here
        var elapsed = Game.cpu.getUsed() - startCpu;
    }
}
// Game.cpu.setShardLimits()
{
    Game.cpu.setShardLimits({ shard0: 20, shard1: 10 });
}
// Game.getObjectById(id)
{
    creep.memory.sourceId = creep.pos.findClosestByRange(FIND_SOURCES).id;
    var source = Game.getObjectById(creep.memory.sourceId);
}
// Game.notify(message, [groupInterval])
{
    if (creep.hits < creep.memory.lastHits) {
        Game.notify("Creep " + creep + " has been attacked at " + creep.pos + "!");
    }
    creep.memory.lastHits = creep.hits;
}
{
    if (Game.spawns["Spawn1"].energy === 0) {
        Game.notify("Spawn1 is out of energy", 180 // group these notifications for 3 hours
        );
    }
}
// Game.map.describeExits()
{
    var exits = Game.map.describeExits("W8N3");
}
// Game.map.findExit()
{
    if (creep.room !== anotherRoomName) {
        var exitDir = Game.map.findExit(creep.room, anotherRoomName);
        var exit = creep.pos.findClosestByRange(exitDir);
        creep.moveTo(exit);
    }
    else {
        // go to some place in another room
    }
}
{
    creep.moveTo(new RoomPosition(25, 25, anotherRoomName.name));
}
// Game.map.findRoute()
{
    var route = Game.map.findRoute(creep.room, anotherRoomName);
    if (route !== ERR_NO_PATH && route.length > 0) {
        var exit = creep.pos.findClosestByRange(route[0].exit);
        creep.moveTo(exit);
    }
}
{
    var route = Game.map.findRoute(creep.room, anotherRoomName, {
        routeCallback: function (roomName, fromRoomName) {
            if (roomName === "W10S10") {
                // avoid this room
                return Infinity;
            }
            return 1;
        }
    });
}
{
    var from = new RoomPosition(25, 25, "E1N1");
    var to = new RoomPosition(25, 25, "E4N1");
    // Use `findRoute` to calculate a high-level plan for this path,
    // prioritizing highways and owned rooms
    var allowedRooms_1 = (_a = {}, _a[from.roomName] = true, _a);
    var route = Game.map.findRoute(from.roomName, to.roomName, {
        routeCallback: function (roomName) {
            var parsed = /^[WE]([0-9]+)[NS]([0-9]+)$/.exec(roomName);
            if (parsed !== null) {
                var isHighway = (parseInt(parsed[1], 10) % 10 === 0) ||
                    (parseInt(parsed[2], 10) % 10 === 0);
                var isMyRoom = Game.rooms[roomName] &&
                    Game.rooms[roomName].controller &&
                    Game.rooms[roomName].controller.my;
                if (isHighway || isMyRoom) {
                    return 1;
                }
                else {
                    return 2.5;
                }
            }
            else {
                return 2.5;
            }
        }
    });
    if (route !== ERR_NO_PATH) {
        route.forEach(function (info) {
            allowedRooms_1[info.room] = true;
        });
    }
    // Invoke PathFinder, allowing access only to rooms from `findRoute`
    var ret = PathFinder.search(from, [to], {
        roomCallback: function (roomName) {
            if (allowedRooms_1[roomName] === undefined) {
                return false;
            }
            else {
                return true;
            }
        }
    });
}
// Game.map.getRoomLinearDistance(roomName1, roomName2, [continuous])
{
    Game.map.getRoomLinearDistance("W1N1", "W4N2"); // 3
    Game.map.getRoomLinearDistance("E65S55", "W65S55", false); // 131
    Game.map.getRoomLinearDistance("E65S55", "W65S55", true); // 11
}
// Game.map.getTerrainAt(x, y, roomName)
// Game.map.getTerrainAt(pos)
{
    Game.map.getTerrainAt(25, 20, "W10N10");
}
{
    Game.map.getTerrainAt(new RoomPosition(25, 20, "W10N10"));
}
// Game.map.isRoomAvailable(roomName)
{
    if (Game.map.isRoomAvailable(room.name)) {
        creep.moveTo(room.getPositionAt(25, 25));
    }
}
// Game.market
{
    // Game.market.calcTransactionCost(amount, roomName1, roomName2)
    var cost = Game.market.calcTransactionCost(1000, "W0N0", "W10N5");
    // Game.market.cancelOrder(orderId)
    for (var id in Game.market.orders) {
        Game.market.cancelOrder(id);
    }
    // Game.market.changeOrderPrice(orderId, newPrice)
    Game.market.changeOrderPrice("57bec1bf77f4d17c4c011960", 9.95);
    // Game.market.createOrder(type, resourceType, price, totalAmount, [roomName])
    Game.market.createOrder(ORDER_SELL, RESOURCE_GHODIUM, 9.95, 10000, "W1N1");
    // Game.market.deal(orderId, amount, [yourRoomName])
    Game.market.deal("57cd2b12cda69a004ae223a3", 1000, "W1N1");
    var amountToBuy = 2000;
    var maxTransferEnergyCost = 500;
    var orders = Game.market.getAllOrders({ type: ORDER_SELL, resourceType: RESOURCE_GHODIUM });
    for (var _i = 0, orders_1 = orders; _i < orders_1.length; _i++) {
        var i = orders_1[_i];
        if (i.roomName) {
            var transferEnergyCost = Game.market.calcTransactionCost(amountToBuy, "W1N1", i.roomName);
            if (transferEnergyCost < maxTransferEnergyCost) {
                Game.market.deal(i.id, amountToBuy, "W1N1");
                break;
            }
        }
    }
    // Game.market.extendOrder(orderId, addAmount)
    Game.market.extendOrder("57bec1bf77f4d17c4c011960", 10000);
    // Game.market.getAllOrders([filter])
    Game.market.getAllOrders();
    Game.market.getAllOrders({ type: ORDER_SELL, resourceType: RESOURCE_GHODIUM });
    var targetRoom_1 = "W1N1";
    Game.market.getAllOrders(function (currentOrder) { return currentOrder.resourceType === RESOURCE_GHODIUM &&
        currentOrder.type === ORDER_SELL &&
        Game.market.calcTransactionCost(1000, targetRoom_1, currentOrder.roomName) < 500; });
    // Game.market.getOrderById(id)
    var order = Game.market.getOrderById("55c34a6b5be41a0a6e80c123");
}
// PathFinder
{
    var pfCreep = Game.creeps.John;
    var goals = pfCreep.room.find(FIND_SOURCES).map(function (source) {
        // We can't actually walk on sources-- set `range` to 1
        // so we path next to it.
        return { pos: source.pos, range: 1 };
    });
    var ret = PathFinder.search(pfCreep.pos, goals, {
        // We need to set the defaults costs higher so that we
        // can set the road cost lower in `roomCallback`
        plainCost: 2,
        swampCost: 10,
        roomCallback: function (roomName) {
            var curRoom = Game.rooms[roomName];
            // In this example `room` will always exist, but since
            // PathFinder supports searches which span multiple rooms
            // you should be careful!
            if (!curRoom) {
                return false;
            }
            var costs = new PathFinder.CostMatrix();
            curRoom.find(FIND_STRUCTURES).forEach(function (struct) {
                if (struct.structureType === STRUCTURE_ROAD) {
                    // Favor roads over plain tiles
                    costs.set(struct.pos.x, struct.pos.y, 1);
                }
                else if (struct.structureType !== STRUCTURE_CONTAINER &&
                    (struct.structureType !== STRUCTURE_RAMPART ||
                        !struct.my)) {
                    // Can't walk through non-walkable buildings
                    costs.set(struct.pos.x, struct.pos.y, 0xff);
                }
            });
            // Avoid creeps in the room
            curRoom.find(FIND_CREEPS).forEach(function (thisCreep) {
                costs.set(thisCreep.pos.x, thisCreep.pos.y, 0xff);
            });
            return costs;
        }
    });
    var pos = ret.path[0];
    pfCreep.move(pfCreep.pos.getDirectionTo(pos));
}
// RawMemory
{
    // RawMemory.segments
    RawMemory.setActiveSegments([0, 3]);
    // on the next tick
    var segmentZero = RawMemory.segments[0];
    RawMemory.segments[3] = '{"foo": "bar", "counter": 15}';
    // RawMemory.foreignSegment
    RawMemory.setActiveForeignSegment("player");
    // on the next tick
    var playerSegment = RawMemory.foreignSegment;
    // --> {"username": "player", "id": 40, "data": "Hello!"}
    // RawMemory.interShardSegment
    RawMemory.interShardSegment = JSON.stringify({
        creeps: {
            Bob: { role: "claimer" }
        }
    });
    // on another shard
    var interShardData = JSON.parse(RawMemory.interShardSegment);
    if (interShardData.creeps[creep.name]) {
        creep.memory = interShardData[creep.name];
        delete interShardData.creeps[creep.name];
    }
    RawMemory.interShardSegment = JSON.stringify(interShardData);
    // RawMemory.get()
    var myMemory = JSON.parse(RawMemory.get());
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
// Find Overloads
{
    var creeps = room.find(FIND_HOSTILE_CREEPS);
    creeps[0].say(creeps[1].name);
    var flags = room.find(FIND_FLAGS);
    flags[0].remove();
    var spawns = room.find(FIND_HOSTILE_SPAWNS);
    spawns[0].spawning;
    var sources = room.find(FIND_SOURCES);
    sources[0].ticksToRegeneration;
    var resources = room.find(FIND_DROPPED_RESOURCES);
    resources[0].resourceType;
    var energy = room.find(FIND_DROPPED_ENERGY);
    energy[0].resourceType;
    var sites = room.find(FIND_CONSTRUCTION_SITES);
    sites[0].remove();
    // Should have type (_HasRoomPosition | RoomPosition)[]
    var exits = room.find(FIND_EXIT);
    var creepsHere = room.lookForAt(LOOK_CREEPS, 10, 10);
    creepsHere[0].getActiveBodyparts(ATTACK);
    var towers = room.find(FIND_MY_STRUCTURES, {
        filter: function (structure) {
            return (structure.structureType === STRUCTURE_TOWER);
        }
    });
    towers[0].attack(creeps[0]);
}
// RoomPosition Finds
{
    // Should have type Creep
    var hostileCreep = creep.pos.findClosestByRange(FIND_HOSTILE_CREEPS);
    creep.say(hostileCreep.name);
    var tower = creep.pos.findClosestByPath(FIND_HOSTILE_STRUCTURES, {
        filter: function (structure) {
            return structure.structureType === STRUCTURE_TOWER;
        }
    });
    tower.attack(creep);
    var rampart = creep.pos.findClosestByRange(FIND_HOSTILE_STRUCTURES, {
        filter: function (structure) {
            return structure.structureType === STRUCTURE_RAMPART;
        }
    });
    rampart.isPublic;
    // Should have type Creep[]
    var hostileCreeps = creep.pos.findInRange(FIND_HOSTILE_CREEPS, 10);
    hostileCreeps[0].saying;
    var labs = creep.pos.findInRange(FIND_MY_STRUCTURES, 4, {
        filter: function (structure) {
            return structure.structureType === STRUCTURE_LAB;
        }
    });
    labs[0].boostCreep(creep);
}
// LookAt Finds
{
    var nukes = room.lookForAt(LOOK_NUKES, creep.pos);
    nukes[0].launchRoomName;
    var flags = room.lookForAtArea(LOOK_FLAGS, 10, 10, 20, 20);
    var x = flags[10];
    var y = x[11];
    var entry = y[0];
    entry.flag.remove();
    var creeps = room.lookForAtArea(LOOK_CREEPS, 10, 10, 20, 20, true);
    creeps[0].x;
    creeps[0].y;
    creeps[0].creep.move(TOP);
}
// Advanced Structure types
{
    var owned = Game.getObjectById("blah");
    var owner = owned.owner.username;
    owned.notifyWhenAttacked(false);
    var unowned = Game.getObjectById("blah2");
    var hp = unowned.hits / unowned.hitsMax;
    // test discriminated union
    switch (unowned.structureType) {
        case STRUCTURE_TOWER:
            unowned.heal(Game.creeps.myCreep);
            break;
        case STRUCTURE_CONTAINER:
        case STRUCTURE_STORAGE:
        case STRUCTURE_TERMINAL:
            var energyPercent = unowned.store.energy / unowned.storeCapacity;
            break;
        case STRUCTURE_WALL:
        case STRUCTURE_RAMPART:
            var wallHp = unowned.hits / unowned.hitsMax;
            break;
    }
    // test discriminated union using filter functions on find
    var from = Game.rooms.myRoom.find(FIND_STRUCTURES, function (s) { return (s.structureType === STRUCTURE_CONTAINER || s.structureType === STRUCTURE_STORAGE) && s.store.energy > 0; })[0];
    var to = from.pos.findClosestByPath(FIND_MY_STRUCTURES, { filter: function (s) { return (s.structureType === STRUCTURE_SPAWN || s.structureType === STRUCTURE_EXTENSION) && s.energy < s.energyCapacity; } });
    Game.rooms.myRoom.find(FIND_MY_STRUCTURES, function (s) { return s.structureType === STRUCTURE_RAMPART; }).forEach(function (r) { return r.notifyWhenAttacked(false); });
}
var _a;

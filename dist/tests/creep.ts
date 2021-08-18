// Game.powerCreeps

{
    PowerCreep.create("steve", POWER_CLASS.OPERATOR) === OK;

    for (const i in Game.powerCreeps) {
        const powerCreep = Game.powerCreeps[i]; // $ExpectType PowerCreep

        if (powerCreep.ticksToLive === undefined) {
            // Not spawned in world; spawn creep
            const spawn = Game.getObjectById("powerSpawnID") as StructurePowerSpawn;
            powerCreep.spawn(spawn);
        } else {
            // Generate Ops
            if (
                powerCreep.powers[PWR_GENERATE_OPS] &&
                powerCreep.powers[PWR_GENERATE_OPS].cooldown === 0 &&
                (powerCreep.carry.ops || 0) < 10
            ) {
                Game.powerCreeps[i].usePower(PWR_GENERATE_OPS);
            } else {
                // Boost resource
                const targetSource = Game.getObjectById("targetSourceID") as Source;
                const sourceEffect = targetSource.effects.find(effect => effect.effect === PWR_REGEN_SOURCE && effect.level > 0); // $ExpectType RoomObjectEffect | undefined
                if (!sourceEffect && powerCreep.powers[PWR_REGEN_SOURCE] && powerCreep.powers[PWR_REGEN_SOURCE].cooldown === 0) {
                    powerCreep.usePower(PWR_REGEN_SOURCE, targetSource);
                }
            }
        }

        // AnyCreep type checks
        creep.attack(powerCreep);
        creep.heal(powerCreep);
        creep.rangedAttack(powerCreep);
        creep.rangedHeal(powerCreep);
        creep.transfer(powerCreep, RESOURCE_ENERGY);
        powerCreep.transfer(creep, RESOURCE_ENERGY);

        // Upgrading
        powerCreep.upgrade(PWR_GENERATE_OPS);
    }

    const myPowaCreeps = Game.rooms.sim.find(FIND_MY_POWER_CREEPS); // $ExpectType PowerCreep[]

    // Constant type checking
    POWER_INFO[PWR_GENERATE_OPS].className === POWER_CLASS.OPERATOR;
    typeof POWER_INFO[PWR_GENERATE_OPS].level[0] === "number";
}

// Creep.body
function atackPower(creep: Creep) {
    return creep.body
        .map(part => {
            if (part.type === ATTACK) {
                const multiplier = part.boost ? BOOSTS[part.type][part.boost].attack : 1;
                return multiplier * ATTACK_POWER;
            }
            return 0;
        })
        .reduce((a, b) => a + b);
}

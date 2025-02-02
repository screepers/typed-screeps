/**
 * Any object with a position in a room.
 *
 * Almost all game objects prototypes are derived from RoomObject.
 */

interface RoomObject {
    readonly prototype: RoomObject;
    /**
     * Effects currently being applied to the object.
     */
    effects?: RoomObjectEffect[];
    /**
     * An object representing the position of this object in the room.
     */
    pos: RoomPosition;
    /**
     * The link to the {@link Room} object.
     *
     * May be `undefined` if the object is a {@link Flag} or a {@link ConstructionSite} and is placed in a room that is not visible
     * to you.
     */
    room: Room | undefined;
}

interface RoomObjectConstructor extends _Constructor<RoomObject> {
    new (x: number, y: number, roomName: string): RoomObject;
    (x: number, y: number, roomName: string): RoomObject;
}

declare const RoomObject: RoomObjectConstructor;

/**
 * Discriminated union of possible effects on `effect`
 */
type RoomObjectEffect = NaturalEffect | PowerEffect;

/**
 * Natural effect applied to room object
 */
interface NaturalEffect {
    /**
     * Effect ID of the applied effect.
     *
     * One of the {@link EffectConstant EFFECT_*} constants.
     */
    effect: EffectConstant;
    /**
     * How many ticks will the effect last.
     */
    ticksRemaining: number;
}

/**
 * Effect applied to room object as result of a {@link PowerCreep.usePower}.
 */
interface PowerEffect {
    /**
     * Power level of the applied effect.
     */
    level: number;
    /**
     * Effect ID of the applied effect.
     *
     * One of the {@link PowerConstant PWR_*} constants.
     */
    effect: PowerConstant;
    /**
     * Power ID of the applied effect.
     *
     * @deprecated Use {@link PowerEffect.effect} instead.
     *
     * One of the {@link PowerConstant PWR_*} constants.
     */
    power: PowerConstant;
    /**
     * How many ticks will the effect last.
     */
    ticksRemaining: number;
}

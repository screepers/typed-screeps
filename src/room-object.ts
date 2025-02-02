/**
 * Any object with a position in a room. Almost all game objects prototypes
 * are derived from RoomObject.
 */

interface RoomObject {
    /**
     * Applied effects, an array of objects with the following properties:
     */
    effects?: RoomObjectEffect[];
    /**
     * An object representing the position of this object in the room.
     */
    pos: RoomPosition;
    /**
     * The link to the Room object. May be undefined in case if an object is a
     * flag or a construction site and is placed in a room that is not visible
     * to you.
     */
    room: Room | undefined;
}

interface RoomObjectConstructor extends _Constructor<RoomObject> {
    /**
     * The prototype is stored in the {@link RoomObject.prototype} global object. You can use it to extend game objects behaviour globally.
     */
    readonly prototype: RoomObject;
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
     * Effect ID of the applied effect. `EFFECT_*` constant.
     */
    effect: EffectConstant;
    /**
     * How many ticks will the effect last.
     */
    ticksRemaining: number;
}

/**
 * Effect applied to room object as result of a `PowerCreep.usePower`.
 */
interface PowerEffect {
    /**
     * Power level of the applied effect.
     */
    level: number;
    /**
     * Effect ID of the applied effect. `PWR_*` constant.
     */
    effect: PowerConstant;
    /**
     * @deprecated Power ID of the applied effect. `PWR_*` constant. No longer documented, will be removed.
     */
    power: PowerConstant;
    /**
     * How many ticks will the effect last.
     */
    ticksRemaining: number;
}

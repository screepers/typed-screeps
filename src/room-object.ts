/**
 * Any object with a position in a room. Almost all game objects prototypes 
 * are derived from RoomObject.
 */

declare class RoomObject {
    prototype: RoomObject;
    pos: RoomPosition;
    room: Room;
}

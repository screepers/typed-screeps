/**
 * Any object with a position in a room. Almost all game objects prototypes 
 * are derived from RoomObject.
 */

interface RoomObject {
    prototype: RoomObject;
    pos: RoomPosition;
    room: Room;
}

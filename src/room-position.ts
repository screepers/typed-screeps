/**
 * An object representing the specified position in the room. Every object in the room contains RoomPosition as the pos property. The position object of a custom location can be obtained using the Room.getPositionAt() method or using the constructor.
 */
interface RoomPosition {
    prototype: RoomPosition;
    new(x: number, y: number, roomName: string): RoomPosition;
    roomName: string;
    x: number;
    y: number;
    createConstructionSite(structureType: string): number;
    createFlag(name: string, color: string): number;
    findClosest<T>(type: number, opts?: {filter: any|string, algorithm: string}): T;
    findClosest<T>(objects: [T|RoomPosition], opts?: {filter: any|string, algorithm: string}): T;
    findClosestByRange<T>(type: number, opts?: {filter: any|string }): T;
    findClosestByRange<T>(objects: [T|RoomPosition], opts?: {filter: any|string }): T;
    findInRange<T>(type: number, range: number, opts?: {filter: any|string, algorithm: string}): T[];
    findInRange<T>(objects: [T|RoomPosition], range: number, opts?: {filter: any|string, algorithm: string}): T[];
    findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];
    findPathTo(target: RoomPosition|{pos: RoomPosition}, opts?: FindPathOpts): PathStep[];
    getDirectionTo(x: number, y: number): number;
    getDirectionTo(target: RoomPosition|{pos: RoomPosition}): number;
    getRangeTo(x: number, y: number): number;
    getRangeTo(target: RoomPosition|{pos: RoomPosition}): number;
    inRangeTo(toPos: RoomPosition, range: number): boolean;
    isEqualTo(x: number, y: number): boolean;
    isEqualTo(target: RoomPosition|{pos: RoomPosition}): boolean;
    isNearTo(x: number, y: number): boolean;
    isNearTo(target: RoomPosition|{pos: RoomPosition}): boolean;
    look(): LookAtResult[];
    lookFor<T>(type: string): T[];
}
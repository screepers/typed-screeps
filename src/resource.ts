/**
 * A dropped piece of resource. It will decay after a while if not picked up. Dropped resource pile decays for ceil(amount/1000) units per tick.
 */

declare class Resource extends RoomObject {
    amount: number;
    id: string;
    resourceType: string;
}

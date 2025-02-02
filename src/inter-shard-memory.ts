/**
 * `InterShardMemory` object provides an interface for communicating between shards.
 *
 * Your script is executed separatedly on each shard, and their {@link Memory} objects are isolated from each other.
 * In order to pass messages and data between shards, you need to use {@link InterShardMemory} instead.
 *
 * Every shard can have its own data string that can be accessed by all other shards.
 * A shard can write only to its own data, other shards' data is read-only.
 *
 * This data has nothing to do with `Memory` contents, it's a separate data container.
 */
interface InterShardMemory {
    /**
     * Returns the string contents of the current shard's data.
     */
    getLocal(): string;
    /**
     * Replace the current shard's data with the new value.
     *
     * @param value New data value in string format.
     * @throws if `value` isn't a string or contains more than `100 * 2014` characters.
     */
    setLocal(value: string): void;
    /**
     * Returns the string contents of another shard's data, null if shard exists but data is not set.
     *
     * @param shard Shard name.
     * @throws if shard name is invalid
     */
    getRemote(shard: string): string | null;
}

declare const InterShardMemory: InterShardMemory;

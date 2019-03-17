interface InterShardMemory {
    /**
     * Returns the string contents of the current shard's data.
     */
    getLocal(): string;
    /**
     * Replace the current shard's data with the new value
     * @param value New data value in string format.
     */
    setLocal(value: string): void;
    /**
     * Returns the string contents of another shard's data, null if shard exists but data is not set.
     *
     * @param shard Shard name.
     * @throws Error if shard name is invalid
     */
    getRemote(shard: string): string | null;
}

declare const InterShardMemory: InterShardMemory;

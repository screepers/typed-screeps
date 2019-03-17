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
     * Returns the string contents of another shard's data.
     * @param shard Shard name.
     */
    getRemote(shard: string): string;
}

declare const InterShardMemory: InterShardMemory;

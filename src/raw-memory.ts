/**
 * RawMemory object allows to implement your own memory stringifier instead of built-in serializer based on JSON.stringify.
 */
interface RawMemory {

    /**
     * Get a raw string representation of the Memory object.
     */
    get(): string;
    /**
     * Set new memory value.
     * @param value New memory value as a string.
     */
    set(value: string): void;

}

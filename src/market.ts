/**
 * A global object representing the in-game market. You can use this object to track resource transactions to/from your
 * terminals, and your buy/sell orders (in development). The object is accessible via the singleton Game.market property.
 */
declare class Market {

    /**
     * An array of the last 100 incoming transactions to your terminals
     */
    incomingTransactions: Transaction[];
    /**
     * An array of the last 100 outgoing transactions from your terminals
     */
    outgoingTransactions: Transaction[];
    /**
     * Estimate the energy transaction cost of StructureTerminal.send and Market.deal methods. The formula: Math.ceil( amount * (Math.log(0.1*linearDistanceBetweenRooms + 0.9) + 0.1) )
     * @param amount Amount of resources to be sent.
     * @param roomName1 The name of the first room.
     * @param roomName2 The name of the second room.
     * @returns The amount of energy required to perform the transaction. 
     */
    calcTransactionCost(amount:number , roomName1:string, roomName2:string): number;

}

interface Transaction {
    transactionId: string;
    time: number;
    sender: {username: string},
    recipient: {username: string};
    resourceType: string;
    amount: number;
    from: string;
    to: string;
    description: string;
}

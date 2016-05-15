/**
 * A global object representing the in-game market. You can use this object to track resource transactions to/from your
 * terminals, and your buy/sell orders (in development). The object is accessible via the singleton Game.market property.
 */
interface Market {

    /**
     * An array of the last 100 incoming transactions to your terminals
     */
    incomingTransactions: Transaction[];
    /**
     * An array of the last 100 outgoing transactions from your terminals
     */
    outgoingTransactions: Transaction[];

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
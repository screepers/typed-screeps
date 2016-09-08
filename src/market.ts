/**
 * A global object representing the in-game market. You can use this object to track resource transactions to/from your
 * terminals, and your buy/sell orders. The object is accessible via the singleton Game.market property.
 */
declare class Market {
    /**
     * Your current credits balance.
     */
    credits: number;
    /**
     * An array of the last 100 incoming transactions to your terminals
     */
    incomingTransactions: Transaction[];
    /**
     * An object with your active and inactive buy/sell orders on the market.
     */
    orders: { [key: string]: Order };
    /**
     * An array of the last 100 outgoing transactions from your terminals
     */
    outgoingTransactions: Transaction[];
    /**
     * Estimate the energy transaction cost of StructureTerminal.send and Market.deal methods.
     */
    calcTransactionCost(amount: number, roomName1: string, roomName2: string): number;
    /**
     * Cancel a previously created order. The 5% fee is not returned.
     */
    cancelOrder(orderId: string): number;
    /**
     * Create a market order in your terminal. You will be charged price*amount*0.05 credits when the order is placed.
     * The maximum orders count is 20 per player. You can create an order at any time with any amount,
     * it will be automatically activated and deactivated depending on the resource/credits availability.
     */
    createOrder(type: string, resourceType: string, price: number, totalAmount: number, roomName?: string): number;
    /**
     * Execute a trade deal from your Terminal to another player's Terminal using the specified buy/sell order.
     * Your Terminal will be charged energy units of transfer cost regardless of the order resource type.
     * You can use Game.market.calcTransactionCost method to estimate it.
     * When multiple players try to execute the same deal, the one with the shortest distance takes precedence.
     */
    deal(orderId: string, amount: number, targetRoomName?: string): number;
    /**
     * Get other players' orders currently active on the market.
     */
    getAllOrders(filter?: OrderFilter | ((o: Order) => boolean)): Order[];
}

interface Transaction {
    transactionId: string;
    time: number;
    sender?: { username: string };
    recipient?: { username: string };
    resourceType: string;
    amount: number;
    from: string;
    to: string;
    description: string;
}

interface Order {
    id: string;
    created: number;
    active?: boolean;
    type: string;
    resourceType: string;
    roomName?: string;
    amount: number;
    remainingAmount: number;
    totalAmount?: number;
    price: number;
}

interface OrderFilter {
    id?: string;
    created?: number;
    type?: string;
    resourceType?: string;
    roomName?: string;
    amount?: number;
    remainingAmount?: number;
    price?: number;
}

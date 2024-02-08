/**
 * A global object representing the in-game market. You can use this object to track resource transactions to/from your
 * terminals, and your buy/sell orders. The object is accessible via the singleton Game.market property.
 */
interface Market {
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
     * Estimate the energy transaction cost of StructureTerminal.send and Market.deal methods. The formula:
     *
     * ```
     * Math.ceil( amount * (Math.log(0.1*linearDistanceBetweenRooms + 0.9) + 0.1) )
     * ```
     *
     * @param amount Amount of resources to be sent.
     * @param roomName1 The name of the first room.
     * @param roomName2 The name of the second room.
     * @returns The amount of energy required to perform the transaction.
     */
    calcTransactionCost(amount: number, roomName1: string, roomName2: string): number;
    /**
     * Cancel a previously created order. The 5% fee is not returned.
     * @param orderId The order ID as provided in Game.market.orders
     * @returns Result Code: OK, ERR_INVALID_ARGS
     */
    cancelOrder(orderId: string): ScreepsReturnCode;
    /**
     * Change the price of an existing order. If `newPrice` is greater than old price, you will be charged `(newPrice-oldPrice)*remainingAmount*0.05` credits.
     * @param orderId The order ID as provided in Game.market.orders
     * @param newPrice The new order price.
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_INVALID_ARGS
     */
    changeOrderPrice(orderId: string, newPrice: number): ScreepsReturnCode;
    /**
     * Create a market order in your terminal. You will be charged `price*amount*0.05` credits when the order is placed.
     *
     * The maximum orders count is 300 per player. You can create an order at any time with any amount,
     * it will be automatically activated and deactivated depending on the resource/credits availability.
     *
     * An order expires in 30 days after its creation, and the remaining market fee is returned.
     */
    createOrder(params: {
        type: ORDER_BUY | ORDER_SELL;
        resourceType: MarketResourceConstant;
        price: number;
        totalAmount: number;
        roomName?: string;
    }): ScreepsReturnCode;
    /**
     * Execute a trade deal from your Terminal to another player's Terminal using the specified buy/sell order.
     *
     * Your Terminal will be charged energy units of transfer cost regardless of the order resource type.
     * You can use Game.market.calcTransactionCost method to estimate it.
     *
     * When multiple players try to execute the same deal, the one with the shortest distance takes precedence.
     *
     * You cannot execute more than 10 deals during one tick.
     *
     * @param orderId The order ID as provided in Game.market.orders
     * @param amount The amount of resources to transfer.
     * @param yourRoomName The name of your room which has to contain an active Terminal with enough amount of energy. This argument should not be passed when the order resource type is one of account-bound resources (@see {@link InterShardResourceConstant}).
     *
     * @returns Result Code: OK, ERR_NOT_OWNER, ERR_NOT_ENOUGH_RESOURCES, ERR_FULL, ERR_INVALID_ARGS, ERR_TIRED
     */
    deal(orderId: string, amount: number, yourRoomName?: string): ScreepsReturnCode;
    /**
     * Add more capacity to an existing order. It will affect `remainingAmount` and `totalAmount` properties. You will be charged `price*addAmount*0.05` credits.
     * Extending the order doesn't update its expiration time.
     * @param orderId The order ID as provided in Game.market.orders
     * @param addAmount How much capacity to add. Cannot be a negative value.
     * @returns One of the following codes: `OK`, `ERR_NOT_ENOUGH_RESOURCES`, `ERR_INVALID_ARGS`
     */
    extendOrder(orderId: string, addAmount: number): ScreepsReturnCode;
    /**
     * Get other players' orders currently active on the market.
     * @param filter (optional) An object or function that will filter the resulting list using the lodash.filter method.
     * @returns An array of objects containing order information.
     */
    getAllOrders(filter?: OrderFilter | ((o: Order) => boolean)): Order[];
    /**
     * Get daily price history of the specified resource on the market for the last 14 days.
     * @param resource One of the RESOURCE_* constants. If undefined, returns history data for all resources. Optional
     * @returns An array of objects with resource info.
     */
    getHistory(resource?: MarketResourceConstant): PriceHistory[];
    /**
     * Retrieve info for specific market order.
     * @param orderId The order ID.
     * @returns An object with the order info. See `getAllOrders` for properties explanation.
     */
    getOrderById(id: string): Order | null;
}

// No static is available

interface Transaction {
    transactionId: string;
    time: number;
    sender?: { username: string };
    recipient?: { username: string };
    resourceType: MarketResourceConstant;
    amount: number;
    from: string;
    to: string;
    description: string;
    order?: TransactionOrder;
}

interface Order {
    id: string;
    created: number;
    active?: boolean;
    type: ORDER_BUY | ORDER_SELL;
    resourceType: MarketResourceConstant;
    roomName?: string;
    amount: number;
    remainingAmount: number;
    totalAmount?: number;
    price: number;
}

interface TransactionOrder {
    id: string;
    type: string;
    price: number;
}

interface OrderFilter {
    id?: string;
    created?: number;
    type?: string;
    resourceType?: MarketResourceConstant;
    roomName?: string;
    amount?: number;
    remainingAmount?: number;
    price?: number;
}

interface PriceHistory {
    resourceType: MarketResourceConstant;
    date: string;
    transactions: number;
    volume: number;
    avgPrice: number;
    stddevPrice: number;
}

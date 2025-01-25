/**
 * A global object representing the in-game market.
 *
 * You can use this object to track resource transactions to/from your terminals, and your buy/sell orders.
 * The object is accessible via the singleton {@link Game.market} property.
 *
 * Learn more about the market system from [this article](https://docs.screeps.com/market.html).
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
     * Estimate the energy transaction cost of {@link StructureTerminal.send} and {@link Market.deal} methods.
     *
     * The formula:
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
     * Cancel a previously created order.
     *
     * The 5% fee is not returned.
     * @param orderId The order ID as provided in Game.market.orders
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_INVALID_ARGS: The order ID is not valid.
     */
    cancelOrder(orderId: string): ScreepsReturnCode;
    /**
     * Change the price of an existing order.
     *
     * If `newPrice` is greater than old price, you will be charged `(newPrice-oldPrice)*remainingAmount*0.05` credits.
     * @param orderId The order ID as provided in Game.market.orders
     * @param newPrice The new order price.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of the room's terminal or there is no terminal.
     * - ERR_NOT_ENOUGH_RESOURCES: You don't have enough credits to pay a fee.
     * - ERR_INVALID_ARGS: The arguments provided are invalid.
     */
    changeOrderPrice(orderId: string, newPrice: number): ScreepsReturnCode;
    /**
     * Create a market order in your terminal.
     *
     * You will be charged `price*amount*0.05` credits when the order is placed.
     *
     * The maximum orders count is 300 per player. You can create an order at any time with any amount,
     * it will be automatically activated and deactivated depending on the resource/credits availability.
     *
     * An order expires in 30 days after its creation, and the remaining market fee is returned.
     *
     * @param params A object describing the order.
     * @returns One of the following codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You are not the owner of the room's terminal or there is no terminal.
     * - ERR_NOT_ENOUGH_RESOURCES: You don't have enough credits to pay a fee.
     * - ERR_FULL: You cannot create more than 50 orders.
     * - ERR_INVALID_ARGS: The arguments provided are invalid.
     */
    createOrder(params: CreateOrderParam): ScreepsReturnCode;
    /**
     * Execute a trade deal from your Terminal to another player's Terminal using the specified buy/sell order.
     *
     * Your Terminal will be charged energy units of transfer cost regardless of the order resource type.
     * You can use {@link Game.market.calcTransactionCost} method to estimate it.
     *
     * When multiple players try to execute the same deal, the one with the shortest distance takes precedence.
     *
     * You cannot execute more than 10 deals during one tick.
     *
     * @param orderId The order ID as provided in Game.market.orders
     * @param amount The amount of resources to transfer.
     * @param yourRoomName The name of your room which has to contain an active Terminal with enough amount of energy.
     * This argument is not used when the order resource type is one of account-bound resources (@see {@link InterShardResourceConstant}).
     *
     * @returns One of the following error codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_OWNER: You don't have a terminal in the target room.
     * - ERR_NOT_ENOUGH_RESOURCES: You don't have enough credits or resource units.
     * - ERR_FULL: You cannot execute more than 10 deals during one tick.
     * - ERR_INVALID_ARGS: The arguments provided are invalid.
     * - ERR_TIRED: The target terminal is still cooling down.
     */
    deal(orderId: string, amount: number, yourRoomName?: string): ScreepsReturnCode;
    /**
     * Add more capacity to an existing order.
     *
     * It will affect `remainingAmount` and `totalAmount` properties. You will be charged `price*addAmount*0.05` credits.
     * Extending the order doesn't update its expiration time.
     *
     * @param orderId The order ID as provided in Game.market.orders
     * @param addAmount How much capacity to add. Cannot be a negative value.
     * @returns One of the following error codes:
     * - OK: The operation has been scheduled successfully.
     * - ERR_NOT_ENOUGH_RESOURCES: You don't have enough credits to pay a fee.
     * - ERR_INVALID_ARGS:  The arguments provided are invalid.
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
     * @param resource One of the {@link MarketResourceConstant} constants. If undefined, returns history data for all resources. Optional
     * @returns An array of objects with resource info.
     */
    getHistory(resource?: MarketResourceConstant): PriceHistory[];
    /**
     * Retrieve info for specific market order.
     * @param orderId The order ID.
     * @returns An object with the order info. See {@link Order}.
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
    /** The unique order ID. */
    id: string;
    /**
     * The order creation time in milliseconds since UNIX epoch time.
     *
     * This property is absent for old orders.
     */
    created: number;
    /** Whether the order is active or not.
     *
     * Only exists for your own orders. */
    active?: boolean;
    /** The order type. */
    type: ORDER_BUY | ORDER_SELL;
    /**
     * The type of resource requested by the order. See {@link MarketResourceConstant}.
     */
    resourceType: MarketResourceConstant;
    /** The room where this order is placed. */
    roomName?: string;
    /** Currently available quantity of resource to trade. */
    amount: number;
    /** Remaining quantity of resources to trade. */
    remainingAmount: number;
    /** Total quantity of resources traded */
    totalAmount?: number;
    /** The current price per unit. */
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

/** Parameters to {@link Game.market.createOrder} */
interface CreateOrderParam {
    /**
     * The order type.
     */
    type: ORDER_BUY | ORDER_SELL;
    /**
     * The resource type to trade.
     *
     * If your Terminal doesn't have the specified resource, the order will be temporary inactive.
     */
    resourceType: MarketResourceConstant;
    /**
     * The price for one resource unit in credits.
     *
     * Can be a decimal number.
     */
    price: number;
    /**
     * The amount of resources to be traded in total.
     */
    totalAmount: number;
    /**
     * The room where your order will be created.
     *
     * You must have your own Terminal structure in this room, otherwise the created order will be temporary inactive.
     * This argument is not used when `resourceType` is one of the {@link InterShardResourceConstant} resources.
     */
    roomName?: string;
}

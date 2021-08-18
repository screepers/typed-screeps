// Game.market

{
    // Game.market.calcTransactionCost(amount, roomName1, roomName2)
    const cost = Game.market.calcTransactionCost(1000, "W0N0", "W10N5"); // $ExpectType number

    // Game.market.cancelOrder(orderId)
    for (const id in Game.market.orders) {
        Game.market.cancelOrder(id); // $ExpectType ScreepsReturnCode
    }

    // Game.market.changeOrderPrice(orderId, newPrice)
    Game.market.changeOrderPrice("57bec1bf77f4d17c4c011960", 9.95); // $ExpectType ScreepsReturnCode

    // Game.market.createOrder({type, resourceType, price, totalAmount, [roomName]})
    Game.market.createOrder({ type: ORDER_SELL, resourceType: RESOURCE_GHODIUM, price: 9.95, totalAmount: 10000, roomName: "W1N1" }); // $ExpectType ScreepsReturnCode
    Game.market.createOrder({ type: ORDER_SELL, resourceType: RESOURCE_GHODIUM, price: 9.95, totalAmount: 10000 }); // $ExpectType ScreepsReturnCode

    // Game.market.deal(orderId, amount, [yourRoomName])
    Game.market.deal("57cd2b12cda69a004ae223a3", 1000, "W1N1"); // $ExpectType ScreepsReturnCode

    const amountToBuy = 2000;
    const maxTransferEnergyCost = 500;
    const orders = Game.market.getAllOrders({ type: ORDER_SELL, resourceType: RESOURCE_GHODIUM }); // $ExpectType Order[]

    for (const i of orders) {
        if (i.roomName) {
            const transferEnergyCost = Game.market.calcTransactionCost(amountToBuy, "W1N1", i.roomName); // $ExpectType number

            if (transferEnergyCost < maxTransferEnergyCost) {
                Game.market.deal(i.id, amountToBuy, "W1N1"); // $ExpectType ScreepsReturnCode
                break;
            }
        }
    }

    // Game.market.extendOrder(orderId, addAmount)
    Game.market.extendOrder("57bec1bf77f4d17c4c011960", 10000); // $ExpectType ScreepsReturnCode

    // Game.market.getAllOrders([filter])
    Game.market.getAllOrders(); // $ExpectType Order[]
    Game.market.getAllOrders({ type: ORDER_SELL, resourceType: RESOURCE_GHODIUM }); // $ExpectType Order[]

    const targetRoom = "W1N1";
    // $ExpectType Order[]
    Game.market.getAllOrders(
        currentOrder =>
            currentOrder.resourceType === RESOURCE_GHODIUM &&
            currentOrder.type === ORDER_SELL &&
            Game.market.calcTransactionCost(1000, targetRoom, currentOrder.roomName!) < 500,
    );

    // Game.market.getOrderById(id)
    const order = Game.market.getOrderById("55c34a6b5be41a0a6e80c123"); // $ExpectType Order | null

    // Subscription tokens
    Game.market.getAllOrders({ type: ORDER_SELL, resourceType: SUBSCRIPTION_TOKEN }); // $ExpectType Order[]
    Game.market.createOrder({ type: ORDER_BUY, resourceType: SUBSCRIPTION_TOKEN, totalAmount: 10000000, price: 1 }); // $ExpectType ScreepsReturnCode
    const priceHistory = Game.market.getHistory(RESOURCE_FIXTURES); // $ExpectType PriceHistory[]

    const avgPrice: number = priceHistory[0].avgPrice;
    const stddevPrice: number = priceHistory[0].stddevPrice;
    const volume: number = priceHistory[0].volume;

    // Game.market.getHistory([resourceType])
    const energyHistory = Game.market.getHistory(RESOURCE_ENERGY); // $ExpectType PriceHistory[]
    const pixelHistory = Game.market.getHistory(PIXEL); // $ExpectType PriceHistory[]
}

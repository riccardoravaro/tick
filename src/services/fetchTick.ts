import  BinanceService from '../connections/binance';
const binance = new BinanceService().getInstance();


interface RootObject {
    eventType: string;
    eventTime: number;
    symbol: string;
    priceChange: string;
    priceChangePercent: string;
    weightedAvg: string;
    prevDayClose: string;
    curDayClose: string;
    closeTradeQuantity: string;
    bestBid: string;
    bestBidQnt: string;
    bestAsk: string;
    bestAskQnt: string;
    open: string;
    high: string;
    low: string;
    volume: string;
    volumeQuote: string;
    openTime: number;
    closeTime: number;
    firstTradeId: number;
    lastTradeId: number;
    totalTrades: number;
}

async function fetchTick() {
    console.log("start")
    var tickerLogs:RootObject[] = []
    binance.ws.ticker('ETHBTC', (ticker:RootObject) => {
        console.log(ticker)
        tickerLogs.push(ticker);

      })
    console.log(await binance.ping())
}

export { fetchTick };
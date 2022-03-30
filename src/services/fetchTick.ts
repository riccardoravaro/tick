import  BinanceService from '../connections/binance';
import { Itick } from '../types';
const binance = new BinanceService().getInstance();

async function fetchTick(pairs:string) {
    console.log("start")
    var tickerLogs:Itick[] = []
    binance.ws.ticker(pairs, (ticker:Itick) => {
        console.log(ticker.priceChangePercent)
        tickerLogs.push(ticker);
        if(tickerLogs.length > 20) tickerLogs.pop();
        if(parseInt(ticker.priceChangePercent,10) > 2 ) console.log("price change! ***********************")
    })
    console.table(await binance.ping())
}

export { fetchTick };
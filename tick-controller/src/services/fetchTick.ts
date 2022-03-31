import  BinanceService from '../connections/binance';
import { Itick } from '../types';
const binance = new BinanceService().getInstance();

var tickerLogs:Itick[] = []
var tickerPairs: string = "";
async function fetchTick(pairs:string) {
    console.log("start")
    tickerPairs = pairs;
    binance.ws.ticker(pairs, (ticker:Itick) => {
        console.log(ticker.priceChangePercent)
        tickerLogs.push(ticker);
        if(tickerLogs.length > 20) tickerLogs.pop();
        if(parseInt(ticker.priceChangePercent,10) > 2 ) console.log("price change! ***********************")
    })
    console.table(await binance.ping())
}

function getCurrentValue() {
    return {pairs: tickerPairs, value: tickerLogs[tickerLogs.length-1]};
}

export { fetchTick, getCurrentValue };
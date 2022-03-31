require('dotenv').config()
const Binance = require("binance-api-node").default;

class BinanceService {

  constructor() {
      if (!BinanceService.binance) {
        BinanceService.binance =  Binance({
            APIKEY: process.env.BINANCE_APIKEY,
            APISECRET: process.env.BINANCE_APISECRET
        });
      }
  }

  getInstance() {
      return BinanceService.binance;
  }

}

module.exports = BinanceService;
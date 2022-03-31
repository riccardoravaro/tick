import express from "express";
import dotenv from "dotenv";
// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime 
// as if it were an environment variable
var app = express()
import * as fetcher from "./services/fetchTick";
const args = process.argv.slice(2);
const pairs = args[0]
const port = args[1];
console.log(args);
async function main() {
    fetcher.fetchTick(pairs || 'ETHBTC')
}

app.get( "/", ( req, res ) => {
    res.json(fetcher.getCurrentValue())
});


app.listen( port, () => {
    // tslint:disable-next-line:no-console
    console.log( `server started at http://localhost:${ port }` );
} );

main()
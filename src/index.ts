
import { fetchTick } from "./services/fetchTick";
const args = process.argv.slice(2);
console.log(args);
async function main() {
    fetchTick(args[0] || 'ETHBTC')
}


main()
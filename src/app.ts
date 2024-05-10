import { yarg } from "./config/plugins/yargs-plugin";
import { AppServer } from "./presentation/server-app";

//ejemplo con asincronía
(async () => {
  await main();
})();

async function main() {

  const { b: base, l: limit, s: showTable, n:name, d: destination } = yarg

  AppServer.run({ base, limit, showTable, name, destination });

  console.log('main ejecutando...');
};



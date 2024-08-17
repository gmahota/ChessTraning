import { getPlayerById, getPlayerGamesById } from "./services/lichess.js";

import { loadJson } from "./lib/state.js";

import dotenv from "dotenv";

dotenv.config();

 function main() {
  
    var filePlayerName = "./content/players.json";

  var players = loadJson(filePlayerName);  
  getPlayerById('moztiger');
  
//   players.map(player => {
//     console.log(player);
//       const user = getPlayerById(player.user);

//       console.log(user);

//       const games = getPlayerGamesById(player.user);
//       console.log(games);
//   });

}

main();
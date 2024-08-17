import { setTimeout } from "timers/promises";

import dotenv from "dotenv";

dotenv.config();

import { getPlayerById, getPlayerGamesById } from "./services/lichess.js";

import { loadJson } from "./lib/state.js";

const headers = {
  Authorization: "Bearer " + process.env.LICHESS_API_TOKEN,
};

async function main() {
  var filePlayerName = "./content/players.json";

  var players = loadJson(filePlayerName);

  for (var i = 0; i < players.length; i++) {
    getPlayerById(players[i].user, players[i]);
    await setTimeout(10000);
    getPlayerGamesById(players[i].user);
  }
}

main();

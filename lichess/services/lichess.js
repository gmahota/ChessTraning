import { api } from "../lib/api.js";
import * as state from "../lib/state.js";
import axios from "axios";

import moment from "moment";

const API_URL = process.env.LICHESS_API_URL;
const API_TOKEN = process.env.LICHESS_API_TOKEN;

const filePlayerName = "./content/players.json";
const filePlayerPath = "./content/";

const headers = {
  Authorization: "Bearer " + process.env.LICHESS_API_TOKEN,
};

export async function getPlayerById(id, player) {
  const res = await api.get(`user/${id}`);

  if (res.status === 200) {
    const user = res.data;
    var date = moment(Date.now()).format("YYYY-MM-DD");
    const filePath = `${filePlayerPath}${date}/${id}.json`;

    state.saveJson(filePath, user);

    var date2 = moment(Date.now()).format("DD.MM.YY");
    const indicadores = `*Indicadores - ${player.name} - ${date2}*
_Bullet:_ 
  - Jogos: ${user.perfs.bullet.games} 
  - Rating: ${user.perfs.bullet.rating} 

_Blitz:_ 
  - Jogos: ${user.perfs.blitz.games} 
  - Rating: ${user.perfs.blitz.rating} 

_Rápido:_ 
  - Jogos: ${user.perfs.rapid.games} 
  - Rating: ${user.perfs.rapid.rating} 

_Puzzle:_ 
  - Jogos: ${user.perfs.puzzle?.games || 0} 
  - Rating: ${user.perfs.puzzle?.rating || 0} 

_Total de Jogos:_ *${
      user.perfs.bullet.games + user.perfs.blitz.games + user.perfs.rapid.games
    }*
    
⚠️   `;

    state.saveText(`${filePlayerPath}${date}/${id}.txt`, indicadores);

    // Do something with the user data
  } else {
    // Handle the case where the response status is not 200
    state.saveJson(`${filePlayerPath}${id}.error`, res.status);
  }
}

export function getPlayerGamesById(id) {
  fetch(`${API_URL}games/user/${id}`, { headers })
    .then((res) => res.text())
    .then((res) => {
      const date = moment(Date.now()).format("YYYY-MM-DD");
      const filePath = `${filePlayerPath}${date}/${id}.pgn`;
      state.saveText(filePath, res);
    });
}

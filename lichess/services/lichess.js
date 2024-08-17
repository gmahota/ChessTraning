import axios from "axios";
import * as state from "../lib/state.js"; 

const API_URL = process.env.LICHESS_API_URL;
const API_TOKEN = process.env.LICHESS_API_TOKEN;

const filePlayerName = "./content/players.json";
const filePlayerPath = "./content/";

const headers = {
  Authorization: "Bearer " + process.env.LICHESS_API_TOKEN,
};

export async function getPlayerById (id) {

    const res = await axios.get(`${process.env.LICHESS_API_URL}/user/${id}`, { headers });
    
    if (res.status === 200) {
        const user = res.data;
        const filePath = `${filePlayerPath}${id}.json`;

        state.saveJson(filePath, games);
      return user;
      // Do something with the user data
    } else {
      // Handle the case where the response status is not 200
      console.error("Failed to fetch user data:", res.status);
    }
    
     return{};      

  
}

export async function getPlayerGamesById(id) {
  const games = await fetch(`${process.env.LICHESS_API_URL}/games/user/${id}`, {
    headers,
  }).then((res) => res.text());

  const filePath = `${filePlayerPath}${id}`;

  state.saveText(filePath, games);

  return games;
}

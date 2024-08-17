
import axios from "axios";

import dotenv from "dotenv";

dotenv.config();

export function getAPIClient() {

  const api = axios.create({
    baseURL: process.env.LICHESS_API_URL, 
  });
  console.log(process.env.LICHESS_API_URL);
  api.interceptors.request.use(config => {
    //console.log(config);

    return config;
  })

  
    api.defaults.headers[
      "Authorization"
    ] = `Bearer ${process.env.LICHESS_API_TOKEN}`;
  

  return api;
}

import axios from "axios";

const api = axios.create({
  baseURL: "https://track-ademic.vercel.app/", 
});

export default api;
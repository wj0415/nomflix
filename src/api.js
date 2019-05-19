import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  params: {
    api_key: "5646493522f278bf36843bd7795f9d69",
    language: "en-US"
  }
});

api.get("tv/popular");

export default api;

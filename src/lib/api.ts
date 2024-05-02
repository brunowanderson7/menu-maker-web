import axios from "axios";

export const api = axios.create({
  baseURL: process.env.SERVER_URL || "http://localhost:3333",
});

export default api;
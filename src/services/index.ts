import type { AxiosInstance } from "axios";
import axios from "axios";

export const TramitaAPI: AxiosInstance = axios.create({
  baseURL: process.env.API_URL,
});

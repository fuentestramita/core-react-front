import type { AxiosInstance } from "axios";
import axios from "axios";

export const TramitaAPI: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

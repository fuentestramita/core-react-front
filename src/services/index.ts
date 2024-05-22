import type { AxiosInstance } from "axios";
import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies.get("_auth");
export const TramitaAPI: AxiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${token}` },
});

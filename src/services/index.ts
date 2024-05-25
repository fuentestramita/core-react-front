import type { AxiosInstance } from "axios";
import axios from "axios";
import Cookies from "js-cookie";

const token = Cookies?.get("_auth") || "";

export const TramitaAPI: AxiosInstance = axios.create({
  headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${token}` },
});

TramitaAPI.interceptors.request.use(async (req) => {
  const token = Cookies?.get("_auth") || "";
  req.headers["Authorization"] = `Bearer ${token}`;
  return req;
});

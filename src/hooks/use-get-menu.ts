import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { UserMenuResponse } from "../types/user-menu";
import Cookies from "js-cookie";
import { TramitaAPI } from "../services";

async function fetchUserMenu() {
  try {
    const { data } = await TramitaAPI.post(
      `/api/get-menu`,
      {},
      {
        headers: { Accept: "application/json", "Content-Type": "application/json", Authorization: `Bearer ${Cookies.get("_auth")}` },
      }
    );
    return data;
  } catch (err) {
    return err;
  }
}
export const useGetMenu = (): UseQueryResult<UserMenuResponse> => {
  const menuQuery = useQuery({
    queryKey: ["menu"],
    queryFn: fetchUserMenu,
  });
  return menuQuery;
};

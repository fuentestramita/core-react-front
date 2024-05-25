import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { UserMenuResponse } from "../types/user-menu";
import { TramitaAPI } from "../services";

async function fetchUserMenu() {
  try {
    const { data } = await TramitaAPI.post(`/api/get-menu`, {});
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

"use client";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { UserMenuResponse } from "../types/user-menu";
import { TramitaAPI } from "../services";
import { data as menu } from "../mocks/user-menu/user-menu";
async function fetchUserMenu() {
  try {
    const { data } = await TramitaAPI.post(`/api/get-menu`);
    return data;
  } catch (err) {
    return menu;
  }
}
export const useGetMenu = (): UseQueryResult<UserMenuResponse> => {
  const banksQuery = useQuery({
    queryKey: ["menu"],
    queryFn: fetchUserMenu,
  });
  return banksQuery;
};

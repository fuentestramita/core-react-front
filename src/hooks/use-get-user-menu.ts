"use client";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { UserMenuResponse } from "../types/user-menu";
import { TramitaAPI } from "../services";
import { data as menu } from "../mocks/user-menu/user-menu";
async function fetchUserMenu() {
  console.log(process.env.VITE_API_URL);
  try {
    const { data } = await TramitaAPI.get(`/v1/user-menu/`);
    return data;
  } catch (err) {
    return menu;
  }
}
export const useGetUserMenu = (): UseQueryResult<UserMenuResponse> => {
  const banksQuery = useQuery({
    queryKey: ["user-menu"],
    // queryFn: async () => {
    //   const { data } = await TramitaAPI.get(`/v1/user-menu/`);
    //   return data;
    // },
    queryFn: fetchUserMenu,
  });
  return banksQuery;
};

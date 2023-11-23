"use client";
import { UseQueryResult, useQuery } from "@tanstack/react-query";
import { UserMenuResponse } from "../types/user-menu";
import { TramitaAPI } from "../services";

export const useGetUserMenu = (): UseQueryResult<UserMenuResponse> => {
  const banksQuery = useQuery({
    queryKey: ["user-menu"],
    queryFn: async () => {
      const { data } = await TramitaAPI.get(`/v1/user-menu/`);
      return data;
    },
  });
  return banksQuery;
};

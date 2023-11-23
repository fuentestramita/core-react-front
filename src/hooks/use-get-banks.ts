import { useQuery } from "@tanstack/react-query";
import { TramitaAPI } from "../services";

export const useGetBanks = () => {
  const banksQuery = useQuery({
    queryKey: ["banks"],
    queryFn: async () => {
      const { data } = await TramitaAPI.get("/v1/banks");
      return data;
    },
  });
  return banksQuery;
};

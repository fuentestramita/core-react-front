import { TramitaAPI } from "../services";
import { useQuery } from "@tanstack/react-query";

export const useGetBank = (uuid: Optional<string>) => {
  const banksQuery = useQuery({
    queryKey: ["bank"],
    queryFn: async () => {
      const { data } = await TramitaAPI.get(`/v1/banks/${uuid}`);
      return data;
    },
  });
  return banksQuery;
};

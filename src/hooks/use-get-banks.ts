import { useQuery } from "@tanstack/react-query";
import { TramitaAPI } from "../services";
import { data as banks } from "../mocks/banks/banks";
async function fetchBanks() {
  try {
    const { data } = await TramitaAPI.get(`/api/bancos/`);
    return data;
  } catch (err) {
    return banks;
  }
}
export const useGetBanks = () => {
  const banksQuery = useQuery({
    queryKey: ["bancos"],
    queryFn: fetchBanks,
  });
  return banksQuery;
};

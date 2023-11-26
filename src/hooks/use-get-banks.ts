import { useQuery } from "@tanstack/react-query";
import { TramitaAPI } from "../services";
import { data as banks } from "../mocks/banks/banks";
async function fetchBanks() {
  console.log(process.env.VITE_API_URL);
  try {
    const { data } = await TramitaAPI.get(`/v1/banks/`);
    return data;
    // TODO BORRAR EN PROD
  } catch (err) {
    return banks;
  }
}
export const useGetBanks = () => {
  const banksQuery = useQuery({
    queryKey: ["banks"],
    // queryFn: async () => {
    //   const { data } = await TramitaAPI.get(`/v1/banks/`);
    //   return data;
    // },
    queryFn: fetchBanks,
  });
  return banksQuery;
};

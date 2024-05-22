import { useQuery } from "@tanstack/react-query";
import { TramitaAPI } from "../services";
import { data as banks } from "../mocks/banks/banks";
async function getEmpresas() {
  try {
    const { data } = await TramitaAPI.post(`/api/get-empresas`);
    return data;
  } catch (err) {
    return banks;
  }
}
export const useGetEmpresas = () => {
  const empresasQuery = useQuery({
    queryKey: ["empresas"],
    queryFn: getEmpresas,
  });
  return empresasQuery;
};

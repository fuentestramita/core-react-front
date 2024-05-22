import { useQuery } from "@tanstack/react-query";
import { TramitaAPI } from "../services";
async function getEmpresas() {
  try {
    const { data } = await TramitaAPI.post(`/api/get-empresas`);
    return data;
  } catch (err) {
    return err;
  }
}
export const useGetEmpresas = () => {
  const empresasQuery = useQuery({
    queryKey: ["empresas"],
    queryFn: getEmpresas,
  });
  return empresasQuery;
};

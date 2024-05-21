import { useMutation } from "@tanstack/react-query";
import { loginData } from "../mocks/login/login";
import { TramitaAPI } from "../services";
export const useValidateMutation = ({ onSuccess, onError }: { onSuccess: () => void; onError: (error: string) => void }) => {
  const valideMutation = useMutation({
    // @ts-expect-error
    mutationFn: ({ user, password }: { user: Optional<string>; password: Optional<string> }) => {
      try {
        return TramitaAPI.post("/api/validate", {
          inputRut: user,
          inputPass: password,
        });
      } catch (err) {
        onError("Por favor inténtalo nuevamente");
        return loginData;
      }
    },
    onSuccess: () => {
      onSuccess();
    },
    onError: (error) => {
      onError(error?.message);
    },
  });
  return {
    mutation: valideMutation.mutateAsync,
    isLoading: valideMutation.isPending,
    isError: valideMutation.isError,
    data: valideMutation.data,
  };
};

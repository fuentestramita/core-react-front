import { useMutation } from "@tanstack/react-query";
import { loginData } from "../mocks/login/login";
import { TramitaAPI } from "../services";
export const useLoginMutation = ({ onSuccess, onError }: { onSuccess: () => void; onError: (error: string) => void }) => {
  const loginMutation = useMutation({
    // @ts-expect-error
    mutationFn: ({ user, password }: { user: Optional<string>; password: Optional<string> }) => {
      try {
        return TramitaAPI.post("/api/login", {
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
    mutation: loginMutation.mutateAsync,
    isLoading: loginMutation.isPending,
    isError: loginMutation.isError,
    data: loginMutation.data,
  };
};

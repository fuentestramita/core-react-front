import { useMutation } from "@tanstack/react-query";
import { loginData } from "../mocks/login/login";
import axios from "axios";
export const useValidateMutation = ({ onSuccess, onError }: { onSuccess: () => void; onError: (error: string) => void }) => {
  const valideMutation = useMutation({
    // @ts-expect-error
    mutationFn: ({ user, password }: { user: Optional<string>; password: Optional<string> }) => {
      try {
        return axios.post(
          "/api/validate",
          {
            inputRut: user,
            inputPass: password,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
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

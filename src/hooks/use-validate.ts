import { TramitaAPI } from "../services";
import { useMutation } from "@tanstack/react-query";
import { LoginType } from "../types/login";
import { useSignIn } from "react-auth-kit";
import { LOGIN_EXPIRE_TIME_IN_MINUTES } from "../config/content/constants";

export const useValidateMutation = ({ onError, onSuccess }: { onError: (error: string) => void; onSuccess: () => void }) => {
  const signIn = useSignIn();
  const loginMutation = useMutation({
    // @ts-expect-error
    mutationFn: ({ user, code }: { user: Optional<string>; code: Optional<string> }) => {
      try {
        return TramitaAPI.post("/api/validate", {
          rutUsuario: user,
          codigo: code,
        });
      } catch (err) {
        return err;
      }
    },
    onSuccess: ({ data }: { data: LoginType }) => {
      signIn({
        token: data.token,
        expiresIn: LOGIN_EXPIRE_TIME_IN_MINUTES,
        tokenType: "Bearer",
        authState: {
          email: data.email,
          name: data.nombre,
        },
      });
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

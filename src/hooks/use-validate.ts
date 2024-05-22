import { TramitaAPI } from "../services";
import { useMutation } from "@tanstack/react-query";
import { LoginType } from "../types/login";
import useSignIn from "react-auth-kit/hooks/useSignIn";
import { useNavigate } from "react-router-dom";
import { loginData } from "../mocks/login/login";
export const useValidateMutation = ({ onError }: { onError: (error: string) => void }) => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const validateMutation = useMutation({
    // @ts-expect-error
    mutationFn: ({ user, code }: { user: Optional<string>; code: Optional<string> }) => {
      try {
        return TramitaAPI.post("/api/validate", {
          rutUsuario: user,
          codigo: code,
        });
      } catch (err) {
        return loginData;
      }
    },
    onSuccess: ({ data }: { data: LoginType }) => {
      signIn({
        auth: { token: data.token, type: "Bearer" },
        userState: {
          email: data.email,
          name: data.nombre,
        },
      });
      navigate("/");
    },
    onError: (error) => {
      onError(error?.message);
    },
  });
  return {
    mutation: validateMutation.mutateAsync,
    isLoading: validateMutation.isPending,
    isError: validateMutation.isError,
    data: validateMutation.data,
  };
};

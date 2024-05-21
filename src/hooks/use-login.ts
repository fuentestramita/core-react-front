import { useMutation } from "@tanstack/react-query";
import { LoginType } from "../types/login";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { LOGIN_EXPIRE_TIME_IN_MINUTES } from "../config/content/constants";
import { loginData } from "../mocks/login/login";
import axios from "axios";
export const useLoginMutation = ({ onError }: { onError: (error: string) => void }) => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const loginMutation = useMutation({
    // @ts-expect-error
    mutationFn: ({ user, code }: { user: Optional<string>; code: Optional<string> }) => {
      try {
        return axios.post(
          "/api/login",
          {
            rutUsuario: user,
            codigo: code,
          },
          {
            headers: {
              Accept: "application/json",
              "Content-Type": "application/json",
            },
          }
        );
      } catch (err) {
        return loginData;
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
      navigate("/");
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

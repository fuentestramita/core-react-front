import { TramitaAPI } from "../services";
import { useMutation } from "@tanstack/react-query";
import { LoginType } from "../types/login";
import { useSignIn } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { LOGIN_EXPIRE_TIME_IN_MINUTES } from "../config/content/constants";
import { loginData } from "../mocks/login/login";
export const useLoginMutation = () => {
  const signIn = useSignIn();
  const navigate = useNavigate();
  const loginMutation = useMutation({
    // @ts-expect-error
    mutationFn: ({ user, password }: { user: Optional<string>; password: Optional<string> }) => {
      try {
        return TramitaAPI.post("/v1/login", {
          user,
          password,
        });
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
          name: data.name,
          lastName: data.lastName,
          fullName: data.fullName,
        },
      });
      navigate("/");
    },
    onError: () => {
      signIn({
        token: loginData.token,
        expiresIn: LOGIN_EXPIRE_TIME_IN_MINUTES,
        tokenType: "Bearer",
        authState: {
          email: loginData.email,
          name: loginData.name,
          lastName: loginData.lastName,
          fullName: loginData.fullName,
        },
      });
      navigate("/");
    },
  });
  return {
    mutation: loginMutation.mutateAsync,
    isLoading: loginMutation.isPending,
    isError: loginMutation.isError,
    data: loginMutation.data,
  };
};

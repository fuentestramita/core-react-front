import React from "react";
import styled from "styled-components";
import Illustration from "../../../assets/illustrations/login-illustration.png";
import CoreTramitaLogo from "../../../assets/logo-core-mini.webp";
import { Text } from "../../../components/typography";
import { StyledInput } from "../../../components/input";
import { Button } from "@chakra-ui/react";
import { useValidateMutation } from "../../../hooks/use-validate";
import { StyledCheckbox } from "../../../components/checkbox";
import { useForm, SubmitHandler } from "react-hook-form";
import ValidationCodeModal from "./validation-code-modal";
import { FaArrowRight } from "react-icons/fa";

type FieldValues = {
  user: string;
  password: string;
};
const Wrapper = styled.div({
  display: "flex",
  width: "100%",
  height: "100vh",
});
const LoginCredentialsContainer = styled.div({
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  height: "100vh",
  width: "35%",
  padding: "2rem",
  maxWidth: "650px",
});

const SideSection = styled.section({
  width: "70%",
  backgroundImage: `url(${Illustration})`,
  padding: "6rem 3rem",
  flex: "1",
  textAlign: "center",
  color: " #fff",
  backgroundColor: " #346cb0",
  backgroundSize: "cover",
});

const InputWrapper = styled.div({
  display: "flex",
  marginTop: "12px",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  gap: "4px",
});

const LogoWrapper = styled.div({
  display: "flex",
  marginBottom: "2rem",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
  gap: "4px",
});

const Flex = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});
const LoginCredentials = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const onSuccess = () => {
    setIsValidateOpen(true);
  };
  const onError = (error: string) => {
    setError(error);
  };
  const mutation = useValidateMutation({ onSuccess, onError });
  const [showPassword, setShowPassword] = React.useState(false);
  const [isValidateOpen, setIsValidateOpen] = React.useState(false);
  const [user, setUser] = React.useState<string | null>(null);
  const [error, setError] = React.useState<string | null>(null);

  const onSubmit: SubmitHandler<FieldValues> = (data: { user: string; password: string }, e?: React.BaseSyntheticEvent) => {
    e?.preventDefault();
    setUser(data.user);
    mutation.mutation({
      user: data.user,
      password: data.password,
    });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Wrapper>
          <LoginCredentialsContainer>
            <LogoWrapper>
              <img src={CoreTramitaLogo} alt="Core Tramita Logo" />
              <Text fontWeight="semibold" size="3xl">
                Bienvenido
              </Text>
            </LogoWrapper>
            <InputWrapper>
              <Text size="md">Usuario</Text>
              <StyledInput width="100%" {...register("user")} size="lg" />
            </InputWrapper>
            <InputWrapper>
              <Text size="md">Contraseña</Text>
              <StyledInput type={showPassword ? "text" : "password"} {...register("password")} width="100%" size="lg" />
            </InputWrapper>
            <InputWrapper onClick={() => setShowPassword((current) => !current)}>
              <Flex>
                <StyledCheckbox id="show" name="show" checked={showPassword} readOnly />
                <Text size="md">Mostrar constraseña</Text>
              </Flex>
            </InputWrapper>
            {error ? (
              <Text size="md" color="danger">
                {error}
              </Text>
            ) : null}

            <Button rightIcon={<FaArrowRight />} type="submit" colorScheme="blue" width="100%" marginTop="2rem" isLoading={mutation.isLoading} size="lg">
              Ingresar
            </Button>
          </LoginCredentialsContainer>
          <SideSection />
        </Wrapper>
      </form>
      <ValidationCodeModal onError={onError} isOpen={isValidateOpen} closeModal={() => setIsValidateOpen(false)} user={user} />
    </div>
  );
};

export default LoginCredentials;

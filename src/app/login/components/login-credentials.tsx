import React from "react";
import styled from "styled-components";
import Illustration from "../../../assets/illustrations/login-illustration.png";
import CoreTramitaLogo from "../../../assets/logo-core-mini.webp";
import { Text } from "../../../components/typography";
import { StyledInput } from "../../../components/input";
import { Button } from "@chakra-ui/react";
import { useLoginMutation } from "../../../hooks/use-login";

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
const LoginCredentials = () => {
  const mutation = useLoginMutation();
  const [loginCredentials, setLoginCredentials] = React.useState({
    user: "",
    password: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginCredentials({
      ...loginCredentials,
      [e.target.name]: e.target.value,
    });
  };

  const onSubmit = () => {
    mutation.mutation(loginCredentials);
  };

  return (
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
          <StyledInput width="100%" value={loginCredentials.user} name="user" onChange={handleChange} />
        </InputWrapper>
        <InputWrapper>
          <Text size="md">Contraseña</Text>
          <StyledInput type="password" width="100%" value={loginCredentials.password} name="password" onChange={handleChange} />
        </InputWrapper>
        <Button colorScheme="blue" width="100%" marginTop="2rem" isLoading={mutation.isLoading} onClick={onSubmit}>
          Ingresar
        </Button>
      </LoginCredentialsContainer>
      <SideSection />
    </Wrapper>
  );
};

export default LoginCredentials;

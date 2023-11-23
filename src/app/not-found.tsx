import { Button, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
const NotFoundWrapper = styled.div({
  height: "100vh",
  width: "100vw",
  display: "flex",
  justifyContent: "center",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
});
const NotFound = () => {
  const navigate = useNavigate();
  return (
    <NotFoundWrapper>
      <Text fontSize="3xl">Esta página no existe</Text>
      <Button onClick={() => navigate(-1)}>Volver atrás</Button>
    </NotFoundWrapper>
  );
};

export default NotFound;

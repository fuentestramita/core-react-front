import styled from "styled-components";
import { Text } from "../../../components/typography";
import { Button } from "@chakra-ui/react";

const InputText = styled.input({
  padding: "8px",
  width: "150px",
  border: "1px solid #d3d3d3",
  borderRadius: "4px",
});

const FiltroContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  border: "1px solid #d3d3d3",
  padding: "8px",
  backgroundColor: "#f4f8fb",
});

const InputContainer = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const ButtonWrapper = styled.div({
  display: "flex",
  gap: "8px",
});
const Filtro = () => {
  return (
    <FiltroContainer>
      <InputContainer>
        <Text fontWeight="bold">PPU</Text>
        <InputText type="text" width="150px" />
        <Text fontWeight="bold">N° Factura</Text>
        <InputText type="text" width="150px" />
        <Text fontWeight="bold">RUT Factura</Text>
        <InputText type="text" width="150px" />
        <Button colorScheme="blue">Buscar</Button>
      </InputContainer>
      <ButtonWrapper>
        <Button colorScheme="blue">Guardar</Button>
        <Button colorScheme="blue">Nuevo</Button>
        <Button colorScheme="blue">Salir</Button>
      </ButtonWrapper>
    </FiltroContainer>
  );
};

export default Filtro;

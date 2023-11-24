import styled from "styled-components";
import { Text } from "../../../components/typography";
import { Button } from "@chakra-ui/react";
import { StyledInput } from "../../../components/input";
import { colors } from "../../../config/styles/styles";

const FiltroContainer = styled.div({
  display: "flex",
  justifyContent: "space-between",
  width: "100%",
  border: "1px solid #d3d3d3",
  padding: "8px",
  backgroundColor: colors.backgroundSecondary,
  overflow: "hidden",
  minWidth: "max-content",
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
const PrimeraInscripcionFiltro = () => {
  return (
    <FiltroContainer>
      <InputContainer>
        <Text fontWeight="bold">PPU</Text>
        <StyledInput type="text" />
        <Text fontWeight="bold">N° Factura</Text>
        <StyledInput type="text" />
        <Text fontWeight="bold">RUT Factura</Text>
        <StyledInput type="text" />
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

export default PrimeraInscripcionFiltro;

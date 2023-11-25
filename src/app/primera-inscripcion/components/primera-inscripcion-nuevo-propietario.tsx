import styled from "styled-components";
import { colors } from "../../../config/styles/styles";
import { StyledInput } from "../../../components/input";
import { Text } from "../../../components/typography";

const TramitaContainer = styled.div({
  backgroundColor: colors.backgroundSecondary,
  padding: "16px",
  border: "1px solid #d3d3d3",
  width: "100%",
  display: "flex",
  gap: "16px",
  overflow: "hidden",
  minWidth: "max-content",
});

const LeftColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "50%",
  minWidth: "480px",
  maxWidth: "700px",
});

const Flex = styled.div({
  marginTop: "8px",
  flexWrap: "wrap",
  display: "flex",
  alignItems: "center",
  gap: "8px",
  justifyContent: "space-between",
  width: "100%",
  paddingBottom: "2px",
  borderBottom: "1px solid #d3d3d3",
});

const DireccionWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
});

const PrimeraInscripcionNuevoPropietario = () => {
  return (
    <div>
      <Text size="sm" fontWeight="bold">
        Datos del Adquirente o Nuevo Propietario
      </Text>
      <TramitaContainer>
        <LeftColumn>
          <Flex id="nuevo-prop-rut">
            <Text fontWeight="bold">RUT</Text>
            <StyledInput type="text" />
            <Text fontWeight="bold">Razón social/Nombre</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex>
            <Text size="sm" fontWeight="bold">
              Dirección
            </Text>
            <DireccionWrapper id="nuevo-prop-calle">
              <Text fontWeight="bold">Calle</Text>
              <StyledInput type="text" width="200px" />
            </DireccionWrapper>
            <DireccionWrapper id="nuevo-prop-numero">
              <Text fontWeight="bold">Número</Text>
              <StyledInput type="text" />
            </DireccionWrapper>
            <DireccionWrapper id="nuevo-prop-complemento">
              <Text fontWeight="bold">Complemento</Text>
              <StyledInput type="text" width="200px" />
            </DireccionWrapper>
          </Flex>
          <Flex id="nuevo-prop-comuna-ciudad">
            <Text fontWeight="bold">Comuna</Text>
            <StyledInput type="text" />
            <Text fontWeight="bold">Ciudad</Text>
            <StyledInput type="text" />
          </Flex>
        </LeftColumn>
      </TramitaContainer>
    </div>
  );
};

export default PrimeraInscripcionNuevoPropietario;

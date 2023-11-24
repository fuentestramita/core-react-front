import styled from "styled-components";
import { colors } from "../../../config/styles/styles";
import { Text } from "../../../components/typography";
import { Select } from "@chakra-ui/react";
import { StyledInput } from "../../../components/input";

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
  width: "35%",
  minWidth: "440px",
  maxWidth: "440px",
});
const RightColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "35%",
  minWidth: "440px",
  maxWidth: "440px",
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
const PrimeraInscripcionDatosVehiculo = () => {
  return (
    <div>
      <Text size="sm" fontWeight="bold">
        Datos Vehículo
      </Text>
      <TramitaContainer>
        <LeftColumn>
          <Flex id="tipo-vehiculo">
            <Text fontWeight="bold">Tipo Vehículo</Text>
            <Select size="sm" width="150px" placeholder="seleccione" backgroundColor="white">
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </Select>
          </Flex>
          <Flex id="vehiculo-marca">
            <Text fontWeight="bold">Marca</Text>
            <Select size="sm" width="150px" placeholder="seleccione" backgroundColor="white">
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </Select>
          </Flex>
          <Flex id="vehiculo-modelo">
            <Text fontWeight="bold">Modelo</Text>
            <Select size="sm" width="150px" placeholder="" backgroundColor="white">
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </Select>
          </Flex>
          <Flex id="vehiculo-ano-fab">
            <Text fontWeight="bold">Año fabricación</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-color">
            <Text fontWeight="bold">Color</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-puertas">
            <Text fontWeight="bold">Puertas</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-asientos">
            <Text fontWeight="bold">Asientos</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-carga">
            <Text fontWeight="bold">Carga</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-unidad-de-carga">
            <Text fontWeight="bold">Unidad de Carga</Text>
            <Select size="sm" width="150px" placeholder="Seleccione" backgroundColor="white">
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </Select>
          </Flex>
          <Flex id="vehiculo-nmotor">
            <Text fontWeight="bold">N° Motor</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-n-chasis">
            <Text fontWeight="bold">N° Chasis</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-n-serie">
            <Text fontWeight="bold">N° Serie</Text>
            <StyledInput type="text" />
          </Flex>
        </LeftColumn>
        <RightColumn>
          <Flex id="vehiculo-n-vin">
            <Text fontWeight="bold">N° VIN</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-combustible">
            <Text fontWeight="bold">Combustible</Text>
            <Select size="sm" width="150px" placeholder="Seleccione" backgroundColor="white">
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </Select>
          </Flex>
          <Flex id="vehiculo-peso-bruto">
            <Text fontWeight="bold">Peso Bruto</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-unidad-peso">
            <Text fontWeight="bold">Unidad Peso</Text>
            <Select size="sm" width="150px" placeholder="Seleccione" backgroundColor="white">
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </Select>
          </Flex>
          <Flex id="vehiculo-traccion">
            <Text fontWeight="bold">Traccion</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-potencia-motor">
            <Text fontWeight="bold">Potencia Motor</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-unidad-pot">
            <Text fontWeight="bold">Unidad Potencia</Text>
            <Select size="sm" width="150px" placeholder="Seleccione" backgroundColor="white">
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </Select>
          </Flex>
          <Flex id="vehiculo-carroceria">
            <Text fontWeight="bold">Carroceria</Text>
            <Select size="sm" width="150px" placeholder="Seleccione" backgroundColor="white">
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </Select>
          </Flex>
          <Flex id="vehiculo-otra-carroceria">
            <Text fontWeight="bold">Otra carroceria</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-n-disp-ejes">
            <Text fontWeight="bold">N° y Disp. Ejes</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vehiculo-cod-cit">
            <Text fontWeight="bold">Cod. CIT</Text>
            <StyledInput type="text" />
          </Flex>
        </RightColumn>
      </TramitaContainer>
    </div>
  );
};

export default PrimeraInscripcionDatosVehiculo;

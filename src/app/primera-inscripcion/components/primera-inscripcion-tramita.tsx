import styled from "styled-components";
import { colors } from "../../../config/styles/styles";
import { StyledInput } from "../../../components/input";
import { Text } from "../../../components/typography";
import { Select } from "@chakra-ui/react";
import { DatePicker } from "../../../components/date-picker";

const TramitaContainer = styled.div({
  backgroundColor: colors.backgroundSecondary,
  padding: "16px",
  border: "1px solid #d3d3d3",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  gap: "16px",
  overflow: "hidden",
  minWidth: "max-content",
});

const FirstColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "30%",
  minWidth: "500px",
});

const SecondColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "30%",
  minWidth: "500px",
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

const MiddleColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flecx-start",
  width: "30%",
  minWidth: "300px",
});

const PrimeraInscripcionTramita = () => {
  return (
    <div style={{ display: "block" }}>
      <TramitaContainer>
        <FirstColumn>
          <Flex id="PPU">
            <Text fontWeight="bold">PPU</Text>
            <div>
              <StyledInput type="text" />
              <StyledInput type="text" width="75px" />
            </div>
          </Flex>
          <Flex id="estado">
            <Text fontWeight="bold">Estado</Text>
            <Select width="150px" backgroundColor="white">
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </Select>
          </Flex>
          <Flex id="n-operacion">
            <Text fontWeight="bold">N° Operación o Contrato</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="origen">
            <Text fontWeight="bold">Origen</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="n-operacion-mt">
            <Text fontWeight="bold">N° Operación M.T.</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="codigo-cit">
            <Text fontWeight="bold">Código CIT</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="n-factura">
            <Text fontWeight="bold">N° Factura</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="rut-cliente">
            <Text fontWeight="bold">Rut Cliente</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vcto-cto-l">
            <Text fontWeight="bold">Vcto.Cto.L.</Text>
            <DatePicker type="date" />
          </Flex>
          <Flex id="razon-social">
            <Text fontWeight="bold">Razón Social/ Nombre cliente</Text>
            <StyledInput type="text" width="200px" />
          </Flex>
          <Flex id="rut-rep-legal">
            <Text fontWeight="bold">Rut Rep. Legal</Text>
            <StyledInput type="text" width="200px" />
          </Flex>
          <Flex id="direccion">
            <Text fontWeight="bold">Calle</Text>
            <StyledInput type="text" />
            <Text fontWeight="bold">Número</Text>
            <StyledInput type="text" />
            <Text fontWeight="bold">Complemento</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="direccion-2">
            <Text fontWeight="bold">Comuna</Text>
            <StyledInput type="text" />
            <Flex>
              <Text fontWeight="bold">Ciudad</Text>
              <StyledInput type="text" />
            </Flex>
          </Flex>
          <Flex id="contacto">
            <Text fontWeight="bold">Contacto</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="tel-contacto">
            <Text fontWeight="bold">Teléfono Contacto</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="email-contacto">
            <Text fontWeight="bold">Email Contacto</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="n-solicitud">
            <Text fontWeight="bold">N° Solicitud</Text>
            <StyledInput type="text" />
            <input type="checkbox" />
            <Text size="xs" fontWeight="bold">
              Entrega listado
            </Text>
          </Flex>
          <Flex id="oficina">
            <Text fontWeight="bold">Oficina</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="fecha-rnvm">
            <Text fontWeight="bold">Fecha Solicitud RNVM</Text>
            <DatePicker type="date" />
            <input type="checkbox" />
            <Text size="xs" fontWeight="bold">
              Rut
            </Text>
            <input type="checkbox" />
            <Text size="xs" fontWeight="bold">
              EC
            </Text>
            <input type="checkbox" />
            <Text size="xs" fontWeight="bold">
              CI
            </Text>
          </Flex>
          <Flex id="n-valija">
            <Text fontWeight="bold">Número Valija</Text>
            <DatePicker type="date" />
            <input type="checkbox" />
            <Text size="xs" fontWeight="bold">
              Entrega Valija
            </Text>
          </Flex>
          <Flex id="ejecutivo">
            <Text fontWeight="bold">Ejecutivo</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="sucursal">
            <Text fontWeight="bold">Sucursal</Text>
            <StyledInput type="text" />
          </Flex>
        </FirstColumn>
        <MiddleColumn>
          <Flex id="PDF-TAG">
            <Text fontWeight="bold">PFG TAG</Text>
            <StyledInput type="text" />
          </Flex>
        </MiddleColumn>
        <SecondColumn>
          <Flex id="PPU">
            <Text fontWeight="bold">PPU</Text>
            <div>
              <StyledInput type="text" />
              <StyledInput type="text" width="75px" />
            </div>
          </Flex>
          <Flex id="estado">
            <Text fontWeight="bold">Estado</Text>
            <Select width="150px" backgroundColor="white">
              <option value="1">Activo</option>
              <option value="2">Inactivo</option>
            </Select>
          </Flex>
          <Flex id="n-operacion">
            <Text fontWeight="bold">N° Operación o Contrato</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="origen">
            <Text fontWeight="bold">Origen</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="n-operacion-mt">
            <Text fontWeight="bold">N° Operación M.T.</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="codigo-cit">
            <Text fontWeight="bold">Código CIT</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="n-factura">
            <Text fontWeight="bold">N° Factura</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="rut-cliente">
            <Text fontWeight="bold">Rut Cliente</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="vcto-cto-l">
            <Text fontWeight="bold">Vcto.Cto.L.</Text>
            <DatePicker type="date" />
          </Flex>
          <Flex id="razon-social">
            <Text fontWeight="bold">Razón Social/ Nombre cliente</Text>
            <StyledInput type="text" width="200px" />
          </Flex>
          <Flex id="rut-rep-legal">
            <Text fontWeight="bold">Rut Rep. Legal</Text>
            <StyledInput type="text" width="200px" />
          </Flex>
          <Flex id="direccion">
            <Text fontWeight="bold">Calle</Text>
            <StyledInput type="text" />
            <Text fontWeight="bold">Número</Text>
            <StyledInput type="text" />
            <Text fontWeight="bold">Complemento</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="direccion-2">
            <Text fontWeight="bold">Comuna</Text>
            <StyledInput type="text" />
            <Flex>
              <Text fontWeight="bold">Ciudad</Text>
              <StyledInput type="text" />
            </Flex>
          </Flex>
          <Flex id="contacto">
            <Text fontWeight="bold">Contacto</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="tel-contacto">
            <Text fontWeight="bold">Teléfono Contacto</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="email-contacto">
            <Text fontWeight="bold">Email Contacto</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="n-solicitud">
            <Text fontWeight="bold">N° Solicitud</Text>
            <StyledInput type="text" />
            <input type="checkbox" />
            <Text size="xs" fontWeight="bold">
              Entrega listado
            </Text>
          </Flex>
          <Flex id="oficina">
            <Text fontWeight="bold">Oficina</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="fecha-rnvm">
            <Text fontWeight="bold">Fecha Solicitud RNVM</Text>
            <DatePicker type="date" />
            <input type="checkbox" />
            <Text size="xs" fontWeight="bold">
              Rut
            </Text>
            <input type="checkbox" />
            <Text size="xs" fontWeight="bold">
              EC
            </Text>
            <input type="checkbox" />
            <Text size="xs" fontWeight="bold">
              CI
            </Text>
          </Flex>
          <Flex id="n-valija">
            <Text fontWeight="bold">Número Valija</Text>
            <DatePicker type="date" />
            <input type="checkbox" />
            <Text size="xs" fontWeight="bold">
              Entrega Valija
            </Text>
          </Flex>
          <Flex id="ejecutivo">
            <Text fontWeight="bold">Ejecutivo</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="sucursal">
            <Text fontWeight="bold">Sucursal</Text>
            <StyledInput type="text" />
          </Flex>
        </SecondColumn>
      </TramitaContainer>
    </div>
  );
};

export default PrimeraInscripcionTramita;

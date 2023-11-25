import styled from "styled-components";
import { colors } from "../../../config/styles/styles";
import { StyledInput } from "../../../components/input";
import { Text } from "../../../components/typography";
import { Select } from "@chakra-ui/react";
import { DatePicker } from "../../../components/date-picker";
import { years } from "../../../mocks/years/years";
import { StyledCheckbox } from "../../../components/checkbox";

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
  minWidth: "480px",
  maxWidth: "480px",
});

const RightColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "flex-start",
  width: "35%",
  minWidth: "480px",
  maxWidth: "480px",
});

const MiddleColumn = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "flex-start",
  width: "10%",
  minWidth: "300px",
  maxWidth: "300px",
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

const StyledTextArea = styled.textarea({
  border: "1px solid #d3d3d3",
  borderRadius: "4px",
});

const ContentWrapper = styled.div({
  gap: "8px",
  display: "flex",
  alignItems: "center",
});

const PrimeraInscripcionTramita = () => {
  return (
    <div>
      <Text size="sm" fontWeight="bold">
        Tramita
      </Text>
      <TramitaContainer>
        <LeftColumn>
          <Flex id="PPU">
            <Text fontWeight="bold">PPU</Text>
            <div>
              <StyledInput type="text" />
              <StyledInput type="text" width="35px" />
            </div>
          </Flex>
          <Flex id="estado">
            <Text fontWeight="bold">Estado</Text>
            <Select size="sm" width="150px" backgroundColor="white">
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
            <div>
              <Text fontWeight="bold">Calle</Text>
              <StyledInput type="text" width="100px" />
            </div>
            <div>
              <Text fontWeight="bold">Número</Text>
              <StyledInput type="text" width="80px" />
            </div>
            <div>
              <Text fontWeight="bold">Complemento</Text>
              <StyledInput type="text" width="100px" />
            </div>
          </Flex>
          <Flex id="direccion-2">
            <div>
              <Text fontWeight="bold">Comuna</Text>
              <StyledInput type="text" />
            </div>
            <div>
              <Text fontWeight="bold">Ciudad</Text>
              <StyledInput type="text" />
            </div>
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
            <StyledCheckbox />
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
            <StyledCheckbox />
            <Text size="xs" fontWeight="bold">
              Rut
            </Text>
            <StyledCheckbox />
            <Text size="xs" fontWeight="bold">
              EC
            </Text>
            <StyledCheckbox />
            <Text size="xs" fontWeight="bold">
              CI
            </Text>
            <DatePicker type="date" />
          </Flex>
          <Flex id="n-valija">
            <Text fontWeight="bold">Número Valija</Text>
            <ContentWrapper>
              <StyledCheckbox />
              <Text size="xs" fontWeight="bold">
                Entrega Valija
              </Text>
              <StyledInput type="number" />
            </ContentWrapper>
          </Flex>
          <Flex id="ejecutivo">
            <Text fontWeight="bold">Ejecutivo</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="sucursal">
            <Text fontWeight="bold">Sucursal</Text>
            <StyledInput type="text" />
          </Flex>
        </LeftColumn>
        <MiddleColumn>
          <Flex id="PDF-TAG">
            <Text fontWeight="bold">PFG TAG</Text>
            <StyledInput type="text" />
          </Flex>
        </MiddleColumn>
        <RightColumn>
          <Flex id="año">
            <Text fontWeight="bold">Año</Text>
            <Select size="sm" width="100px" backgroundColor="white">
              {years?.map((year, index) => (
                <option key={index} value={year}>
                  {year}
                </option>
              ))}
            </Select>
          </Flex>
          <Flex id="fecha-recepcion-banco">
            <Text fontWeight="bold">Fecha recepción Banco</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="fecha-padron">
            <Text fontWeight="bold">Fecha padrón</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="codigo-despacho-correo">
            <Text fontWeight="bold">Código despacho correo</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="obs-entrega">
            <Text fontWeight="bold">Observación Entrega</Text>
            <Select size="sm" width="100px" backgroundColor="white">
              <option value="">Seleccione</option>
            </Select>
          </Flex>
          <Flex id="n-placas">
            <Text fontWeight="bold">N° Placas</Text>
            <Select size="sm" width="100px" backgroundColor="white">
              {[...Array(5)]?.map((_, index) => (
                <option key={index + 1} value={index + 1}>
                  {index + 1}
                </option>
              ))}
            </Select>
          </Flex>
          <Flex id="tag-placas">
            <ContentWrapper>
              <Text fontWeight="bold">Tag</Text>
              <StyledCheckbox />
            </ContentWrapper>
            <ContentWrapper>
              <Text fontWeight="bold">Placas</Text>
              <StyledCheckbox />
            </ContentWrapper>
          </Flex>
          <Flex id="fecha-ingreso-rnvm">
            <Text fontWeight="bold">Fecha Ingreso RNVM</Text>
            <DatePicker type="date" />
          </Flex>
          <Flex id="obs">
            <Text fontWeight="bold">Observaciones</Text>
            <StyledTextArea />
          </Flex>
          <Flex id="correlativo-entrega">
            <Text fontWeight="bold">Correlativo Entrega</Text>
            <StyledInput type="text" width="200px" />
          </Flex>
          <Flex id="folio">
            <Text fontWeight="bold">Folio</Text>
            <StyledInput type="text" width="200px" />
          </Flex>
          <Flex id="estado-meratenencia">
            <Text fontWeight="bold">Estado meratenencia</Text>
            <div>?</div>
          </Flex>
          <Flex id="valor-1ra-inscrip">
            <Text fontWeight="bold">Valor 1ra inscripción</Text>
            <Select size="sm" width="100px" backgroundColor="white">
              <option value="$1231231232">$1231231232</option>
            </Select>
          </Flex>
          <Flex id="valor-tramita">
            <Text fontWeight="bold">Valor Tramita</Text>
            <Select size="sm" width="100px" backgroundColor="white">
              <option value="0,3">0,3</option>
            </Select>
          </Flex>
          <Flex id="valor-servicio-tag">
            <Text fontWeight="bold">Valor Servicio TAG</Text>
            <Select size="sm" width="100px" backgroundColor="white">
              <option value="0">0</option>
            </Select>
          </Flex>
          <Flex id="valor-notaria">
            <Text fontWeight="bold">Valor Servicio TAG</Text>
            <Select size="sm" width="100px" backgroundColor="white">
              <option value="$0">$0</option>
            </Select>
          </Flex>
          <Flex id="valor-despacho-correo">
            <Text fontWeight="bold">Valor Despacho Correo</Text>
            <Select size="sm" width="100px" backgroundColor="white">
              <option value="0,00">0,00</option>
            </Select>
          </Flex>
          <Flex id="fecha-ingreso-tag">
            <Text fontWeight="bold">Fecha ingreso TAG</Text>
            <StyledInput type="text" />
          </Flex>
          <Flex id="f88">
            <Text fontWeight="bold">F88</Text>
            <ContentWrapper>
              <StyledCheckbox />
              <Text fontWeight="bold">Valor</Text>
              <StyledInput type="text" />
            </ContentWrapper>
          </Flex>
        </RightColumn>
      </TramitaContainer>
    </div>
  );
};

export default PrimeraInscripcionTramita;

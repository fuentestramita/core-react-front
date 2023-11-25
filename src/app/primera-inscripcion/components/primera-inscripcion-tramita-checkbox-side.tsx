import { Label, Text } from "../../../components/typography";
import styled from "styled-components";
import { colors } from "../../../config/styles/styles";
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

const CheckWrapper = styled.div({
  marginLeft: "8px",
  display: "flex",
  alignItems: "center",
  gap: "8px",
});

const CertificadoWrapper = styled.div({
  display: "flex",
  alignItems: "center",
});
const PrimeraInscripcionTramitaCheckboxSide = () => {
  return (
    <TramitaContainer>
      <LeftColumn>
        <Flex>
          <Label fontWeight="bold" htmlFor="fotocopia-ds5594">
            Fotocopia legalizada de cert. de cumplimiento DS 55/94
          </Label>
          <StyledCheckbox id="fotocopia-ds5594" name="fotocopia-ds5594" />
        </Flex>
        <Flex>
          <Label htmlFor="fotocopia-rut-banco" fontWeight="bold">
            Fotocopia RUT Banco
          </Label>
          <StyledCheckbox id="fotocopia-rut-banco" name="fotocopia-rut-banco" />
        </Flex>
        <Flex>
          <Text fontWeight="bold">Certificado DS 55/94 / Homologación</Text>
          <CertificadoWrapper>
            <CheckWrapper>
              <Label htmlFor="1u" fontWeight="bold">
                1U.
              </Label>
              <StyledCheckbox id="1u" name="1u" />
            </CheckWrapper>
            <CheckWrapper>
              <Label htmlFor="2u" fontWeight="bold">
                2U.
              </Label>
              <StyledCheckbox id="2u" name="2u" />
            </CheckWrapper>
            <CheckWrapper>
              <Label htmlFor="3u" fontWeight="bold">
                3U.
              </Label>
              <StyledCheckbox id="3u" name="3u" />
            </CheckWrapper>
            <CheckWrapper>
              <Label htmlFor="4u" fontWeight="bold">
                4U.
              </Label>
              <StyledCheckbox id="4u" name="4u" />
            </CheckWrapper>
          </CertificadoWrapper>
        </Flex>
        <Flex>
          <Label htmlFor="solicitud-1ra" fontWeight="bold">
            Solicitud de 1a. Inscripción
          </Label>
          <StyledCheckbox id="solicitud-1ra" name="solicitud-1ra" />
        </Flex>
        <Flex>
          <Label htmlFor="leasing-cert" fontWeight="bold">
            Leasing certificado combustibles
          </Label>
          <StyledCheckbox id="leasing-cert" name="leasing-cert" />
        </Flex>
        <Flex>
          <Label htmlFor="televia" fontWeight="bold">
            Contrato Televía convenio PAC
          </Label>
          <StyledCheckbox id="televia" name="televia" />
        </Flex>
        <Flex>
          <Label htmlFor="disp-televia" fontWeight="bold">
            Dispositivo Televía
          </Label>
          <StyledCheckbox id="disp-televia" name="disp-televia" />
        </Flex>
      </LeftColumn>
      <RightColumn>
        <Flex>
          <Label htmlFor="contrato-leasing" fontWeight="bold">
            Contrato Leasing
          </Label>
          <StyledCheckbox id="contrato-leasing" name="contrato-leasing" />
        </Flex>
        <Flex>
          <Label htmlFor="padron" fontWeight="bold">
            Padron
          </Label>
          <StyledCheckbox id="padron" name="padron" />
        </Flex>
        <Flex>
          <Label htmlFor="pendiente-contrato" fontWeight="bold">
            Pendiente Contrato
          </Label>
          <StyledCheckbox id="pendiente-contrato" name="pendiente-contrato" />
        </Flex>
        <Flex>
          <Label htmlFor="pendiente-anotacion" fontWeight="bold">
            Pendiente Anotación
          </Label>
          <StyledCheckbox id="pendiente-anotacion" name="pendiente-anotacion" />
        </Flex>
        <Flex>
          <Label htmlFor="anotacion-meratenencia" fontWeight="bold">
            Anotación Meratenencia
          </Label>
          <StyledCheckbox id="anotacion-meratenencia" name="anotacion-meratenencia" />
        </Flex>
        <Flex>
          <Label htmlFor="despacho-externo" fontWeight="bold">
            Despacho Externo
          </Label>
          <StyledCheckbox id="despacho-externo" name="despacho-externo" />
        </Flex>
        <Flex>
          <Label htmlFor="informativo-seguro" fontWeight="bold">
            Informativo Seguro
          </Label>
          <StyledCheckbox id="informativo-seguro" name="informativo-seguro" />
        </Flex>
      </RightColumn>
    </TramitaContainer>
  );
};

export default PrimeraInscripcionTramitaCheckboxSide;

import { Avatar, Box, Flex, HStack, Menu, MenuButton, MenuItem, MenuList, Select, Text, VStack, chakra } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { HEADER_HEIGHT } from "./constants";
import styled from "styled-components";
import React from "react";
import Loading from "../loading";
import { colors } from "../../config/styles/styles";
import { useAuthUser, useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import { useGetEmpresas } from "../../hooks/use-get-empresas";
import { EmpresaType } from "../../types/empresas";

const Wrapper = styled.div({
  minHeight: HEADER_HEIGHT,
  width: "100%",
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.main,
  padding: "0 16px",
  justifyContent: "space-between",
  boxShadow: "0 2px 0 #d3d3d3",
  overflow: "hidden",
  minWidth: "max-content",
});

const RightContent = styled.div({
  display: "flex",
  alignItems: "center",
  gap: "36px",
});

const Divider = styled.div(({ color }) => ({
  height: "10px",
  backgroundColor: color,
}));

const StyledMenuButton = chakra(MenuButton, {
  baseStyle: {
    minWidth: "250px",
    width: "250px",
  },
});

const Navbar = () => {
  const signOut = useSignOut();
  const user = useAuthUser();
  // @ts-expect-error
  const { name = "" } = user();
  const navigate = useNavigate();
  const [selectedEmpresa, setSelectedEmpresa] = React.useState<Optional<EmpresaType>>(null);
  const { data: empresas, isLoading } = useGetEmpresas();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    console.log(event.target.value);
    const empresa: Optional<EmpresaType> = empresas.find((empresa: EmpresaType) => String(empresa.empresaID) === event.target.value);
    setSelectedEmpresa(empresa);
    // ADD PARAM TO ROUTE
    // router.push(getBankURL(bank?.id || "", pathName));
  };

  const onSignOut = () => {
    signOut();
    navigate("/login");
  };
  return (
    <>
      <Wrapper>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Flex gap="8px">
              <Text color="#1f335d" fontWeight="bold" fontSize={"xx-large"}>
                TRAMITA {selectedEmpresa?.razonSocialEmpresa ? "-" : ""}
              </Text>
              <Text color={selectedEmpresa?.backGroundColor} fontWeight="bold" fontSize={"xx-large"}>
                {selectedEmpresa?.razonSocialEmpresa ? <span>{` ${selectedEmpresa?.razonSocialEmpresa}`}</span> : null}
              </Text>
            </Flex>
            <RightContent>
              <Select size="lg" placeholder="Seleccione una opción" onChange={handleChange} backgroundColor="white">
                {empresas?.map((empresa: EmpresaType) => (
                  <option key={empresa.empresaID} value={empresa.empresaID}>
                    {empresa.razonSocialEmpresa}
                  </option>
                ))}
              </Select>
              <Menu>
                <StyledMenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: "none" }}>
                  <HStack>
                    <Avatar
                      size={"md"}
                      src={"https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"}
                    />
                    <VStack display={{ base: "none", md: "flex" }} alignItems="flex-start" spacing="1px" ml="2">
                      <Text fontSize="xl" color={colors.fontColor}>
                        {name}
                      </Text>
                    </VStack>
                    <Box color={colors.fontColor}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </StyledMenuButton>
                <MenuList>
                  <MenuItem onClick={onSignOut}>Salir</MenuItem>
                </MenuList>
              </Menu>
            </RightContent>
          </>
        )}
      </Wrapper>
      <Divider color={selectedEmpresa?.backGroundColor} />
    </>
  );
};

export default Navbar;

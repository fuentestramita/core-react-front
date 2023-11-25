import { Avatar, Box, Flex, HStack, Menu, MenuButton, MenuDivider, MenuItem, MenuList, Select, Text, VStack, chakra } from "@chakra-ui/react";
import { FiChevronDown } from "react-icons/fi";
import { HEADER_HEIGHT } from "./constants";
import styled from "styled-components";
import React from "react";
import Loading from "../loading";
import { BankType } from "../../types/banks";
import { useGetBanks } from "../../hooks/use-get-banks";
import { colors } from "../../config/styles/styles";

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
  const [selectedBank, setSelectedBank] = React.useState<Optional<BankType>>(null);
  const { data: banks, isLoading } = useGetBanks();
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const bank: Optional<BankType> = banks.find((bank: BankType) => bank.id === event.target.value);
    setSelectedBank(bank);
    // ADD PARAM TO ROUTE
    // router.push(getBankURL(bank?.id || "", pathName));
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
                TRAMITA {selectedBank?.name ? "-" : ""}
              </Text>
              <Text color={selectedBank?.color} fontWeight="bold" fontSize={"xx-large"}>
                {selectedBank?.name ? <span>{` Banco ${selectedBank?.name}`}</span> : null}
              </Text>
            </Flex>
            <RightContent>
              <Select size="lg" placeholder="Seleccione una opción" onChange={handleChange} backgroundColor="white">
                {banks?.map((bank: BankType) => (
                  <option key={bank.id} value={bank.id}>
                    {bank.name}
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
                        Mario Granger
                      </Text>
                    </VStack>
                    <Box color={colors.fontColor}>
                      <FiChevronDown />
                    </Box>
                  </HStack>
                </StyledMenuButton>
                <MenuList>
                  <MenuItem>Profile</MenuItem>
                  <MenuItem>Settings</MenuItem>
                  <MenuItem>Billing</MenuItem>
                  <MenuDivider />
                  <MenuItem>Sign out</MenuItem>
                </MenuList>
              </Menu>
            </RightContent>
          </>
        )}
      </Wrapper>
      <Divider color={selectedBank?.color} />
    </>
  );
};

export default Navbar;

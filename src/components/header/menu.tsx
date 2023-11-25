import SidebarSkeleton from "./sidebar-skeleton";
import styled from "styled-components";
import { Accordion, AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Flex, Text } from "@chakra-ui/react";
import { useGetUserMenu } from "../../hooks/use-get-user-menu";
import { colors } from "../../config/styles/styles";
import { Link } from "react-router-dom";
const StyledLink = styled(Link)`
  font-weight: bold;
  color: ${colors.fontColor};
  width: 100%;
  box-sizing: border-box;
`;

const ItemWrapper = styled.div({
  padding: "8px",
  boxSizing: "border-box",
  width: "100%",
  "&:hover": {
    backgroundColor: "RGBA(0, 0, 0, 0.04)",
  },
});
const MenuWrapper = styled.div({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "16px",
});
const Menu = () => {
  const getUserMenuQuery = useGetUserMenu();
  const { data } = getUserMenuQuery || {};

  if (getUserMenuQuery?.isLoading) {
    return <SidebarSkeleton />;
  }

  return (
    <MenuWrapper>
      {data?.menu?.map((menu) => (
        <Flex width="100%" key={menu.id}>
          {menu?.route ? (
            <StyledLink to={menu?.route}>
              <ItemWrapper>{menu.name}</ItemWrapper>
            </StyledLink>
          ) : (
            <Accordion width="100%" key={menu.id} allowToggle>
              <AccordionItem key={menu.id} border="none">
                <AccordionButton paddingX="8px" paddingY="8px" justifyContent="space-between">
                  <Text color={colors.fontColor} fontWeight="bold">
                    {menu.name}
                  </Text>
                  <AccordionIcon fontSize="25px" color={colors.fontColor} />
                </AccordionButton>
                <AccordionPanel>
                  {menu?.submenu?.map((submenu) => (
                    <StyledLink to={submenu?.route}>
                      <ItemWrapper key={submenu?.id}>{submenu.name}</ItemWrapper>
                    </StyledLink>
                  ))}
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          )}
        </Flex>
      ))}
    </MenuWrapper>
  );
};

export default Menu;

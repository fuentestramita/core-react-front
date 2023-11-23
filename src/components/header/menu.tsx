import SidebarSkeleton from "./sidebar-skeleton";
import styled from "styled-components";
import { Text } from "@chakra-ui/react";
import { useGetUserMenu } from "../../hooks/use-get-user-menu";
import { colors } from "../../config/styles/styles";
import { Link } from "react-router-dom";
const StyledLink = styled(Link)`
  font-weight: bold;
  color: ${colors.fontColor};
`;

const ItemWrapper = styled.div({
  padding: "8px 0",
  width: "100%",
});
const SubmenuWrapper = styled.div({
  padding: "8px 16px",
  borderLeft: `2px solid ${colors.fontColor}`,
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
        <div key={menu.id}>
          {menu?.route ? (
            <ItemWrapper>
              <StyledLink href={menu?.route}>{menu.name}</StyledLink>
            </ItemWrapper>
          ) : (
            <ItemWrapper>
              <Text color={colors.fontColor} fontWeight="bold" marginBottom="12px">
                {menu.name}
              </Text>
              {menu?.submenu?.map((submenu) => (
                <SubmenuWrapper key={submenu?.id}>
                  <StyledLink href={submenu?.route}>{submenu.name}</StyledLink>
                </SubmenuWrapper>
              ))}
            </ItemWrapper>
          )}
        </div>
      ))}
    </MenuWrapper>
  );
};

export default Menu;

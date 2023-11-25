import React from "react";
import { styled } from "styled-components";
import { HEADER_HEIGHT } from "./constants";
import Menu from "./menu";
import { GiHamburgerMenu } from "react-icons/gi";
import { Button } from "@chakra-ui/react";
import { colors } from "../../config/styles/styles";
import { Link } from "react-router-dom";
import Logo from "../../assets/logo-core-mini.webp";

const SidebarWrapper = styled.div<{ open: boolean }>(({ open }) => ({
  display: "flex",
  flexDirection: "column",
  minHeight: "100%",
  backgroundColor: colors.backgroundPrimary,
  width: "100%",
  maxWidth: open ? "250px" : "80px",
  borderRight: "1px #CDCDCD solid",
}));

const Header = styled.div({
  height: HEADER_HEIGHT,
  display: "flex",
  alignItems: "center",
  backgroundColor: colors.main,
  padding: "0 16px",
  gap: "8px",
});
const Sidebar = () => {
  const [open, setOpen] = React.useState(true);
  const handleToggle = () => {
    setOpen((prev) => !prev);
  };

  return (
    <SidebarWrapper open={open}>
      <Header>
        <Button onClick={handleToggle} bg="transparent" _hover={{ bg: "none" }} padding="0">
          <GiHamburgerMenu size="35px" />
        </Button>
        {open ? (
          <Link to="/">
            <img src={Logo} alt="Logo Core" />
          </Link>
        ) : null}
      </Header>
      {open ? <Menu /> : null}
    </SidebarWrapper>
  );
};

export default Sidebar;

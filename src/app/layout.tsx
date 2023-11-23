import styled from "styled-components";
import Sidebar from "../components/header/sidebar";
import Navbar from "../components/header/navbar";
import { ChildrenType } from "../config/types";

const Wrapper = styled.div({
  display: "flex",
  width: "100vw",
  minHeight: "100vh",
});

const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  width: "100%",
});

const FormContent = styled.div({
  padding: "16px",
});
export default function Layout({ children }: { children: ChildrenType }) {
  return (
    <Wrapper>
      <Sidebar />
      <Content>
        <Navbar />
        <FormContent>{children}</FormContent>
      </Content>
    </Wrapper>
  );
}

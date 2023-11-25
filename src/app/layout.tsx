import styled from "styled-components";
import Sidebar from "../components/header/sidebar";
import Navbar from "../components/header/navbar";
import { ChildrenType } from "../config/types";

const Wrapper = styled.div({
  display: "flex",
  width: "100vw",
  minHeight: "100vh",
  overflow: "hidden",
  minWidth: "max-content",
});

const Content = styled.div({
  display: "flex",
  flexDirection: "column",
  flex: 1,
});

const FormContent = styled.div({
  display: "flex",
  padding: "16px",
  flexDirection: "column",
  gap: "16px",
  maxWidth: "1360px",
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

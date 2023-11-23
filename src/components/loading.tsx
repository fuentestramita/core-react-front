import { Spinner } from "@chakra-ui/react";
import styled from "styled-components";
const LoadingWrapper = styled.div({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
});
const Loading = () => {
  return (
    <LoadingWrapper>
      <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
    </LoadingWrapper>
  );
};

export default Loading;

import styled from "styled-components";

export const StyledInput = styled.input<{ width?: string }>(({ width = "150px" }) => ({
  padding: "8px",
  width: width,
  border: "1px solid #d3d3d3",
  borderRadius: "4px",
}));

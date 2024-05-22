import styled from "styled-components";
import { sizes } from "../config/styles/styles";
type SizeType = "xs" | "sm" | "md" | "lg" | "xl";

export const StyledInput = styled.input<{ width?: string; size?: SizeType }>(({ width = "150px", size = "sm" }) => {
  let sizeSelected;
  let paddingSelected;
  switch (size) {
    case "xs": {
      sizeSelected = sizes.fontSize.xs;
      paddingSelected = "6px";
      break;
    }
    case "sm": {
      sizeSelected = sizes.fontSize.sm;
      paddingSelected = "8px";
      break;
    }
    case "md": {
      sizeSelected = sizes.fontSize.md;
      paddingSelected = "12";
      break;
    }
    case "lg": {
      sizeSelected = sizes.fontSize.lg;
      paddingSelected = "16px";
      break;
    }
  }
  return { padding: paddingSelected, width: width, border: "1px solid #d3d3d3", borderRadius: "4px", fontSize: sizeSelected };
});

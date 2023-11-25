import styled from "styled-components";
import { ChildrenType } from "../config/types";
import { colors, sizes } from "../config/styles/styles";

const StyledText = styled.span<{ fontWeight: string; color: string; size: string }>(({ fontWeight, color, size }) => ({
  fontWeight: fontWeight,
  color: color,
  fontSize: size,
}));

const StyledLabel = styled.label<{ fontWeight: string; color: string; size: string }>(({ fontWeight, color, size }) => ({
  fontWeight: fontWeight,
  color: color,
  fontSize: size,
}));

type SizeType = "xs" | "sm" | "md" | "lg" | "xl";
type FontWeightType = "normal" | "bold";
type ColorType = "primary" | "secondary" | "tertiary" | "warning" | "danger";
export const Text = ({ children, fontWeight = "normal", size = "sm", color = "primary" }: { children: ChildrenType; fontWeight?: FontWeightType; color?: ColorType; size?: SizeType }) => {
  let colorSelected: string;
  let fontWeightSelected: string;
  let sizeSelected: string;
  switch (color) {
    case "primary": {
      colorSelected = colors.fontColor;
      break;
    }
    case "secondary": {
      colorSelected = "#6c757d";
      break;
    }
    case "tertiary": {
      colorSelected = "#007bff";
      break;
    }
    case "warning": {
      colorSelected = "#ffc107";
      break;
    }
    case "danger": {
      colorSelected = "#dc3545";
      break;
    }
  }

  switch (fontWeight) {
    case "normal": {
      fontWeightSelected = "normal";
      break;
    }
    case "bold": {
      fontWeightSelected = "bold";
      break;
    }
  }

  switch (size) {
    case "xs": {
      sizeSelected = sizes.fontSize.xs;
      break;
    }
    case "sm": {
      sizeSelected = sizes.fontSize.sm;
      break;
    }
    case "md": {
      sizeSelected = sizes.fontSize.md;
      break;
    }
    case "lg": {
      sizeSelected = sizes.fontSize.lg;
      break;
    }
    case "xl": {
      sizeSelected = sizes.fontSize.xl;
      break;
    }
  }

  return (
    <StyledText color={colorSelected} fontWeight={fontWeightSelected} size={sizeSelected}>
      {children}
    </StyledText>
  );
};

export const Label = ({
  htmlFor,
  fontWeight = "normal",
  size = "sm",
  color = "primary",
  children,
}: {
  children: ChildrenType;
  fontWeight?: FontWeightType;
  color?: ColorType;
  size?: SizeType;
  htmlFor: string;
}) => {
  let colorSelected: string;
  let fontWeightSelected: string;
  let sizeSelected: string;
  switch (color) {
    case "primary": {
      colorSelected = colors.fontColor;
      break;
    }
    case "secondary": {
      colorSelected = "#6c757d";
      break;
    }
    case "tertiary": {
      colorSelected = "#007bff";
      break;
    }
    case "warning": {
      colorSelected = "#ffc107";
      break;
    }
    case "danger": {
      colorSelected = "#dc3545";
      break;
    }
  }

  switch (fontWeight) {
    case "normal": {
      fontWeightSelected = "normal";
      break;
    }
    case "bold": {
      fontWeightSelected = "bold";
      break;
    }
  }

  switch (size) {
    case "xs": {
      sizeSelected = sizes.fontSize.xs;
      break;
    }
    case "sm": {
      sizeSelected = sizes.fontSize.sm;
      break;
    }
    case "md": {
      sizeSelected = sizes.fontSize.md;
      break;
    }
    case "lg": {
      sizeSelected = sizes.fontSize.lg;
      break;
    }
    case "xl": {
      sizeSelected = sizes.fontSize.xl;
      break;
    }
  }

  return (
    <StyledLabel color={colorSelected} fontWeight={fontWeightSelected} size={sizeSelected} htmlFor={htmlFor}>
      {children}
    </StyledLabel>
  );
};

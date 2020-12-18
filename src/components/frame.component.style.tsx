import styled from "styled-components";
import { BrandColor, Radius, Shadow } from "./constants";

interface FrameStyledProps {
  type?:
    | "primary"
    | "secondary"
    | "tertiary"
    | "quaternary"
    | "neutral"
    | "LayoutTertiary";
  shadow?: boolean;
}

const getType = {
  primary: (props) => props.theme.colors.Primary,
  secondary: (props) => props.theme.colors.Secondary,
  tertiary: (props) => props.theme.colors.Tertiary,
  quaternary: BrandColor.White,
  neutral: (props) => props.theme.colors.LayoutPrimary,
};

export const FrameStyled = styled.div<FrameStyledProps>`
  width: 100%;
  background-color: ${(props) =>
    props.type ? getType[props.type] : props.theme.colors.Primary};
  border-radius: ${Radius.Large};
  box-shadow: ${(props) => (props.shadow ? Shadow.Primary : "")};
`;

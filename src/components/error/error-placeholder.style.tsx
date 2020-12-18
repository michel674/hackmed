import styled from "styled-components";
import { Spacing, FontSize } from "../constants";

interface PlaceholderStyledProps {
  minHeight?: string;
  minWidth?: string;
}
export const PlaceholderStyled = styled.div<PlaceholderStyledProps>`
  background-color: ${(props) => props.theme.colors.LayoutTertiary};
  color: ${(props) => props.theme.colors.LowContrast};
  text-align: center;
  padding: ${Spacing.Medium};
`;

export const PlaceholderIconStyled = styled.h2<PlaceholderStyledProps>`
  font-size: ${FontSize.Large};
  margin: ${Spacing.Medium};
`;

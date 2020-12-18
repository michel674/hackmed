import styled from "styled-components";
import { FontFamily, FontSize, FontWeight, Spacing } from "./constants";

export const IconWrapperStyled = styled.div`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Medium};
  color: ${(props) => props.theme.colors.LowContrast};
  margin: ${Spacing.XSmall};
`;

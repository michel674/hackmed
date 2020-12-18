import styled from "styled-components";
import {
  FontFamily,
  FontSize,
  FontWeight,
  Spacing,
  Transition,
} from "./constants";

export const H1 = styled.h1`
  padding: 0;
  margin: 0;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Large};
  line-height: 1.5;
  font-weight: ${FontWeight.Medium};
  letter-spacing: 1.2px;
  color: ${(props) => props.theme.colors.HighContrast};
`;

export const H2 = styled.h2`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Small};
  line-height: 1.5;
  font-weight: ${FontWeight.Medium};
  margin: 0;
  transition: color ${Transition.Fast};
  color: ${(props) => props.theme.colors.HighContrast};
`;

export const H3 = styled.h3`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  line-height: 1.5;
  font-weight: ${FontWeight.Bold};
  margin: 0;
  transition: color ${Transition.Fast};
  hyphens: auto;
`;

export const H4 = styled.h4`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Medium};
`;

export const Span = styled.span`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Medium};
  color: ${(props) => props.theme.colors.LowContrast};
  margin: ${Spacing.XSmall};
`;

export const Body = styled.p`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Normal};
  color: ${(props) => props.theme.colors.HighContrast};
  margin: ${Spacing.XSmall};
`;

export const Quote = styled.span`
  color: ${(props) => props.theme.colors.HighContrast};
`;

export const WarningText = styled.span`
  color: ${(props) => props.theme.colors.Alert};
  font-size: ${FontSize.XSmall};
`;

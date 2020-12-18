import styled from "styled-components";
import { Spacing } from "./constants";

export const ProgressBarBorderStyled = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.LowContrast};
  height: ${Spacing.XSmall};
`;

interface ProgressBarContentProps {
  progress: number;
}

export const ProgressBarContentStyled = styled.div<ProgressBarContentProps>`
  height: 100%;
  width: ${(props) => props.progress}%;
  max-width: 100%;
  background-color: ${(props) => props.theme.colors.Primary};
`;

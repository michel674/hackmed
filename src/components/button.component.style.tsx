import styled from "styled-components";
import { FontSize, FontWeight, Radius, Spacing, Transition } from "./constants";

interface ButtonStyledProps {
  kind?: string;
  disabled?: boolean;
}

export const ButtonStyled = styled.button<ButtonStyledProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: ${Spacing.Small} ${Spacing.Small};
  font-weight: ${FontWeight.Medium};
  font-size: ${FontSize.XSmall};
  outline: none;
  border: none;
  border-radius: ${Radius.Small};
  color: ${(props) =>
    (props.disabled && props.theme.colors.White) ||
    (props.kind === "secondary"
      ? props.theme.colors.HighContranst
      : props.theme.colors.White)};
  background-color: ${(props) =>
    (props.disabled && props.theme.colors.LowContrast) ||
    (props.kind === "secondary"
      ? props.theme.colors.LowContrast
      : props.theme.colors.Primary)};

  transition: color ${Transition.Fast}, background-color ${Transition.Fast};
  &:hover {
    cursor: pointer;
    color: ${(props) =>
      (props.disabled && props.theme.colors.White) ||
      (props.kind === "secondary"
        ? props.theme.colors.White
        : props.theme.colors.Secondary)};
    background-color: ${(props) =>
      (props.disabled && props.theme.colors.LowContrast) ||
      (props.kind === "secondary"
        ? props.theme.colors.LowContrast
        : props.theme.colors.LowContrast)};
  }
`;

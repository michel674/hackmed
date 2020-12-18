import styled from "styled-components";
import { Radius, Spacing, Transition } from "./constants";

interface ToggleSwitchButtonStyledProps {
  state: boolean;
}

export const ToggleSwitchWrapperStyled = styled.div`
  border: 2px solid ${(props) => props.theme.colors.LowContrast};
  background-color: ${(props) => props.theme.colors.LowContrast};
  height: ${Spacing.Medium};
  width: ${Spacing.XLarge};
  border-radius: ${Radius.XSmall};
  display: flex;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
`;

export const ToggleSwitchButton = styled.div<ToggleSwitchButtonStyledProps>`
  background-color: ${(props) => props.theme.colors.LayoutTertiary};
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  1
  border-radius: ${Radius.Large};
  height: ${Spacing.Large};
  width: ${Spacing.Large};
  transform: ${(props) =>
    props.state ? "translateX(0px)" : "translateX(24px)"};
  transition: transform ${Transition.Fast};
`;

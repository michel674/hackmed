import styled from "styled-components";
import { Breakpoint, Spacing, Transition } from "../../components/constants";
import { sideBarWidth } from "./learning-unity-sidebar/learning-unit-side-bar.component.styled";

interface MaterialPageWrapperProps {
  sideBarClosed: boolean;
}
export const MaterialPageWrapperStyled = styled.div<MaterialPageWrapperProps>`
  padding-left: ${(props) =>
    props.sideBarClosed ? Spacing.Large : sideBarWidth};
  padding-bottom: ${Spacing.XLarge};
  background-color: ${(props) => props.theme.colors.LaytourTertiary};
  transition: padding-left ${Transition.Fast};
  @media (max-width: ${Breakpoint.Tablet}) {
    padding-left: ${Spacing.Large};
  }
`;

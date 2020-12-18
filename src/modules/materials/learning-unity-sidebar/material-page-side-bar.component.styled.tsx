import styled from "styled-components";
import {
  Spacing,
  Breakpoint,
  FontSize,
  Transition,
} from "../../../components/constants";

interface SideBarProps {
  learningUnitSideBarClosed: boolean;
}

export const LearningUnitSideBarStyled = styled.nav<SideBarProps>`
  display: inline-block;
  height: 100vh;
  position: fixed;
  border-right: 2px solid ${(props) => props.theme.colors.LayoutSecondary};
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  z-index: 5;
  width: 350px;
  transition: all 0.5s ease;
  padding: ${Spacing.Small};
  padding-top: ${Spacing.Medium};
  transform: ${(props) =>
    props.learningUnitSideBarClosed ? "translateX(-335px)" : "translateX(0)"};

  @media (max-width: ${Breakpoint.Tablet}) {
    display: none;
  }
`;

interface LearningUnitSideBarIConProps {
  learningUnitSideBarClosed: boolean;
}

export const LearningUnitSideBarIConStyled = styled.div<
  LearningUnitSideBarIConProps
>`
  color: ${(props) => props.theme.colors.LowContrast};
  font-size: ${FontSize.Medium};
  padding: 0 ${Spacing.XSmall};
  position: absolute;
  top: ${Spacing.Medium};
  right: ${Spacing.Small};
  transition: color ${Transition.Fast};
  transform: ${(props) =>
    props.learningUnitSideBarClosed ? "rotateZ(180deg)" : "rotateZ(0deg)"};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.Secondary};
  }
`;

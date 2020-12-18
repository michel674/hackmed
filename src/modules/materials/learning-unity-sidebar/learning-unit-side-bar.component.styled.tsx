import styled from "styled-components";
import { Spacing, FontSize, Transition } from "../../../components/constants";
import { LinkStyled } from "../../../components/link.component.style";
import { H3 } from "../../../components/typography.style";

interface SideBarProps {
  sideBarClosed: boolean;
}

export const sideBarWidth = "300px";

export const MaterialSideBarStyled = styled.nav<SideBarProps>`
  position: fixed;
  display: inline-block;
  z-index: 1;
  overflow-y: scroll;
  height: 100vh;
  width: ${sideBarWidth};
  border-right: 2px solid ${(props) => props.theme.colors.LayoutSecondary};
  background-color: ${(props) => props.theme.colors.LayoutSecondary};
  transition: all 500ms ease-out;
  transform: ${(props) =>
    props.sideBarClosed ? "translateX(-100%)" : "translateX(0)"};
`;

export const UlSideBarStyled = styled.ul`
  padding-left: 0;
  margin: 0;
`;
export const LiSideBarStyled = styled.li`
  padding: ${Spacing.Medium} ${Spacing.Small};
  margin: 0;
`;

interface SideBarIconProps {
  sideBarClosed: boolean;
}

export const SideBarIconStyled = styled.div<SideBarIconProps>`
  padding: ${Spacing.Medium};
  color: ${(props) => props.theme.colors.LowContrast};
  font-size: ${FontSize.Medium};
  transition: color ${Transition.Fast};

  transform: ${(props) =>
    props.sideBarClosed ? "rotateZ(180deg)" : "rotateZ(0deg)"};

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.Secondary};
  }
`;

export const LearningUnitSideBarTitle = styled(H3)`
  margin-left: ${Spacing.Small};
  font-size: ${FontSize.Small};
  color: ${(props) => props.theme.colors.HighContrast};
`;

export const LearningUnitSideBarLinkBackStyled = styled(LinkStyled)`
  font-size: ${FontSize.Small};
  display: inline-block;
  padding: ${Spacing.Small};
  background-color: ${(props) => props.theme.colors.LayoutSecondary};
  color: ${(props) => props.theme.colors.HighContrast};
  &:hover {
    color: ${(props) => props.theme.colors.Primary};
  }
`;

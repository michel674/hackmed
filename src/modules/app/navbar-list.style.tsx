import styled from "styled-components";
import {
  Spacing,
  Breakpoint,
  FontFamily,
  FontSize,
  FontWeight,
  Transition,
} from "../../components/constants";

export const UlStyled = styled.ul`
  width: 100%;
  padding: 0 ${Spacing.XSmall};
  list-style: none;
  margin: 0;
  @media (max-width: ${Breakpoint.Tablet}) {
    width: 100%;
  }
`;
export const LiStyled = styled.li`
  @media (max-width: ${Breakpoint.Tablet}) {
    width: 100%;
  }
`;

interface NavProps {
  menuOpen: boolean;
}

export const NavStyled = styled.nav<NavProps>`
  display: flex;
  flex-flow: column;
  z-index: 15;
  width: ${(props) => (props.menuOpen ? "30%" : "10%")};
  height: 100vh;
  left: 0;
  position: fixed;
  border-right: 2px solid ${(props) => props.theme.colors.LayoutSecondary};
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  transition: all 0.5s ease;
  padding-top: ${Spacing.Medium};
  overflow: hidden;
  @media (max-width: ${Breakpoint.Mobile}) {
    display: ${(props) => (props.menuOpen ? "flex" : "none")};
  }
`;

export const NavPageTitleDescriptionStyled = styled.h4`
  width: 100%;
  padding: ${Spacing.Small};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Medium};
  color: ${(props) => props.theme.colors.LowContrast};
  transition: color ${Transition.Fast};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.Primary};
  }
`;

export const SidePageTitleStyled = styled.h4`
  width: 100%;
  padding: ${Spacing.Small};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Medium};
  color: ${(props) => props.theme.colors.LowContrast};
  transition: color ${Transition.Fast};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.Primary};
  }
`;

export const NavStyledUpperSide = styled.div``;

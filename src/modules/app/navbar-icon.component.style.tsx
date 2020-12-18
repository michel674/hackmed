import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {
  Breakpoint,
  FontSize,
  Spacing,
  Transition,
} from "../../components/constants";

export const IconWrapperStyled = styled.div`
  font-size: ${FontSize.Small};
  transition: color ${Transition.Fast};
  display: inline-block;
`;

interface LogoWrapperProps {
  menuOpen: boolean;
}
export const UppersideWrapperStyled = styled.div<LogoWrapperProps>`
  text-align: center;
  width: 100%;
  ${(props) =>
    props.menuOpen
      ? `
    @media (max-width: ${Breakpoint.Tablet}){
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
  `
      : ""};
`;

export const LogoWrapperStyled = styled.div`
  width: 100%;
  padding: ${Spacing.Small};
  @media (max-width: ${Breakpoint.Tablet}) {
    text-align: left;
  }
`;

interface CloseIconWrapperStyledProps {
  menuOpen: boolean;
}

export const CloseIconWrapperStyled = styled.div<CloseIconWrapperStyledProps>`
  color: ${(props) => props.theme.colors.LowContrast};
  margin: ${Spacing.Small};
  padding-right: ${Spacing.Small};
  font-size: ${FontSize.Small};
  transition: color 0.3s;
  display: ${(props) => (props.menuOpen ? "inline-block" : "none")};
  justify-content: center;
  text-align: center;
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.Primary};
  }

  @media (min-width: ${Breakpoint.Tablet}) {
  }
`;

interface NavLinkStyledProps {
  width?: string;
}

export const NavLinkStyled = styled(NavLink)<NavLinkStyledProps>`
  text-decoration: none;
  width: ${(props) => (props.width ? props.width : "100%")};
  color: ${(props) => props.theme.colors.LowContrast};
  transition: color ${Transition.Fast};
  &.active {
    color: ${(props) => props.theme.colors.Primary};
  }
  &:hover {
    color: ${(props) => props.theme.colors.Primary};
  }
  &:focus,
  &:visited,
  &:link {
    text-decoration: none;
  }
`;

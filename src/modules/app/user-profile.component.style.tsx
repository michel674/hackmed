import styled from "styled-components";
import {
  FontFamily,
  FontSize,
  Spacing,
  Radius,
  FontWeight,
  Transition,
} from "../../components/constants";

export const UserIconStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  padding: ${Spacing.Small} ${Spacing.XSmall};
  background-color: ${(props) => props.theme.colors.Primary};
  color: ${(props) => props.theme.colors.Text};
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  border: 4px solid ${(props) => props.theme.colors.LayoutSecondary};
  border-radius: ${Radius.Small};
  &:hover {
    cursor: pointer;
  }
`;

export const UserProfileStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  padding-right: ${Spacing.XLarge};
`;

interface UserMenuProps {
  show?: boolean;
}

export const UserMenuStyled = styled.div<UserMenuProps>`
  position: absolute;
  display: ${(props) => (props.show ? "flex" : "none")};
  align-items: center;
  top: 100%;
  width: 100%;
  height: 100%;
  padding-left: ${Spacing.Small};
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  border-radius: 0 0 ${Radius.Small} ${Radius.Small};
  transition: color ${Transition.Fast};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.LayoutTertiary};
    color: ${(props) => props.theme.colors.Primary};
  }
`;

export const UserNameStyled = styled.div`
  border: 1;
  margin: 0;
  position: relative;
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.XSmall};
  font-weight: ${FontWeight.Medium};
  color: ${(props) => props.theme.colors.HighContrast};
  transition: color ${Transition.Fast};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.Primary};
  }
`;

export const LogoutMenuWrapper = styled.div`
  color: ${(props) => props.theme.colors.HighContrast};
  position: relative;
`;

interface LogoutBoxProps {
  menuOpen: boolean;
}

export const LogoutBox = styled.div<LogoutBoxProps>`
  position: absolute;
  cursor: pointer;
  display: ${(props) => (props.menuOpen ? "inline-block" : "none")};
  background-color: ${(props) => props.theme.colors.LayoutTertiary};
  font-weight: bold;
  top: 24px;
  padding: ${Spacing.Small} ${Spacing.XLarge};
  border-radius: ${Radius.Small};
  transition: all 500ms;
`;

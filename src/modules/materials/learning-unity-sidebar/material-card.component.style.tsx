import styled from "styled-components";
import { Radius, Spacing, Transition } from "../../../components/constants";

interface MaterialCardWrapperProps {
  sideBarClosed?: boolean;
  active: boolean;
}

export const MaterialCardWrapperStyled = styled.div<MaterialCardWrapperProps>`
  border-bottom: 2px solid ${(props) => props.theme.colors.LayoutSecondary};
  display: ${(props) => (props.sideBarClosed ? "none" : "flex")};
  align-items: center;
  padding: ${Spacing.Medium} ${Spacing.Small};
  transition: background-color ${Transition.Fast};
  background-color: ${(props) =>
    props.active
      ? props.theme.colors.Primary
      : props.theme.colors.LayoutSecondary};
  color: ${(props) => props.theme.colors.HighContrast};
  &:hover {
    background-color: ${(props) => props.theme.colors.Primary}33;
    cursor: pointer;
  }
`;

interface MaterialImageBoxProps {
  imageUrl?: string;
}

export const MaterialImageBoxStyled = styled.div<MaterialImageBoxProps>`
  padding: ${Spacing.XLarge};
  position: relative;
  background: ${(props) => props.theme.colors.LightGray}
    url(${(props) => props.imageUrl}) center center no-repeat;
  background-size: cover;
  border-radius: ${Radius.Large};
`;

interface MaterialIconProps {
  type?: "primary" | "secondary" | "tertiary" | "gray";
}

const getType = {
  primary: (props) => props.theme.colors.Primary,
  secondary: (props) => props.theme.colors.Secondary,
  tertiary: (props) => props.theme.colors.Tertiary,
  gray: (props) => props.theme.colors.LightGray,
};

export const MaterialIconStyled = styled.div<MaterialIconProps>`
  color: ${(props) => (props.type ? getType[props.type] : getType.gray)};
  padding: 0 ${Spacing.XSmall};
`;

export const CardInformationWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const CheckmarkBoxStyled = styled.div`
  border: 2px solid ${(props) => props.theme.colors.HighContrast};
  height: ${Spacing.Medium};
  width: ${Spacing.Medium};
`;

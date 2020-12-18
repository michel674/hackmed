import styled from "styled-components";
import { Spacing, Transition } from "./constants";

export const UlStyled = styled.ul`
  list-style: none;
  padding: 0;
`;

interface LiStyledProps {
  active?: boolean;
}

export const LiStyled = styled.li<LiStyledProps>`
  margin: ${Spacing.Small};
  display: inline;
  transition: color ${Transition.Fast};
  color: ${(props) =>
    props.active
      ? props.theme.colors.Secondary
      : props.theme.colors.HighContrast};
  border-bottom: 1px solid
    ${(props) =>
      props.active
        ? props.theme.colors.Secondary
        : props.theme.colors.LayoutPrimary};
  &:hover {
    cursor: pointer;
  }
`;

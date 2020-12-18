import { Link } from "react-router-dom";
import styled from "styled-components";
import { BrandColor, Transition } from "./constants";

interface LoginProps {
  ignoresTheme?: boolean;
}

export const LinkStyled = styled(Link)<LoginProps>`
  text-decoration: none;
  width: 100%;
  color: ${(props) =>
    props.ignoresTheme ? BrandColor.Black : props.theme.colors.HighContrast};
  transition: color ${Transition.Fast};
  &:hover {
    color: ${(props) => props.theme.colors.Primary};
  }
`;

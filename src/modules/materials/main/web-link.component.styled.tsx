import styled from "styled-components";
import { BrandColor, Transition } from "../../../components/constants";

export const WebLinkStyled = styled.a`
  color: ${(props) => props.theme.colors.HighContrast};
  text-decoration: none;
  transition: color ${Transition.Fast};
  &:hover {
    color: ${BrandColor.Primary};
  }
`;

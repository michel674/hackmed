import styled from "styled-components";
import { Transition } from "./constants";

export const PagesWrapperStyled = styled.div`
  width: 100%;
  background-color: ${(props) => props.theme.colors.LayoutTertiary};
  transition: background-color ${Transition.Fast};
`;

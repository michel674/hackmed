import styled from "styled-components";
import { Breakpoint } from "../../components/constants";

interface AppWrapperStyledProps {
  logged: boolean;
}

export const AppWrapperStyled = styled.div<AppWrapperStyledProps>`
  display: flex;
  width: 100vw;
  height: 100vh;
  position: relative;
  padding-left: ${(props) => (props.logged ? "10%" : 0)};
  @media (max-width: ${Breakpoint.Tablet}) {
    padding-left: 0;
  }
`;

interface InnerAppWrapperProps {
  menuOpen?: boolean;
}
export const InnerAppWrapper = styled.div<InnerAppWrapperProps>`
  width: 100%;
  height: fit-content;
  position: relative;
  border-left: ${(props) => props.theme.colors.LayoutSecondary} 1px solid;
`;

import styled from "styled-components";
import { FontSize } from "./constants";

export const LockWrapperStyled = styled.span`
  font-size: ${FontSize.Medium};
  color: ${(props) => props.theme.colors.HighContrast};
`;

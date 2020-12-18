import styled from "styled-components";
import { Radius, Spacing } from "./constants";

export const InputStyled = styled.input`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid ${(props) => props.theme.colors.LowContrast};
  border-radius: ${Radius.Small};
  padding: ${Spacing.Small};
  outline: none;
`;

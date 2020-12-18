import styled from "styled-components";
import { FontFamily } from "../../components/constants";

export const TextLoginStyled = styled.div`
  font-family: ${FontFamily.Primary};
  color: ${(props) => props.theme.colors.LowContrast};
`;

import styled from "styled-components";
import { FontSize } from "../../../components/constants";

export const MasterClassIconWrapperStyled = styled.span`
  font-size: ${FontSize.Large};
  color: ${(props) => props.theme.colors.LowContrast};
`;

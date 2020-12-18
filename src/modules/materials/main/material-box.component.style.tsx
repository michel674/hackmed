import styled from "styled-components";
import { Radius, Spacing } from "../../../components/constants";

export const MaterialBoxStyled = styled.div`
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  border-radius: ${Radius.Large};
  padding: ${Spacing.Large};
`;

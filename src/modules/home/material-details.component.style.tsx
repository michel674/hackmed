import styled from "styled-components";
import { Radius, Spacing } from "../../components/constants";

export const MaterialDetailsStyled = styled.div`
  background-color: ${(props) => props.theme.colors.LayoutTertiary};
  display: flex;
  flex-direction: column;
  padding: ${Spacing.Medium};
  border-radius: ${Radius.Large};
  border: 2px solid ${(props) => props.theme.colors.LayoutTertiary};
`;

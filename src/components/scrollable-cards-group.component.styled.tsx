import styled from "styled-components";
import { Spacing } from "./constants";

export const ScrollableCardsGroupStyled = styled.div`
  width: 100%;
  display: flex;
  padding: ${Spacing.XLarge} 0 ${Spacing.Medium} 0;
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  border-bottom: ${(props) => props.theme.colors.LayoutPrimary};
`;

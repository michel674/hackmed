import styled from "styled-components";
import { Radius, Spacing } from "../../../components/constants";

export const MaterialDetailsWrapperStyled = styled.div`
  width: 100%;
  min-height: 300px;
  padding: ${Spacing.Medium};
  border-radius: 0 0 ${Radius.Large} ${Radius.Large};
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
`;

export const MaterialSubtitleItemsWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

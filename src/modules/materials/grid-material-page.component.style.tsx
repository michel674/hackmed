import styled from "styled-components";
import { Breakpoint, Radius, Spacing } from "../../components/constants";

interface RelatedMaterialColumnStyledProps {
  hide?: boolean;
}
export const RelatedMaterialColumnStyled = styled.div<
  RelatedMaterialColumnStyledProps
>`
  display: ${(props) => (props.hide ? "none" : "initial")};
  width: 400px;
  min-height: 100vh;
  padding: ${Spacing.Large};
  border-radius: 0 0 0 ${Radius.Large};
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  @media (max-width: ${Breakpoint.Desktop}) {
    width: 80%;
    padding: ${Spacing.Large};
  }
`;

export const MaterialMainColumnStyled = styled.div`
  width: 100%;
  padding: ${Spacing.Large};
`;

export const MaterialRowStyled = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  @media (max-width: ${Breakpoint.LargeDesktop}) {
    flex-direction: column;
    align-items: center;
  }
`;

import styled from "styled-components";
import { H3 } from "../../components/typography.style";

export const LearningUnitCardTitleStyled = styled(H3)`
  color: ${(props) => props.theme.colors.Text};
  &:hover {
    color: ${(props) => props.theme.colors.Primary};
  }
`;

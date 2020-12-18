import styled from "styled-components";
import { Spacing } from "../../../components/constants";

export const QuizResultCardStyled = styled.div`
  padding: ${Spacing.Medium};
  color: ${(props) => props.theme.colors.HighContrast};
`;

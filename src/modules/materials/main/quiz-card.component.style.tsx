import styled from "styled-components";
import { Spacing, Transition } from "../../../components/constants";

export const QuizQuestionStyled = styled.div`
  display: flex;
  align-items: center;
  padding: ${Spacing.Medium};
`;

export const AlternativeWrapperStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid ${(props) => props.theme.colors.LayoutSecondary};
`;

interface LabelProps {
  showResult?: boolean;
  correctAnswer?: boolean;
}

export const LabelStyled = styled.label<LabelProps>`
  padding: ${Spacing.Medium};
  border: 2px solid ${(props) => props.theme.colors.LayoutSecondary};
  background-color: ${(props) =>
    (props.showResult &&
      (props.correctAnswer
        ? props.theme.colors.Success
        : props.theme.colors.Alert)) ||
    props.theme.LightGray};
  transition: background-color ${Transition.Fast};
  &:hover {
    cursor: pointer;
    background-color: ${(props) =>
      props.showResult ? "" : props.theme.colors.Primary};
  }
`;
export const OptionStyled = styled.input`
  margin-right: ${Spacing.Large};
`;

export const QuizCardStyled = styled.div`
  padding: ${Spacing.Small};
  color: ${(props) => props.theme.colors.HighContrast};
`;

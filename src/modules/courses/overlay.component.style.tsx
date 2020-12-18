import styled from "styled-components";

interface LearningUnitOverlayStyledProps {
  completed?: boolean;
}

export const LearningUnitOverlayStyled = styled.div<
  LearningUnitOverlayStyledProps
>`
  width: 100%;
  position: relative;
  border-radius: inherit;
  background-color: ${(props) =>
    props.completed ? props.theme.colors.Secondary : "inital"};
`;

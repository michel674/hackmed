import React from "react";
import { FrameStyled } from "../../../components/frame.component.style";
import { H2 } from "../../../components/typography.style";
import { QuizResultCardStyled } from "./quiz-result.component.style";

interface QuizResultProps {
  numberOfCorrectAnswers: number;
  numberOfQuestions: number;
}

export const QuizResult: React.FC<QuizResultProps> = ({
  numberOfCorrectAnswers,
  numberOfQuestions,
}) => {
  return (
    <FrameStyled type="neutral">
      <QuizResultCardStyled>
        <H2>
          {" "}
          Nota: {Math.ceil((numberOfCorrectAnswers / numberOfQuestions) * 10)}
        </H2>
        <H2>
          {" "}
          Você acertou {numberOfCorrectAnswers} de {numberOfQuestions} questões
        </H2>
      </QuizResultCardStyled>
    </FrameStyled>
  );
};

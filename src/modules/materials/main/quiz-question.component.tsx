import React from "react";
import { FrameStyled } from "../../../components/frame.component.style";
import { Separator } from "../../../components/separator.style";
import { H2 } from "../../../components/typography.style";
import {
  AlternativeWrapperStyled,
  LabelStyled,
  OptionStyled,
  QuizQuestionStyled,
} from "./quiz-card.component.style";

interface QuizQuestionProps {
  id: number;
  answers?: { text: string; value: boolean }[];
  text?: string;
  onSubmitAnswer: (answerId, event) => void;
  showResult?: boolean;
}

export const QuizQuestion: React.FC<QuizQuestionProps> = ({
  answers,
  text,
  id,
  onSubmitAnswer,
  showResult,
}) => {
  const handleStudentQuestionAnswer = (answerId: string) => (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    onSubmitAnswer(answerId, event.target.value);
  };

  return (
    <FrameStyled type="neutral">
      <QuizQuestionStyled>
        <H2>
          {id + 1}. {text}
        </H2>
      </QuizQuestionStyled>
      <AlternativeWrapperStyled>
        {answers?.map((item, index) => {
          return (
            <LabelStyled
              key={item.text}
              htmlFor={id + String(index)}
              showResult={showResult}
              correctAnswer={item.value}
            >
              <OptionStyled
                value={String(item.value)}
                name={String(id)}
                type="radio"
                onChange={handleStudentQuestionAnswer(String(id))}
                id={String(id) + String(index)}
                disabled={showResult}
              ></OptionStyled>
              {item.text}
            </LabelStyled>
          );
        })}
      </AlternativeWrapperStyled>
    </FrameStyled>
  );
};

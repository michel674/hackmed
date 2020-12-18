import React, { useRef, useState } from "react";
import { Button } from "../../../components/button.component";
import { FormStyled } from "../../../components/form.component.style";
import { FrameStyled } from "../../../components/frame.component.style";
import { Hbox } from "../../../components/hbox-component.style";
import { Separator } from "../../../components/separator.style";
import { useGetParamsAndStudentId } from "../../../hooks/use-get-params-and-student-id";
import { QuizButtonWrapperStyled } from "./quiz-button.component.style";
import { QuizCardStyled } from "./quiz-card.component.style";
import { QuizQuestion } from "./quiz-question.component";
import { QuizResult } from "./quiz-result.component";
import { SingleQuestionType } from "./quiz.container";

interface QuizProps {
  quiz: SingleQuestionType[];
  onFinish: (config) => void;
}

export const Quiz: React.FC<QuizProps> = ({ quiz, onFinish }) => {
  const { idFromParams: material_id, id } = useGetParamsAndStudentId();

  const quizAnswers = useRef({});
  const [numberOfRightAnswers, setNumberOfRightAnswers] = useState<number>(0);
  const [showResult, setShowResult] = useState<boolean>(false);

  const handleSubmitQuizForm = (event: React.SyntheticEvent) => {
    event.preventDefault();

    const rightAnswers = Object.values(quizAnswers.current).filter(
      (answers) => {
        return answers === "true";
      }
    );
    setNumberOfRightAnswers(rightAnswers.length);
    setShowResult(true);

    const config = {
      variables: {
        material_id,
        student_id: id,
        quiz_score: ((rightAnswers.length / quiz.length) * 10).toFixed(3),
      },
    };

    onFinish(config);
  };
  const handleSumStudentScore = (answerId: string, answer: string) => {
    quizAnswers.current[answerId] = answer;
  };

  return (
    <>
      <FrameStyled type="neutral">
        <FormStyled onSubmit={(event) => handleSubmitQuizForm(event)}>
          <QuizCardStyled>
            {quiz?.map((item, index) => {
              return (
                <>
                  <QuizQuestion
                    key={item.id}
                    text={item.text}
                    answers={item.answers}
                    id={index}
                    onSubmitAnswer={handleSumStudentScore}
                    showResult={false}
                  />
                </>
              );
            })}
          </QuizCardStyled>
          <Hbox>
            <Hbox.Item hAlign="flex-end">
              <QuizButtonWrapperStyled>
                <Button submit={true} disabled={showResult}>
                  Enviar
                </Button>
              </QuizButtonWrapperStyled>
            </Hbox.Item>
          </Hbox>
        </FormStyled>
      </FrameStyled>
      <Separator type="section" />
      {showResult ? (
        <QuizResult
          numberOfCorrectAnswers={numberOfRightAnswers}
          numberOfQuestions={quiz.length}
        />
      ) : null}
    </>
  );
};

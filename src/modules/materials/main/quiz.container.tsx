import React from "react";
import { useMutation } from "relay-hooks";
import { LoadingState } from "../../../components/loading-state/loading-state.component";
import { Shimmer } from "../../../components/shimmer-effect.component";
import { useQueryHook } from "../../../relay";
import { quizQuery } from "./__generated__/quizQuery.graphql";
import { Quiz } from "./quiz.component";
import { quiz } from "./quiz.query";
import { updateMaterialHistory } from "./update-quiz-history.query";

export interface Content {
  quiz: SingleQuestionType[];
}

export interface SingleQuestionType {
  answers: { text: string; value: boolean }[];
  id: number;
  text: string;
}

export const QuizContainer: React.FC = () => {
  const { data, err, loading, retry } = useQueryHook<quizQuery>(quiz);

  const [updateDataBaseWithQuizResult] = useMutation(updateMaterialHistory);

  const rawData = data?.material[0]?.content as Content;
  const dataAsQuestionArray = rawData?.quiz;
  const shimmer = <Shimmer />;
  return (
    <LoadingState
      data={data}
      error={err}
      loading={loading}
      retry={retry}
      shimmer={shimmer}
    >
      <Quiz
        quiz={dataAsQuestionArray}
        onFinish={updateDataBaseWithQuizResult}
      />
    </LoadingState>
  );
};

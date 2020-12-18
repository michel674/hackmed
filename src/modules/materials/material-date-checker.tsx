import React from "react";
import { useParams } from "react-router-dom";
import { Placeholder } from "../../components/error/error-placeholder.component";
import { LoadingState } from "../../components/loading-state/loading-state.component";
import { Shimmer } from "../../components/shimmer-effect.component";
import { useQueryHook } from "../../relay";
import { dateCheckerQuery } from "./__generated__/dateCheckerQuery.graphql";
import { dateChecker } from "./date-checker.query";

export const MaterialDateChecker: React.FC = ({ children }) => {
  const params = useParams();
  const material_id = Number(Object.values(params)[0]);
  const queryVariables = {
    material_id,
  };
  const { data, err, retry, loading } = useQueryHook<dateCheckerQuery>(
    dateChecker,
    queryVariables
  );

  const learningUnitDate = data?.learning_unit[0].learning_unity_releases[0]
    .learning_unit_liberation_date as string;

  const today = new Date();

  const releaseDate = Date.parse(learningUnitDate);

  const formattedDate = (date: string) => {
    const convertedDate = new Date(date);
    const day = convertedDate.getUTCDate();
    const month = convertedDate.getMonth();
    const year = convertedDate.getFullYear();
    return `${day}-${month}-${year}`;
  };

  const checkDate = () => {
    const todayInTimestamps = today.getTime();
    return todayInTimestamps >= releaseDate;
  };

  return (
    <LoadingState
      data={data}
      error={err}
      retry={retry}
      loading={loading}
      shimmer={<Shimmer />}
    >
      {checkDate() ? (
        <>{children}</>
      ) : (
        <Placeholder type="restricted" date={formattedDate(learningUnitDate)} />
      )}
    </LoadingState>
  );
};

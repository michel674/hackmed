/* eslint-disable react-hooks/exhaustive-deps */
import React, { useCallback } from "react";
import { useMutation } from "relay-hooks";
import { useGetParamsAndStudentId } from "../../hooks/use-get-params-and-student-id";
import { useQueryHook } from "../../relay";
import { addNewHistoryMutation } from "./__generated__/addNewHistoryMutation.graphql";
import { checkForHistoryQuery } from "./__generated__/checkForHistoryQuery.graphql";
import { addNewHistory } from "./add-new-history";
import { checkForHistory } from "./check-for-history";

export const MaterialContainer: React.FC = () => {
  const { id, idFromParams: material_id } = useGetParamsAndStudentId();

  const queryVariables = {
    material_id,
    student_id: id,
  };

  const { data } = useQueryHook<checkForHistoryQuery>(
    checkForHistory,
    queryVariables
  );

  const [addView] = useMutation<addNewHistoryMutation>(addNewHistory);

  const config = {
    variables: {
      material_id: queryVariables.material_id,
      student_id: queryVariables.student_id,
    },
  };

  const updateStudentMaterialHistoryOnCondition = useCallback(() => {
    if (data) {
      return data?.student_material_history.length > 0
        ? false
        : addView(config);
    }
  }, [data]);

  React.useEffect(() => {
    updateStudentMaterialHistoryOnCondition();
  }, [data]);

  return <></>;
};

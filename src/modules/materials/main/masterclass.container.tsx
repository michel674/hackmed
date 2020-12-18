import React from "react";
import { LoadingState } from "../../../components/loading-state/loading-state.component";
import { Shimmer } from "../../../components/shimmer-effect.component";
import { useGetParamsAndStudentId } from "../../../hooks/use-get-params-and-student-id";
import { useQueryHook } from "../../../relay";
import { masterclassQuery } from "./__generated__/masterclassQuery.graphql";
import { MasterClass } from "./masterclass.component";
import { masterclass } from "./masterclass.query";

export const MasterclassContainer: React.FC = () => {
  const { idFromParams: material_id } = useGetParamsAndStudentId();

  const queryVariables = {
    material_id,
  };

  const [test, setTest] = React.useState<Content>({} as Content);

  const { data, err, loading, retry } = useQueryHook<masterclassQuery>(
    masterclass,
    queryVariables
  );

  interface Content {
    masterclass: string;
  }

  React.useEffect(() => {
    data && setTest(data.material[0].content as Content);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  return (
    <LoadingState
      data={data}
      error={err}
      loading={loading}
      retry={retry}
      shimmer={<Shimmer />}
    >
      <MasterClass url={test.masterclass} />
    </LoadingState>
  );
};

import React from "react";
import { LoadingState } from "../../../components/loading-state/loading-state.component";
import { Shimmer } from "../../../components/shimmer-effect.component";
import { useGetParamsAndStudentId } from "../../../hooks/use-get-params-and-student-id";
import { useQueryHook } from "../../../relay";
import { videoDetailsQuery } from "./__generated__/videoDetailsQuery.graphql";
import { MaterialDetails } from "./details.component";
import { videoDetails } from "./video-details";

export const VideoDetailsContainer: React.FC = () => {
  const { idFromParams: material_id } = useGetParamsAndStudentId();
  const queryVariables = {
    material_id,
  };
  const { data, err, loading, retry } = useQueryHook<videoDetailsQuery>(
    videoDetails,
    queryVariables
  );

  const shimmer = <Shimmer />;

  return (
    <LoadingState
      data={data}
      error={err}
      loading={loading}
      shimmer={shimmer}
      retry={retry}
    >
      {data?.material.map((material) => (
        <MaterialDetails
          key={material._id}
          title={String(material.title)}
          description={String(material.description)}
          duration={Number(material.duration)}
          extra={String(material.extra)}
          views={Number(material.views)}
          order={Number(material.order)}
          tags={material.tags.map((tag) => String(tag.tag.name))}
        />
      ))}
    </LoadingState>
  );
};

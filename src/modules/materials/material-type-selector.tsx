import React from "react";
import { LoadingState } from "../../components/loading-state/loading-state.component";
import { Shimmer } from "../../components/shimmer-effect.component";
import { useGetParamsAndStudentId } from "../../hooks/use-get-params-and-student-id";
import { useQueryHook } from "../../relay";
import { checkForMaterialTypeQuery } from "./__generated__/checkForMaterialTypeQuery.graphql";
import { checkForMaterialType } from "./check-for-material-type";
import { ArticleContainer } from "./main/article.container";
import { ImageContainer } from "./main/image.container";
import { MasterclassContainer } from "./main/masterclass.container";
import { QuizContainer } from "./main/quiz.container";
import { VideoFrame } from "./main/video-frame.component";

export const MaterialTypeSelector: React.FC = () => {
  const { idFromParams: material_id } = useGetParamsAndStudentId();
  const queryVariables = {
    material_id,
  };
  const { data, err, loading, retry } = useQueryHook<checkForMaterialTypeQuery>(
    checkForMaterialType,
    queryVariables
  );

  const shimmer = <Shimmer />;

  const selector = {
    Video: <VideoFrame />,
    Artigo: <ArticleContainer />,
    Quiz: <QuizContainer />,
    Infográfico: <ImageContainer />,
    Masterclass: <MasterclassContainer />,
  };

  const materialType = data?.material_type[0].description as string;
  return (
    <LoadingState
      data={data}
      error={err}
      loading={loading}
      retry={retry}
      shimmer={shimmer}
    >
      <>{selector[materialType]}</>
    </LoadingState>
  );
};

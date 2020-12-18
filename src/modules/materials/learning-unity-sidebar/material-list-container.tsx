import React, { Dispatch } from "react";
import { LoadingState } from "../../../components/loading-state/loading-state.component";
import { Shimmer } from "../../../components/shimmer-effect.component";
import { useGetParamsAndStudentId } from "../../../hooks/use-get-params-and-student-id";
import { useQueryHook } from "../../../relay";
import { materialListQuery } from "./__generated__/materialListQuery.graphql";
import { LearningUnitCard } from "./learning-unit-card.component";
import { learningUnitList } from "./material-list.query";

interface LearningUnitListContainerProps {
  sideBarClosed: boolean;
  setTitle: Dispatch<React.SetStateAction<string>>;
  setModule: Dispatch<React.SetStateAction<number | null>>;
}

export const LearningUnitListContainer: React.FC<LearningUnitListContainerProps> = ({
  sideBarClosed,
  setTitle,
  setModule,
}) => {
  const {
    idFromParams: material_id,
    id: student_id,
  } = useGetParamsAndStudentId();

  const { data, err, loading, retry } = useQueryHook<materialListQuery>(
    learningUnitList,
    {
      material_id,
      student_id,
    },
    {
      fetchPolicy: "network-only",
    }
  );

  React.useEffect(() => {
    if (data) {
      setTitle(data?.learning_unit[0].name);
      setModule(data?.learning_unit[0].module_id || 0);
    }
  }, [data, setTitle, setModule]);

  return (
    <LoadingState
      error={err}
      data={data}
      retry={retry}
      loading={loading}
      shimmer={<Shimmer />}
    >
      <>
        {data?.learning_unit.flatMap((learningUnit) =>
          learningUnit.materials.flatMap((material) => (
            <LearningUnitCard
              sideBarClosed={sideBarClosed}
              imageUrl={String(material.thumbnail)}
              materialTitle={String(material.title)}
              materialSequence={Number(material.order)}
              numberOfFavorites={material.student_material_favorites.length}
              numberOfMaterials={Number(learningUnit.materials.length)}
              materialId={Number(material._id)}
              favorite={true}
              checked={
                material.student_material_histories.map((student) =>
                  student.progress > 90 ? true : false
                )[0]
              }
              materialType={String(material.materialByType?.description)}
              active={material._id === material_id}
            />
          ))
        )}
      </>
    </LoadingState>
  );
};

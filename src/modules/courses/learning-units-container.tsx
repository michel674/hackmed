import React from "react";
import { useAuthContext } from "../../app/auth-provider/auth.provider";
import { Row, Col } from "../../components/grid.component";
import { LoadingState } from "../../components/loading-state/loading-state.component";
import { ContentListShimmer } from "../../components/shimmers.component";
import { useGetParamsAndStudentId } from "../../hooks/use-get-params-and-student-id";
import { useQueryHook } from "../../relay";
import { learningUnitByCoursesQuery } from "./__generated__/learningUnitByCoursesQuery.graphql";
import { learningUnitByCourses } from "./learning-unit-by-courses.query";
import { LearningUnitCard } from "./learning-unit-card.component";

export const LearningUnitsContainer: React.FC = () => {
  const {
    id: student_id,
    idFromParams: module_id,
  } = useGetParamsAndStudentId();
  const { getUserIdAndInfoFromStorage } = useAuthContext();
  const { userClass: class_id } = getUserIdAndInfoFromStorage();

  const { data, err, retry, loading } = useQueryHook<
    learningUnitByCoursesQuery
  >(
    learningUnitByCourses,
    { student_id, module_id, class_id },
    { fetchPolicy: "network-only" }
  );

  const checkDate = (unformattedDate: string): boolean => {
    const releaseDate = Date.parse(unformattedDate);
    const today = new Date();
    const todayInTimestamps = today.getTime();
    return todayInTimestamps >= releaseDate;
  };

  return (
    <LoadingState
      data={data}
      error={err}
      loading={loading}
      retry={retry}
      shimmer={<ContentListShimmer />}
    >
      <Row>
        {data?.learning_unit.map((learningUnit) => (
          <Col key={learningUnit._id} desktop={3} tablet={4} mobile={6}>
            <LearningUnitCard
              id={learningUnit._id}
              title={learningUnit.name}
              imageUrl={String(learningUnit.image)}
              materialsQuantity={Number(learningUnit.materials.length)}
              completedMaterials={
                learningUnit.materials
                  .flatMap((material) =>
                    material.student_material_histories.filter(
                      (history) => history.progress === 100
                    )
                  )
                  .flatMap((completed) => completed).length as number
              }
              masterclassId={Number(
                learningUnit.materials.find((item) => item.order === 1)?._id
              )}
              locked={checkDate(
                learningUnit.learning_unity_releases[0]
                  .learning_unit_liberation_date as string
              )}
            />
          </Col>
        ))}
      </Row>
    </LoadingState>
  );
};

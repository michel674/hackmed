import React from "react";
import { useAuthContext } from "../../app/auth-provider/auth.provider";
import { BrandColor } from "../../components/constants";
import { FaIcon } from "../../components/fontawesome";
import { Col } from "../../components/grid.component";
import { LinkStyled } from "../../components/link.component.style";
import { LoadingState } from "../../components/loading-state/loading-state.component";
import { CourseCardWrapperStyled } from "../../components/primary-card.component.style";
import { Shimmer } from "../../components/shimmer-effect.component";
import { useGetParamsAndStudentId } from "../../hooks/use-get-params-and-student-id";
import { useQueryHook } from "../../relay";
import { coursesQuery } from "./__generated__/coursesQuery.graphql";
import { CircleStyled } from "./accordion.component.style";
import { LockWrapperStyled, TitleModuleStyled } from "./course.container.style";
import { courses } from "./courses.query";

interface CourseCardProps {
  unlocked?: boolean;
  name: string;
  progress: number;
  id: number;
}

const CourseCard: React.FC<CourseCardProps> = ({
  unlocked,
  name,
  progress,
  id,
}) => {
  const inner = (
    <CourseCardWrapperStyled>
      {unlocked ? (
        <CircleStyled
          percent={progress}
          strokeWidth={12}
          trailWidth={12}
          strokeColor={BrandColor.Primary}
        />
      ) : (
        <LockWrapperStyled>
          <FaIcon.Lock />
        </LockWrapperStyled>
      )}
      {name ? (
        <TitleModuleStyled progress={progress} unlocked={unlocked}>
          {name}
        </TitleModuleStyled>
      ) : (
        <Shimmer height="10px" />
      )}
    </CourseCardWrapperStyled>
  );
  if (unlocked) {
    return <LinkStyled to={`/module/${id}`}>{inner}</LinkStyled>;
  }
  return inner;
};

export const CoursesContainer: React.FC = () => {
  const {
    id: student_id,
    idFromParams: module_id,
  } = useGetParamsAndStudentId();
  const { getUserIdAndInfoFromStorage } = useAuthContext();
  const { userClass: class_id } = getUserIdAndInfoFromStorage();

  const [progress, setProgress] = React.useState<number>(0);

  const queryVariables = {
    student_id,
    class_id,
    module_id,
  };

  const { data, err, retry, loading } = useQueryHook<coursesQuery>(
    courses,
    queryVariables
  );

  const checkIfCourseIsUnlocked = (courseRelease) => {
    const courseDate = new Date(courseRelease as string).getTime();
    const today = new Date().getTime();
    return today - courseDate >= 0;
  };

  React.useEffect(() => {
    const materialsAmount = data?.modules.flatMap((module) =>
      module.learning_units.flatMap((learningUnit) =>
        learningUnit.materials.flatMap(
          (material) => material.student_material_histories.length as number
        )
      )
    );

    const completedMaterials = data?.modules.flatMap((module) =>
      module.learning_units.flatMap((learningUnit) =>
        learningUnit.materials.flatMap((material) =>
          material.student_material_histories.filter(
            (materialHistory) => materialHistory.progress === 100
          )
        )
      )
    );
    setProgress(
      Math.trunc(
        (Number(completedMaterials?.length) / Number(materialsAmount?.length)) *
          100
      )
    );
  }, [data]);

  return (
    <LoadingState
      data={data}
      error={err}
      retry={retry}
      loading={loading}
      shimmer={<Shimmer />}
    >
      {data?.modules.map((item) => (
        <Col desktop={12} key={item._id} horizontalAlign="stretch">
          <CourseCard
            unlocked={checkIfCourseIsUnlocked(
              item.module_releases[0].release_date
            )}
            name={item.name}
            progress={progress}
            id={item._id}
          />
        </Col>
      ))}
    </LoadingState>
  );
};

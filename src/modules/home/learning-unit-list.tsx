import React from "react";
import { useAuthContext } from "../../app/auth-provider/auth.provider";
import { Col, Row } from "../../components/grid.component";
import { LoadingState } from "../../components/loading-state/loading-state.component";
import { CategoriesId } from "../../models/integration-constants";
import { useQueryHook } from "../../relay";
import { learningUnitQuery } from "./__generated__/learningUnitQuery.graphql";
import { ContentCard } from "./content-card.component";
import { TitleModuleStyled } from "./learning-unit-list.style";
import { learningUnit } from "./learning-unit.query";
import { ContentListShimmer } from "./shimmers-card.component";

interface LearningUnitListContainerProps {
  category?: CategoriesId;
}

export const LearningUnitList: React.FC<LearningUnitListContainerProps> = ({
  category,
}): any => {
  const { getUserIdAndInfoFromStorage } = useAuthContext();
  const { userClass: class_id } = getUserIdAndInfoFromStorage();

  const { data, err, loading, retry } = useQueryHook<learningUnitQuery>(
    learningUnit,
    { class_id }
  );

  const checkIfLearningUnityIsUnlocked = (LearningRelease) => {
    const learningDate = new Date(LearningRelease as string).getTime();
    const today = new Date().getTime();
    return today - learningDate >= 0;
  };

  const [unlocked, setUnlocked] = React.useState({});

  React.useEffect(() => {
    const unlock = data?.learning_unity_release.reduce(
      (learningUnitUnlock, learningUnit) => (
        (learningUnitUnlock[
          learningUnit.learning_unit
        ] = checkIfLearningUnityIsUnlocked(
          learningUnit.learning_unit_liberation_date
        )),
        learningUnitUnlock
      ),
      {}
    );
    setUnlocked(Object(unlock));
  }, [data]);

  const categoryFilter = () => {
    const filteredLearningUnit = data?.learning_unit.filter(
      (item) => item.category === category
    );

    return filteredLearningUnit?.map((item) => (
      <Col
        key={item._id}
        desktop={4}
        tablet={6}
        mobile={12}
        horizontalAlign="center"
      >
        <ContentCard
          unlocked={unlocked[item._id]}
          id={item._id}
          title={String(item.name)}
          imageUrl={String(item.image)}
          materialsAmount={Number(item.materials.length)}
        />
      </Col>
    ));
  };

  const titleCategory =
    data?.category
      .map((categoryItem) => categoryItem._id === category && categoryItem.name)
      .filter((categoryName) => categoryName) || [];

  return (
    <LoadingState
      data={data}
      error={err}
      loading={loading}
      shimmer={<ContentListShimmer />}
      retry={retry}
    >
      <TitleModuleStyled>{titleCategory[0] || "Módulos"}</TitleModuleStyled>
      <Row>
        {category
          ? categoryFilter()
          : data?.learning_unit?.map((item) => (
              <Col
                key={item._id}
                desktop={3}
                tablet={4}
                mobile={6}
                horizontalAlign="center"
              >
                <ContentCard
                  unlocked={checkIfLearningUnityIsUnlocked(
                    data?.learning_unity_release[
                      data?.learning_unity_release.findIndex(
                        (learningUnitRelease) =>
                          learningUnitRelease.learning_unit === item._id
                      )
                    ].learning_unit_liberation_date
                  )}
                  id={item._id}
                  title={String(item.name)}
                  imageUrl={String(item.image)}
                  materialsAmount={Number(item.materials.length)}
                />
              </Col>
            ))}
      </Row>
    </LoadingState>
  );
};

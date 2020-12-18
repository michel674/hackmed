import React from "react";
import { QueryOptions } from "relay-hooks";
import { useAuthContext } from "../../app/auth-provider/auth.provider";
import { Col } from "../../components/grid.component";
import { LoadingState } from "../../components/loading-state/loading-state.component";
import { Shimmer } from "../../components/shimmer-effect.component";
import { useQueryHook } from "../../relay";
import { statisticsQuery } from "./__generated__/statisticsQuery.graphql";
import { CardStatistics } from "./statistics-card.component";
import { statistics } from "./statistics.query";

const queryOptions: QueryOptions = {
  fetchPolicy: "store-and-network",
};

export const StatisticsContainer: React.FC = () => {
  const { getUserIdAndInfoFromStorage } = useAuthContext();
  const { id } = getUserIdAndInfoFromStorage();
  const queryVariables = {
    student_id: id,
  };
  const { data, err, loading, retry } = useQueryHook<statisticsQuery>(
    statistics,
    queryVariables,
    queryOptions
  );

  const checkNumberOfMaterialsByTypeId = (materialType: number) => {
    const materials = data?.student_material_history.filter(
      (material) => material.material?.material_type === materialType
    );
    return Number(materials?.length) | 0;
  };

  const shimmer = <Shimmer />;

  return (
    <LoadingState
      data={data}
      error={err}
      loading={loading}
      shimmer={shimmer}
      retry={retry}
    >
      <Col desktop={3} tablet={4} mobile={6}>
        <CardStatistics
          title="Total"
          counter={data?.student_material_history.length}
          type="primary"
        />
      </Col>
      <Col desktop={3} tablet={4} mobile={6}>
        <CardStatistics
          title="Assistiu"
          counter={checkNumberOfMaterialsByTypeId(1)}
          type="secondary"
        />
      </Col>
      <Col desktop={3} tablet={4} mobile={6}>
        <CardStatistics
          title="Leu"
          counter={checkNumberOfMaterialsByTypeId(2)}
          type="primary"
        />
      </Col>
      <Col desktop={3} tablet={4} mobile={6}>
        <CardStatistics
          title="Ouviu"
          counter={checkNumberOfMaterialsByTypeId(3)}
          type="secondary"
        />
      </Col>
    </LoadingState>
  );
};

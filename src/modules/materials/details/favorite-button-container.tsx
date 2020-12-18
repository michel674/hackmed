import React from "react";
import { LoadingState } from "../../../components/loading-state/loading-state.component";
import { Shimmer } from "../../../components/shimmer-effect.component";
import { useQueryHook } from "../../../relay";
import { materialButtonsQuery } from "./__generated__/materialButtonsQuery.graphql";
import { favoritesNumberQuery } from "./material-buttons-query";

export const FavoriteButtonContainer: React.FC = () => {
  const { data, err, loading, retry } = useQueryHook<materialButtonsQuery>(
    favoritesNumberQuery
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
      <>{String(data?.student_material_favorite.length)}</>
    </LoadingState>
  );
};

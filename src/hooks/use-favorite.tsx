import React, { Dispatch } from "react";
import { useMutation } from "relay-hooks";
import { checkIfFavoriteQuery } from "../modules/materials/details/__generated__/checkIfFavoriteQuery.graphql";
import { favoriteLearningUnitMutation } from "../modules/materials/details/__generated__/favoriteLearningUnitMutation.graphql";
import { removeFavoriteLearningUnitMutation } from "../modules/materials/details/__generated__/removeFavoriteLearningUnitMutation.graphql";
import { checkIfFavorite } from "../modules/materials/details/check-if-favorite-query";
import { addFavoriteLearningUnit } from "../modules/materials/details/favorite-learning-unit";
import { RemoveFavoriteLearningUnit } from "../modules/materials/details/remove-favorite-learning-unit";
import { useQueryHook } from "../relay";

interface UseFavoriteReturnType {
  isFavorite: boolean;
  favoritesNumber: number;
  handleFavorite: () => void;
  loading: boolean;
}

export const useFavoriteHook = (
  queryVariables: { student_id: number; material_id: number },
  favoritesNumber: number,
  setFavoritesNumber: Dispatch<React.SetStateAction<number>>
): UseFavoriteReturnType => {
  const { data, loading } = useQueryHook<checkIfFavoriteQuery>(
    checkIfFavorite,
    queryVariables,
    { fetchPolicy: "network-only" }
  );

  const [isFavorite, setIsFavorite] = React.useState(false);

  const [favoriteLearningUnit] = useMutation<favoriteLearningUnitMutation>(
    addFavoriteLearningUnit
  );
  const [removeFavoriteLearningUnity] = useMutation<
    removeFavoriteLearningUnitMutation
  >(RemoveFavoriteLearningUnit);

  const config = {
    variables: queryVariables,
  };
  React.useEffect(() => {
    setIsFavorite(
      data?.material[0].student_material_favorites.length === 0 ? false : true
    );
  }, [data]);

  React.useEffect(() => {
    setFavoritesNumber(
      data?.material[0].student_material_favorites_aggregate.nodes
        .length as number
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [data]);

  const handleFavorite = () => {
    isFavorite
      ? setFavoritesNumber(favoritesNumber - 1)
      : setFavoritesNumber(favoritesNumber + 1);

    const setFavoriteMaterialMutation = isFavorite
      ? removeFavoriteLearningUnity
      : favoriteLearningUnit;

    setFavoriteMaterialMutation(config);

    setIsFavorite(!isFavorite);
  };

  return { isFavorite, handleFavorite, favoritesNumber, loading };
};

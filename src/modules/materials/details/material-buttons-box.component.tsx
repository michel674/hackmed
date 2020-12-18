import React from "react";
import { Button } from "../../../components/button.component";
import { FaIcon } from "../../../components/fontawesome";
import { Separator } from "../../../components/separator.style";
import { Shimmer } from "../../../components/shimmer-effect.component";
import { useFavoriteHook } from "../../../hooks/use-favorite";
import { useGetParamsAndStudentId } from "../../../hooks/use-get-params-and-student-id";
import { MaterialsButtonsWrapperStyled } from "./material-buttons-box.component.style";

export const MaterialsButtons: React.FC = () => {
  const { idFromParams: material_id, id } = useGetParamsAndStudentId();

  const [favoritesNumber, setFavoritesNumber] = React.useState(0);

  const queryVariables = {
    material_id,
    student_id: id,
  };

  const { isFavorite, handleFavorite, loading } = useFavoriteHook(
    queryVariables,
    favoritesNumber,
    setFavoritesNumber
  );

  return !loading ? (
    <MaterialsButtonsWrapperStyled>
      <Button
        onClick={handleFavorite}
        disabled={loading}
        kind={isFavorite ? "secondary" : "primary"}
      >
        <FaIcon.Star />
        <Separator type="icon" />
        {favoritesNumber}
      </Button>
    </MaterialsButtonsWrapperStyled>
  ) : (
    <Shimmer height="30px" />
  );
};

import React from "react";
import { BoxStyled } from "../../../components/box.component.style";
import { Button } from "../../../components/button.component";
import { FaIcon } from "../../../components/fontawesome";
import { ImageStyled } from "../../../components/image.component.style";
import { Separator } from "../../../components/separator.style";
import { MaterialBoxStyled } from "./material-box.component.style";

interface ImageDisplayProps {
  favorites: number;
  handleComplete: () => void;
  handleFavorite: () => void;
  imageUrl: string;
  isComplete: boolean;
  isFavorite: boolean;
  type?: "infographic" | "roadmap";
}

export const ImageDisplay: React.FC<ImageDisplayProps> = ({
  imageUrl,
  type,
  favorites,
  handleComplete,
  handleFavorite,
  isComplete,
}) => {
  return (
    <MaterialBoxStyled>
      <ImageStyled src={imageUrl} alt={type || "illustrative image"} />
      <BoxStyled hAlign="flex-end">
        <Button onClick={handleFavorite}>
          <FaIcon.Star />
          <Separator type="icon" />
          {favorites}
        </Button>
        <Separator type="content" />
        <Button
          onClick={() => handleComplete()}
          kind={isComplete ? "secondary" : "primary"}
          disabled={isComplete}
        >
          Marcar como concluído
        </Button>
      </BoxStyled>
    </MaterialBoxStyled>
  );
};

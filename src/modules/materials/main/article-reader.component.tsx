import parse from "html-react-parser";
import React from "react";
import { BoxStyled } from "../../../components/box.component.style";
import { Button } from "../../../components/button.component";
import { FaIcon } from "../../../components/fontawesome";
import { Loader } from "../../../components/loader.component";
import { Separator } from "../../../components/separator.style";
import { ArticleBoxStyled } from "./article-box.component.style";
import { MaterialBoxStyled } from "./material-box.component.style";

interface ArticleReaderProps {
  favorites?: number;
  handleFavorite: () => void;
  isComplete: boolean;
  isFavorite?: boolean;
  setComplete: () => void;
  text?: string;
}

export const ArticleReader: React.FC<ArticleReaderProps> = ({
  favorites,
  handleFavorite,
  isComplete,
  isFavorite,
  setComplete,
  text,
}): any => {
  return (
    <MaterialBoxStyled>
      {text ? (
        <ArticleBoxStyled>{parse(text as string)}</ArticleBoxStyled>
      ) : (
        <Loader />
      )}
      <BoxStyled hAlign="flex-end">
        <Button
          kind={isFavorite ? "secondary" : "primary"}
          onClick={handleFavorite}
        >
          <FaIcon.Star /> <Separator type="icon" />
          {favorites}
        </Button>
        <Separator type="content" />
        <Button
          kind={isComplete ? "secondary" : "primary"}
          onClick={() => setComplete()}
          disabled={isComplete}
        >
          Marcar como concluído
        </Button>
      </BoxStyled>
    </MaterialBoxStyled>
  );
};

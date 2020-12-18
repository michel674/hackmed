import React from "react";
import { BoxStyled } from "../box.component.style";
import { Hbox } from "../hbox-component.style";
import { Image } from "../images-object.component.style";
import { Separator } from "../separator.style";
import { H1 } from "../typography.style";

export const NotFound: React.FC = () => {
  return (
    <Hbox>
      <Separator type="section" />
      <BoxStyled vAlign="center" direction="column">
        <Image.Logo />
        <H1>Erro 404: página não encontrada</H1>
      </BoxStyled>
    </Hbox>
  );
};

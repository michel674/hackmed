import React from "react";
import { Body } from "../../components/typography.style";
import { MaterialDetailsStyled } from "../home/material-details.component.style";

export const MaterialExtraContent: React.FC = () => {
  return (
    <MaterialDetailsStyled>
      <Body>
        -Artigo: https://johnpapa.net/angular-app-structuring-guidelines/
      </Body>
    </MaterialDetailsStyled>
  );
};

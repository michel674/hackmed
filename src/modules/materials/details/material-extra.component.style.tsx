import React from "react";
import { Body } from "../../../components/typography.style";
import { MaterialDetailsStyled } from "../../home/material-details.component.style";

interface ExtraContentSectionProps {
  extra: string;
}

export const ExtraContentSection: React.FC<ExtraContentSectionProps> = ({
  extra,
}) => {
  return (
    <MaterialDetailsStyled>
      <Body>-Artigo: {extra}</Body>
    </MaterialDetailsStyled>
  );
};

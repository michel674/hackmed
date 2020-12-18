import React from "react";
import { Body } from "../../components/typography.style";
import { MaterialDetailsStyled } from "./material-details.component.style";

interface MaterialInformationProps {
  duration: number;
  description: string;
  order: number;
  tags: string[];
}

export const InformationSection: React.FC<MaterialInformationProps> = ({
  duration,
  description,
  order,
  tags,
}) => {
  return (
    <MaterialDetailsStyled>
      <Body>-Assunto(s): {tags.map((tag) => tag)}</Body>
      <Body>-Descrição: {description}</Body>
      <Body>-Tempo de duração: {duration} minutos</Body>
      <Body>-Posição na lista: {order}</Body>
    </MaterialDetailsStyled>
  );
};

import React from "react";
import { FaIcon } from "../fontawesome";
import { H2 } from "../typography.style";
import {
  PlaceholderStyled,
  PlaceholderIconStyled,
} from "./error-placeholder.style";

interface PlaceholderProps {
  minWidth?: string;
  minHeight?: string;
  type: "empty" | "error" | "connection" | "restricted";
  date?: string;
}

export const Placeholder: React.FC<PlaceholderProps> = (props) => {
  const ErrorTypeMessage = {
    empty: "Ainda não temos conteúdo desse tipo. ",
    error: "Houve algum erro ao conectar com o servidor. Tente mais tarde",
    connection:
      "Não foi possível conectar ao servidor. Por favor, verifique sua rede",
    restricted: `Esse conteúdo só estará disponível para sua turma a partir de ${props.date}`,
  };
  return (
    <PlaceholderStyled>
      <PlaceholderIconStyled>
        <FaIcon.Alert />
      </PlaceholderIconStyled>
      <H2>{ErrorTypeMessage[props.type]}</H2>
    </PlaceholderStyled>
  );
};

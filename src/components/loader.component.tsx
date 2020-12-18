import React from "react";
import { WaveStyled, LoaderWrapperStyled } from "./loader.component.style";

export const Loader: React.FC = () => {
  return (
    <LoaderWrapperStyled>
      <WaveStyled />
      <WaveStyled delay="1s" />
    </LoaderWrapperStyled>
  );
};

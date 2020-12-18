import React from "react";
import {
  ShimmerStyled,
  ShimmerEffectStyled,
} from "./shimmer-effect.component.style";

interface ShimmerProps {
  height?: string;
}

export const Shimmer: React.FC<ShimmerProps> = (props) => {
  return (
    <ShimmerEffectStyled>
      <ShimmerStyled height={props.height} />
    </ShimmerEffectStyled>
  );
};

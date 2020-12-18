import React from "react";
import { TranslateCardWrapperStyled } from "./card-translate-wrapper.component.style";
import { FrameStyled } from "./frame.component.style";
import {
  PrimaryCardWrapperStyled,
  PrimaryCardStyled,
} from "./primary-card.component.style";
import { Shimmer } from "./shimmer-effect.component";
import { H2 } from "./typography.style";

interface PrimaryCardProps {
  title?: string;
  id?: number;
  imageUrl?: string;
  onClick?: (id?: number) => void;
}

export const PrimaryCard: React.FC<PrimaryCardProps> = (props) => {
  const { title, imageUrl, onClick, id } = props;

  const handleClick = () => {
    if (onClick) {
      onClick(id);
    }
  };

  return (
    <PrimaryCardWrapperStyled onClick={handleClick} imageUrl={imageUrl}>
      <TranslateCardWrapperStyled>
        <FrameStyled type={title ? "primary" : "quaternary"}>
          <PrimaryCardStyled>
            {title ? <H2>{title}</H2> : <Shimmer height="20px" />}
          </PrimaryCardStyled>
        </FrameStyled>
      </TranslateCardWrapperStyled>
    </PrimaryCardWrapperStyled>
  );
};

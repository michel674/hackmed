import React from "react";
import { FaIcon } from "../../components/fontawesome";
import { FrameStyled } from "../../components/frame.component.style";
import { Separator } from "../../components/separator.style";
import { Body, H2 } from "../../components/typography.style";
import {
  CardStatisticsStyled,
  CardStatisticsWrapperStyled,
  IconFrameWrapperStyled,
} from "./statistics-center-content.component.style";

interface CardStatisticsProps {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
  counter?: number;
  title?: string;
}

export const CardStatistics: React.FC<CardStatisticsProps> = (props) => {
  return (
    <CardStatisticsWrapperStyled>
      <FrameStyled type="neutral">
        <CardStatisticsStyled>
          <IconFrameWrapperStyled type={props.type}>
            <FaIcon.ArrowDown />
          </IconFrameWrapperStyled>
          <H2>{props.counter}</H2>
          <Separator type="content" />
          <Body>{props.title}</Body>
        </CardStatisticsStyled>
      </FrameStyled>
    </CardStatisticsWrapperStyled>
  );
};

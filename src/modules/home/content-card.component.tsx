import React from "react";
import { TranslateCardWrapperStyled } from "../../components/card-translate-wrapper.component.style";
import {
  DetailBoxStyled,
  DetailSpreadStyled,
} from "../../components/detail-box.component.style";
import { FaIcon } from "../../components/fontawesome";
import { FrameStyled } from "../../components/frame.component.style";
import { IconWrapperStyled } from "../../components/icon-wrapper.component.style";
import { LinkStyled } from "../../components/link.component.style";
import {
  CardComponentContentStyled,
  SecondaryCardWrapperStyled,
} from "../../components/secondary-card.component.style";
import { Separator } from "../../components/separator.style";
import { Shimmer } from "../../components/shimmer-effect.component";
import { Body } from "../../components/typography.style";
import { LearningUnitCardTitleStyled } from "./content-card.component.style";

interface ContentCardProps {
  title?: string;
  id?: number;
  imageUrl?: string;
  views?: number;
  tags?: string[];
  materialsAmount?: number;
  unlocked?: boolean;
}

export const ContentCard: React.FC<ContentCardProps> = (
  props: ContentCardProps
) => {
  const inner = (
    <SecondaryCardWrapperStyled
      unlocked={props.unlocked}
      imageUrl={props.imageUrl}
    >
      <TranslateCardWrapperStyled>
        <FrameStyled type="neutral" shadow={true}>
          <CardComponentContentStyled>
            {props.title ? (
              <LearningUnitCardTitleStyled>
                {props.title}
              </LearningUnitCardTitleStyled>
            ) : (
              <Shimmer height="30px" />
            )}
            <Separator type="content" />
            {props.title ? (
              <DetailSpreadStyled>
                <DetailBoxStyled>
                  <IconWrapperStyled>
                    <FaIcon.Play />
                  </IconWrapperStyled>
                  <Body>
                    {props.materialsAmount}
                    {props.materialsAmount === 1 ? " material" : " materiais"}
                  </Body>
                </DetailBoxStyled>
              </DetailSpreadStyled>
            ) : (
              <Shimmer height="20px" />
            )}
            <Separator type="content" />
          </CardComponentContentStyled>
        </FrameStyled>
      </TranslateCardWrapperStyled>
    </SecondaryCardWrapperStyled>
  );
  if (props.unlocked) {
    return <LinkStyled to={`/material/${props.id}`}>{inner}</LinkStyled>;
  }
  return inner;
};

import React from "react";
import { TranslateCardWrapperStyled } from "../../components/card-translate-wrapper.component.style";
import {
  DetailBoxStyled,
  DetailSpreadStyled,
} from "../../components/detail-box.component.style";
import { FaIcon } from "../../components/fontawesome";
import { FrameStyled } from "../../components/frame.component.style";
import { Hbox } from "../../components/hbox-component.style";
import { IconWrapperStyled } from "../../components/icon-wrapper.component.style";
import { LinkStyled } from "../../components/link.component.style";
import { ProgressBar } from "../../components/progress-bar.component";
import {
  CardComponentContentStyled,
  SecondaryCardWrapperStyled,
} from "../../components/secondary-card.component.style";
import { Separator } from "../../components/separator.style";
import { Shimmer } from "../../components/shimmer-effect.component";
import { Body, H3 } from "../../components/typography.style";

interface LearningUnitCardProps {
  id?: number;
  imageUrl?: string;
  materialsQuantity: number;
  tags?: string[];
  title?: string;
  completedMaterials?: number;
  masterclassId?: number;
  locked: boolean;
}

export const LearningUnitCard: React.FC<LearningUnitCardProps> = (
  props: LearningUnitCardProps
): JSX.Element => {
  const progress = props.completedMaterials
    ? (props.completedMaterials / props.materialsQuantity) * 100
    : 0;

  const inner = (
    <SecondaryCardWrapperStyled
      unlocked={props.locked}
      imageUrl={props.imageUrl}
    >
      <TranslateCardWrapperStyled>
        <FrameStyled type="neutral" shadow={true}>
          <CardComponentContentStyled lang="pt">
            <Hbox.Item hAlign="center">
              {!props.locked && (
                <IconWrapperStyled>
                  <FaIcon.Lock />
                </IconWrapperStyled>
              )}
              {props.title ? <H3>{props.title}</H3> : <Shimmer height="30px" />}
            </Hbox.Item>
            <Separator type="content" />
            {props.title ? (
              <DetailSpreadStyled>
                <DetailBoxStyled>
                  <IconWrapperStyled>
                    <FaIcon.Clipboard />
                  </IconWrapperStyled>
                  <Body>
                    {props.materialsQuantity}
                    {props.materialsQuantity === 1 ? " material" : " materiais"}
                  </Body>
                </DetailBoxStyled>
              </DetailSpreadStyled>
            ) : (
              <Shimmer height="20px" />
            )}
            <Separator type="content" />
            <ProgressBar progress={progress} />
          </CardComponentContentStyled>
        </FrameStyled>
      </TranslateCardWrapperStyled>
    </SecondaryCardWrapperStyled>
  );

  if (props.locked) {
    return (
      <LinkStyled to={`/material/${props.masterclassId}`}>{inner}</LinkStyled>
    );
  } else {
    return inner;
  }
};

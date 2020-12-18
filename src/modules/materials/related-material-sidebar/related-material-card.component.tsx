import React from "react";
import { DetailSpreadStyled } from "../../../components/detail-box.component.style";
import { FaIcon } from "../../../components/fontawesome";
import { IconWrapperStyled } from "../../../components/related-material-icon-wrapper.component.style";
import { Separator } from "../../../components/separator.style";
import { H4 } from "../../../components/typography.style";
import { NavLinkStyled } from "../../app/navbar-icon.component.style";
import {
  DetailsWrapperStyled,
  RelatedMaterialCardWrapperStyled,
  RelatedMaterialImageBoxStyled,
} from "./related-material-card.component.style";

interface RelatedMaterialCardProps {
  imageUrl?: string;
  viewsNumber?: number;
  materialTitle?: string;
  materialTimeDuration?: number;
  materialId: number;
}

export const RelatedMaterialCard: React.FC<RelatedMaterialCardProps> = (
  props
) => {
  return (
    <>
      <NavLinkStyled to={`/material/${props.materialId}`}>
        <RelatedMaterialCardWrapperStyled>
          <RelatedMaterialImageBoxStyled imageUrl={props.imageUrl} />
          <Separator type="content" />
          <DetailsWrapperStyled>
            <H4>{props.materialTitle}</H4>
            <Separator type="content" />
            <DetailSpreadStyled>
              <IconWrapperStyled>
                <FaIcon.Clock /> {props.materialTimeDuration}min
              </IconWrapperStyled>
              <IconWrapperStyled>
                <FaIcon.Eye /> {props.viewsNumber} views
              </IconWrapperStyled>
            </DetailSpreadStyled>
            <Separator type="content" />
          </DetailsWrapperStyled>
        </RelatedMaterialCardWrapperStyled>
        <Separator type="content" />
      </NavLinkStyled>
    </>
  );
};

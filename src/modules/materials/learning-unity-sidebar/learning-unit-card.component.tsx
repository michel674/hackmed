import React from "react";
import {
  DetailSpreadStyled,
  DetailBoxStyled,
} from "../../../components/detail-box.component.style";
import { FaIcon } from "../../../components/fontawesome";
import { Hbox } from "../../../components/hbox-component.style";
import { LinkStyled } from "../../../components/link.component.style";
import { IconWrapperStyled } from "../../../components/related-material-icon-wrapper.component.style";
import { Separator } from "../../../components/separator.style";
import { Body, H4, Span } from "../../../components/typography.style";
import {
  MaterialCardWrapperStyled,
  CardInformationWrapperStyled,
  CheckmarkBoxStyled,
} from "./material-card.component.style";

interface LearningUnitProps {
  imageUrl?: string;
  materialTitle?: string;
  materialSequence?: number;
  numberOfFavorites?: number;
  numberOfMaterials?: number;
  materialId: number;
  checked: boolean;
  favorite: boolean;
  sideBarClosed?: boolean;
  materialType?: string;
  active: boolean;
}

export const LearningUnitCard: React.FC<LearningUnitProps> = (props) => {
  return (
    <LinkStyled to={`/material/${props.materialId}`}>
      <MaterialCardWrapperStyled
        sideBarClosed={props.sideBarClosed}
        active={props.active}
      >
        <CardInformationWrapperStyled>
          <H4>{props.materialTitle}</H4>
          <Separator type="content" />
          <DetailSpreadStyled>
            <DetailBoxStyled>
              <IconWrapperStyled>
                <CheckmarkBoxStyled>
                  <Hbox>
                    <Hbox.Item>{props.checked && <FaIcon.Check />}</Hbox.Item>
                  </Hbox>
                </CheckmarkBoxStyled>
              </IconWrapperStyled>
              <Span>
                {props.materialSequence}/{props.numberOfMaterials}
              </Span>
            </DetailBoxStyled>
            <Body>{props.materialType}</Body>
          </DetailSpreadStyled>
        </CardInformationWrapperStyled>
      </MaterialCardWrapperStyled>
    </LinkStyled>
  );
};

import React, { useState } from "react";
import { NavbarContainer } from "../../../components/navbar.component";
import { Separator } from "../../../components/separator.style";
import { Body, H1 } from "../../../components/typography.style";
import { InformationSection } from "../../home/material-information.component";
import {
  MaterialDetailsWrapperStyled,
  MaterialSubtitleItemsWrapperStyled,
} from "./details.component.style";
import { MaterialsButtons } from "./material-buttons-box.component";
import { ExtraContentSection } from "./material-extra.component.style";

interface MaterialDetailsProps {
  description: string;
  duration: number;
  extra: string;
  order: number;
  tags: string[];
  title: string;
  views: number;
}

export const MaterialDetails: React.FC<MaterialDetailsProps> = ({
  description,
  duration,
  extra,
  order,
  tags,
  title,
  views,
}) => {
  const [detailSection, setDetailSection] = useState<number>(2);

  const handleDetailSection = (id) => {
    setDetailSection(id);
  };

  const navbarItems = [
    {
      name: "Informações",
      id: 2,
    },
    {
      name: "Conteúdo Extra",
      id: 1,
    },
  ];
  return (
    <MaterialDetailsWrapperStyled>
      <H1>{title}</H1>
      <MaterialSubtitleItemsWrapperStyled>
        <Body>{views} visualizações</Body>
        <MaterialsButtons />
      </MaterialSubtitleItemsWrapperStyled>
      <Separator type="content" />
      <NavbarContainer
        listItems={navbarItems}
        onClick={handleDetailSection}
        activeId={detailSection}
      />
      <Separator type="content" />
      {detailSection === 1 ? (
        <ExtraContentSection extra={extra} />
      ) : (
        <InformationSection
          duration={duration}
          description={description}
          order={order}
          tags={tags}
        />
      )}
    </MaterialDetailsWrapperStyled>
  );
};

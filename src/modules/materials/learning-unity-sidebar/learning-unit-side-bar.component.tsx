import React from "react";
import { BoxStyled } from "../../../components/box.component.style";
import { FaIcon } from "../../../components/fontawesome";
import {
  LearningUnitSideBarLinkBackStyled,
  LearningUnitSideBarTitle,
  MaterialSideBarStyled,
  SideBarIconStyled,
} from "./learning-unit-side-bar.component.styled";
import { LearningUnitListContainer } from "./material-list-container";

interface LearningUnitSideBarProps {
  sideBarClosed: boolean;
  onCloseSideBar: () => void;
}

export const LearningUnitSideBar: React.FC<LearningUnitSideBarProps> = ({
  sideBarClosed,
  onCloseSideBar,
}: LearningUnitSideBarProps) => {
  const [title, setTitle] = React.useState("");
  const [module, setModule] = React.useState<number | null>(0);

  return (
    <MaterialSideBarStyled sideBarClosed={sideBarClosed}>
      <LearningUnitSideBarLinkBackStyled to={`/module/${module}`}>
        Voltar ao módulo
      </LearningUnitSideBarLinkBackStyled>
      <BoxStyled hAlign="space-between">
        <LearningUnitSideBarTitle>{title}</LearningUnitSideBarTitle>
        <SideBarIconStyled
          onClick={onCloseSideBar}
          sideBarClosed={sideBarClosed}
        >
          <FaIcon.AngleLeft />
        </SideBarIconStyled>
      </BoxStyled>
      <LearningUnitListContainer
        sideBarClosed={sideBarClosed}
        setTitle={setTitle}
        setModule={setModule}
      />
    </MaterialSideBarStyled>
  );
};

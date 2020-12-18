import React, { useState } from "react";
import {
  MaterialMainColumnStyled,
  MaterialRowStyled,
} from "./grid-material-page.component.style";
import { LearningUnitSideBar } from "./learning-unity-sidebar/learning-unit-side-bar.component";
import { Tab } from "./learning-unity-sidebar/tab.component";
import { MaterialContainer } from "./material-container";
import { MaterialDateChecker } from "./material-date-checker";
import { MaterialPageWrapperStyled } from "./material-page-wrapper.component.styled";
import { MaterialTypeSelector } from "./material-type-selector";
import { TagRelatedMaterialsContainer } from "./related-material-sidebar/tag-related-materials-container";

export const Material: React.FC = () => {
  const [sideBarClosed, setSideBarClose] = useState(false);
  const handleCloseSideBar = () => {
    setSideBarClose(!sideBarClosed);
  };
  return (
    <>
      <LearningUnitSideBar
        onCloseSideBar={handleCloseSideBar}
        sideBarClosed={sideBarClosed}
      />
      <Tab sideBarClosed={sideBarClosed} onClick={handleCloseSideBar} />

      <MaterialPageWrapperStyled sideBarClosed={sideBarClosed}>
        <MaterialDateChecker>
          <MaterialRowStyled>
            <MaterialContainer />
            <MaterialMainColumnStyled>
              <MaterialTypeSelector />
            </MaterialMainColumnStyled>
            <TagRelatedMaterialsContainer />
          </MaterialRowStyled>
        </MaterialDateChecker>
      </MaterialPageWrapperStyled>
    </>
  );
};

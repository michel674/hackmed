/* import React, { useState } from "react";
import { Col, Grid, Row } from "../../components/grid.component";
import { NavbarContainer } from "../../components/navbar.component";
import { ScrollableCardsGroupStyled } from "../../components/scrollable-cards-group.component.styled";
import { SelectComponent } from "../../components/select.component";
import { SubNavStyled } from "../../components/sub-nav.component.style";
import {
  HomePageMaterialOrder,
  MaterialType,
} from "../../models/integration-constants";
import { Categories } from "./categories.container";
import { LearningUnitList } from "./learning-unit-list";

export const Home: React.FC = () => {
  const [materialType, setMaterialType] = useState<number>(MaterialType.video);
  const [materialOrder, setMaterialOrder] = useState<any>({
    value: HomePageMaterialOrder.normal,
  });
  const [category, setCategory] = useState<number | undefined>(undefined);

  const handleMaterialTypeTitle = (materialId) => {
    setMaterialType(materialId);
  };

  const navbarItems = [
    {
      name: "Vídeos",
      id: MaterialType.video,
    },
    {
      name: "Artigos",
      id: MaterialType.text,
    },
    {
      name: "Podcasts",
      id: MaterialType.podcast,
    },
  ];

  const homeSelectOptions = [
    { value: HomePageMaterialOrder.normal, label: "Selecione uma ordem" },
    { value: HomePageMaterialOrder.views, label: "Mais visualizados" },
    { value: HomePageMaterialOrder.date, label: "Mais recentes" },
  ];

  return (
    <>
      <SubNavStyled>
        <Grid noGutter={true}>
          <Row>
            <ScrollableCardsGroupStyled>
              <Categories onSelectCategory={setCategory} />
            </ScrollableCardsGroupStyled>
          </Row>
          <Row verticalAlign="center">
            <Col desktop={9} tablet={6} mobile={6}>
              <NavbarContainer
                onClick={handleMaterialTypeTitle}
                listItems={navbarItems}
                activeId={materialType}
              />
            </Col>
            <Col desktop={3} tablet={6} mobile={6} horizontalAlign="flex-end">
              <SelectComponent
                onChange={setMaterialOrder}
                initialValue={materialOrder}
                options={homeSelectOptions}
              />
            </Col>
          </Row>
        </Grid>
      </SubNavStyled>
      <Grid>
        <LearningUnitList category={category} />
      </Grid>
    </>
  );
};
 */
export const alert = "do not delete this component";

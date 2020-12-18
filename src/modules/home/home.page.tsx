import React from "react";
import { Grid, Row } from "../../components/grid.component";
import { ScrollableCardsGroupStyled } from "../../components/scrollable-cards-group.component.styled";
import { SubNavStyled } from "../../components/sub-nav.component.style";
import { Categories } from "./categories.container";
import { LearningUnitList } from "./learning-unit-list";

export const Home: React.FC = () => {
  const [category, setCategory] = React.useState<number | undefined>(undefined);

  return (
    <>
      <SubNavStyled>
        <Grid noGutter={true}>
          <Row>
            <ScrollableCardsGroupStyled>
              <Categories onSelectCategory={setCategory} />
            </ScrollableCardsGroupStyled>
          </Row>
        </Grid>
      </SubNavStyled>
      <Grid>
        <LearningUnitList category={category} />
      </Grid>
    </>
  );
};

import React from "react";
import { Grid, Row, Col } from "../../components/grid.component";
import { PrimaryCard } from "../../components/primary-card.component";
import { ScrollableCardsGroupStyled } from "../../components/scrollable-cards-group.component.styled";
import { ContentCard } from "./content-card.component";

export const CategoryListShimmer: React.FC = () => {
  return (
    <ScrollableCardsGroupStyled>
      <PrimaryCard />
      <PrimaryCard />
      <PrimaryCard />
      <PrimaryCard />
    </ScrollableCardsGroupStyled>
  );
};

export const ContentListShimmer: React.FC = () => {
  return (
    <Grid>
      <Row>
        <Col desktop={4} mobile={6} tablet={12}>
          <ContentCard />
        </Col>
        <Col desktop={4} mobile={6} tablet={12}>
          <ContentCard />
        </Col>
        <Col desktop={4} mobile={6} tablet={12}>
          <ContentCard />
        </Col>
        <Col desktop={4} mobile={6} tablet={12}>
          <ContentCard />
        </Col>
        <Col desktop={4} mobile={6} tablet={12}>
          <ContentCard />
        </Col>
        <Col desktop={4} mobile={6} tablet={12}>
          <ContentCard />
        </Col>
      </Row>
    </Grid>
  );
};

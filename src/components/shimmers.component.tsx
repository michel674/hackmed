import React from "react";
import { ContentCard } from "../modules/home/content-card.component";
import { Col, Grid, Row } from "./grid.component";
import { PrimaryCard } from "./primary-card.component";
import { ScrollableCardsGroupStyled } from "./scrollable-cards-group.component.styled";

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
        <Col desktop={6} mobile={12} tablet={12}>
          <ContentCard />
        </Col>
        <Col desktop={6} mobile={12} tablet={12}>
          <ContentCard />
        </Col>
        <Col desktop={6} mobile={12} tablet={12}>
          <ContentCard />
        </Col>
        <Col desktop={6} mobile={12} tablet={12}>
          <ContentCard />
        </Col>
      </Row>
    </Grid>
  );
};

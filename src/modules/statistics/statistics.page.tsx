import React from "react";
import { Grid, Row, Col } from "../../components/grid.component";
import { Body, H1 } from "../../components/typography.style";
import { StatisticsContainer } from "./statistics-container";
import { TitleWrapperStyled } from "./statistics-title.component.style";

const options = {
  day: "numeric",
  weekday: "long",
  month: "long",
  year: "numeric",
};

const locale = "pt-br";
const localDate = new Date().toLocaleDateString(locale, options);

export const Statistics: React.FC = () => {
  return (
    <Grid>
      <Row>
        <Col desktop={12} tablet={12} mobile={12}>
          <TitleWrapperStyled>
            <H1>Sua evolução</H1>
            <Body>{localDate}</Body>
          </TitleWrapperStyled>
        </Col>
      </Row>
      <Row>
        <StatisticsContainer />
      </Row>
    </Grid>
  );
};

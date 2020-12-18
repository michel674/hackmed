import React from "react";
import { Grid } from "../../components/grid.component";
import { Separator } from "../../components/separator.style";
import { SubNavStyled } from "../../components/sub-nav.component.style";
import { Accordion } from "./accordion.component";
import { CoursesUpperStyled } from "./course.container.style";
import { CoursesContainer } from "./courses.container";
import { LearningUnitsContainer } from "./learning-units-container";

export const Course: React.FC = () => {
  return (
    <>
      <SubNavStyled>
        <Grid noGutter>
          <CoursesUpperStyled>
            <Accordion>
              <CoursesContainer />
            </Accordion>
          </CoursesUpperStyled>
        </Grid>
      </SubNavStyled>
      <Grid>
        <LearningUnitsContainer />
      </Grid>
    </>
  );
};

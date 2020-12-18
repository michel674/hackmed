import React from "react";
import { useAuthContext } from "../../app/auth-provider/auth.provider";
import { FaIcon } from "../../components/fontawesome";
import { useGetParamsAndStudentId } from "../../hooks/use-get-params-and-student-id";
import { useQueryHook } from "../../relay";
import { coursesQuery } from "./__generated__/coursesQuery.graphql";
import {
  AccordionContentStyled,
  AccordionWrapperStyled,
  AccordionButtonStyled,
  AccordionSideBarIconStyled,
  AccordionTitleStyled,
} from "./accordion.component.style";
import { courses } from "./courses.query";
import { Modal } from "./modal.component";

export const Accordion: React.FC = ({ children }) => {
  const {
    id: student_id,
    idFromParams: module_id,
  } = useGetParamsAndStudentId();
  const [activeAccordion, setActiveAccordion] = React.useState<boolean>(false);
  const { getUserIdAndInfoFromStorage } = useAuthContext();
  const { userClass: class_id } = getUserIdAndInfoFromStorage();
  const queryVariables = {
    student_id,
    class_id,
    module_id,
  };

  const { data, err, retry, loading } = useQueryHook<coursesQuery>(
    courses,
    queryVariables
  );

  const titleLearningUnity =
    data?.modules
      .map((module) => module._id === module_id && module.name)
      .filter((categoryName) => categoryName) || [];

  return (
    <AccordionWrapperStyled>
      {activeAccordion ? (
        <>
          <Modal opened={activeAccordion}>
            <AccordionWrapperStyled>
              <AccordionButtonStyled
                onClick={() => setActiveAccordion(!activeAccordion)}
              >
                <AccordionTitleStyled>
                  {titleLearningUnity[0] || data?.modules[0].name}
                </AccordionTitleStyled>
                <AccordionSideBarIconStyled>
                  <FaIcon.AngleDown />
                </AccordionSideBarIconStyled>
              </AccordionButtonStyled>
              <AccordionContentStyled
                active={activeAccordion}
                onClick={() => setActiveAccordion(!activeAccordion)}
              >
                {children}
              </AccordionContentStyled>
            </AccordionWrapperStyled>
          </Modal>
        </>
      ) : (
        <AccordionButtonStyled
          onClick={() => setActiveAccordion(!activeAccordion)}
        >
          <AccordionTitleStyled>
            {titleLearningUnity[0] || data?.modules[0].name}
          </AccordionTitleStyled>
          <AccordionSideBarIconStyled>
            <FaIcon.AngleDown />
          </AccordionSideBarIconStyled>
        </AccordionButtonStyled>
      )}
    </AccordionWrapperStyled>
  );
};

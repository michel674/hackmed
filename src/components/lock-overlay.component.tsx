import React from "react";
import { LockWrapperStyled } from "../modules/courses/course.container.style";
import { FaIcon } from "./fontawesome";

export const LockOverlay: React.FC = () => {
  return (
    <LockWrapperStyled>
      <FaIcon.Lock />
    </LockWrapperStyled>
  );
};

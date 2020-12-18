import React from "react";
import {
  ProgressBarBorderStyled,
  ProgressBarContentStyled,
} from "./progress-bar.style";

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <ProgressBarBorderStyled>
      <ProgressBarContentStyled progress={progress} />
    </ProgressBarBorderStyled>
  );
};

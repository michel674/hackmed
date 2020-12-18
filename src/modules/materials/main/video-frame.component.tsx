import React from "react";
import { VideoDetailsContainer } from "../details/video-details-container";
import { MaterialBoxStyled } from "./material-box.component.style";
import { VideoContainer } from "./video-container";

export const VideoFrame: React.FC = () => {
  return (
    <MaterialBoxStyled>
      <VideoContainer />
      <VideoDetailsContainer />
    </MaterialBoxStyled>
  );
};

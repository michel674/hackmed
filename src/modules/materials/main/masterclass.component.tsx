import React from "react";
import { FaIcon } from "../../../components/fontawesome";
import { Separator } from "../../../components/separator.style";
import { MasterClassIconWrapperStyled } from "./masterclass-icon-wrapper.component.styled";
import { MasterClassWrapperStyled } from "./masterclass-wrapper.component.style";
import { WebLinkStyled } from "./web-link.component.styled";

interface MasterClassProps {
  url: string;
}

export const MasterClass: React.FC<MasterClassProps> = ({ url }) => {
  return (
    <MasterClassWrapperStyled>
      <MasterClassIconWrapperStyled>
        <FaIcon.Video />
      </MasterClassIconWrapperStyled>
      <Separator type="content" />
      <WebLinkStyled href={url} target="_blank">
        Link para a Masterclass
      </WebLinkStyled>
    </MasterClassWrapperStyled>
  );
};

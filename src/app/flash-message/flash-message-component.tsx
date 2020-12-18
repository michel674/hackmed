import React from "react";
import { FlashMessageType } from "../../components/constants";
import { FlashMessageWrapper } from "./flash-message-styled";

export interface FlashMessageProps {
  message: string;
  show: boolean;
  type?: FlashMessageType | undefined;
}

export const FlashMessage: React.FC<FlashMessageProps> = ({
  message,
  show,
  type,
}) => (
  <FlashMessageWrapper show={show} type={type ? type : FlashMessageType.ERROR}>
    <span>{message}</span>
  </FlashMessageWrapper>
);

import React from "react";
import {
  ModalBoxStyled,
  ModalContentStyled,
  ModalOpacityStyled,
  ModalStyled,
} from "./modal.component.style";

export interface ModalProps {
  opened?: boolean;
}

export const Modal: React.FC<ModalProps> = ({ opened, children }) => {
  return (
    <ModalStyled opened={opened}>
      <ModalOpacityStyled opened={opened} />
      {opened && (
        <ModalBoxStyled>
          <ModalContentStyled>{children}</ModalContentStyled>
        </ModalBoxStyled>
      )}
    </ModalStyled>
  );
};

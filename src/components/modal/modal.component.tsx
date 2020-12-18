import React from "react";
import { Separator } from "../../components/separator.style";
import { MaterialsButtonsWrapperStyled } from "../../modules/materials/details/material-buttons-box.component.style";
import { Button } from "../button.component";
import {
  ModalBoxStyled,
  ModalCloseStyled,
  ModalContentStyled,
  ModalOpacityStyled,
  ModalStyled,
} from "./modal.style";

export interface ModalProps {
  opened?: boolean;
  confirmation?: boolean;
  onConfirm?: () => void;
  onDeny?: () => void;
}

export const Modal: React.FC<ModalProps> = ({
  opened,
  onConfirm,
  onDeny,
  children,
  confirmation,
}) => {
  return (
    <ModalStyled opened={opened}>
      <ModalOpacityStyled opened={opened} onClick={onDeny} />
      {opened && (
        <ModalBoxStyled>
          <ModalCloseStyled>
            <ModalContentStyled>{children}</ModalContentStyled>
            {confirmation ? (
              <MaterialsButtonsWrapperStyled>
                <Button onClick={onConfirm}>Sim</Button>
                <Separator type="content" />
                <Button kind="secondary" onClick={onDeny}>
                  Não
                </Button>
              </MaterialsButtonsWrapperStyled>
            ) : (
              <></>
            )}
          </ModalCloseStyled>
        </ModalBoxStyled>
      )}
    </ModalStyled>
  );
};

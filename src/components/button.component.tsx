import React from "react";
import { ButtonStyled } from "./button.component.style";
import { ButtonType } from "./constants";

interface ButtonProps {
  kind?: "secondary" | "primary";
  onClick?: () => void;
  submit?: boolean;
  disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  kind,
  onClick,
  children,
  submit,
  disabled,
}) => {
  return (
    <ButtonStyled
      kind={kind}
      onClick={onClick}
      type={submit ? ButtonType.SUBMIT : ButtonType.NORMAL}
      disabled={disabled}
    >
      {children}
    </ButtonStyled>
  );
};

import React from "react";
import { InputMessages, InputTypes } from "./constants";
import { InputStyled } from "./input.component.style";

interface InputProps {
  onChangeInput?: (names?, values?) => void;
  required?: boolean;
  placeholder: string;
  name?: string;
  kind: "email" | "name" | "phone" | "cpf" | "password" | "number";
  password?: boolean;
}

export const Input = {
  Raw: (props: InputProps): JSX.Element => (
    <InputStyled
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChangeInput}
      required={props.required}
    />
  ),
  WithRegex: (props: InputProps): JSX.Element => (
    <InputStyled
      name={props.name}
      placeholder={props.placeholder}
      onChange={props.onChangeInput}
      required={props.required}
      pattern={InputTypes[props.kind]}
      title={InputMessages[props.kind]}
      type={props.kind}
    />
  ),
};

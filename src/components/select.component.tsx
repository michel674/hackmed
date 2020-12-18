import React from "react";
import Select from "react-select";
import { HomePageMaterialOrder } from "../models/integration-constants";
import { SelectWrapperStyled } from "./select.component.styled";

export interface SelectProps {
  onChange: any;
  initialValue: string;
  options: { value: number | HomePageMaterialOrder; label: string }[];
}

export const SelectComponent: React.FC<SelectProps> = ({
  onChange,
  initialValue,
  options,
}: SelectProps) => {
  return (
    <SelectWrapperStyled>
      <Select
        options={options}
        placeholder="Selecione uma opção"
        value={initialValue}
        onChange={onChange}
      />
    </SelectWrapperStyled>
  );
};

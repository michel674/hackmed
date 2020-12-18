import React from "react";
import { DatePickerStyled } from "./date-picker.style";

interface DateComponentProps {
  initialDate: Date;
  onChange: (date) => void;
}

export const DatePickerComponent: React.FC<DateComponentProps> = ({
  initialDate,
  onChange,
}) => {
  return (
    <DatePickerStyled
      selected={initialDate}
      onSelect={(date) => onChange(date)}
      name="date_of_birth"
      showYearDropdown
      yearDropdownItemNumber={15}
      scrollableYearDropdown
    />
  );
};

import DatePicker from "react-datepicker";
import styled from "styled-components";
import { Radius, Spacing } from "./constants";

export const DatePickerStyled = styled(DatePicker)`
  padding: ${Spacing.XSmall};
  border-radius: ${Radius.Small};
  border: 1px solid ${(props) => props.theme.colors.LayoutSecondary};
`;

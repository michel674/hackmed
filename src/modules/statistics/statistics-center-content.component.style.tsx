import styled from "styled-components";
import { Radius, Spacing } from "../../components/constants";

interface IconFrameWrapperStyledProps {
  type?: "primary" | "secondary" | "tertiary" | "quaternary";
}

const getType = {
  primary: (props) => props.theme.colors.Primary,
  secondary: (props) => props.theme.colors.Secondary,
  tertiary: (props) => props.theme.colors.Text,
  quaternary: (props) => props.theme.colors.LightGray,
};

export const IconFrameWrapperStyled = styled.div<IconFrameWrapperStyledProps>`
  position: absolute;
  top: -30px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  background-color: ${(props) =>
    props.type ? getType[props.type] : props.theme.colors.Primary};
  border-radius: ${Radius.Small};
  color: ${(props) => props.theme.colors.HighContrast};
`;
export const CardStatisticsStyled = styled.div`
  position: relative;
  padding: ${Spacing.XLarge};
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${(props) => props.theme.colors.HighContrast};
`;

export const CardStatisticsWrapperStyled = styled.div`
  padding: ${Spacing.Small};
  width: 100%;
`;

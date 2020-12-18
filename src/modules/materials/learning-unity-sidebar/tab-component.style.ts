import styled from "styled-components";
import { Radius, Spacing } from "../../../components/constants";

interface TabWrapper {
  show?: boolean;
}

export const TabWrapper = styled.div<TabWrapper>`
  text-align: center;
  background-color: ${(props) => props.theme.colors.LayoutSecondary};
  height: 100px;
  writing-mode: vertical-rl;
  border-radius: 0 ${Radius.Large} ${Radius.Large} 0;
  color: ${(props) => props.theme.colors.HighContrast};
  display: ${(props) => !props.show && "none"};
  padding: ${Spacing.Small};
  transform: ${(props) =>
    props.show ? `translateX(-${Spacing.XSmall})` : "translateX(0px)"};
  transition: transform 600ms ease-out;
  cursor: pointer;
`;

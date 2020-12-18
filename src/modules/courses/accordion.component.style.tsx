import { Circle } from "rc-progress";
import styled from "styled-components";
import {
  FontSize,
  Spacing,
  Breakpoint,
  Radius,
  FontWeight,
  Transition,
} from "../../components/constants";

export const AccordionWrapperStyled = styled.div`
  display: flex;
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  flex-direction: column;
  border-radius: ${Radius.Large};
  max-width: ${Breakpoint.Mobile};
  margin: ${Spacing.Medium} auto;
`;

interface AccordionContentStyledProps {
  active?: boolean;
}

export const AccordionContentStyled = styled.div<AccordionContentStyledProps>`
  max-height: ${(props) => (props.active ? "200px" : "0")}
  background-color: ${(props) => props.theme.colors.CardBackground};
  overflow: auto;
  transition: max-height 0.6s ease;
  border-radius: ${Radius.Large};
  padding-bottom: ${Spacing.Medium};
  padding-left: ${Spacing.Medium};
`;

export const AccordionButtonStyled = styled.button`
  outline: 0;
  display: flex;
  justify-content: space-between;
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Bold};
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  border-radius: ${Radius.Large};
  color: ${(props) => props.theme.colors.Text};
  cursor: pointer;
  padding: ${Spacing.Small};
  border: none;
  &:hover {
    color: ${(props) => props.theme.colors.Primary};
  }
`;

export const AccordionSideBarIconStyled = styled.div`
  color: ${(props) => props.theme.colors.LowContrast};
  font-size: ${FontSize.Medium};
  transition: color ${Transition.Fast};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.Primary};
  }
`;

export const AccordionTitleStyled = styled.p`
  font-size: ${FontSize.Small};
  display: block;
  width: 100%;
  text-align: center;
  color: ${(props) => props.theme.colors.HighContrast};
`;

export const CircleStyled = styled(Circle)`
  height: 20px;
`;

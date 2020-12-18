import styled from "styled-components";
import { Spacing } from "./constants";

interface BoxProps {
  // src: https://www.w3schools.com/cssref/css3_pr_align-items.asp
  hAlign?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "inherit";
  // src: https://www.w3schools.com/cssref/css3_pr_justify-content.asp
  vAlign?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "initial"
    | "inherit";
}

export interface HboxProps extends BoxProps {
  noGrow?: boolean;
}

const HboxStyled = styled.div`
  flex-direction: row;
  align-content: flex-start;
`;

export const Hbox: any = HboxStyled;
Hbox.displayName = "Hbox";

Hbox.Item = styled.div`
  flex-direction: column;
  display: flex;
  ${(props: HboxProps) => (!props.noGrow ? "flex: 1" : null)};
  justify-content: ${(props: HboxProps) =>
    props.vAlign ? props.vAlign : "flex-start"};
  align-items: ${(props: HboxProps) =>
    props.hAlign ? props.hAlign : "stretch"};
  color: ${(props) => props.theme.colors.HighContrast};
`;
Hbox.Item.displayName = "Hbox.Item";

Hbox.Separator = styled.div`
  width: ${Spacing.Small};
`;
Hbox.Separator.displayName = "Hbox.Separator";

export const Separator = styled.div`
  margin-bottom: ${Spacing.Large};
`;

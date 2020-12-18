import styled from "styled-components";

interface BoxStyledProps {
  hAlign?:
    | "stretch"
    | "center"
    | "flex-start"
    | "flex-end"
    | "baseline"
    | "initial"
    | "space-between"
    | "space-around"
    | "space-between"
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
  direction?: "row" | "column";
}

export const BoxStyled = styled.div<BoxStyledProps>`
  width: 100%;
  display: flex;
  flex-direction: ${(props) => (props.direction ? props.direction : "row")};
  justify-content: ${(props) => (props.hAlign ? props.hAlign : "flex-start")};
  align-items: ${(props) => (props.vAlign ? props.vAlign : "flex-start")};
`;

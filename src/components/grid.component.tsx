import styled from "styled-components";
import { Breakpoint } from "./constants";

interface GridProps {
  noGutter?: boolean;
}

export const Grid = styled.div<GridProps>`
  margin-right: auto;
  box-sizing: border-box;
  width: 100%;
  background-color: ${(props) => props.theme.colors.LayoutTertiary};

  padding: ${(props: GridProps) => (props.noGutter ? " " : "0 15px 0 15px")};
`;

interface RowProps {
  horizontalAlign?: string;
  verticalAlign?: string;
}

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: ${(props: RowProps) =>
    props.horizontalAlign ? props.horizontalAlign : "flex-start"};
  align-items: ${(props: RowProps) =>
    props.verticalAlign ? props.verticalAlign : "flex-start"};
`;

function getWidthGrid(value: number) {
  if (!value) {
    return;
  }
  if (value > 12 || value < 0) {
    throw new Error(
      "O valor das propriedades que definem as colunas do Grid devem estar entre 0 e 12"
    );
  }
  const width = (value / 12) * 100;
  return `flex-basis: ${width}%;
    max-width: ${width}%;`;
}

interface ColProps {
  noGutter?: boolean;
  horizontalAlign?: string;
  verticalAlign?: string;
  mobile?: number;
  tablet?: number;
  desktop?: number;
  contact?: boolean;
  fullHeight?: boolean;
  direction?: string;
}

export const Col = styled.div<ColProps>`
  display: flex;
  align-items: stretch;
  padding-bottom: ${(props: ColProps) => (props.noGutter ? " " : "0.5rem")};
  padding-left: ${(props: ColProps) => (props.noGutter ? " " : "0.5rem")};
  padding-right: ${(props: ColProps) => (props.noGutter ? " " : "0.5rem")};
  padding-top: ${(props: ColProps) => (props.noGutter ? " " : "0.5rem")};
  flex-direction: ${(props: ColProps) =>
    props.direction ? props.direction : "row"};
  min-height: 1px;
  box-sizing: border-box;
  justify-content: ${(props: ColProps) =>
    props.horizontalAlign ? props.horizontalAlign : "flex-start"};
  align-items: ${(props: ColProps) =>
    props.verticalAlign ? props.verticalAlign : "flex-start"};
  height: ${(props) => (props.fullHeight ? "100%" : "")};

  @media only screen and (max-width: ${Breakpoint.Tablet}) {
    ${({ mobile }) => mobile && getWidthGrid(mobile)}
  }

  @media only screen and (min-width: ${Breakpoint.Tablet}) {
    ${({ tablet }) => tablet && getWidthGrid(tablet)}
  }

  @media only screen and (min-width: ${Breakpoint.Desktop}) {
    ${({ desktop }) => desktop && getWidthGrid(desktop)}
  }
`;

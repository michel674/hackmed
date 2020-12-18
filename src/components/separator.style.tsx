import styled from "styled-components";
import { Spacing } from "./constants";

interface SeparatorProps {
  type?: "content" | "section" | "icon";
}

const SeparatorSize = {
  section: Spacing.Large,
  content: Spacing.Small,
  icon: Spacing.XSmall,
};

export const Separator = styled.div<SeparatorProps>`
  margin-right: ${(props) =>
    props.type ? SeparatorSize[props.type] : Spacing.XSmall};
  margin-top: ${(props) =>
    props.type ? SeparatorSize[props.type] : Spacing.XSmall};
`;

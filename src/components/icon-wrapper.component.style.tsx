import styled from "styled-components";
import { Spacing } from "./constants";

interface IconProps {
  type?: "primary" | "secondary";
}

export const IconWrapperStyled = styled.div<IconProps>`
  color: ${(props) =>
    props.type ? props.theme.colors.Secondary : props.theme.colors.Primary};
  padding: 0 ${Spacing.XSmall};
`;

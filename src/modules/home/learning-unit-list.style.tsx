import styled from "styled-components";
import { Spacing } from "../../components/constants";
import { H1 } from "../../components/typography.style";

export const TitleModuleStyled = styled(H1)`
  display: block;
  padding: ${Spacing.Large};
  text-align: center;
  color: ${(props) => props.theme.colors.HighContrast};
`;

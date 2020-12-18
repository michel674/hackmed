import styled from "styled-components";
import { Spacing } from "../../components/constants";
import { H3 } from "../../components/typography.style";

interface TitleModuleStyledProps {
  progress?: number;
  unlocked?: boolean;
}

export const TitleModuleStyled = styled(H3)<TitleModuleStyledProps>`
  padding-left: ${Spacing.Medium};
  color: ${(props) =>
    props.unlocked ? props.theme.colors.Text : props.theme.colors.LowContrast};
  text-decoration: ${(props) =>
    props.progress === 100 ? "line-through" : "none"};
  &:hover {
    color: ${(props) => props.theme.colors.Primary};
  }
`;

export const LockWrapperStyled = styled.span`
  color: ${(props) => props.theme.colors.HighContrast};
  text-align: center;
  padding: 2px;
`;

export const CoursesUpperStyled = styled.div`
  padding: ${Spacing.XSmall} ${Spacing.XLarge};
  height: 94px;
  text-align: center;
`;

import style from "styled-components";
import {
  Breakpoint,
  FontFamily,
  FontSize,
  FontWeight,
  Spacing,
  Transition,
} from "../../components/constants";

export const HeaderContainerStyled = style.div`
  top: 0px;
  position: sticky; 
  padding: ${Spacing.Small};
  width: 100%;
  border-bottom: 2px solid ${(props) => props.theme.colors.LayoutSecondary};
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;

`;

export const HamburguerIconStyled = style.button`
  color: ${(props) => props.theme.colors.LowContrast};
  font-size: ${FontSize.Medium};
  padding: ${Spacing.Small};
  background-color: ${(props) => props.theme.colors.Transparent};
  color: ${(props) => props.theme.colors.Text};
  transition: color ${Transition.Fast};

  border: none;
  outline: none;
  transition: color 0.3s;

  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.Primary}
  }
`;

export const LogoTitleStyled = style.h1`
  font-family: ${FontFamily.Primary};
  font-size: ${FontSize.Medium};
  font-weight: ${FontWeight.Bold};
  display: flex;
`;

export const ResponsiveElementsStyled = style.div`
  display: flex;
  align-items: center;
  transform: translateX(-300px);
  transition: all 0.5s ease;
  z-index: 1;

  @media (max-width: ${Breakpoint.Tablet}) {
    transform: translateX(0px);
  }

`;

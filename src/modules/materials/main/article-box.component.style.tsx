import styled from "styled-components";
import { FontFamily, Spacing, Transition } from "../../../components/constants";

export const ArticleBoxStyled = styled.div`
  background: ${(props) => props.theme.colors.LayoutPrimary};
  & * {
    font-family: ${FontFamily.Primary};
    color: ${(props) => props.theme.colors.Text}
  }

  & body {
    background-color: ${(props) => props.theme.colors.LayoutPrimary};
  }

  & h1 {
    margin-bottom: ${Spacing.Medium} !important;
    color: ${(props) => props.theme.colors.HighContrast};
  }

  & p {
    line-height: 1.5rem;
    padding: ${Spacing.Small} 0;
    &::selection {
      background: ${(props) => props.theme.colors.Primary};
      color: ${(props) => props.theme.colors.HighContrast};
    }
  }

  & h2 {
    margin: ${Spacing.Large} 0 0;
    color: ${(props) => props.theme.colors.HighContrast};
  }

  & a {
    font-weight: bold;
    color: ${(props) => props.theme.colors.HighContrast}
    text-decoration: none;
    transition: color ${Transition.Fast};
    outline: none;
    &:hover {
      color: ${(props) => props.theme.colors.Primary};
    }
    &:visited {
      color: ${(props) => props.theme.colors.HighContrast}
    }
  }

  & ol {
    padding-left: 16px;
    margin: ${Spacing.Small} 0;
  }

  & li {
    padding: 0;
  }

  & text {
    color: ${(props) => props.theme.colors.HighContrast};
  }
`;

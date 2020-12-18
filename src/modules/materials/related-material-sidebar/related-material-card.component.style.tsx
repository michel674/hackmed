import styled from "styled-components";
import { Radius, Spacing, Transition } from "../../../components/constants";

export const RelatedMaterialCardWrapperStyled = styled.div`
  width: 100%;
  transition: background-color ${Transition.Fast};
  padding: ${Spacing.Small};
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  border-radius: ${(props) => props.theme.colors.Large};
  border: 2px solid ${(props) => props.theme.colors.LayoutSecondary};
  border-radius: ${Radius.Large};
  &:hover {
    cursor: pointer;
    background-color: ${(props) => props.theme.colors.Primary}33;
  }
`;

interface RelatedMaterialImageBoxProps {
  imageUrl?: string;
}

export const RelatedMaterialImageBoxStyled = styled.div<
  RelatedMaterialImageBoxProps
>`
  width: 100%;
  padding-bottom: 50%;
  border-radius: ${Radius.Large};
  background-size: cover;
  background: ${(props) => props.theme.colors.LayoutPrimary}
    url(${(props) => props.imageUrl}) center center no-repeat;
`;

export const DetailsWrapperStyled = styled.div``;

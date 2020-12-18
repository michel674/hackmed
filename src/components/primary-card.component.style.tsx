import styled from "styled-components";
import logoBlackAndWhite from "../assets/img-gente-lab-black-and-white.png";
import { Spacing, Radius } from "./constants";

export const PrimaryCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80px;
  width: 100%;
  padding: ${Spacing.XSmall};
  color: ${(props) => props.theme.colors.White};
  &:hover {
    cursor: pointer;
    color: ${(props) => props.theme.colors.Secondary};
  }
`;

export const CourseCardWrapperStyled = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-bottom-left-radius: ${Radius.Large};
  border-bottom-right-radius: ${Radius.Large};
  height: 100%;
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  color: ${(props) => props.theme.colors.Text};
  &:hover {
    cursor: pointer;
  }
`;

interface PrimaryCardWrapperProps {
  imageUrl?: string;
}

export const PrimaryCardWrapperStyled = styled.div<PrimaryCardWrapperProps>`
  padding: 0 ${Spacing.Small};
  text-align: center;
  min-width: 150px;
  width: 100%;
  border-radius: ${Radius.Large};
  &:hover {
    cursor: pointer;
  }
  ::before {
    content: "";
    display: block;
    width: 100%;
    height: 200px;
    border-radius: ${Radius.Large} ${Radius.Large} 0 0;
    background: url(${(props) =>
        props.imageUrl ? props.imageUrl : logoBlackAndWhite})
      center center no-repeat;
    background-size: ${(props) => (props.imageUrl ? "cover" : "")};
  }
`;

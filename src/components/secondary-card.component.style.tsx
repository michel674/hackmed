import styled from "styled-components";
import genteLabBlackAndWhite from "../assets/img-gente-lab-black-and-white.png";
import { Radius, Spacing } from "./constants";

interface SecondaryCardWrapperStyledProps {
  imageUrl?: string;
  unlocked?: boolean;
}

export const SecondaryCardWrapperStyled = styled.div<SecondaryCardWrapperStyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  opacity: ${(props) => (props.unlocked ? 1 : 0.6)};
  &::before {
    content: "";
    width: 100%;
    padding-bottom: 60%;
    border-radius: ${Radius.Large} ${Radius.Large} 0 0;
    background: url(${(props) => props.imageUrl}) center center no-repeat;
    background-size: cover;
  }
`;

export const DetailTagsStyled = styled.div<SecondaryCardWrapperStyledProps>`
  display: flex;
  flex-wrap: wrap;

  &::before {
    content: "";
    width: 100%;
    padding-bottom: 60%;
    border-radius: ${Radius.Large} ${Radius.Large} 0 0;
    background: url(${(props) =>
      props.imageUrl ? props.imageUrl : genteLabBlackAndWhite});
    background-size: ${(props) => (props.imageUrl ? "cover" : "")};
  }
`;

export const CardComponentContentStyled = styled.div`
  padding: ${Spacing.Medium};
  width: 100%;
`;

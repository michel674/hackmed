import styled from "styled-components";
import {
  Radius,
  Spacing,
  Breakpoint,
  BrandColor,
  Transition,
} from "../../components/constants";
import { ModalProps } from "./modal.component";

export const ModalStyled = styled.div`
  padding: ${Spacing.Medium};
  position: fixed;
  z-index: 100;
  visibility: ${(props: ModalProps) => (props.opened ? "visible" : "hidden")};
  backdrop-filter: blur(8px);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
`;

export const ModalOpacityStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  z-index: 8;
  background-color: ${BrandColor.Black};
  opacity: ${(props: ModalProps) => (props.opened ? "0.5" : "0")};
  transition: all ${Transition.Fast} ease-out;
  visibility: ${(props: ModalProps) => (props.opened ? "visible" : "hidden")};
`;

export const ModalBoxStyled = styled.div`
  position: fixed;
  top: ${Spacing.XXLarge};
  left: 50%;
  z-index: 10;
  transform: translate(-50%, 0);
  width: 100%;
  overscroll-behavior: contain;
  background-color: "black";
  border-radius: ${Radius.Small};
  display: flex;
  flex-direction: column;
  margin: ${Spacing.Small} auto;
  @media (max-width: ${Breakpoint.Tablet}) {
    margin: ${Spacing.XSmall} auto;
  }
`;

export const ModalContentStyled = styled.div`
  margin-left: 145px;
  overflow: auto;
  color: ${(props) => props.theme.colors.Text};
  @media (max-width: ${Breakpoint.Tablet}) {
    margin-left: 0;
    padding: 0 ${Spacing.XLarge};
  }
`;

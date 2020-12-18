import styled, { keyframes } from "styled-components";
import { Radius, Spacing } from "../constants";
import { ModalProps } from "./modal.component";

export const ModalStyled = styled.div`
  padding: ${Spacing.Medium};
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  z-index: 15;
  visibility: ${(props: ModalProps) => (props.opened ? "visible" : "hidden")};
  backdrop-filter: blur(8px);
`;

const slideDown = keyframes`
  0% {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

export const ModalOpacityStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  height: 100vh;
  z-index: 8;
  background-color: #000;
  opacity: ${(props: ModalProps) => (props.opened ? "0.5" : "0")};
  transition: all 0.2s ease-out;
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
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  border-radius: ${Radius.Small};
  animation: ${slideDown} 0.3s ease-out;
  display: flex;
  flex-direction: column;
`;

export const ModalCloseStyled = styled.a`
  margin: ${Spacing.Small};
  position: absolute;
  top: 0;
  right: 0;
  z-index: 2;
  padding: ${Spacing.Medium};
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.LayoutPrimary};
  border-radius: ${Radius.Small};
`;

export const ModalContentStyled = styled.div`
  overflow: auto;
  color: ${(props) => props.theme.colors.HighContrast};
`;

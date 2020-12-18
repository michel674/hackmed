import styled, { keyframes } from "styled-components";

const LoaderEffect = keyframes`
  from {
    transform: scale(0);
    opacity: 100%;
  }

  to {
    transform: scale(1);
    opacity: 0%;
  }
`;

export const LoaderWrapperStyled = styled.div`
  position: relative;
  width: 100px;
  height: 100px;
  margin: auto;
  display: flex;
  justify-content: center;
  border-radius: 50%;
`;

interface WaveProps {
  delay?: string;
}

export const WaveStyled = styled.div<WaveProps>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: inherit;
  background-color: ${(props) => props.theme.colors.Primary};
  animation: ${LoaderEffect} 2s linear infinite;
  animation-delay: ${(props) => (props.delay ? props.delay : "0")};
  opacity: 0%;
`;

import styled from "styled-components";

export const VideoSectionStyled = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) => props.theme.colors.HighContrast};
  position: relative;
  z-index: 3;
`;

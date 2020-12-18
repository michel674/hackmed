import styled from "styled-components";

interface ShimmerStyledProps {
  height?: string;
}
export const ShimmerStyled = styled.div<ShimmerStyledProps>`
  width: 100%;
  height: ${(props) => (props.height ? props.height : "auto")};
`;

export const ShimmerEffectStyled = styled.div`
  min-width: 50px;
  width: 100%;
  animation: shimmer 2s infinite;
  background: linear-gradient(to right, #eff1f3 4%, #e2e2e2 25%, #eff1f3 36%);
  background-size: 1000px 100%;
  @keyframes shimmer {
    0% {
      background-position: -1000px 0;
    }
    100% {
      background-position: 1000px 0;
    }
  }
`;

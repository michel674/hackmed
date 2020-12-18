import styled from "styled-components";
import { FlashMessageType, Radius, Spacing } from "../../components/constants";

interface FlashMessageStyledProps {
  show: boolean;
  type?: FlashMessageType;
}

const flashMessageTypes = {
  error: (props) => props.theme.colors.Alert,
  warning: (props) => props.theme.colors.Warning,
  success: (props) => props.theme.colors.Success,
};

export const FlashMessageWrapper = styled.div<FlashMessageStyledProps>`
  visibility: ${(props) => (props.show ? "visible" : "hidden")};
  min-width: 50%;
  font-weight: bold;
  color: ${(props) => props.theme.colors.White};
  background-color: ${(props) =>
    props.type ? flashMessageTypes[props.type] : props.theme.colors.Warning}CC;
  text-align: center;
  padding: ${Spacing.Medium};
  position: fixed;
  z-index: 1;
  left: 0;
  right: 0;
  bottom: ${Spacing.Large};
  margin: ${Spacing.XXLarge};
  border-radius: ${Radius.Small};
`;

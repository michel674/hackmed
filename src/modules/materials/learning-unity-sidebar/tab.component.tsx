import React from "react";
import { TabWrapper } from "./tab-component.style";

interface SideBarProps {
  onClick: () => void;
  sideBarClosed: boolean;
}
export const Tab: React.FC<SideBarProps> = ({ onClick, sideBarClosed }) => {
  return (
    <TabWrapper show={sideBarClosed} onClick={() => onClick()}>
      Abrir
    </TabWrapper>
  );
};

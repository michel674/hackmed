import React from "react";
import { LiStyled, UlStyled } from "./list-items.component.style";

interface NavbarContainerProps {
  onClick: (materialId: number) => void;
  listItems: any[];
  activeId?: number;
}

export const NavbarContainer: React.FC<NavbarContainerProps> = ({
  onClick,
  listItems,
  activeId,
}: NavbarContainerProps): any => {
  return (
    <UlStyled>
      {listItems?.map((item) => (
        <LiStyled
          key={item.id}
          onClick={() => onClick(item.id)}
          active={item.id === activeId}
        >
          {item.name}
        </LiStyled>
      ))}
    </UlStyled>
  );
};

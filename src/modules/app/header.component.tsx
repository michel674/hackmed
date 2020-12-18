import React from "react";
import { DefaultTheme } from "styled-components";
import { FaIcon } from "../../components/fontawesome";
import {
  HamburguerIconStyled,
  HeaderContainerStyled,
  ResponsiveElementsStyled,
} from "./header.component.style";
import { UserProfile } from "./user-profile.component";

interface HeaderProps {
  onOpenMenu: () => void;
  theme: DefaultTheme;
}
export const Header: React.FC<HeaderProps> = ({ onOpenMenu }) => {
  return (
    <HeaderContainerStyled>
      <ResponsiveElementsStyled>
        <HamburguerIconStyled onClick={() => onOpenMenu()}>
          <FaIcon.Hamburguer />
        </HamburguerIconStyled>
      </ResponsiveElementsStyled>
      <UserProfile />
    </HeaderContainerStyled>
  );
};

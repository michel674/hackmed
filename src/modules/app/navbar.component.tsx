import React from "react";
import { useAuthContext } from "../../app/auth-provider/auth.provider";
import { BoxStyled } from "../../components/box.component.style";
import { FaIcon } from "../../components/fontawesome";
import { Hbox } from "../../components/hbox-component.style";
import { Image } from "../../components/images-object.component.style";
import { Separator } from "../../components/separator.style";
import { ToggleSwitch } from "../../components/toggle-switch";
import { Body } from "../../components/typography.style";
import {
  CloseIconWrapperStyled,
  LogoWrapperStyled,
  NavLinkStyled,
  UppersideWrapperStyled,
  IconWrapperStyled,
} from "./navbar-icon.component.style";
import {
  LiStyled,
  NavStyled,
  UlStyled,
  NavPageTitleDescriptionStyled,
} from "./navbar-list.style";
import { ToggleWrapperStyle } from "./toggle-wrapper.component.style";

interface NavbarProps {
  menuOpen: boolean;
  onCloseMenu: () => void;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  menuOpen,
  onCloseMenu,
  toggleTheme,
}: NavbarProps): any => {
  return (
    <NavStyled menuOpen={menuOpen}>
      <BoxStyled direction="column">
        <UppersideWrapperStyled menuOpen={menuOpen}>
          <LogoWrapperStyled>
            <NavLinkStyled to="/" onClick={onCloseMenu}>
              <Image.Logo />
            </NavLinkStyled>
          </LogoWrapperStyled>
          <CloseIconWrapperStyled menuOpen={menuOpen} onClick={onCloseMenu}>
            <FaIcon.Close />
          </CloseIconWrapperStyled>
        </UppersideWrapperStyled>
        <BoxStyled direction="column" hAlign="space-between">
          <UlStyled>
            <Separator type="icon" />
            <LiStyled>
              <NavPageTitleDescriptionStyled>
                <NavLinkStyled exact to="/" onClick={onCloseMenu}>
                  <Hbox.Item hAlign="center">
                    <IconWrapperStyled>
                      <FaIcon.Home />
                    </IconWrapperStyled>
                    <Body>Home</Body>
                  </Hbox.Item>
                </NavLinkStyled>
              </NavPageTitleDescriptionStyled>
            </LiStyled>
            <LiStyled>
              <NavPageTitleDescriptionStyled>
                <NavLinkStyled exact to="/module" onClick={onCloseMenu}>
                  <Hbox.Item hAlign="center">
                    <IconWrapperStyled>
                      <FaIcon.List />
                    </IconWrapperStyled>
                    <Body>Módulos</Body>
                  </Hbox.Item>
                </NavLinkStyled>
              </NavPageTitleDescriptionStyled>
            </LiStyled>
            <LiStyled>
              <NavPageTitleDescriptionStyled>
                <NavLinkStyled
                  exact
                  to="/statistics"
                  onClick={() => onCloseMenu()}
                >
                  <Hbox.Item hAlign="center">
                    <IconWrapperStyled>
                      <FaIcon.Chart />
                    </IconWrapperStyled>
                    <Body>Estatísticas</Body>
                  </Hbox.Item>
                </NavLinkStyled>
              </NavPageTitleDescriptionStyled>
            </LiStyled>
          </UlStyled>
        </BoxStyled>
      </BoxStyled>
      <ToggleWrapperStyle onClick={toggleTheme}>
        <IconWrapperStyled>
          <ToggleSwitch />
        </IconWrapperStyled>
      </ToggleWrapperStyle>
    </NavStyled>
  );
};

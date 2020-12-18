import React from "react";
import { DefaultTheme } from "styled-components";
import { useAuthContext } from "../../app/auth-provider/auth.provider";
import { GlobalStyle } from "../../components/global-style";
import { Routes } from "../../routes";
import { AppWrapperStyled, InnerAppWrapper } from "./app.component.style";
import { Header } from "./header.component";
import { Navbar } from "./navbar.component";

interface RoutesProps {
  toggleTheme: () => void;
  theme: DefaultTheme;
}
export const AppRoutes: React.FC<RoutesProps> = ({
  toggleTheme,
  theme,
}): any => {
  const { storedUser } = useAuthContext();

  const [menuOpen, setMenuOpen] = React.useState(false);

  const handleOpenMenu = () => {
    setMenuOpen(true);
  };

  const handleCloseMenu = () => {
    setMenuOpen(false);
  };

  return (
    <AppWrapperStyled logged={storedUser ? true : false}>
      {storedUser && (
        <Navbar
          menuOpen={menuOpen}
          onCloseMenu={handleCloseMenu}
          toggleTheme={toggleTheme}
        />
      )}
      <InnerAppWrapper>
        {storedUser && <Header onOpenMenu={handleOpenMenu} theme={theme} />}
        <GlobalStyle theme={theme} />
        <Routes />
      </InnerAppWrapper>
    </AppWrapperStyled>
  );
};

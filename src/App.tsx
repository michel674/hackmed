import React from "react";
import { ThemeProvider } from "styled-components";
import { AuthProvider } from "./app/auth-provider/auth.provider";
import { FlashMessageProvider } from "./app/flash-message/flash-message-provider";
import dark from "./app/global-theme/dark";
import light from "./app/global-theme/light";
import { EnvironmentProvider } from "./evironment.provider";
import { usePersistTheme } from "./hooks/usePersistTheme";
import { AppRoutes } from "./modules/app/app.routes";

export const App: React.FC = () => {
  const [theme, setTheme] = usePersistTheme(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  return (
    <EnvironmentProvider>
      <ThemeProvider theme={theme}>
        <FlashMessageProvider>
          <AuthProvider>
            <AppRoutes toggleTheme={toggleTheme} theme={theme} />
          </AuthProvider>
        </FlashMessageProvider>
      </ThemeProvider>
    </EnvironmentProvider>
  );
};

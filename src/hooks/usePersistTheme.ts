import React, { Dispatch, SetStateAction } from "react";

type PersistThemeResponse<T> = [T, Dispatch<SetStateAction<T>>];

const LOCAL_STORAGE_THEME = "GenteLab-theme";

export function usePersistTheme<DefaultTheme>(
  initialValue: DefaultTheme
): PersistThemeResponse<DefaultTheme> {
  const [state, setState] = React.useState(() => {
    const savedTheme = localStorage.getItem(LOCAL_STORAGE_THEME);

    if (savedTheme) {
      return JSON.parse(savedTheme);
    } else {
      return initialValue;
    }
  });

  React.useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_THEME, JSON.stringify(state));
  }, [initialValue, state]);

  return [state, setState];
}

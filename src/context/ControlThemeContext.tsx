import { createContext, useState } from "react";

interface Props {
  children: React.ReactNode;
}

interface ControlTheme {
  theme: boolean;
  setTheme: (value: boolean) => void;
}

export const ControlThemeContext = createContext({} as ControlTheme);

export function ControlThemeProvider({ children }: Props) {
  const [theme, setTheme] = useState(true);

  return (
    <ControlThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ControlThemeContext.Provider>
  );
}

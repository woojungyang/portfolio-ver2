import { lightTheme, darkTheme } from 'theme/theme';
import { createContext, useState, useContext, useCallback } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

const ThemeContext = createContext({});

const ThemeProvider = ({ children }) => {
  const [themeMode, setThemeMode] = useState('day');
  const themeObject = themeMode == 'day' ? lightTheme : darkTheme;

  return (
    <ThemeContext.Provider value={{ themeMode, setThemeMode }}>
      <StyledProvider theme={themeObject}>{children}</StyledProvider>
    </ThemeContext.Provider>
  );
};

function useTheme() {
  const context = useContext(ThemeContext);
  const { themeMode, setThemeMode } = context;

  const toggleTheme = useCallback(() => {
    if (themeMode === 'day') setThemeMode('night');
    else setThemeMode('day');
  }, [themeMode]);

  return [themeMode, toggleTheme];
}

export { ThemeProvider, useTheme };

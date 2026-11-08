import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemeMode = 'charcoal' | 'midnight' | 'emerald' | 'violet';

export interface ThemeOption {
  id: ThemeMode;
  name: string;
  tagline: string;
  accentColor: string;
  secondaryColor: string;
  previewBg: string;
}

export const THEME_OPTIONS: ThemeOption[] = [
  {
    id: 'charcoal',
    name: 'Deep Charcoal',
    tagline: 'Minimalist obsidian & electric cyan',
    accentColor: '#38BDF8',
    secondaryColor: '#818CF8',
    previewBg: '#0B0D10',
  },
  {
    id: 'midnight',
    name: 'Midnight Cobalt',
    tagline: 'Deep oceanic sapphire & cobalt',
    accentColor: '#60A5FA',
    secondaryColor: '#38BDF8',
    previewBg: '#050B18',
  },
  {
    id: 'emerald',
    name: 'Emerald Matrix',
    tagline: 'Dark jade & neon mint terminal',
    accentColor: '#10B981',
    secondaryColor: '#34D399',
    previewBg: '#060F0C',
  },
  {
    id: 'violet',
    name: 'Violet Nebula',
    tagline: 'Cosmic amethyst & electric fuchsia',
    accentColor: '#C084FC',
    secondaryColor: '#F472B6',
    previewBg: '#0D0917',
  },
];

interface ThemeContextType {
  theme: ThemeMode;
  currentTheme: ThemeOption;
  themeName: string;
  isMidnight: boolean;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
  themes: ThemeOption[];
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'ayan_roy_portfolio_theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem(THEME_STORAGE_KEY) as ThemeMode;
      if (stored && ['charcoal', 'midnight', 'emerald', 'violet'].includes(stored)) {
        return stored;
      }
    }
    return 'charcoal';
  });

  const currentTheme = THEME_OPTIONS.find((t) => t.id === theme) || THEME_OPTIONS[0];

  useEffect(() => {
    const root = document.documentElement;
    root.setAttribute('data-theme', theme);

    // Optical background sync on body
    document.body.style.backgroundColor = currentTheme.previewBg;

    // Remove any previous theme-* classes and add the active one
    THEME_OPTIONS.forEach((t) => root.classList.remove(`theme-${t.id}`));
    root.classList.add(`theme-${theme}`);

    try {
      localStorage.setItem(THEME_STORAGE_KEY, theme);
    } catch {
      // Ignore private browsing storage restrictions
    }
  }, [theme, currentTheme]);

  const toggleTheme = () => {
    const currentIndex = THEME_OPTIONS.findIndex((t) => t.id === theme);
    const nextIndex = (currentIndex + 1) % THEME_OPTIONS.length;
    setThemeState(THEME_OPTIONS[nextIndex].id);
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  const themeName = currentTheme.name;
  const isMidnight = theme === 'midnight';

  return (
    <ThemeContext.Provider
      value={{
        theme,
        currentTheme,
        themeName,
        isMidnight,
        toggleTheme,
        setTheme,
        themes: THEME_OPTIONS,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

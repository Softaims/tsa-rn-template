import { create } from "zustand";
import { LIGHT_THEME, DARK_THEME } from "../constants";

interface ThemeStore {
  themeTag: string;
  theme: typeof LIGHT_THEME | typeof DARK_THEME;
  toggleTheme: () => void;
  setTheme: (isDark: boolean) => void;
}

const useThemeStore = create<ThemeStore>((set, get) => ({
  themeTag: 'light',
  theme: LIGHT_THEME,
  toggleTheme: () => {
    const newTheme = get().theme === LIGHT_THEME ? DARK_THEME : LIGHT_THEME;
    const newThemeTag = get().themeTag === 'light' ? 'dark' : 'light';
    set({ theme: newTheme, themeTag: newThemeTag });
  },

  setTheme: (isDark) => {
    set({ theme: isDark ? DARK_THEME : LIGHT_THEME, themeTag: isDark ? 'dark' : 'light' });
  },
}));

export default useThemeStore;
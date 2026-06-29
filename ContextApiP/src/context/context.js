import React, { useContext, createContext } from "react";

// Initializing Context with default base values
export const Themecontext = createContext({
    themeMode: "light",
    darkTheme: () => {},
    lightTheme: () => {}
});

// Exporting the provider wrapper component alias
export const ThemeProvider = Themecontext.Provider;

// Custom hook for seamless consumption of the theme context state across components
export default function useTheme() {
    return useContext(Themecontext);
}
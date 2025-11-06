"use client";
import React, {createContext, useContext, useEffect, useMemo, useState} from "react";

type Theme = "light" | "dark";

type ThemeContextType = {
  theme: Theme;
  setTheme: (t: Theme) => void;
  toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

function getInitialTheme(): Theme {
  if (typeof window === "undefined") return "light";
  try {
    const stored = window.localStorage.getItem("theme");
    if (stored === "light" || stored === "dark") return stored as Theme;
  } catch (e) {}
  const prefersDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
  return prefersDark ? "dark" : "light";
}

export function ThemeProvider({children}: {children: React.ReactNode}) {
  const [theme, setThemeState] = useState<Theme>(getInitialTheme());

  useEffect(() => {
    try {
      window.localStorage.setItem("theme", theme);
    } catch (e) {}
    const root = document.documentElement;
    root.setAttribute("data-theme", theme);
    // Also expose to CSS color-scheme for native UI
    root.style.colorScheme = theme;
  }, [theme]);

  useEffect(() => {
    // React to system changes only if user hasn't set an explicit choice yet
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const stored = (() => {
      try { return window.localStorage.getItem("theme"); } catch { return null; }
    })();
    const onChange = (e: MediaQueryListEvent) => {
      if (!stored) setThemeState(e.matches ? "dark" : "light");
    };
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, []);

  const ctx = useMemo<ThemeContextType>(() => ({
    theme,
    setTheme: (t) => setThemeState(t),
    toggleTheme: () => setThemeState((prev) => (prev === "light" ? "dark" : "light")),
  }), [theme]);

  return <ThemeContext.Provider value={ctx}>{children}</ThemeContext.Provider>;
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used within ThemeProvider");
  return ctx;
}
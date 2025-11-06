"use client";
import React from "react";
import {useTheme} from "./ThemeProvider";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";
  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      title={isDark ? "Light" : "Dark"}
      onClick={toggleTheme}
      className="btn-ghost flex items-center gap-2"
    >
      <span className="inline-block w-5 h-5" aria-hidden="true">
        {isDark ? "☀️" : "🌙"}
      </span>
      <span className="text-sm">{isDark ? "Light" : "Dark"}</span>
    </button>
  );
}
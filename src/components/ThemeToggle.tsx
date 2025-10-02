"use client";

import React, { useEffect, useState } from "react";
import { ToggleButton, useTheme } from "@once-ui-system/core";
import { HiSun, HiMoon } from "react-icons/hi2";

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [currentTheme, setCurrentTheme] = useState("light");

  const getTimeBasedTheme = () => {
    const now = new Date();
    const sofiaTime = new Intl.DateTimeFormat("bg-BG", {
      timeZone: "Europe/Sofia",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }).formatToParts(now);
    
    const hour = parseInt(sofiaTime.find(part => part.type === "hour")?.value || "0");
    return hour >= 8 && hour < 20 ? "light" : "dark";
  };

  useEffect(() => {
    setMounted(true);
    const appliedTheme = document.documentElement.getAttribute("data-theme") || getTimeBasedTheme();
    setCurrentTheme(appliedTheme);
  }, []);

  useEffect(() => {
    const appliedTheme = document.documentElement.getAttribute("data-theme") || getTimeBasedTheme();
    setCurrentTheme(appliedTheme);
  }, [theme]);

  if (!mounted) return null;

  const nextTheme = currentTheme === "light" ? "dark" : "light";

  return (
    <ToggleButton
      onClick={() => {
        setTheme(nextTheme);
        setCurrentTheme(nextTheme);
        localStorage.setItem("data-theme", nextTheme);
        document.documentElement.setAttribute("data-theme", nextTheme);
      }}
      aria-label={`Превключване към ${nextTheme === "light" ? "светла" : "тъмна"} тема`}
    >
      {currentTheme === "light" ? <HiSun size={18} /> : <HiMoon size={18} />}
    </ToggleButton>
  );
};

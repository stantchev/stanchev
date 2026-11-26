"use client";

import React from "react";
import { ThemeSwitcher } from "@once-ui-system/core";

export const ThemeToggle: React.FC = () => (
  <ThemeSwitcher
    collapsed
    direction="column"
    labels={{ system: "Тема на устройството", dark: "Тъмна тема", light: "Светла тема" }}
  />
);

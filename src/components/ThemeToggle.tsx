'use client';

import React, { useEffect, useState } from 'react';
import { ToggleButton, useTheme } from '@once-ui-system/core';

export const ThemeToggle: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState<string>('light');
  const [mounted, setMounted] = useState(false);

  // 🧠 Обновяваме `currentTheme`, когато се монтира или се смени
  useEffect(() => {
    setMounted(true);
    const appliedTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setCurrentTheme(appliedTheme);
  }, []);

  useEffect(() => {
    const appliedTheme = document.documentElement.getAttribute('data-theme') || 'light';
    setCurrentTheme(appliedTheme);
  }, [theme]);

  if (!mounted) return null;

  const icon = currentTheme === 'light' ? 'sun' : 'moon';
  const nextTheme = currentTheme === 'light' ? 'dark' : 'light';

  return (
    <ToggleButton
      prefixIcon={icon}
      onClick={() => {
        setTheme(nextTheme);
        setCurrentTheme(nextTheme); // 👈 ръчно го сетваме за моментален ъпдейт
      }}
      aria-label={`Превключване към ${nextTheme === 'light' ? 'светла' : 'тъмна'} тема`}
    />
  );
};

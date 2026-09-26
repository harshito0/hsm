'use client';

import { useSyncExternalStore, useCallback } from 'react';

export type Theme = 'light' | 'dark';

function subscribe(callback: () => void) {
  window.addEventListener('themechange', callback);
  window.addEventListener('storage', callback);
  return () => {
    window.removeEventListener('themechange', callback);
    window.removeEventListener('storage', callback);
  };
}

function getSnapshot(): Theme {
  if (typeof document === 'undefined') return 'light';
  return (document.documentElement.getAttribute('data-theme') as Theme) || 'light';
}

function getServerSnapshot(): Theme {
  return 'light';
}

export function useTheme() {
  const theme = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const toggleTheme = useCallback((targetTheme?: Theme) => {
    const current = (document.documentElement.getAttribute('data-theme') as Theme) || 'light';
    const next = targetTheme || (current === 'light' ? 'dark' : 'light');
    localStorage.setItem('hps_theme', next);
    document.documentElement.setAttribute('data-theme', next);
    window.dispatchEvent(new Event('themechange'));
  }, []);

  return { theme, toggleTheme, mounted: true };
}

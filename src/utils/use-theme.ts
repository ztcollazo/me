import { useEffect, useState } from 'react';

const useTheme = (): 'dark' | 'light' => {
  const [theme, setTheme] = useState<'dark' | 'light'>('light');

  const listener = (media) => {
    if (media.matches) {
      setTheme('dark');
      document.cookie = 'z-theme-dark: true';
    } else {
      setTheme('light');
      document.cookie = 'z-theme-dark: false';
    }
  };

  useEffect(() => {
    if (typeof window === 'undefined') {
      setTheme('light');
    } else {
      const media = window.matchMedia('(prefers-color-scheme: dark)');
      listener(media);
      media.addEventListener('change', listener);
      return () => media.removeEventListener('change', listener);
    }
  });

  return theme;
};

export default useTheme;
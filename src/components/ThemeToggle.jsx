import { Moon, Sun } from 'lucide-react';
import { useEffect, useState } from 'react';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('infp-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const shouldUseDark = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDark(shouldUseDark);
    document.documentElement.classList.toggle('dark', shouldUseDark);
  }, []);

  const toggleTheme = () => {
    const nextValue = !isDark;
    setIsDark(nextValue);
    document.documentElement.classList.toggle('dark', nextValue);
    localStorage.setItem('infp-theme', nextValue ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/75 text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
      aria-label={isDark ? '切换到浅色模式' : '切换到深色模式'}
      title={isDark ? '切换到浅色模式' : '切换到深色模式'}
    >
      {isDark ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  );
}

export default ThemeToggle;

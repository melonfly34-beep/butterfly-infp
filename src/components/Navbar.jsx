import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';

const navItems = [
  { label: '首页', href: '#top' },
  { label: '测试链接', href: '#test-links' },
  { label: '小蝴蝶简介', href: '#little-butterfly' },
  { label: '荣格八维介绍', href: '#jung-functions' },
];

function ForestMark() {
  return (
    <span className="relative flex h-8 w-10 items-end justify-center" aria-hidden="true">
      <span className="absolute bottom-0 left-1 h-3 w-2 rounded-sm bg-[#8b6f58] dark:bg-[#9f816a]" />
      <span className="absolute bottom-2 left-0 h-0 w-0 border-x-[9px] border-b-[22px] border-x-transparent border-b-[#3d8b74] dark:border-b-[#6db29a]" />
      <span className="absolute bottom-0 right-2 h-3 w-2 rounded-sm bg-[#7a604e] dark:bg-[#9f816a]" />
      <span className="absolute bottom-2 right-0 h-0 w-0 border-x-[11px] border-b-[28px] border-x-transparent border-b-[#2f765f] dark:border-b-[#83c0a9]" />
      <span className="absolute right-8 top-1 h-3 w-3 rounded-full bg-sage/90 dark:bg-sage/70" />
    </span>
  );
}

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#top');

  useEffect(() => {
    const topLevelSections = Array.from(document.querySelectorAll('main > .section-shell'));
    navItems.forEach((item, index) => {
      if (!document.querySelector(item.href) && topLevelSections[index]) {
        topLevelSections[index].id = item.href.slice(1);
      }
    });

    const sections = navItems
      .map((item) => document.querySelector(item.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible) {
          setActiveHref(`#${visible.target.id}`);
        }
      },
      {
        rootMargin: '-18% 0px -58% 0px',
        threshold: [0.12, 0.28, 0.46, 0.64],
      },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (event, href) => {
    event.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;

    setIsOpen(false);
    setActiveHref(href);
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navLinkClass = (href, mobile = false) => {
    const isActive = activeHref === href;
    const base =
      'focus-ring rounded-full text-sm font-medium transition hover:-translate-y-0.5';
    const size = mobile ? 'px-4 py-3 text-left' : 'px-3 py-2';
    const active =
      'bg-[#2f765f] text-white shadow-sm dark:bg-sage dark:text-slate-950';
    const inactive =
      'text-slate-600 hover:bg-white/70 hover:text-ink dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white';

    return `${base} ${size} ${isActive ? active : inactive}`;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/45 bg-cream/72 shadow-[0_10px_34px_rgba(90,102,94,0.10)] backdrop-blur-2xl transition-colors dark:border-white/10 dark:bg-slate-950/58 dark:shadow-[0_10px_34px_rgba(0,0,0,0.24)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8" aria-label="主导航">
        <a
          href="#top"
          onClick={(event) => handleNavClick(event, '#top')}
          className="focus-ring flex shrink-0 items-center gap-2 rounded-full pr-2 text-sm font-semibold tracking-normal text-ink dark:text-white"
        >
          <ForestMark />
          <span className="hidden sm:inline">蝴蝶种群观测笔记</span>
          <span className="sm:hidden">INFP 星球</span>
        </a>

        <div className="hidden items-center gap-2 lg:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className={navLinkClass(item.href)}
              aria-current={activeHref === item.href ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <ThemeToggle />
          <button
            type="button"
            onClick={() => setIsOpen((current) => !current)}
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/70 bg-white/75 text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 lg:hidden"
            aria-label={isOpen ? '关闭导航菜单' : '打开导航菜单'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <div
        className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}
      >
        <div className="mx-auto grid max-w-6xl gap-1 px-5 pb-4 sm:px-6">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(event) => handleNavClick(event, item.href)}
              className={navLinkClass(item.href, true)}
              aria-current={activeHref === item.href ? 'page' : undefined}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

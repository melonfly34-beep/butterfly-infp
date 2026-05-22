import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';

const navItems = [
  { label: '首页', href: '#top' },
  { label: '测试链接', href: '#test-links' },
  { label: '小蝴蝶简介', href: '#little-butterfly' },
  { label: '荣格八维介绍', href: '#jung-functions' },
];

function ButterflyPersonMark() {
  return (
    <svg className="h-9 w-11 shrink-0" viewBox="0 0 76 58" fill="none" aria-hidden="true">
      <path className="fill-lavender/90 dark:fill-violet-200/45" d="M34 28C21 10 8 8 5 20 1 35 18 38 34 31z" />
      <path className="fill-blush/90 dark:fill-fuchsia-200/45" d="M42 28C55 10 68 8 71 20c4 15-13 18-29 11z" />
      <path className="fill-sage/90 dark:fill-emerald-200/35" d="M34 33c-12 2-21 10-15 18 7 8 16-3 18-15z" />
      <path className="fill-mist dark:fill-sky-200/35" d="M42 33c12 2 21 10 15 18-7 8-16-3-18-15z" />
      <path className="fill-[#d9e567] dark:fill-[#c8d980]" d="m28 14 12-8 13 9-4 18H31z" />
      <path className="fill-[#f3cfb8] dark:fill-[#e7c2ad]" d="M28 19h21v18c0 6-4 10-10 10s-11-4-11-10z" />
      <path className="fill-[#2f765f] dark:fill-[#78b9a3]" d="m30 36 9 5 9-5 9 18H21z" />
      <path className="fill-[#27644f] dark:fill-[#5fa28d]" d="m39 41 9-5 9 18H39z" />
      <path className="stroke-[#5b5266] dark:stroke-white/70" strokeWidth="2.2" strokeLinecap="round" d="M35 29h.1M44 29h.1M36 36c2 2 5 2 7 0M33 12 26 5M45 12l7-7" />
      <path className="stroke-[#6d5a50] dark:stroke-[#c9b8ad]" strokeWidth="2.4" strokeLinecap="round" d="M31 54v-4M47 54v-4" />
      <path className="fill-white/55 dark:fill-white/20" d="m13 20 12 2-10 9zM60 20l-12 2 10 9z" />
    </svg>
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
          <ButterflyPersonMark />
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

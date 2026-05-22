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
    <svg className="h-11 w-10 shrink-0" viewBox="0 0 70 82" fill="none" aria-hidden="true">
      <ellipse className="fill-slate-400/20 dark:fill-white/10" cx="31" cy="76" rx="15" ry="3" />

      <path className="fill-[#2f8a72] dark:fill-[#77bca6]" d="m8 10 12 5-9 10z" />
      <path className="fill-[#7fb59d] dark:fill-[#9bd3bd]" d="m20 15 10-9-4 16z" />
      <path className="fill-[#2f8a72] dark:fill-[#77bca6]" d="m55 13 10-8-2 16z" />
      <path className="fill-[#7fb59d] dark:fill-[#9bd3bd]" d="m55 13-9-8 1 16z" />

      <path className="fill-[#d5e95d] dark:fill-[#cddf78]" d="M27 8 48 2 55 24 38 30 20 20z" />
      <path className="fill-[#bcd84f] dark:fill-[#acc96b]" d="M20 20 38 30 28 63 10 53 13 29z" />
      <path className="fill-[#e4ed7b] dark:fill-[#d5e58e]" d="M27 8 20 20 13 49 6 38 12 17z" />
      <path className="fill-[#86a85b] dark:fill-[#91b979]" d="m20 20 18 10-8 17-15-9z" />

      <path className="fill-[#f0c4a8] dark:fill-[#dfb89f]" d="m38 18 17 8-2 19-17 9-8-20z" />
      <path className="fill-[#d9a88e] dark:fill-[#c89d89]" d="m55 26-2 19-8-5 2-17z" />
      <path className="fill-[#2f765f] dark:fill-[#6fb39d]" d="m25 44 17-4 13 18-27 9z" />
      <path className="fill-[#1f6f5a] dark:fill-[#5b9c88]" d="m28 67 27-9-10 19H27z" />
      <path className="fill-[#67a26e] dark:fill-[#86c191]" d="m25 44 3 23-12-12z" />

      <path className="stroke-[#f0c4a8] dark:stroke-[#dfb89f]" strokeWidth="4" strokeLinecap="round" d="m22 54-8 9M51 48l11 8" />
      <path className="stroke-[#f0c4a8] dark:stroke-[#dfb89f]" strokeWidth="4" strokeLinecap="round" d="m30 67-8 10M47 66l-1 11" />
      <path className="fill-[#f0c4a8] dark:fill-[#dfb89f]" d="m12 63 7 1-7 7zM20 77l8 1-9 4z" />

      <path className="stroke-[#6a5a54] dark:stroke-[#f2e4d8]" strokeWidth="2" strokeLinecap="round" d="M43 31h.1M51 34h.1M45 41c2 2 5 2 7 0" />
      <path className="stroke-[#8fb83d] dark:stroke-[#c7dc77]" strokeWidth="2" strokeLinecap="round" d="m62 56 1 13" />
      <path className="fill-[#d7e84f] dark:fill-[#d8e575]" d="m63 49 3 6-3 4-3-4zM63 59l6 3-1 5-5-3zM63 59l-5 4-5-2 5-4zM63 49l-6-2-2-5 6 1zM63 49l5-4 5 1-4 5z" />
      <circle className="fill-[#f6f2bd] dark:fill-[#f2edb0]" cx="63" cy="56" r="3" />
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
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/45 bg-cream/70 shadow-[0_10px_34px_rgba(90,102,94,0.10)] backdrop-blur-2xl transition-colors dark:border-white/10 dark:bg-slate-950/60 dark:shadow-[0_10px_34px_rgba(0,0,0,0.24)]">
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

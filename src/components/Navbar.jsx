import { Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';
import ThemeToggle from './ThemeToggle.jsx';

const navItems = [
  { label: '首页', href: '#top' },
  { label: '测试链接', href: '#test-links' },
  { label: '小蝴蝶简介', href: '#little-butterfly' },
  { label: '荣格八维介绍', href: '#jung-functions' },
];

const navImage = `${import.meta.env.BASE_URL}images/mediator-intro.svg`;

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('#top');

  useEffect(() => {
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
    const base = 'focus-ring rounded-full text-sm font-medium transition hover:-translate-y-0.5';
    const size = mobile ? 'px-4 py-3 text-left' : 'px-3 py-2';
    const active = 'bg-[#2f765f] text-white shadow-sm dark:bg-[#d7e84f] dark:text-slate-950';
    const inactive = 'text-slate-600 hover:bg-white/80 hover:text-ink dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white';

    return `${base} ${size} ${isActive ? active : inactive}`;
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/60 bg-[#fbfbf6]/78 shadow-[0_10px_34px_rgba(90,102,94,0.08)] backdrop-blur-2xl transition-colors dark:border-white/10 dark:bg-[#11151f]/70 dark:shadow-[0_10px_34px_rgba(0,0,0,0.24)]">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3 sm:px-6 lg:px-8" aria-label="主导航">
        <a
          href="#top"
          onClick={(event) => handleNavClick(event, '#top')}
          className="focus-ring flex shrink-0 items-center gap-2 rounded-full pr-2 text-sm font-semibold tracking-normal text-ink dark:text-white"
        >
          <span className="h-10 w-10 overflow-hidden rounded-2xl border border-[#d8e2c8] bg-white shadow-sm dark:border-white/10 dark:bg-white/10">
            <img
              src={navImage}
              alt=""
              className="h-full w-full object-cover"
              style={{ objectPosition: '32% 46%' }}
              draggable="false"
            />
          </span>
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
            className="focus-ring inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#d8e2c8] bg-white/85 text-ink shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20 lg:hidden"
            aria-label={isOpen ? '关闭导航菜单' : '打开导航菜单'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>
      </nav>

      <div className={`lg:hidden ${isOpen ? 'block' : 'hidden'}`}>
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

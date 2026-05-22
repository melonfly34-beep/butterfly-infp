function Evergreen({ className = '', flip = false }) {
  return (
    <svg
      className={className}
      viewBox="0 0 92 150"
      fill="none"
      aria-hidden="true"
      style={{ transform: flip ? 'scaleX(-1)' : undefined }}
    >
      <path className="fill-[#8b6f58] dark:fill-[#9a7b67]" d="M40 112h14v34H40z" />
      <path className="fill-[#2d876f] dark:fill-[#79b8a2]" d="M47 6 15 64h26z" />
      <path className="fill-[#1f6f5a] dark:fill-[#5fa28d]" d="M47 6v58h30z" />
      <path className="fill-[#348d73] dark:fill-[#8bc8b1]" d="M45 43 8 104h35z" />
      <path className="fill-[#26755f] dark:fill-[#6fb39d]" d="M45 43v61h39z" />
      <path className="fill-[#3f987b] dark:fill-[#96d1bc]" d="M45 78 0 132h44z" />
      <path className="fill-[#2e7f66] dark:fill-[#77bca6]" d="M45 78v54h47z" />
    </svg>
  );
}

function Rock({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 130 62" fill="none" aria-hidden="true">
      <path className="fill-[#8f9b9c] dark:fill-[#64737a]" d="m9 48 22-28 41-9 45 18 5 19-38 8H24z" />
      <path className="fill-[#b4bec0] dark:fill-[#849198]" d="m31 20 24 17-31 19H9z" />
      <path className="fill-[#7f8d90] dark:fill-[#536269]" d="m55 37 17-26 45 18-33 27z" />
      <path className="fill-[#d6dfd3] dark:fill-[#91a18e]" d="m19 48 28-5 17 10-40 3z" />
      <path className="fill-[#cbd8c7] dark:fill-[#7f937e]" d="m75 48 24-9 18 9-33 8z" />
    </svg>
  );
}

function GrassTuft({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 82 42" fill="none" aria-hidden="true">
      <path className="stroke-[#5fa484] dark:stroke-[#8fc7aa]" strokeWidth="5" strokeLinecap="round" d="M12 36 27 13M31 36l7-28M49 36 43 11M63 36 54 18" />
      <path className="fill-[#d4de7d] dark:fill-[#c6d978]" d="M63 12c8-9 16 0 8 8-8-1-11-3-8-8Z" />
      <path className="fill-[#eef3a2] dark:fill-[#e1e895]" d="M18 8c7-7 13 1 7 7-7-1-10-2-7-7Z" />
    </svg>
  );
}

function Butterfly({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 78 54" fill="none" aria-hidden="true">
      <path className="fill-blush/80 dark:fill-fuchsia-200/35" d="M37 26C23 9 8 6 6 19c-2 14 15 15 29 10z" />
      <path className="fill-lavender/80 dark:fill-violet-200/35" d="M41 26C55 9 70 6 72 19c2 14-15 15-29 10z" />
      <path className="fill-sage/80 dark:fill-emerald-200/30" d="M36 30c-12 3-22 11-15 19 7 7 15-5 17-17z" />
      <path className="fill-mist/90 dark:fill-sky-200/30" d="M42 30c12 3 22 11 15 19-7 7-15-5-17-17z" />
      <path className="fill-[#5b5266] dark:fill-white/70" d="M36 17h6v27h-6z" />
    </svg>
  );
}

function Deer({ className = '' }) {
  return (
    <svg className={className} viewBox="0 0 210 128" fill="none" aria-hidden="true">
      <path className="fill-[#8d7969] dark:fill-[#8f7b72]" d="m51 48 86-18 51 26-32 38-79 4z" />
      <path className="fill-[#6d5b50] dark:fill-[#756862]" d="m137 30 51 26-13 16-56-8z" />
      <path className="fill-[#a3907e] dark:fill-[#a29086]" d="m51 48 26 50-42-9-16-25z" />
      <path className="fill-[#5f514b] dark:fill-[#74655f]" d="m19 64 17-27 30 13-31 39z" />
      <path className="fill-[#6d5b50] dark:fill-[#776762]" d="m156 94 13 2-8 28h-12zM88 97h13l-3 27H86zM41 89h13l-8 35H34z" />
      <path className="fill-[#4f4642] dark:fill-[#6b605d]" d="m170 55 21-16 12 8-17 17z" />
      <path className="stroke-[#5d4c43] dark:stroke-[#9d8d85]" strokeWidth="5" strokeLinecap="round" d="m193 39 8-21M193 39l-16-18M201 18l7-9M177 21l-8-8" />
      <path className="fill-[#f3eee0] dark:fill-[#d8d0bd]" d="m80 55 10-9 10 9-9 10zM122 51l9-8 11 7-8 11zM148 70l8-7 9 6-7 10zM60 72l8-7 10 7-8 10z" />
    </svg>
  );
}

function ForestBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,_rgba(255,250,242,0.18)_0%,_rgba(238,244,247,0.08)_46%,_rgba(247,220,231,0.12)_100%)] dark:bg-[linear-gradient(180deg,_rgba(16,20,33,0.08)_0%,_rgba(22,29,44,0.18)_100%)]" />

      <Evergreen className="absolute -left-6 top-[10%] h-36 w-24 opacity-55 dark:opacity-30 sm:left-5 sm:h-44 sm:w-28" />
      <Evergreen className="absolute left-[12%] top-[4%] hidden h-52 w-32 opacity-45 dark:opacity-25 md:block" flip />
      <Evergreen className="absolute right-[12%] top-[7%] h-44 w-28 opacity-45 dark:opacity-25 md:h-56 md:w-36" />
      <Evergreen className="absolute -right-8 top-[24%] h-40 w-28 opacity-45 dark:opacity-25 sm:right-6" flip />

      <Rock className="absolute left-[4%] top-[31%] h-16 w-36 opacity-45 dark:opacity-22" />
      <Rock className="absolute right-[6%] top-[42%] hidden h-20 w-44 opacity-40 dark:opacity-20 md:block" />
      <GrassTuft className="absolute left-[18%] top-[43%] h-12 w-24 opacity-50 dark:opacity-28" />
      <GrassTuft className="absolute right-[20%] top-[26%] h-12 w-24 opacity-45 dark:opacity-25" />

      <Butterfly className="absolute left-[7%] top-[64%] h-14 w-20 -rotate-12 opacity-45 dark:opacity-25" />
      <Butterfly className="absolute right-[8%] top-[68%] h-16 w-24 rotate-12 opacity-38 dark:opacity-22" />
      <Butterfly className="absolute left-[52%] top-[18%] hidden h-12 w-16 rotate-6 opacity-35 dark:opacity-20 lg:block" />

      <Deer className="absolute bottom-[8%] right-[5%] hidden h-32 w-52 opacity-25 dark:opacity-15 lg:block" />
      <Evergreen className="absolute bottom-[1%] left-[6%] h-48 w-32 opacity-38 dark:opacity-22 md:h-60 md:w-40" />
      <Evergreen className="absolute bottom-[6%] right-[23%] hidden h-40 w-28 opacity-30 dark:opacity-18 xl:block" flip />
      <Rock className="absolute bottom-[3%] left-[24%] h-16 w-36 opacity-35 dark:opacity-18" />
      <GrassTuft className="absolute bottom-[9%] right-[3%] h-12 w-24 opacity-40 dark:opacity-22" />
      <GrassTuft className="absolute bottom-[4%] left-[42%] hidden h-14 w-28 opacity-35 dark:opacity-20 md:block" />
    </div>
  );
}

export default ForestBackground;

function Footer() {
  return (
    <footer className="border-t border-white/50 bg-white/40 backdrop-blur dark:border-white/10 dark:bg-slate-950/40">
      <div className="mx-auto max-w-6xl px-5 py-10 sm:px-6 lg:px-8">
        <p className="text-lg font-semibold text-ink dark:text-white">INFP 星球</p>
        <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-600 dark:text-slate-300">
          “理想主义不是逃避现实，而是在现实里保留一盏灯。”
        </p>
        <p className="mt-5 max-w-3xl text-xs leading-6 text-slate-500 dark:text-slate-400">
          本网站内容仅用于自我探索、娱乐和个人成长参考，不构成心理学诊断、职业诊断或人格定论。
        </p>
      </div>
    </footer>
  );
}

export default Footer;

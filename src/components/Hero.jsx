import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { encouragements } from '../data/promptsData.js';

function Hero() {
  const [encouragement, setEncouragement] = useState(encouragements[0]);

  const showRandomEncouragement = () => {
    const next = encouragements[Math.floor(Math.random() * encouragements.length)];
    setEncouragement(next);
  };

  return (
    <section id="top" className="section-shell relative grid min-h-[calc(100vh-3.5rem)] items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        <span className="pill">蝴蝶种群观测笔记</span>
        <h1 className="mt-6 text-balance text-5xl font-semibold tracking-normal text-ink dark:text-white sm:text-6xl lg:text-7xl">
          INFP 星球
        </h1>
        <p className="mt-5 text-2xl font-medium leading-relaxed text-slate-700 dark:text-slate-200">
          给理想主义者的自我说明书
        </p>
        <p className="mt-6 max-w-2xl text-xl leading-9 text-slate-600 dark:text-slate-300">
          “你不是太敏感，只是接收世界的音量比别人更大。”
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href="#test-links"
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
          >
            开始探索
            <ArrowDown size={17} />
          </a>
          <button
            type="button"
            onClick={showRandomEncouragement}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-white/75 bg-white/70 px-6 py-3 text-sm font-semibold text-ink shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            <Sparkles size={17} />
            今日 INFP 鼓励语
          </button>
        </div>

        <motion.p
          key={encouragement}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-6 max-w-xl rounded-2xl border border-white/70 bg-white/60 px-5 py-4 text-sm leading-7 text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
        >
          {encouragement}
        </motion.p>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.96, rotate: -1 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
        className="relative mx-auto h-[360px] w-full max-w-[470px] sm:h-[470px]"
      >
        <div className="absolute inset-5 rounded-full bg-[conic-gradient(from_140deg,_#d8cdf4,_#f7dce7,_#bfd7c7,_#eef4f7,_#d8cdf4)] opacity-75 blur-2xl dark:opacity-35" />
        <div className="soft-card absolute inset-8 overflow-hidden rounded-full">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_35%_30%,_rgba(255,255,255,0.95),_transparent_30%),linear-gradient(145deg,_rgba(216,205,244,0.84),_rgba(238,244,247,0.88)_48%,_rgba(191,215,199,0.72))] dark:bg-[radial-gradient(circle_at_35%_30%,_rgba(255,255,255,0.25),_transparent_30%),linear-gradient(145deg,_rgba(98,89,147,0.72),_rgba(49,65,88,0.9)_52%,_rgba(77,104,89,0.7))]" />
          <div className="absolute left-[18%] top-[31%] h-24 w-36 -rotate-12 rounded-[58%_42%_58%_42%] bg-blush/70 shadow-lg dark:bg-fuchsia-200/25" />
          <div className="absolute right-[18%] top-[31%] h-24 w-36 rotate-12 rounded-[42%_58%_42%_58%] bg-lavender/75 shadow-lg dark:bg-violet-200/25" />
          <div className="absolute left-[23%] bottom-[27%] h-24 w-32 rotate-12 rounded-[42%_58%_50%_50%] bg-sage/75 shadow-lg dark:bg-emerald-200/20" />
          <div className="absolute right-[23%] bottom-[27%] h-24 w-32 -rotate-12 rounded-[58%_42%_50%_50%] bg-mist/90 shadow-lg dark:bg-sky-200/20" />
          <div className="absolute left-1/2 top-[32%] h-44 w-3 -translate-x-1/2 rounded-full bg-ink/40 dark:bg-white/60" />
          <div className="absolute left-[22%] top-[18%] h-2 w-2 rounded-full bg-white/90" />
          <div className="absolute right-[25%] top-[22%] h-3 w-3 rounded-full bg-white/80" />
          <div className="absolute bottom-[17%] left-[35%] h-2 w-2 rounded-full bg-white/90" />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;

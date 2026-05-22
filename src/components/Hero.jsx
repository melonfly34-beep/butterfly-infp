import { motion } from 'framer-motion';
import { ArrowDown, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { encouragements } from '../data/promptsData.js';
import LowPolyHeroScene from './LowPolyHeroScene.jsx';

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
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#2f765f] px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-[#27644f] dark:bg-[#d5e95d] dark:text-slate-950 dark:hover:bg-[#e4ed7b]"
          >
            开始探索
            <ArrowDown size={17} />
          </a>
          <button
            type="button"
            onClick={showRandomEncouragement}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-[#d5e95d]/45 bg-white/70 px-6 py-3 text-sm font-semibold text-[#2f765f] shadow-sm backdrop-blur transition hover:-translate-y-0.5 hover:bg-white dark:border-[#d5e95d]/25 dark:bg-white/10 dark:text-[#d5e95d] dark:hover:bg-white/20"
          >
            <Sparkles size={17} />
            今日 INFP 鼓励语
          </button>
        </div>

        <motion.p
          key={encouragement}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="poly-corner mt-6 max-w-xl rounded-[18px] border border-[#d8e2c8]/80 bg-white/70 px-5 py-4 text-sm leading-7 text-slate-600 shadow-sm backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-300"
        >
          {encouragement}
        </motion.p>
      </motion.div>

      <motion.div
        aria-hidden="true"
        initial={{ opacity: 0, scale: 0.96, rotate: -1 }}
        animate={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{ duration: 0.9, delay: 0.1, ease: 'easeOut' }}
        className="relative mx-auto h-[390px] w-full max-w-[500px] sm:h-[500px]"
      >
        <LowPolyHeroScene />
      </motion.div>
    </section>
  );
}

export default Hero;

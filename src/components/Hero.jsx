import { ArrowDown, Sparkles } from 'lucide-react';
import { useState } from 'react';
import { encouragements } from '../data/promptsData.js';

const heroImage = `${import.meta.env.BASE_URL}images/mediator-intro.svg`;

function Hero() {
  const [encouragement, setEncouragement] = useState(encouragements[0]);

  const showRandomEncouragement = () => {
    const next = encouragements[Math.floor(Math.random() * encouragements.length)];
    setEncouragement(next);
  };

  return (
    <section id="top" className="section-shell grid min-h-[calc(100vh-3.5rem)] items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
      <div>
        <p className="text-sm font-medium text-[#2f765f] dark:text-[#d7e84f]">蝴蝶种群观测笔记</p>
        <h1 className="mt-5 text-balance text-5xl font-semibold tracking-normal text-ink dark:text-white sm:text-6xl lg:text-7xl">
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
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-[#2f765f] px-6 py-3 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-[#27644f] dark:bg-[#d7e84f] dark:text-slate-950 dark:hover:bg-[#e6ee75]"
          >
            开始探索
            <ArrowDown size={17} />
          </a>
          <button
            type="button"
            onClick={showRandomEncouragement}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full border border-[#d8e2c8] bg-white/80 px-6 py-3 text-sm font-semibold text-[#2f765f] shadow-sm transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-[#d7e84f] dark:hover:bg-white/15"
          >
            <Sparkles size={17} />
            今日 INFP 鼓励语
          </button>
        </div>

        <p className="mt-6 max-w-xl rounded-2xl border border-[#e1e6d8] bg-white/80 px-5 py-4 text-sm leading-7 text-slate-600 shadow-sm dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
          {encouragement}
        </p>
      </div>

      <figure className="mx-auto w-full max-w-[720px]">
        <img
          src={heroImage}
          alt="低多边形风格的 INFP 小蝴蝶人物在森林中行走"
          className="h-auto w-full select-none"
          draggable="false"
        />
      </figure>
    </section>
  );
}

export default Hero;

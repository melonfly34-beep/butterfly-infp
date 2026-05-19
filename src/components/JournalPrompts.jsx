import { motion } from 'framer-motion';
import { PenLine, RefreshCw } from 'lucide-react';
import { useState } from 'react';
import { journalPrompts } from '../data/promptsData.js';

function JournalPrompts() {
  const [prompt, setPrompt] = useState(journalPrompts[0]);

  const randomPrompt = () => {
    const next = journalPrompts[Math.floor(Math.random() * journalPrompts.length)];
    setPrompt(next);
  };

  return (
    <section className="section-shell">
      <div className="soft-card overflow-hidden">
        <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="bg-[linear-gradient(140deg,_rgba(216,205,244,0.62),_rgba(247,220,231,0.62),_rgba(191,215,199,0.55))] p-7 dark:bg-[linear-gradient(140deg,_rgba(98,89,147,0.32),_rgba(115,79,116,0.24),_rgba(77,104,89,0.22))] sm:p-9">
            <span className="pill">INFP 日记 Prompt</span>
            <h2 className="section-title mt-5">把模糊的情绪，放到纸面上看一看。</h2>
            <p className="section-copy">
              写日记不必完整、漂亮或有结论。它可以只是给内心留一个诚实的位置。
            </p>
          </div>

          <div className="flex flex-col justify-center p-7 sm:p-9">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blush/80 text-rose-700 dark:bg-rose-300/20 dark:text-rose-100">
              <PenLine size={22} />
            </div>
            <motion.p
              key={prompt}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-6 text-balance text-2xl font-semibold leading-relaxed text-ink dark:text-white"
            >
              {prompt}
            </motion.p>
            <button
              type="button"
              onClick={randomPrompt}
              className="focus-ring mt-8 inline-flex w-fit items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              <RefreshCw size={17} />
              随机生成日记问题
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default JournalPrompts;

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { personalityTests } from '../data/testsData.js';

function TestLinks() {
  return (
    <section className="section-shell">
      <span className="pill">人格探索小屋</span>
      <h2 className="section-title mt-5">把测试当作镜子，而不是判决书。</h2>
      <p className="section-copy">
        测试结果不是标签，而是一面镜子。它可以帮助你观察自己，但不应该替你定义自己。
      </p>

      <div className="mt-9 grid gap-5 lg:grid-cols-3">
        {personalityTests.map((test, index) => (
          <motion.article
            key={test.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="soft-card flex flex-col p-6"
          >
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
              {test.type}
            </span>
            <h3 className="mt-4 text-2xl font-semibold leading-snug text-ink dark:text-white">{test.name}</h3>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-700 dark:text-slate-100">适合人群：</span>
              {test.audience}
            </p>
            <p className="mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{test.description}</p>
            <a
              href={test.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-slate-700 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100"
            >
              开始测试
              <ExternalLink size={17} />
            </a>
          </motion.article>
        ))}
      </div>

      <p className="mt-7 rounded-2xl border border-white/70 bg-white/50 px-5 py-4 text-sm leading-7 text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
        以下测试仅用于自我探索和娱乐参考，不构成心理诊断、职业诊断或人格定论。不同测试结果可能不一致，请结合自身经验理解。
      </p>
    </section>
  );
}

export default TestLinks;

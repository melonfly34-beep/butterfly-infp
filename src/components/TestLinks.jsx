import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { personalityTests } from '../data/testsData.js';

const cardShapes = [
  'bg-[#d5e95d] text-[#2f765f] [clip-path:polygon(12%_0,100%_10%,82%_88%,22%_100%,0_36%)]',
  'bg-[#2f8a72] text-white [clip-path:polygon(0_18%,74%_0,100%_56%,68%_100%,8%_84%)]',
  'bg-[#f0c4a8] text-[#6a5a54] [clip-path:polygon(18%_0,100%_24%,80%_100%,0_72%)]',
];

function TestLinks() {
  return (
    <section id="test-links" className="section-shell">
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
            className="soft-card poly-corner flex flex-col p-6"
          >
            <div className="relative z-10 flex items-start justify-between gap-4">
              <span className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-500 dark:text-slate-400">
                {test.type}
              </span>
              <span className={`flex h-12 w-12 shrink-0 items-center justify-center text-sm font-bold ${cardShapes[index % cardShapes.length]}`}>
                0{index + 1}
              </span>
            </div>
            <h3 className="relative z-10 mt-4 text-2xl font-semibold leading-snug text-ink dark:text-white">{test.name}</h3>
            <p className="relative z-10 mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
              <span className="font-semibold text-slate-700 dark:text-slate-100">适合人群：</span>
              {test.audience}
            </p>
            <p className="relative z-10 mt-3 flex-1 text-sm leading-7 text-slate-600 dark:text-slate-300">{test.description}</p>
            <a
              href={test.url}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring relative z-10 mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#2f765f] px-5 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#27644f] dark:bg-[#d5e95d] dark:text-slate-950 dark:hover:bg-[#e4ed7b]"
            >
              开始测试
              <ExternalLink size={17} />
            </a>
          </motion.article>
        ))}
      </div>

      <p className="poly-corner relative mt-7 overflow-hidden rounded-[18px] border border-[#d8e2c8]/80 bg-white/60 px-5 py-4 text-sm leading-7 text-slate-600 backdrop-blur dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
        以下测试仅用于自我探索和娱乐参考，不构成心理诊断、职业诊断或人格定论。不同测试结果可能不一致，请结合自身经验理解。
      </p>
    </section>
  );
}

export default TestLinks;

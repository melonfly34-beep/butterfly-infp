import { motion } from 'framer-motion';
import { Flower2, Leaf } from 'lucide-react';

const strengths = ['共情力', '创造力', '价值感', '想象力', '真诚', '内省能力'];
const challenges = ['过度内耗', '拖延', '逃避冲突', '理想化', '自我怀疑', '执行力不足'];

function TraitGroup({ title, intro, items, icon: Icon, tone }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.55 }}
      className="soft-card p-6 sm:p-8"
    >
      <div className="flex items-center gap-3">
        <div className={`flex h-11 w-11 items-center justify-center rounded-2xl ${tone}`}>
          <Icon size={21} />
        </div>
        <h3 className="text-2xl font-semibold text-ink dark:text-white">{title}</h3>
      </div>
      <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{intro}</p>
      <div className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="rounded-2xl border border-white/75 bg-white/60 px-4 py-3 text-sm font-medium text-slate-700 dark:border-white/10 dark:bg-white/10 dark:text-slate-200"
          >
            {item}
          </div>
        ))}
      </div>
    </motion.article>
  );
}

function Traits() {
  return (
    <section id="traits" className="section-shell">
      <span className="pill">常见特质</span>
      <h2 className="section-title mt-5">优势和挑战，常常来自同一套敏锐的系统。</h2>
      <p className="section-copy">
        下面不是对每个 INFP 的绝对判断，而是一些常见倾向。你可以把它们当作观察入口，看看哪些与你的生活经验相互印证。
      </p>

      <div className="mt-9 grid gap-5 lg:grid-cols-2">
        <TraitGroup
          title="可能的优势"
          intro="当内在价值感稳定时，INFP 往往能把细腻感受转化成理解、表达和创造。"
          items={strengths}
          icon={Flower2}
          tone="bg-blush/75 text-rose-700 dark:bg-rose-300/20 dark:text-rose-100"
        />
        <TraitGroup
          title="常见挑战"
          intro="当压力太大或目标过于模糊时，同样的敏感可能变成犹豫、消耗和回避。"
          items={challenges}
          icon={Leaf}
          tone="bg-sage/75 text-emerald-800 dark:bg-emerald-300/20 dark:text-emerald-100"
        />
      </div>
    </section>
  );
}

export default Traits;

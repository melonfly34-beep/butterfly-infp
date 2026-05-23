import { motion } from 'framer-motion';

const functionPairs = [
  {
    title: 'Fi / Fe',
    name: '情感判断',
    text: 'Fi 更关注内在是否真诚一致；Fe 更关注关系氛围与外部情绪流动。两者都与情感有关，但观察方向不同。',
  },
  {
    title: 'Ne / Ni',
    name: '直觉感知',
    text: 'Ne 倾向于发散可能性，看见许多入口；Ni 倾向于收束线索，形成一个更集中的预感或洞察。',
  },
  {
    title: 'Si / Se',
    name: '感觉感知',
    text: 'Si 更容易回到经验、记忆和稳定参照；Se 更直接地回应当下环境、身体感受和现场变化。',
  },
  {
    title: 'Te / Ti',
    name: '思考判断',
    text: 'Te 倾向于把事情组织成可执行结果；Ti 倾向于检查概念内部是否自洽、逻辑是否清晰。',
  },
];

function JungFunctionsIntro() {
  return (
    <section id="jung-functions" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <span className="pill">荣格八维介绍</span>
        <h2 className="section-title mt-5">八维不是八种能力排名，而是理解注意力流向的地图。</h2>
        <p className="section-copy">
          荣格八维通常把心理功能分成四组：情感、直觉、感觉、思考；每组又有内倾和外倾两个方向。
          对 INFP 来说，常见描述会把 Fi、Ne、Si、Te 放在更显眼的位置，但每个人的具体体验仍然会不同。
        </p>
      </motion.div>

      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {functionPairs.map((item, index) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="soft-card p-6"
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="text-2xl font-semibold text-ink dark:text-white">{item.title}</h3>
              <span className="rounded-full border border-[#d8e2c8] bg-[#f6f8ef] px-4 py-2 text-xs font-semibold text-[#2f765f] dark:border-white/10 dark:bg-white/10 dark:text-[#d7e84f]">
                {item.name}
              </span>
            </div>
            <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
          </motion.article>
        ))}
      </div>

      <p className="mt-7 rounded-2xl border border-[#e1e6d8] bg-white/80 px-5 py-4 text-sm leading-7 text-slate-600 dark:border-white/10 dark:bg-white/10 dark:text-slate-300">
        认知功能适合用来复盘“我为什么这样感受、这样联想、这样做决定”，但它不构成心理诊断，也不应该替你决定职业、关系或人生方向。
      </p>
    </section>
  );
}

export default JungFunctionsIntro;

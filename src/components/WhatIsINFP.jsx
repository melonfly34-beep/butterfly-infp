import { motion } from 'framer-motion';

const letters = [
  {
    letter: 'I',
    title: '内倾',
    text: '可能更习惯从独处、安静观察和内在整理中恢复能量。',
  },
  {
    letter: 'N',
    title: '直觉',
    text: '倾向于关注可能性、隐含意义，以及事物背后的连接。',
  },
  {
    letter: 'F',
    title: '情感',
    text: '常见表现是重视价值、感受和关系中的真实与善意。',
  },
  {
    letter: 'P',
    title: '知觉',
    text: '可能更喜欢保留弹性，在探索中慢慢找到合适的方向。',
  },
];

function WhatIsINFP() {
  return (
    <section id="what-is-infp" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <span className="pill">INFP 是什么</span>
        <h2 className="section-title mt-5">它更像一张观察地图，而不是一张身份标签。</h2>
        <p className="section-copy">
          INFP 通常被理解为一种偏好组合：一个人可能更常从内在价值、想象力和开放探索中理解世界。
          但 MBTI 只是自我探索工具，不是心理诊断，也不应该替你决定人生方向。
        </p>
      </motion.div>

      <div className="mt-9 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {letters.map((item, index) => (
          <motion.article
            key={item.letter}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.45, delay: index * 0.06 }}
            className="soft-card p-6"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender/70 text-xl font-semibold text-ink dark:bg-white/10 dark:text-white">
              {item.letter}
            </div>
            <h3 className="mt-5 text-xl font-semibold text-ink dark:text-white">{item.title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
          </motion.article>
        ))}
      </div>
    </section>
  );
}

export default WhatIsINFP;

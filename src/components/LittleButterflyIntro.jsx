import { motion } from 'framer-motion';
import { Compass, Flower2, Leaf, Sprout } from 'lucide-react';

const butterflyFunctions = [
  {
    title: 'Fi：内在价值的罗盘',
    icon: Compass,
    text: '小蝴蝶常常先问“这件事对我来说是否真实、是否重要”。这不是任性，而是更习惯从内在价值感出发理解世界。',
  },
  {
    title: 'Ne：向可能性展开翅膀',
    icon: Flower2,
    text: '当一个想法出现时，Ne 会自然联想到更多可能：故事、关系、隐喻、未来版本。灵感多，方向也容易变多。',
  },
  {
    title: 'Si：把记忆留在身上',
    icon: Leaf,
    text: '过去的经验、气味、文字和场景，可能会在心里停留很久。它们像标本，也像提醒，帮助小蝴蝶辨认熟悉与安全。',
  },
  {
    title: 'Te：把愿望落到地面',
    icon: Sprout,
    text: 'Te 是小蝴蝶需要练习的落地能力：把灵感拆成步骤，把感受整理成决定，把想做的事推进一点点。',
  },
];

function LittleButterflyIntro() {
  return (
    <section id="little-butterfly" className="section-shell">
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
      >
        <span className="pill">小蝴蝶简介</span>
        <h2 className="section-title mt-5">从荣格八维看，小蝴蝶更像一套温柔的感知系统。</h2>
        <p className="section-copy">
          这里的“小蝴蝶”不是给 INFP 贴上固定标签，而是用 Fi、Ne、Si、Te 这组常见功能顺序，描述一种可能的内在运作方式。
          你可以把它当成观察自己的语言，而不是判断自己的标准。
        </p>
      </motion.div>

      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {butterflyFunctions.map((item, index) => {
          const Icon = item.icon;
          return (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="soft-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-sage/70 text-emerald-800 dark:bg-emerald-300/20 dark:text-emerald-100">
                  <Icon size={21} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink dark:text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{item.text}</p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default LittleButterflyIntro;

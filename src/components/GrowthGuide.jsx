import { motion } from 'framer-motion';
import { Compass, Hand, Hourglass, Sprout } from 'lucide-react';

const guides = [
  {
    title: '如何减少精神内耗',
    icon: Compass,
    text: '内耗常来自反复推演、担心伤害别人，或试图找到完美答案。',
    advice: '把脑内问题写成两栏：事实是什么、我在猜测什么。先处理事实，猜测留到有证据时再判断。',
  },
  {
    title: '如何应对拖延',
    icon: Hourglass,
    text: '拖延可能不是没有动力，而是任务太大、标准太高，或开始前已经被想象压垮。',
    advice: '把任务改成一个五分钟动作：打开文件、写三行、列一个清单。先降低启动门槛。',
  },
  {
    title: '如何建立人际边界',
    icon: Hand,
    text: '共情强的人容易自动接住别人的情绪，但理解不等于必须承担。',
    advice: '练习一句边界表达：我能理解你的感受，但我现在需要一点时间处理自己的状态。',
  },
  {
    title: '如何把灵感变成行动',
    icon: Sprout,
    text: '灵感需要一个落点，否则它很容易停留在想象里，并逐渐变成压力。',
    advice: '给每个灵感配一个最小版本：一页草稿、一个标题、一次尝试。先让它出现在现实中。',
  },
];

function GrowthGuide() {
  return (
    <section className="section-shell">
      <span className="pill">成长指南</span>
      <h2 className="section-title mt-5">不是逼自己变硬，而是学会更稳地柔软。</h2>
      <p className="section-copy">
        INFP 的成长不必从否定自己开始。更实际的路径，是把情绪、灵感和价值感放进可执行的日常结构里。
      </p>

      <div className="mt-9 grid gap-5 md:grid-cols-2">
        {guides.map((guide, index) => {
          const Icon = guide.icon;
          return (
            <motion.article
              key={guide.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: index * 0.05 }}
              className="soft-card p-6"
            >
              <div className="flex items-start gap-4">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mist text-slate-700 dark:bg-white/10 dark:text-slate-100">
                  <Icon size={20} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-ink dark:text-white">{guide.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600 dark:text-slate-300">{guide.text}</p>
                  <p className="mt-4 rounded-2xl bg-white/60 px-4 py-3 text-sm leading-7 text-slate-700 dark:bg-white/10 dark:text-slate-200">
                    {guide.advice}
                  </p>
                </div>
              </div>
            </motion.article>
          );
        })}
      </div>
    </section>
  );
}

export default GrowthGuide;

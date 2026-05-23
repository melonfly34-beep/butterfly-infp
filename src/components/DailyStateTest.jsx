import { motion } from 'framer-motion';
import { RotateCcw, Wand2 } from 'lucide-react';
import { useMemo, useState } from 'react';
import { stateQuestions, stateResults } from '../data/testsData.js';

function DailyStateTest() {
  const [answers, setAnswers] = useState({});

  const resultKey = useMemo(() => {
    if (Object.keys(answers).length < stateQuestions.length) return null;

    const scores = Object.values(answers).reduce((acc, value) => {
      acc[value] = (acc[value] || 0) + 1;
      return acc;
    }, {});

    return Object.entries(scores).sort((a, b) => b[1] - a[1])[0][0];
  }, [answers]);

  const result = resultKey ? stateResults[resultKey] : null;

  return (
    <section id="daily-state-test" className="section-shell">
      <span className="pill">今日 INFP 状态测试</span>
      <h2 className="section-title mt-5">用四个问题，观察今天的自己。</h2>
      <p className="section-copy">
        这个小测试只用于当下状态觉察，不代表固定人格，也不替代任何专业判断。
      </p>

      <div className="mt-9 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-4">
          {stateQuestions.map((item, questionIndex) => (
            <motion.article
              key={item.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.45, delay: questionIndex * 0.05 }}
              className="soft-card p-5"
            >
              <p className="font-semibold text-ink dark:text-white">
                {questionIndex + 1}. {item.question}
              </p>
              <div className="mt-4 flex flex-wrap gap-3">
                {item.options.map((option) => {
                  const active = answers[item.id] === option.value;
                  return (
                    <button
                      key={option.label}
                      type="button"
                      onClick={() => setAnswers((current) => ({ ...current, [item.id]: option.value }))}
                      className={`focus-ring rounded-full border px-4 py-2 text-sm font-medium transition ${
                        active
                          ? 'border-ink bg-ink text-white dark:border-white dark:bg-white dark:text-slate-950'
                          : 'border-white/80 bg-white/60 text-slate-700 hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-slate-200 dark:hover:bg-white/20'
                      }`}
                    >
                      {option.label}
                    </button>
                  );
                })}
              </div>
            </motion.article>
          ))}
        </div>

        <motion.aside
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
          className="soft-card flex min-h-[310px] flex-col justify-between p-6"
        >
          <div>
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lavender/75 text-ink dark:bg-white/10 dark:text-white">
              <Wand2 size={21} />
            </div>
            {result ? (
              <motion.div key={result.title} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}>
                <h3 className="mt-6 text-2xl font-semibold text-ink dark:text-white">{result.title}</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">{result.text}</p>
                <p className="mt-5 rounded-2xl bg-white/60 px-4 py-3 text-sm leading-7 text-slate-700 dark:bg-white/10 dark:text-slate-200">
                  {result.advice}
                </p>
              </motion.div>
            ) : (
              <div>
                <h3 className="mt-6 text-2xl font-semibold text-ink dark:text-white">等待你的四个选择</h3>
                <p className="mt-4 text-sm leading-7 text-slate-600 dark:text-slate-300">
                  回答完问题后，这里会生成一个今天的状态结果。它不是结论，只是一张当日天气图。
                </p>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setAnswers({})}
            className="focus-ring mt-6 inline-flex items-center justify-center gap-2 rounded-full border border-white/75 bg-white/70 px-5 py-3 text-sm font-semibold text-ink transition hover:-translate-y-0.5 hover:bg-white dark:border-white/10 dark:bg-white/10 dark:text-white dark:hover:bg-white/20"
          >
            <RotateCcw size={17} />
            重新选择
          </button>
        </motion.aside>
      </div>
    </section>
  );
}

export default DailyStateTest;

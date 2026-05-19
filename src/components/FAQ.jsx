import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { faqItems } from '../data/faqData.js';

function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="section-shell">
      <span className="pill">常见误解 FAQ</span>
      <h2 className="section-title mt-5">把标签松开一点，人才更容易被看见。</h2>
      <p className="section-copy">
        这些回答不试图定义所有 INFP，只是帮助你从更宽的角度理解一些常见说法。
      </p>

      <div className="mt-9 space-y-3">
        {faqItems.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <article key={item.question} className="soft-card overflow-hidden">
              <button
                type="button"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
                className="focus-ring flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-6"
                aria-expanded={isOpen}
              >
                <span className="text-base font-semibold text-ink dark:text-white">{item.question}</span>
                <ChevronDown
                  size={20}
                  className={`shrink-0 text-slate-500 transition-transform dark:text-slate-300 ${
                    isOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.24, ease: 'easeOut' }}
                  >
                    <p className="border-t border-white/70 px-5 py-5 text-sm leading-7 text-slate-600 dark:border-white/10 dark:text-slate-300 sm:px-6">
                      {item.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default FAQ;

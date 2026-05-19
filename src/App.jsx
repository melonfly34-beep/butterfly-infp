import Hero from './components/Hero.jsx';
import WhatIsINFP from './components/WhatIsINFP.jsx';
import Traits from './components/Traits.jsx';
import GrowthGuide from './components/GrowthGuide.jsx';
import DailyStateTest from './components/DailyStateTest.jsx';
import TestLinks from './components/TestLinks.jsx';
import JournalPrompts from './components/JournalPrompts.jsx';
import FAQ from './components/FAQ.jsx';
import Footer from './components/Footer.jsx';
import ThemeToggle from './components/ThemeToggle.jsx';

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(216,205,244,0.46),_transparent_31%),radial-gradient(circle_at_88%_12%,_rgba(247,220,231,0.55),_transparent_28%),linear-gradient(135deg,_#fffaf2_0%,_#eef4f7_48%,_#f8edf3_100%)] text-ink transition-colors dark:bg-[radial-gradient(circle_at_top_left,_rgba(94,86,145,0.34),_transparent_33%),radial-gradient(circle_at_84%_8%,_rgba(115,79,116,0.22),_transparent_30%),linear-gradient(135deg,_#101421_0%,_#151b2b_52%,_#1d2131_100%)] dark:text-slate-100">
      <div className="fixed inset-x-0 top-0 z-50 border-b border-white/40 bg-cream/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/50">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3 sm:px-6 lg:px-8">
          <a href="#top" className="focus-ring rounded-full text-sm font-semibold tracking-normal text-ink dark:text-white">
            蝴蝶种群观测笔记
          </a>
          <ThemeToggle />
        </div>
      </div>
      <main id="top" className="pt-14">
        <Hero />
        <WhatIsINFP />
        <Traits />
        <GrowthGuide />
        <DailyStateTest />
        <TestLinks />
        <JournalPrompts />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

export default App;

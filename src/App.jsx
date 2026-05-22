import Hero from './components/Hero.jsx';
import TestLinks from './components/TestLinks.jsx';
import LittleButterflyIntro from './components/LittleButterflyIntro.jsx';
import JungFunctionsIntro from './components/JungFunctionsIntro.jsx';
import Footer from './components/Footer.jsx';
import ForestBackground from './components/ForestBackground.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[linear-gradient(135deg,_#fffaf2_0%,_#eef1df_44%,_#e8f0eb_100%)] text-ink transition-colors dark:bg-[linear-gradient(135deg,_#101421_0%,_#17231f_48%,_#20233a_100%)] dark:text-slate-100">
      <ForestBackground />
      <Navbar />
      <main className="relative z-10 pt-16">
        <Hero />
        <TestLinks />
        <LittleButterflyIntro />
        <JungFunctionsIntro />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;

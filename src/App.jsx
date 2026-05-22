import Hero from './components/Hero.jsx';
import TestLinks from './components/TestLinks.jsx';
import LittleButterflyIntro from './components/LittleButterflyIntro.jsx';
import JungFunctionsIntro from './components/JungFunctionsIntro.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(216,205,244,0.46),_transparent_31%),radial-gradient(circle_at_88%_12%,_rgba(247,220,231,0.55),_transparent_28%),linear-gradient(135deg,_#fffaf2_0%,_#eef4f7_48%,_#f8edf3_100%)] text-ink transition-colors dark:bg-[radial-gradient(circle_at_top_left,_rgba(94,86,145,0.34),_transparent_33%),radial-gradient(circle_at_84%_8%,_rgba(115,79,116,0.22),_transparent_30%),linear-gradient(135deg,_#101421_0%,_#151b2b_52%,_#1d2131_100%)] dark:text-slate-100">
      <Navbar />
      <main className="pt-16">
        <Hero />
        <TestLinks />
        <LittleButterflyIntro />
        <JungFunctionsIntro />
      </main>
      <Footer />
    </div>
  );
}

export default App;

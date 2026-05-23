import Hero from './components/Hero.jsx';
import TestLinks from './components/TestLinks.jsx';
import LittleButterflyIntro from './components/LittleButterflyIntro.jsx';
import JungFunctionsIntro from './components/JungFunctionsIntro.jsx';
import Footer from './components/Footer.jsx';
import Navbar from './components/Navbar.jsx';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fbfbf6] text-ink transition-colors dark:bg-[#11151f] dark:text-slate-100">
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

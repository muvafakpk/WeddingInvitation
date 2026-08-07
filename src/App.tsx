import { useEffect, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Loader } from './components/Loader';
import { Hero } from './components/Hero';
import { Countdown } from './components/Countdown';
import FloatingElements from './components/FloatingElements';
import { WeddingDetails } from './components/WeddingDetails';
import { Parents } from './components/Parents';
import { QuranVerse } from './components/QuranVerse';
import { Timeline } from './components/Timeline';
import { Venue } from './components/Venue';
import { Footer } from './components/Footer';
// import FallingLeaves from './components/FallingLeaves';//extra i added today for falli

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const timer = window.setTimeout(() => {
    setLoading(false);
  }, 4000); // 4 seconds

  return () => window.clearTimeout(timer);
}, []);

  return (
    <div id="top">
      <AnimatePresence>{loading && <Loader />}</AnimatePresence>
      <div className="min-h-dvh w-full overflow-hidden bg-[linear-gradient(135deg,_#f9f4ea_0%,_#f5ede0_100%)] text-[#23211f] transition-colors duration-500">
        <Hero brideName="Shaza" groomName="Salman" />
        <FloatingElements />
        <Countdown targetDate={new Date('2026-11-01T10:00:00')} />
        <WeddingDetails />
        <Parents />
        <QuranVerse />
        <Timeline />
        <Venue />
        <Footer />
      </div>
    </div>
  );
}

export default App;

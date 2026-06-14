import { useCallback, useState } from 'react';
import { LoadingScreen } from './components/LoadingScreen';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { Framework } from './components/Framework';
import { RevenueLeaks } from './components/RevenueLeaks';
import { Services } from './components/Services';
import { FounderTools } from './components/FounderTools';
import { AboutFounder } from './components/AboutFounder';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

// Grain noise overlay
function Noise() {
  return (
    <div
      className="fixed inset-0 z-[9998] pointer-events-none"
      style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
        backgroundRepeat: 'repeat',
        backgroundSize: '200px 200px',
        opacity: 0.025,
      }}
    />
  );
}

export default function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  return (
    <div className="bg-black text-white">
      <Noise />
      {!loaded && <LoadingScreen onDone={handleLoaded} />}
      <div className={`transition-opacity duration-700 ${loaded ? 'opacity-100' : 'opacity-0'}`}>
        <Nav />
        <main>
          <Hero />
          <ProblemSection />
          <Framework />
          <RevenueLeaks />
          <FounderTools />
          <Services />
          <AboutFounder />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </div>
  );
}

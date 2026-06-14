import React, { useEffect, useRef, useState, useCallback } from 'react';
import {
  ArrowRight,
  ChevronDown,
  Target,
  BarChart2,
  Layers,
  TrendingUp,
  Gauge,
  MessageSquare,
  CheckCircle,
  Play,
  Building2,
  Globe,
  Briefcase,
  LineChart,
} from 'lucide-react';

// ─────────────────────────────────────────────
// Intersection Observer Hook
// ─────────────────────────────────────────────
function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVisible(true);
    }, { threshold });

    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

// ─────────────────────────────────────────────
// Loading Screen
// ─────────────────────────────────────────────
function LoadingScreen({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<'enter' | 'hold' | 'exit'>('enter');

  useEffect(() => {
    const t1 = setTimeout(() => setPhase('hold'), 500);
    const t2 = setTimeout(() => setPhase('exit'), 2500);
    const t3 = setTimeout(onDone, 3100);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, [onDone]);

  return (
    <div className={`fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-700 ${
      phase === 'exit' ? 'opacity-0 pointer-events-none' : 'opacity-100'
    }`}>
      <div className="text-center">
        <img
          src="/kartik_clarity_logo_circle.png"
          className="w-20 h-20 mx-auto rounded-full"
        />
        <p className="mt-6 text-gray-400 text-xs tracking-[0.3em] uppercase">
          Loading System...
        </p>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// NAV
// ─────────────────────────────────────────────
function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur border-b border-white/10">
      <nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">

        <div className="flex items-center gap-3">
          <img
            src="/kartik_clarity_logo_circle.png"
            className="w-8 h-8 rounded-full"
          />
          <span className="font-bold text-white">
            Kartik Clarity<span className="text-yellow-400">™</span>
          </span>
        </div>

        <button className="px-4 py-2 bg-yellow-400 text-black rounded-lg font-semibold">
          Get Started
        </button>
      </nav>
    </header>
  );
}

// ─────────────────────────────────────────────
// FOOTER + SOCIAL ICONS
// ─────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t border-white/10 mt-20 py-10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">

        <p className="text-white/60 text-sm">
          © 2026 Kartik Clarity™
        </p>

        <div className="flex flex-wrap gap-4 text-white/60 text-sm">
          <a href="https://www.linkedin.com/company/kartik-clarity/" target="_blank">LinkedIn</a>
          <a href="https://www.youtube.com/@KartikClarity" target="_blank">YouTube</a>
          <a href="#">Instagram</a>
          <a href="#">X</a>
          <a href="#">Reddit</a>
          <a href="#">Discord</a>
          <a href="#">Telegram</a>
        </div>

      </div>
    </footer>
  );
}

// ─────────────────────────────────────────────
// APP
// ─────────────────────────────────────────────
export default function App() {
  const [loaded, setLoaded] = useState(false);
  const handleLoaded = useCallback(() => setLoaded(true), []);

  return (
    <div className="bg-black text-white min-h-screen">

      {!loaded && <LoadingScreen onDone={handleLoaded} />}

      <div className={`transition-opacity duration-700 ${
        loaded ? 'opacity-100' : 'opacity-0'
      }`}>

        <Nav />

        <main className="pt-24 text-center">
          <h1 className="text-4xl font-bold">
            Kartik Clarity™
          </h1>

          <p className="text-white/60 mt-4">
            Revenue Intelligence System for Founders
          </p>

          <button className="mt-8 px-6 py-3 bg-yellow-400 text-black rounded-lg font-semibold">
            Diagnose My Growth
          </button>
        </main>

        <Footer />

      </div>
    </div>
  );
}
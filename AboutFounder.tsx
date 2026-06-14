import { useReveal } from '../hooks/useReveal';
import { SectionLabel, GoldText, Divider } from './shared';
import { Building2, LineChart, Globe, Briefcase, TrendingUp } from 'lucide-react';

const CREDENTIALS = [
  { icon: Building2, label: 'Enterprise Sales',    detail: 'Citigroup · Housing.com' },
  { icon: LineChart,  label: 'SaaS Growth',         detail: 'Freshworks · Innovaccer' },
  { icon: Globe,      label: 'Revenue Operations', detail: 'GTM Systems Architecture' },
  { icon: Briefcase,  label: 'Demand Generation',  detail: 'Global B2B Markets' },
  { icon: TrendingUp, label: 'Business Development', detail: 'Enterprise Deal Cycles' },
];

export function AboutFounder() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="about" ref={ref} className="bg-[#050505] py-24 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 w-full">
        <Divider />

        <div className="py-20">
          <div className="grid md:grid-cols-2 gap-14 md:gap-20 items-center">
            {/* Left — text */}
            <div className={`reveal ${visible ? 'visible' : ''}`}>
              <SectionLabel>About</SectionLabel>
              <h2 className="text-[clamp(2rem,4.5vw,3.8rem)] font-black leading-[1.05] tracking-[-0.025em] mb-6">
                Built from{' '}
                <GoldText>17+ years</GoldText>
                <br />
                in real revenue systems
              </h2>
              <p className="text-gray-400 text-[15px] leading-relaxed mb-6">
                Kartik R has spent two decades inside the revenue engine of companies ranging from global banks to high-growth SaaS startups.
              </p>
              <p className="text-gray-500 text-[14px] leading-relaxed mb-8">
                The same pattern appears everywhere: <span className="text-white font-medium">revenue leaks through friction</span>. Not through lack of marketing. Not through lack of effort. Through undiagnosed constraints that compound silently.
              </p>
              <p className="text-[13px] text-gray-600 italic">
                "I built Kartik Clarity™ because the diagnosis is always the same — and nobody is naming it."
              </p>
            </div>

            {/* Right — credentials grid */}
            <div className={`reveal reveal-delay-2 ${visible ? 'visible' : ''}`}>
              <div className="space-y-3">
                {CREDENTIALS.map((c) => (
                  <div
                    key={c.label}
                    className="glass glass-hover rounded-xl px-5 py-4 flex items-center gap-4 transition-all duration-300 group"
                  >
                    <div className="w-9 h-9 rounded-lg glass-gold flex items-center justify-center shrink-0 group-hover:bg-gold-400/10 transition-colors duration-300">
                      <c.icon className="w-4 h-4 text-gold-400" />
                    </div>
                    <div>
                      <p className="text-[13px] font-semibold text-white">{c.label}</p>
                      <p className="text-[11px] text-gray-600">{c.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <Divider />
      </div>
    </section>
  );
}

import { Target, BarChart2, Layers, TrendingUp } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { SectionLabel, SectionHeading, GoldText } from './shared';

const STEPS = [
  {
    num: '01', title: 'Diagnose',
    desc: 'Surface the exact constraint — not symptoms, the root cause blocking revenue.',
    icon: Target,
  },
  {
    num: '02', title: 'Prioritize',
    desc: 'Rank every bottleneck by revenue impact so you fix the right thing first.',
    icon: BarChart2,
  },
  {
    num: '03', title: 'Remove',
    desc: 'Eliminate the constraint with systematic precision — not guesswork.',
    icon: Layers,
  },
  {
    num: '04', title: 'Scale',
    desc: 'Rebuild the flow so growth is predictable and does not hit the same ceiling.',
    icon: TrendingUp,
  },
];

export function Framework() {
  const { ref, visible } = useReveal(0.1);

  return (
    <section id="framework" ref={ref} className="min-h-screen flex items-center bg-[#050505] py-28">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <div className={`reveal ${visible ? 'visible' : ''} text-center mb-20`}>
          <SectionLabel>The System</SectionLabel>
          <SectionHeading>
            Kartik Clarity<span className="text-gold-400">™</span>{' '}
            <GoldText>Framework</GoldText>
          </SectionHeading>
          <p className="text-gray-600 text-[13px] tracking-[0.12em] italic mt-4">
            Clarity before execution. Always.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {STEPS.map((s, i) => (
            <div
              key={s.title}
              className={`reveal reveal-delay-${i + 1} ${visible ? 'visible' : ''} relative glass glass-hover rounded-2xl p-8 overflow-hidden group transition-all duration-300`}
            >
              <span className="absolute top-5 right-5 text-[68px] font-black leading-none text-white/[0.03] select-none group-hover:text-white/[0.055] transition-colors duration-400">
                {s.num}
              </span>
              <div className="relative z-10">
                <div className="w-11 h-11 rounded-xl glass-gold flex items-center justify-center mb-6 group-hover:bg-gold-400/10 transition-colors duration-300">
                  <s.icon className="w-5 h-5 text-gold-400" />
                </div>
                <h3 className="text-[18px] font-bold mb-3">{s.title}</h3>
                <p className="text-gray-500 text-[13px] leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* System flow line */}
        <div className={`reveal reveal-delay-4 ${visible ? 'visible' : ''} mt-12 flex items-center justify-center gap-3`}>
          {STEPS.map((s, i) => (
            <div key={s.title} className="flex items-center gap-3">
              <span className="text-[12px] tracking-widest uppercase text-gray-600 font-medium">{s.title}</span>
              {i < STEPS.length - 1 && (
                <div className="w-8 h-px bg-gradient-to-r from-gray-700 to-gray-800" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

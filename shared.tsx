// Shared primitive components used across sections

export function BrandMark({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <div className="flex flex-col leading-none">
      <span className={`font-black tracking-tight text-white ${size === 'sm' ? 'text-[14px]' : 'text-[17px]'}`}>
        Kartik Clarity<span className="text-gold-400">™</span>
      </span>
      <span className={`tracking-[0.22em] uppercase text-gray-600 mt-[3px] ${size === 'sm' ? 'text-[8px]' : 'text-[9px]'}`}>
        Think. Focus. Achieve.
      </span>
    </div>
  );
}

export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <p className="text-[11px] uppercase tracking-[0.28em] text-gold-400 mb-5 font-medium">
      {children}
    </p>
  );
}

export function SectionHeading({
  children,
  className = '',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h2
      className={`text-[clamp(2rem,5vw,4.2rem)] font-black leading-[1.05] tracking-[-0.025em] ${className}`}
    >
      {children}
    </h2>
  );
}

export function GoldText({ children }: { children: React.ReactNode }) {
  return <span className="text-gold">{children}</span>;
}

export function Divider() {
  return (
    <div className="h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
  );
}

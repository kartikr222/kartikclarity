import { SocialLinks } from './SocialLinks';

export function Footer() {
  return (
    <footer className="bg-black border-t border-white/[0.05]">
      <div className="max-w-7xl mx-auto px-6 md:px-10 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Left - Copyright */}
          <p className="text-[11px] text-gray-600 order-2 md:order-1">
            © 2026 Kartik Clarity™
          </p>

          {/* Center - Tagline */}
          <p className="text-[11px] text-gray-500 tracking-widest uppercase order-1 md:order-2">
            Think. Focus. Achieve.
          </p>

          {/* Right - Social Icons */}
          <div className="order-3 flex items-center gap-4">
            <SocialLinks size="sm" showOnMobile className="!gap-3.5" />
          </div>
        </div>
      </div>
    </footer>
  );
}

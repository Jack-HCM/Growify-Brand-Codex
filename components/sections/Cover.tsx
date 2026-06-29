import { brand } from "@/config/brand";

export default function Cover() {
  return (
    <section id="cover" className="section-anchor min-h-screen flex flex-col justify-between relative overflow-hidden"
      style={{ background: "radial-gradient(ellipse at 22% 78%, #0E254B 0%, #07111E 55%, #020810 100%)" }}>
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Subtle dot grid */}
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.03) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
        {/* Sparkle top-right */}
        <svg className="absolute" style={{ top: 48, right: 64, opacity: 0.18 }} width="72" height="72" viewBox="0 0 72 72" fill="none">
          <path d="M36 4 L38 30 L64 32 L38 34 L36 60 L34 34 L8 32 L34 30 Z" fill="white"/>
        </svg>
        <svg className="absolute" style={{ top: 72, right: 112, opacity: 0.10 }} width="36" height="36" viewBox="0 0 36 36" fill="none">
          <path d="M18 2 L19 15 L32 16 L19 17 L18 30 L17 17 L4 16 L17 15 Z" fill="white"/>
        </svg>
      </div>

      {/* Top bar */}
      <div className="relative flex items-center justify-between px-8 pt-10 lg:pl-[calc(14rem+2rem)]">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#1271ff" }} />
          <span className="text-[11px] tracking-[0.2em] uppercase" style={{ color: "rgba(18,113,255,0.8)" }}>Brand Codex · v{brand.version}</span>
        </div>
        <span className="text-[11px]" style={{ color: "#a1a9b7" }}>{brand.year}</span>
      </div>

      {/* Centre */}
      <div className="relative flex-1 flex flex-col justify-center px-8 lg:pl-[calc(14rem+2rem)] pb-10">
        <p className="text-[11px] tracking-[0.3em] uppercase mb-8" style={{ color: "rgba(18,113,255,0.9)" }}>{brand.url}</p>
        <div className="mb-10">
          <img
            src="/logos/Growify-White-Landscape.svg"
            alt="Growify Marketing"
            style={{ width: 260, height: "auto", display: "block" }}
          />
        </div>
        <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white leading-[1.05] max-w-2xl mb-6">
          Brand Guidelines &amp; Design System
        </h1>
        <p className="text-base max-w-md leading-relaxed" style={{ color: "#a1a9b7" }}>
          The complete reference for how Growify Marketing looks, speaks, and behaves across all touchpoints.
        </p>
      </div>

      {/* Bottom */}
      <div className="relative flex items-end justify-between px-8 pb-10 lg:pl-[calc(14rem+2rem)]">
        <div>
          <p className="text-[11px]" style={{ color: "#6b7280" }}>Prepared by Hive Creative Media</p>
          <p className="text-[11px]" style={{ color: "#6b7280" }}>© {brand.year} {brand.name}. All rights reserved.</p>
        </div>
        <p className="hidden lg:block text-[11px] text-right" style={{ color: "#6b7280" }}>{brand.tagline}</p>
      </div>
    </section>
  );
}

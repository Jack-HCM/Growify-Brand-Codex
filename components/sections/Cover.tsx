import { brand } from "@/config/brand";

export default function Cover() {
  return (
    <section id="cover" className="section-anchor min-h-screen flex flex-col justify-between relative overflow-hidden" style={{ backgroundColor: "#212130" }}>
      {/* Background geometric elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute" style={{ top: -160, right: -160, width: 480, height: 480, borderRadius: "50%", border: "1px solid rgba(114,204,118,0.15)" }} />
        <div className="absolute" style={{ top: -80, right: -80, width: 320, height: 320, borderRadius: "50%", backgroundColor: "rgba(114,204,118,0.06)" }} />
        <div className="absolute" style={{ bottom: -120, left: -120, width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(114,204,118,0.1)" }} />
        <div className="absolute inset-0" style={{ backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.04) 1px, transparent 0)", backgroundSize: "32px 32px" }} />
      </div>

      {/* Top bar */}
      <div className="relative flex items-center justify-between px-8 pt-10 lg:pl-[calc(14rem+2rem)]">
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: "#72cc76" }} />
          <span className="text-[11px] tracking-[0.2em] uppercase" style={{ color: "rgba(114,204,118,0.8)" }}>Brand Codex · v{brand.version}</span>
        </div>
        <span className="text-[11px]" style={{ color: "#a1a9b7" }}>{brand.year}</span>
      </div>

      {/* Centre */}
      <div className="relative flex-1 flex flex-col justify-center px-8 lg:pl-[calc(14rem+2rem)] pb-10">
        <p className="text-[11px] tracking-[0.3em] uppercase mb-8" style={{ color: "#72cc76" }}>{brand.url}</p>
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

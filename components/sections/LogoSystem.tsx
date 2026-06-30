import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

// Logo widths (px) for each variant — height scales automatically from SVG aspect ratio
const W = {
  landscape: 200,
  stacked:   140,
  motif:     100,
};

function Logo({ src, alt = "Growify", maxW, className = "" }: { src: string; alt?: string; maxW: number; className?: string }) {
  return (
    <img
      src={src}
      alt={alt}
      style={{ width: maxW, height: "auto", maxWidth: "100%", display: "block" }}
      className={className}
    />
  );
}

function LogoVariant({ bg, src, label, maxW, border }: { bg: string; src: string; label: string; maxW: number; border?: boolean }) {
  return (
    <div>
      <div
        className={`corner-cut flex items-center justify-center p-10 mb-3 aspect-video ${border ? "border border-[#e5e7eb]" : ""}`}
        style={{ backgroundColor: bg }}
      >
        <Logo src={src} maxW={maxW} />
      </div>
      <div className="flex items-center justify-between mt-1">
        <p className="text-xs text-[#9ca3af]">{label}</p>
        <a href={src} download className="text-[10px] text-[#1271ff] hover:underline">↓ SVG</a>
      </div>
    </div>
  );
}

export default function LogoSystem() {
  return (
    <SectionWrapper id="logo" label="02 — Logo System" title="Logo system."
      description="Growify's visual identity uses three logo configurations. Choose based on context and available space.">

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <LogoVariant bg="#f9f9fa" src={brand.logo.landscape.black} label="Landscape — light background" maxW={W.landscape} border />
        <LogoVariant bg="#0a1024" src={brand.logo.landscape.white} label="Landscape — dark background"  maxW={W.landscape} />
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-6">
        <LogoVariant bg="#f9f9fa" src={brand.logo.stacked.black}   label="Stacked — light background"  maxW={W.stacked}  border />
        <LogoVariant bg="#0a1024" src={brand.logo.stacked.white}   label="Stacked — dark background"   maxW={W.stacked} />
      </div>

      <div className="grid sm:grid-cols-2 gap-6 mb-16">
        <LogoVariant bg="#f9f9fa" src={brand.logo.motif.black}     label="Motif only — light background" maxW={W.motif} border />
        <LogoVariant bg="#0a1024" src={brand.logo.motif.white}     label="Motif only — dark background"  maxW={W.motif} />
      </div>

      {/* Clear space + Min size */}
      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        <div className="card p-8">
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Clear Space</h3>
          <div className="flex items-center justify-center py-6 mb-4">
            <div className="relative border border-dashed border-[#1271ff]/40 p-8">
              <Logo src={brand.logo.landscape.black} maxW={120} />
              {["top","bottom","left","right"].map((pos) => (
                <span key={pos} className={`absolute text-[9px] text-[#1271ff]/60 ${
                  pos==="top"?"top-0 left-1/2 -translate-x-1/2 -translate-y-1/2":
                  pos==="bottom"?"bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2":
                  pos==="left"?"left-0 top-1/2 -translate-x-1/2 -translate-y-1/2":
                  "right-0 top-1/2 translate-x-1/2 -translate-y-1/2"
                }`}>G</span>
              ))}
            </div>
          </div>
          <p className="text-xs text-[#9ca3af] leading-relaxed">{brand.logo.clearSpace}</p>
        </div>
        <div className="card p-8">
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Minimum Size</h3>
          <div className="flex items-end gap-8 py-4 mb-4">
            <div>
              <Logo src={brand.logo.motif.black} maxW={24} className="mb-2" />
              <p className="text-[10px] text-[#9ca3af]">24px digital</p>
            </div>
            <div>
              <Logo src={brand.logo.landscape.black} maxW={80} className="mb-2" />
              <p className="text-[10px] text-[#9ca3af]">10mm print</p>
            </div>
          </div>
          <p className="text-xs text-[#9ca3af] leading-relaxed">{brand.logo.minSize}</p>
        </div>
      </div>

      {/* Do / Don't */}
      <div className="grid lg:grid-cols-2 gap-8">
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6 flex items-center gap-3">
            <span className="w-4 h-4 rounded-full border border-[#1271ff] flex items-center justify-center text-[#1271ff] text-[8px]">✓</span> Do
          </h3>
          <ul className="space-y-3">{brand.logo.doList.map((d) => (
            <li key={d} className="flex items-start gap-3 text-sm text-[#6b7280]">
              <span className="text-[#1271ff] text-xs mt-0.5">—</span>{d}
            </li>
          ))}</ul>
        </div>
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6 flex items-center gap-3">
            <span className="w-4 h-4 rounded-full border border-red-300 flex items-center justify-center text-red-400 text-[8px]">✕</span> Don&apos;t
          </h3>
          <ul className="space-y-3">{brand.logo.dontList.map((d) => (
            <li key={d} className="flex items-start gap-3 text-sm text-[#6b7280]">
              <span className="text-red-400 text-xs mt-0.5">—</span>{d}
            </li>
          ))}</ul>
        </div>
      </div>
    </SectionWrapper>
  );
}

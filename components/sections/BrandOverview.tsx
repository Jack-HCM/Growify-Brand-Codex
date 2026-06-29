import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

export default function BrandOverview() {
  return (
    <SectionWrapper id="overview" label="01 — Brand Overview" title="Who we are." description={brand.personality.mission}>
      <div className="grid lg:grid-cols-2 gap-16">
        {/* Values */}
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-8">Brand Values</h3>
          <div className="space-y-6">
            {brand.personality.values.map((v, i) => (
              <div key={v.label} className="flex gap-6 card p-5">
                <span className="text-[10px] text-[#d1d5db] mt-0.5 w-4 shrink-0">0{i + 1}</span>
                <div>
                  <p className="font-heading text-base font-medium text-[#212130] mb-1">{v.label}</p>
                  <p className="text-sm text-[#6b7280] leading-relaxed">{v.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tone + Personality */}
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-8">Tone of Voice</h3>
          <div className="space-y-0 mb-12">
            {brand.personality.tone.map((t) => (
              <div key={t} className="flex items-center gap-4 py-4 border-b border-[#e5e7eb] last:border-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#72cc76] shrink-0" />
                <p className="text-[#6b7280] text-sm">{t}</p>
              </div>
            ))}
          </div>

          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Brand Personality</h3>
          {[["Bold", "Precise"], ["Systematic", "Creative"], ["Confident", "Accessible"]].map(([l, r]) => (
            <div key={l} className="mb-5">
              <div className="flex justify-between text-xs text-[#9ca3af] mb-2"><span>{l}</span><span>{r}</span></div>
              <div className="h-px bg-[#e5e7eb] relative">
                <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#72cc76]"
                  style={{ left: l === "Bold" ? "65%" : l === "Systematic" ? "35%" : "55%" }} />
              </div>
            </div>
          ))}

          {/* Stat callout */}
          <div className="mt-12 card-accent p-6">
            <p className="font-heading text-4xl font-medium text-[#212130] mb-1">2×</p>
            <p className="text-sm text-[#6b7280]">average organic traffic growth delivered for clients in the first 90 days.</p>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

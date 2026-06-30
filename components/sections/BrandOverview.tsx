import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

const DARK_BG = "radial-gradient(ellipse at 15% 85%, #0E254B 0%, #07111E 60%, #020810 100%)";
const BORDER = "1px solid rgba(255,255,255,0.08)";
const CARD_BG = "rgba(14,26,46,0.7)";

export default function BrandOverview() {
  const { beliefs, groundRules, habits, tone } = brand.personality;

  return (
    <SectionWrapper id="overview" label="01 — Brand Overview" title="Who we are." description={brand.personality.mission}>

      {/* ── What we believe ── */}
      <div className="rounded-xl overflow-hidden mb-10" style={{ background: DARK_BG, border: BORDER }}>
        <div className="flex items-center gap-3 px-6 py-4" style={{ borderBottom: BORDER }}>
          <div className="w-2 h-2 rounded-full bg-[#1271ff]" />
          <span className="font-heading text-sm font-medium text-white">What we believe</span>
          <span className="text-[10px] tracking-[0.15em] uppercase text-[#6b7280] ml-2">4 Principles</span>
          <span className="ml-auto text-[11px] text-[#6b7280]">Founding</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {beliefs.map((b, i) => (
            <div key={b.label} className="p-8" style={{
              borderRight: i % 2 === 0 ? BORDER : "none",
              borderBottom: i < 2 ? BORDER : "none",
            }}>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-sm font-mono text-[#1271ff]">0{i + 1}</span>
                <div className="flex-1 h-px" style={{ backgroundColor: "rgba(18,113,255,0.25)" }} />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">{b.label}</h3>
              <p className="text-sm text-[#9ca3af] leading-relaxed">{b.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Ground rules ── */}
      <div className="mb-10">
        <div className="flex items-center gap-2 mb-5">
          <div className="w-1.5 h-1.5 rounded-full bg-[#1271ff]" />
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#1271ff]">Ground Rules</span>
        </div>
        <div className="flex flex-col lg:flex-row gap-8 mb-8">
          <h3 className="font-heading text-3xl lg:text-4xl font-bold text-[#0a1024] flex-1">A few rules we won't bend.</h3>
          <p className="text-sm text-[#6b7280] leading-relaxed lg:max-w-xs">Saying these out loud means we have to live by them. That's the point.</p>
        </div>
        <div className="border border-[#e5e7eb] overflow-hidden corner-cut">
          {groundRules.map((r, i) => (
            <div key={r.label} className="flex gap-6 p-6" style={{ borderBottom: i < groundRules.length - 1 ? "1px solid #e5e7eb" : "none" }}>
              <span className="text-sm font-mono text-[#1271ff] shrink-0 pt-0.5">0{i + 1}</span>
              <div className="flex-1 flex flex-col sm:flex-row sm:gap-8">
                <p className="font-heading text-sm font-bold text-[#0a1024] sm:w-52 shrink-0 mb-1 sm:mb-0">{r.label}</p>
                <p className="text-sm text-[#6b7280] leading-relaxed">{r.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── How we work ── */}
      <div className="rounded-xl overflow-hidden" style={{ background: DARK_BG, border: BORDER }}>
        <div className="p-8">
          <div className="flex items-center gap-2 mb-6">
            <div className="w-1.5 h-1.5 rounded-full bg-[#1271ff]" />
            <span className="text-[10px] tracking-[0.2em] uppercase text-[#5499ff]">How We Work</span>
          </div>
          <div className="flex flex-col lg:flex-row gap-8 mb-8">
            <h3 className="font-heading text-3xl lg:text-4xl font-bold text-white flex-1">Four habits we keep across every engagement.</h3>
            <p className="text-sm text-[#9ca3af] leading-relaxed lg:max-w-xs">Most agencies sell the slide deck. We sell the work behind it. Here is how that shows up across a real engagement.</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {habits.map((h, i) => (
              <div key={h.label} className="p-6 corner-cut" style={{ backgroundColor: CARD_BG, border: "1px solid rgba(255,255,255,0.06)" }}>
                <div className="flex justify-between items-center mb-5">
                  <span className="text-sm font-mono text-[#1271ff]">0{i + 1}</span>
                  <span className="text-[10px] text-[#6b7280]">{h.stage}</span>
                </div>
                <h4 className="font-heading text-lg font-bold text-white mb-3">{h.label}</h4>
                <p className="text-sm text-[#9ca3af] leading-relaxed">{h.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Tone of voice ── */}
      <div className="mt-10 grid sm:grid-cols-2 gap-6">
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Tone of Voice</h3>
          {tone.map((t) => (
            <div key={t} className="flex items-center gap-4 py-4 border-b border-[#e5e7eb] last:border-0">
              <div className="w-1.5 h-1.5 rounded-full bg-[#1271ff] shrink-0" />
              <p className="text-[#6b7280] text-sm">{t}</p>
            </div>
          ))}
        </div>
        <div>
          <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Brand Personality</h3>
          {[["Bold", "65%", "Precise"], ["Systematic", "35%", "Creative"], ["Confident", "55%", "Accessible"]].map(([l, pos, r]) => (
            <div key={l} className="mb-5">
              <div className="flex justify-between text-xs text-[#9ca3af] mb-2"><span>{l}</span><span>{r}</span></div>
              <div className="h-px bg-[#e5e7eb] relative">
                <div className="absolute top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-[#1271ff]" style={{ left: pos }} />
              </div>
            </div>
          ))}
          <div className="mt-8 card-accent p-6">
            <p className="font-heading text-4xl font-bold text-[#0a1024] mb-1">2×</p>
            <p className="text-sm text-[#6b7280]">average organic traffic growth delivered for clients in the first 90 days.</p>
          </div>
        </div>
      </div>

    </SectionWrapper>
  );
}

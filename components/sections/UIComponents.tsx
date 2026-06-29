import SectionWrapper from "@/components/ui/SectionWrapper";

export default function UIComponents() {
  return (
    <SectionWrapper id="components" label="05 — UI Components" title="UI components."
      description="Core interactive components used across all Growify digital touchpoints.">

      {/* Buttons */}
      <div className="mb-14">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Buttons</h3>
        <div className="card p-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#9ca3af] mb-5">Primary</p>
              <div className="space-y-3">
                <button className="w-full px-5 py-2.5 rounded-lg bg-[#212130] text-white text-sm font-medium hover:bg-[#1A2335] transition-colors">Get started →</button>
                <button className="w-full px-5 py-2.5 rounded-lg bg-[#212130] text-white text-sm font-medium opacity-40 cursor-not-allowed">Disabled</button>
                <button className="w-full px-5 py-2.5 rounded-lg bg-[#212130] text-white text-sm font-medium flex items-center justify-center gap-2">Book a call <span className="text-xs">→</span></button>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#9ca3af] mb-5">Secondary</p>
              <div className="space-y-3">
                <button className="w-full px-5 py-2.5 rounded-lg border border-[#212130] text-[#212130] text-sm font-medium hover:bg-[#f9f9fa] transition-colors">Learn more</button>
                <button className="w-full px-5 py-2.5 rounded-lg border border-[#d1d5db] text-[#9ca3af] text-sm cursor-not-allowed">Disabled</button>
                <button className="w-full px-5 py-2.5 rounded-lg border border-[#72cc76] text-[#212130] text-sm font-medium flex items-center justify-center gap-2">Accent border <span className="text-xs">→</span></button>
              </div>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest text-[#9ca3af] mb-5">Text Link</p>
              <div className="space-y-4 pt-1">
                <button className="text-sm text-[#212130] underline underline-offset-4 decoration-[#72cc76]">Primary text link</button><br />
                <button className="text-sm text-[#72cc76] underline underline-offset-4 flex items-center gap-1.5">Accent link <span>→</span></button><br />
                <button className="text-sm text-[#9ca3af] underline underline-offset-4 cursor-not-allowed">Disabled link</button>
              </div>
            </div>
            <div className="bg-[#212130] rounded-lg p-4">
              <p className="text-[10px] uppercase tracking-widest text-[#6b7280] mb-5">On dark</p>
              <div className="space-y-3">
                <button className="w-full px-5 py-2.5 rounded-lg bg-white text-[#212130] text-sm font-medium">Get started →</button>
                <button className="w-full px-5 py-2.5 rounded-lg border border-white/20 text-white text-sm">Learn more</button>
                <button className="w-full px-5 py-2.5 rounded-lg bg-[#72cc76] text-[#212130] text-sm font-medium">Accent CTA</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Pills */}
      <div className="mb-14">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Pills &amp; Labels</h3>
        <div className="card p-8">
          <div className="flex flex-wrap gap-3">
            <span className="px-4 py-1.5 rounded-full border border-[#72cc76] text-[#212130] text-xs font-medium">AI-native</span>
            <span className="px-4 py-1.5 rounded-full border border-[#d1d5db] text-[#6b7280] text-xs">SEO &amp; AEO</span>
            <span className="px-4 py-1.5 rounded-full bg-[#d4f0d5] text-[#212130] text-xs font-medium">Paid Media</span>
            <span className="px-4 py-1.5 rounded-full bg-[#212130] text-white text-xs">Growth Systems</span>
            <span className="px-4 py-1.5 rounded-full bg-[#f0f1f3] border border-[#e5e7eb] text-[#6b7280] text-xs">Brand Strategy</span>
            <span className="px-4 py-1.5 rounded-full border border-[#72cc76]/40 bg-[#72cc76]/10 text-[#212130] text-xs">Results-first</span>
          </div>
        </div>
      </div>

      {/* Cards */}
      <div className="mb-14">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Cards</h3>
        <div className="grid sm:grid-cols-3 gap-5">
          <div className="card p-6">
            <div className="w-8 h-8 rounded-lg bg-[#d4f0d5] flex items-center justify-center mb-4">
              <div className="w-3 h-3 rounded-full bg-[#72cc76]" />
            </div>
            <p className="font-heading text-sm font-medium text-[#212130] mb-2">Daily SEO &amp; AEO</p>
            <p className="text-xs text-[#9ca3af] leading-relaxed">Systematic content production and answer-engine optimisation that compounds over time.</p>
          </div>
          <div className="card-accent p-6">
            <div className="w-8 h-8 rounded-lg bg-[#d4f0d5] flex items-center justify-center mb-4">
              <div className="w-3 h-3 rounded-full bg-[#72cc76]" />
            </div>
            <p className="font-heading text-sm font-medium text-[#212130] mb-2">With accent border</p>
            <p className="text-xs text-[#9ca3af] leading-relaxed">Two-pixel top border in Growth Green. Used for featured or highlighted content.</p>
          </div>
          <div className="bg-[#212130] rounded-xl p-6">
            <div className="w-8 h-8 rounded-lg bg-[#1A2335] flex items-center justify-center mb-4">
              <div className="w-3 h-3 rounded-full bg-[#72cc76]" />
            </div>
            <p className="font-heading text-sm font-medium text-white mb-2">Dark card</p>
            <p className="text-xs text-[#9ca3af] leading-relaxed">On dark background (#212130). Use sparingly for emphasis or contrast sections.</p>
          </div>
        </div>
      </div>

      {/* Stats pattern */}
      <div>
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Stats &amp; Numbers</h3>
        <div className="card p-8">
          <div className="grid sm:grid-cols-3 gap-8">
            {[
              { stat: "2×",        label: "average organic traffic growth in the first 90 days" },
              { stat: "90 days",   label: "to measurable results with our systems-led approach" },
              { stat: "One system.", label: "Brand, SEO, paid, and AI — all connected" },
            ].map(({ stat, label }) => (
              <div key={stat} className="border-l-2 border-[#72cc76] pl-5">
                <p className="font-heading text-3xl font-medium text-[#212130] mb-1">{stat}</p>
                <p className="text-xs text-[#9ca3af] leading-relaxed">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}

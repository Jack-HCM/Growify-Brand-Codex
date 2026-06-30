import SectionWrapper from "@/components/ui/SectionWrapper";
import { brand } from "@/config/brand";

export default function BrandApplications() {
  return (
    <SectionWrapper id="applications" label="06 — Brand Applications" title="In the wild."
      description="How the Growify brand shows up across digital and collateral touchpoints.">

      {/* Web */}
      <div className="mb-16">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Digital — Web</h3>
        <div className="card overflow-hidden">
          {/* Browser chrome */}
          <div className="px-4 py-3 border-b border-[#e5e7eb] flex items-center gap-2 bg-[#f9f9fa]">
            <div className="flex gap-1.5">
              {["#e5e7eb","#e5e7eb","#e5e7eb"].map((c,i) => (
                <div key={i} className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: c }} />
              ))}
            </div>
            <div className="flex-1 mx-4 bg-white border border-[#e5e7eb] rounded px-3 py-1 text-[10px] text-[#9ca3af]">
              www.growifymarketing.com
            </div>
          </div>
          {/* Page mockup — CSS only, no image backgrounds */}
          <div className="relative overflow-hidden" style={{ minHeight: 300, backgroundColor: "#0a1024" }}>
            {/* Decorative green accent element */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{ backgroundColor: "#1271ff", transform: "translate(30%, -30%)" }} />
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full opacity-5" style={{ backgroundColor: "#1271ff", transform: "translate(-30%, 30%)" }} />
            <div className="relative p-8">
              <nav className="flex items-center justify-between mb-14">
                <img src={brand.logo.landscape.white} alt="Growify" style={{ width: 100, height: "auto", display: "block" }} />
                <div className="hidden sm:flex items-center gap-6 text-xs text-[#9ca3af]">
                  <span>Services</span><span>Case studies</span><span>About</span>
                  <button className="px-4 py-2 corner-cut bg-[#1271ff] text-white text-xs font-medium">Book a call</button>
                </div>
              </nav>
              <div className="max-w-xl">
                <span className="px-3 py-1 rounded-full bg-[#1271ff]/20 border border-[#1271ff]/40 text-[#1271ff] text-[10px] font-medium mb-6 inline-block">
                  AI-native · Growth Systems
                </span>
                <h2 className="font-heading text-3xl text-white font-medium leading-tight mb-4">
                  Modern marketing for brands that ship.
                </h2>
                <p className="text-[#9ca3af] text-sm leading-relaxed mb-8">
                  We design, build, and operate the marketing systems behind ambitious brands — brand strategy, SEO, AEO, paid media, and the custom agents in between.
                </p>
                <div className="flex gap-3">
                  <button className="px-5 py-2.5 corner-cut bg-[#1271ff] text-white text-sm font-medium">Get started →</button>
                  <button className="px-5 py-2.5 corner-cut border border-white/20 text-white text-sm">See our work</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Social posts — square */}
      <div className="mb-16">
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Social — Post Templates (1:1)</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">

          {/* 1 — Quote card (dark bg) */}
          <div className="aspect-square corner-cut overflow-hidden relative flex flex-col justify-between p-5" style={{ backgroundColor: "#0a1024" }}>
            <img src={brand.logo.landscape.white} alt="Growify" style={{ width: 60, height: "auto", display: "block" }} />
            <div>
              <p className="font-heading text-[10px] font-medium leading-snug text-white mb-3">
                &ldquo;Growify doubled our organic traffic in 90 days.&rdquo;
              </p>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-5 h-5 rounded-full bg-[#1271ff]/40 flex items-center justify-center flex-shrink-0">
                  <span className="text-[6px] text-white font-medium">JC</span>
                </div>
                <div>
                  <p className="text-[7px] text-white leading-tight">Jane Cooper</p>
                  <p className="text-[6px] text-[#1271ff] leading-tight">Head of Growth at 3XD</p>
                </div>
              </div>
              <span className="inline-block px-2 py-0.5 rounded-full bg-[#1271ff]/20 border border-[#1271ff]/40 text-[#1271ff] text-[6px]">
                2× organic traffic
              </span>
            </div>
          </div>

          {/* 2 — Stat card (dark bg) */}
          <div className="aspect-square corner-cut overflow-hidden relative flex flex-col justify-between p-5" style={{ backgroundColor: "#14284b" }}>
            <img src={brand.logo.motif.white} alt="Growify" style={{ width: 28, height: "auto", display: "block" }} />
            <div>
              <p className="font-heading text-4xl font-medium text-white leading-none mb-1">2×</p>
              <p className="text-[9px] text-[#eaf2ff] leading-snug mb-1">organic traffic growth.</p>
              <p className="text-[7px] text-[#1271ff]">{brand.url}</p>
            </div>
          </div>

          {/* 3 — Brand statement (blue bg) */}
          <div className="aspect-square corner-cut overflow-hidden relative flex flex-col justify-between p-5" style={{ backgroundColor: "#1271ff" }}>
            <img src={brand.logo.landscape.white} alt="Growify" style={{ width: 60, height: "auto", display: "block" }} />
            <div>
              <p className="font-heading text-sm font-medium text-white leading-tight mb-2">
                Marketing that ships.
              </p>
              <p className="text-[8px] text-white/70 leading-relaxed mb-3">
                Systems-driven growth for ambitious brands.
              </p>
              <p className="text-[7px] text-white/60">{brand.url}</p>
            </div>
          </div>

          {/* 4 — Feature / light */}
          <div className="aspect-square corner-cut flex flex-col justify-between p-5 border border-[#e5e7eb]" style={{ backgroundColor: "#f9f9fa" }}>
            <img src={brand.logo.landscape.black} alt="Growify" style={{ width: 60, height: "auto", display: "block" }} />
            <div>
              <span className="inline-block px-2 py-0.5 rounded-full border border-[#1271ff]/40 bg-[#1271ff]/10 text-[#0a1024] text-[6px] mb-2">
                AI-native
              </span>
              <p className="font-heading text-xs font-medium text-[#0a1024] leading-tight mb-1">
                Full-stack marketing for brands that ship.
              </p>
              <p className="text-[8px] text-[#9ca3af] leading-relaxed mb-3">
                Brand, SEO, paid, and AI — all in one system.
              </p>
              <p className="text-[7px] text-[#9ca3af]">{brand.url}</p>
            </div>
          </div>

        </div>
        <p className="text-xs text-[#9ca3af] mt-3">1:1 format for LinkedIn and Instagram. More templates to follow.</p>
      </div>

      {/* Email signature */}
      <div>
        <h3 className="text-[10px] tracking-[0.2em] uppercase text-[#9ca3af] mb-6">Email Signature</h3>
        <div className="card p-8 max-w-lg">
          <div className="border-l-2 border-[#1271ff] pl-4">
            <p className="font-heading text-base font-medium text-[#0a1024]">Name Surname</p>
            <p className="text-sm text-[#6b7280] mb-3">Job Title · {brand.name}</p>
            <p className="text-xs text-[#9ca3af]">{brand.email}</p>
            <p className="text-xs text-[#9ca3af]">{brand.url}</p>
          </div>
        </div>
        <p className="text-xs text-[#9ca3af] mt-3">Electric Blue left border. No logo in signature unless explicitly requested.</p>
      </div>
    </SectionWrapper>
  );
}

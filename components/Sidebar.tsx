"use client";

import { useState, useEffect } from "react";
import { brand } from "@/config/brand";

const navItems = [
  { id: "cover",        label: "Cover" },
  { id: "overview",     label: "Brand Overview" },
  { id: "logo",         label: "Logo System" },
  { id: "colours",      label: "Colour Palette" },
  { id: "typography",   label: "Typography" },
  { id: "components",   label: "UI Components" },
  { id: "applications", label: "Applications" },
  { id: "contact",      label: "Contact & Legal" },
];

export default function Sidebar() {
  const [active, setActive] = useState("cover");
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => { entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id); }); },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    navItems.forEach(({ id }) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setOpen(false); };

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4" style={{ background: "radial-gradient(ellipse at 10% 90%, #0E254B 0%, #07111E 60%, #020810 100%)" }}>
        <img src="/logos/Growify-White-Landscape.svg" alt="Growify Marketing" style={{ width: 110, height: "auto", display: "block" }} />
        <button onClick={() => setOpen(!open)} className="flex flex-col gap-1.5 p-1" aria-label="Toggle menu">
          <span className={`block h-px w-5 bg-white transition-transform ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-px w-5 bg-white transition-opacity ${open ? "opacity-0" : ""}`} />
          <span className={`block h-px w-5 bg-white transition-transform ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>
      {open && (
        <div className="lg:hidden fixed top-[57px] left-0 right-0 z-40 py-4" style={{ background: "radial-gradient(ellipse at 10% 90%, #0E254B 0%, #07111E 60%, #020810 100%)" }}>
          {navItems.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="block w-full text-left px-6 py-2.5 text-sm transition-colors hover:text-white"
              style={{ color: active === id ? "#1271ff" : "#9ca3af" }}>
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex flex-col fixed top-0 left-0 h-full w-56 z-40" style={{ background: "radial-gradient(ellipse at 20% 85%, #0E254B 0%, #07111E 55%, #020810 100%)" }}>
        <div className="px-6 pt-8 pb-6" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-[10px] tracking-[0.2em] uppercase mb-4" style={{ color: "#6b7280" }}>Brand Codex</p>
          <img src="/logos/Growify-White-Landscape.svg" alt="Growify Marketing" style={{ width: 140, height: "auto", display: "block" }} className="mb-2" />
          <p className="text-[11px] mt-2" style={{ color: "#6b7280" }}>v{brand.version} · {brand.year}</p>
        </div>

        <nav className="flex-1 py-6 overflow-y-auto">
          {navItems.map(({ id, label }) => (
            <button key={id} onClick={() => scrollTo(id)}
              className="w-full text-left px-6 py-2.5 text-xs transition-all duration-150 flex items-center gap-3"
              style={{ color: active === id ? "#1271ff" : "#6b7280" }}>
              <span className="block h-px flex-1 max-w-[16px] transition-all" style={{ backgroundColor: active === id ? "#1271ff" : "transparent" }} />
              <span className="tracking-wide">{label}</span>
            </button>
          ))}
        </nav>

        <div className="px-6 py-5" style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
          <p className="text-[10px]" style={{ color: "#464646" }}>{brand.url}</p>
        </div>
      </aside>
    </>
  );
}

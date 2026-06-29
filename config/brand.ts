export const brand = {
  name: "Growify Marketing",
  shortName: "Growify",
  tagline: "Modern marketing for brands that ship.",
  url: "growifymarketing.com",
  email: "hello@growifymarketing.com",
  version: "1.0",
  year: "2026",

  // ─── Colours ───────────────────────────────────────────────────────────────
  colours: {
    primary: {
      label: "Electric Blue",
      hex: "#1271FF",
      rgb: "18, 113, 255",
      usage: "Primary brand accent. CTAs, highlights, active states, and the brand mark.",
    },
    dark: {
      label: "Off Black",
      hex: "#0A1024",
      usage: "Primary dark surface. Sidebar, headers, dark sections, and high-contrast backgrounds.",
    },
    darkHighlight: {
      label: "Dark Navy",
      hex: "#14284B",
      usage: "Secondary dark surface. Used for layered dark UI and hover states.",
    },
    blue: {
      label: "Blue Light",
      hex: "#5499FF",
      usage: "Secondary blue accent. Tints, secondary CTAs, and UI depth.",
    },
    background: {
      label: "Off-White",
      hex: "#F9F9FA",
      usage: "Page background. Clean base for all light-mode content.",
    },
    surface: {
      label: "White",
      hex: "#FFFFFF",
      usage: "Card and content surface. Elevated UI elements.",
    },
    palette: [
      { label: "Off Black",       hex: "#0A1024", usage: "Primary dark / brand background" },
      { label: "Dark Navy",       hex: "#14284B", usage: "Secondary dark / layered surfaces" },
      { label: "Electric Blue",   hex: "#1271FF", usage: "Primary accent / brand mark / CTAs" },
      { label: "Blue Light",      hex: "#5499FF", usage: "Secondary accent / tints" },
      { label: "Blue Pale",       hex: "#7FB2FF", usage: "Subtle tint / hover states" },
      { label: "Mid Grey",        hex: "#A1A9B7", usage: "Muted text / secondary" },
      { label: "Border Grey",     hex: "#D0D4DB", usage: "Borders / dividers" },
      { label: "Light Grey",      hex: "#F0F1F3", usage: "Subtle section backgrounds" },
      { label: "Off White",       hex: "#F9F9FA", usage: "Page background" },
      { label: "White",           hex: "#FFFFFF", usage: "Card surface" },
    ],
  },

  // ─── Typography ────────────────────────────────────────────────────────────
  typography: {
    heading: {
      family: "Plus Jakarta Sans",
      cssFamily: "plus-jakarta-sans",
      weights: [
        { label: "Regular",  value: "400" },
        { label: "Medium",   value: "500" },
        { label: "SemiBold", value: "600" },
        { label: "Bold",     value: "700" },
        { label: "ExtraBold",value: "800" },
      ],
      usage: "All headings (H1–H6), display text, stats, and large typographic elements. Always sentence case.",
    },
    body: {
      family: "Inter",
      cssFamily: "inter",
      weights: [
        { label: "Regular", value: "400" },
        { label: "Medium",  value: "500" },
        { label: "SemiBold",value: "600" },
      ],
      usage: "Body copy, UI labels, captions, and all running text. Full stops in bullets. No full stops in headings or CTAs.",
    },
    scale: [
      { label: "Display",  size: "64px", lineHeight: "72px", weight: "700", family: "Plus Jakarta Sans" },
      { label: "H1",       size: "48px", lineHeight: "56px", weight: "700", family: "Plus Jakarta Sans" },
      { label: "H2",       size: "36px", lineHeight: "44px", weight: "700", family: "Plus Jakarta Sans" },
      { label: "H3",       size: "28px", lineHeight: "36px", weight: "600", family: "Plus Jakarta Sans" },
      { label: "H4",       size: "22px", lineHeight: "30px", weight: "600", family: "Plus Jakarta Sans" },
      { label: "Body LG",  size: "18px", lineHeight: "28px", weight: "400", family: "Inter" },
      { label: "Body MD",  size: "16px", lineHeight: "24px", weight: "400", family: "Inter" },
      { label: "Body SM",  size: "14px", lineHeight: "20px", weight: "400", family: "Inter" },
      { label: "Label",    size: "12px", lineHeight: "16px", weight: "500", family: "Inter" },
    ],
    rules: [
      { rule: "Case",        desc: "Headings always sentence case. Never title case or all-caps." },
      { rule: "Punctuation", desc: "No full stops in headings, taglines, or CTAs. Full stops in body and bullets." },
      { rule: "Stats",       desc: "Large numbers use Plus Jakarta Sans Bold. Supporting label in Inter Regular." },
      { rule: "Pills",       desc: "Short and outcome-focused. Inter Regular. Never jargon-heavy." },
    ],
  },

  // ─── Logo ──────────────────────────────────────────────────────────────────
  logo: {
    landscape: { black: "/logos/Growify-Black-Landscape.svg", white: "/logos/Growify-White-Landscape.svg" },
    stacked:   { black: "/logos/Growify-Black-Stacked.svg",   white: "/logos/Growify-White-Stacked.svg"   },
    motif:     { black: "/logos/Growify-Black-Motif.svg",     white: "/logos/Growify-White-Motif.svg"     },
    clearSpace: "Minimum clear space equal to the width of the leaf motif on all sides.",
    minSize: "24px height for digital. 10mm height for print.",
    doList: [
      "Use the black version on white and light backgrounds",
      "Use the white version on dark (#0A1024) backgrounds",
      "Use the full-colour version sparingly for brand moments",
      "Maintain clear space at all times",
    ],
    dontList: [
      "Recolour the mark — green is non-negotiable",
      "Use the motif without the wordmark on first brand contact",
      "Place on busy or low-contrast backgrounds",
      "Stretch, skew, or rotate the logo",
    ],
  },

  // ─── Brand Personality ─────────────────────────────────────────────────────
  personality: {
    mission: "We design, build, and operate the marketing systems behind ambitious brands. Brand strategy, daily SEO, AEO, paid media, and the custom agents in between.",
    values: [
      { label: "Results-first",  description: "Every activity is measured against growth outcomes, not vanity metrics." },
      { label: "Systematic",     description: "Marketing built on repeatable systems, not one-off campaigns." },
      { label: "Transparent",    description: "Clear reporting, honest conversation, and no fluff." },
      { label: "Ambitious",      description: "We work with brands that want to move fast and grow hard." },
    ],
    tone: [
      "Direct and results-focused — say more with less",
      "Confident without arrogance",
      "Human and personable, never corporate",
      "Technical when needed, always accessible",
    ],
  },
} as const;

export type Brand = typeof brand;

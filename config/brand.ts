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

  // ─── Typography (corrected) ────────────────────────────────────────────────
  typography: {
    heading: {
      family: "Funnel Display",
      cssFamily: "funnel-display",
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
      family: "Google Sans",
      cssFamily: "google-sans",
      weights: [
        { label: "Regular", value: "400" },
        { label: "Medium",  value: "500" },
        { label: "SemiBold",value: "600" },
      ],
      usage: "Body copy, UI labels, captions, and all running text. Full stops in bullets. No full stops in headings or CTAs.",
    },
    scale: [
      { label: "Display",  size: "64px", lineHeight: "72px", weight: "700", family: "Funnel Display" },
      { label: "H1",       size: "48px", lineHeight: "56px", weight: "700", family: "Funnel Display" },
      { label: "H2",       size: "36px", lineHeight: "44px", weight: "700", family: "Funnel Display" },
      { label: "H3",       size: "28px", lineHeight: "36px", weight: "600", family: "Funnel Display" },
      { label: "H4",       size: "22px", lineHeight: "30px", weight: "600", family: "Funnel Display" },
      { label: "Body LG",  size: "18px", lineHeight: "28px", weight: "400", family: "Google Sans" },
      { label: "Body MD",  size: "16px", lineHeight: "24px", weight: "400", family: "Google Sans" },
      { label: "Body SM",  size: "14px", lineHeight: "20px", weight: "400", family: "Google Sans" },
      { label: "Label",    size: "12px", lineHeight: "16px", weight: "500", family: "Google Sans" },
    ],
    rules: [
      { rule: "Case",        desc: "Headings always sentence case. Never title case or all-caps." },
      { rule: "Punctuation", desc: "No full stops in headings, taglines, or CTAs. Full stops in body and bullets." },
      { rule: "Stats",       desc: "Large numbers use Funnel Display Bold. Supporting label in Google Sans Regular." },
      { rule: "Pills",       desc: "Short and outcome-focused. Google Sans Regular. Never jargon-heavy." },
    ],
  },

  // ─── Brand Personality ─────────────────────────────────────────────────────
  personality: {
    mission: "We design, build, and operate the marketing systems behind ambitious brands. Brand strategy, daily SEO, AEO, paid media, and the custom agents in between.",
    beliefs: [
      { label: "We work as partners.", description: "Long relationships beat short ones, every time. We invest like the partner we would want." },
      { label: "Strategy first. Tools second.", description: "Understanding the business is the work. The rest is tactics. Modern tools serve the work." },
      { label: "Selective by design.", description: "We pick partners we'd choose to work with for years. Fit matters. Fewer relationships, deeper." },
      { label: "Built on our terms.", description: "A modern agency doesn't have to repeat old mistakes. We set the rules of how we engage and we keep them." },
    ],
    groundRules: [
      { label: "Proposals from your data.", description: "Every proposal is built from your data, your funnel and your last 90 days, written from scratch each time. Templates with a logo swap are someone else." },
      { label: "We won't sell what we'd outsource.", description: "If a piece of the work would land with a freelancer we've never met, we'll tell you and help you find one. We don't hide handoffs in a retainer." },
      { label: "You keep the artefacts.", description: "Brand books, dashboards, prompts, playbooks, source files. Yours from day one. No platform that holds your work hostage when the engagement ends." },
      { label: "If we can't measure it, we won't promise it.", description: "Every engagement starts with a defined success metric. If we can't agree on one, we'll say so before we sign anything." },
    ],
    habits: [
      { stage: "First call",   label: "Brief before blueprint.", description: "We start by understanding what is actually broken: a leak in the funnel, a content engine that stalled, a CRM nobody trusts. The pitch comes after that work." },
      { stage: "In the work",  label: "Senior on the work.", description: "The person who scopes is the person who builds. The work stays with that person end to end, with no handoffs through a junior or a project manager translating between you and someone you have never met." },
      { stage: "In the build", label: "Tools where they earn it.", description: "Agents and automation when they save real hours and stand up to scrutiny. Manual where judgment matters more than throughput. The tool serves the work." },
      { stage: "At handover",  label: "Proof on handover.", description: "Every engagement ends with documentation: what we did, what worked, what we would change. You leave with the artefacts, the source files and the playbooks." },
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

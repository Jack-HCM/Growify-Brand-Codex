interface Props {
  id: string;
  label: string;
  title: string;
  description?: string;
  children: React.ReactNode;
  dark?: boolean;
  className?: string;
}

export default function SectionWrapper({ id, label, title, description, children, dark = false, className = "" }: Props) {
  return (
    <section
      id={id}
      className={`section-anchor min-h-screen border-b px-8 py-20 lg:py-24 ${
        dark ? "border-white/10" : "border-[#e5e7eb]"
      } ${className}`}
      style={dark
        ? { background: "radial-gradient(ellipse at 15% 85%, #0E254B 0%, #07111E 60%, #020810 100%)" }
        : { backgroundColor: "#f9f9fa" }
      }
    >
      <div className="max-w-5xl mx-auto">
        <p className={`text-[10px] tracking-[0.25em] uppercase mb-4 ${dark ? "text-[#5499ff]" : "text-[#9ca3af]"}`}>{label}</p>
        <h2 className={`font-heading text-4xl lg:text-5xl font-bold mb-4 ${dark ? "text-white" : "text-[#0a1024]"}`}>{title}</h2>
        {description && <p className={`text-base max-w-xl mb-16 leading-relaxed ${dark ? "text-[#9ca3af]" : "text-[#6b7280]"}`}>{description}</p>}
        {!description && <div className="mb-16" />}
        {children}
      </div>
    </section>
  );
}

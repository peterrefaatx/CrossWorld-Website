import ScrollReveal from "./ScrollReveal";

export default function SectionHeader({ tag, title, description, center = false }) {
  return (
    <ScrollReveal>
      <div dir="rtl" className={`mb-12 lg:mb-16 ${center ? "text-center" : ""}`}>
        <div className={`flex items-center gap-3 mb-4 ${center ? "justify-center" : ""}`}>
          <div className="w-8 h-[1px] bg-accent" />
          <span className="text-[11px] font-cairo font-medium tracking-[4px] uppercase text-accent">
            {tag}
          </span>
        </div>
        <h2 className="font-changa text-3xl lg:text-4xl font-bold text-primary leading-tight">
          {title}
        </h2>
        {description && (
          <p className="mt-3 text-muted-foreground text-base lg:text-lg max-w-xl leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </ScrollReveal>
  );
}
import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";

const steps = [
  { num: "01", title: "تقييم الحالة", desc: "نحلل وضعك المهني والمالي ونحدد أفضل مسار لك." },
  { num: "02", title: "تجهيز الملف", desc: "نرشدك لجمع الوثائق المطلوبة ونراجعها بدقة." },
  { num: "03", title: "تقديم الطلب", desc: "نتولى تقديم ملفك الكامل للجهات الإسبانية المختصة." },
  { num: "04", title: "المتابعة حتى القرار", desc: "نتابع ملفك ونبلغك بكل تحديث حتى صدور الموافقة." },
];

export default function ProcessSection() {
  return (
    <section dir="rtl" className="py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader tag="كيف نعمل" title="العملية خطوة بخطوة" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group bg-card rounded-2xl border border-border p-7 hover:shadow-lg hover:shadow-black/5 transition-all duration-500 relative">
                <span className="font-cairo text-5xl font-black text-accent/10 leading-none block mb-4 group-hover:text-accent/20 transition-colors">
                  {step.num}
                </span>
                <h3 className="font-changa text-base font-bold text-primary mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
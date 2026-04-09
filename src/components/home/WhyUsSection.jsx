import SectionHeader from "../ui/SectionHeader";
import ScrollReveal from "../ui/ScrollReveal";

const reasons = [
  { title: "دعم قانوني متخصص", desc: "فريقنا متخصص في قانون الهجرة الإسباني ويتابع كل تحديثات 2026 بشكل مستمر." },
  { title: "مراجعة كاملة للملف", desc: "نراجع كل وثيقة قبل التقديم لضمان استيفاء جميع المتطلبات وتجنب الرفض." },
  { title: "متابعة خطوة بخطوة", desc: "من أول وثيقة حتى صدور القرار — نبقيك على اطلاع دائم بكل مستجد." },
  { title: "خبرة بالسوق الأوروبي", desc: "مقرنا في مدريد ونفهم السوق الأوروبي من الداخل — نفتح لك الأبواب الصحيحة." },
];

export default function WhyUsSection() {
  return (
    <section dir="rtl" className="py-12 lg:py-16 bg-secondary/50">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <SectionHeader
          tag="لماذا CrossWorld"
          title="شريك تثق به"
          description="نجمع بين الخبرة القانونية والمتابعة الشخصية لضمان نجاح ملفك."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="group bg-card rounded-2xl border border-border p-8 hover:shadow-lg hover:shadow-black/5 transition-all duration-500">
                <div className="w-10 h-1 bg-accent rounded-full mb-5 group-hover:w-16 transition-all duration-500" />
                <h3 className="font-changa text-lg font-bold text-primary mb-2">{r.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
import { motion } from "framer-motion";
import SectionHeader from "../components/ui/SectionHeader";
import ScrollReveal from "../components/ui/ScrollReveal";
import CTAStrip from "../components/home/CTAStrip";
import { CheckCircle, Shield, Users, Clock } from "lucide-react";

const storyStats = [
  { num: "+200", label: "ملف تم معالجته بنجاح" },
  { num: "3 سنوات", label: "خبرة في الهجرة الإسبانية" },
  { num: "98%", label: "نسبة نجاح الملفات" },
];

const values = [
  { icon: CheckCircle, title: "الشفافية الكاملة", desc: "نخبرك بكل شيء — الإيجابيات والسلبيات — قبل أن تتخذ أي قرار." },
  { icon: Shield, title: "الأمانة المهنية", desc: "لا نقبل ملفات لا نؤمن بنجاحها — مصلحتك فوق كل اعتبار." },
  { icon: Users, title: "الدعم الشخصي", desc: "لست مجرد ملف — لديك مستشار شخصي يتابع حالتك من البداية للنهاية." },
  { icon: Clock, title: "الالتزام بالمواعيد", desc: "نعرف أن الوقت حاسم في ملفات الهجرة — نلتزم بكل موعد ونحترم وقتك." },
];

export default function About() {
  return (
    <div dir="rtl">
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-b from-secondary/50 to-white relative overflow-hidden">
        <div className="absolute top-1/4 right-[10%] w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-[1px] bg-accent" />
              <span className="text-[11px] font-cairo uppercase text-accent font-medium">
                من نحن
              </span>
            </div>
            <h1 className="font-changa text-4xl lg:text-5xl font-bold text-primary leading-tight mb-4">
              نحن <span className="text-accent">CrossWorld</span>
            </h1>
            <p className="text-base lg:text-lg text-muted-foreground max-w-xl leading-relaxed">
              فريق متخصص في قانون الهجرة الإسبانية، نعمل من مدريد لمساعدة العرب والمسلمين على الاستقرار في إسبانيا بشكل قانوني وآمن.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story + Stats */}
      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <ScrollReveal>
              <div>
                <SectionHeader tag="قصتنا" title="لماذا أسسنا CrossWorld" description="" />
                <div className="space-y-4 text-[15px] text-muted-foreground leading-relaxed">
                  <p>بدأت CrossWorld Spain Services من تجربة شخصية — رأينا كيف يعاني كثير من العرب والمسلمين في التعامل مع المنظومة القانونية الإسبانية المعقدة.</p>
                  <p>قررنا أن نكون الجسر الموثوق بين المجتمع العربي والنظام القانوني الإسباني — بلغتهم، بثقافتهم، وبمعرفة عميقة بالقانون الإسباني.</p>
                  <p>اليوم، ساعدنا أكثر من 200 عائلة ومحترف على تحقيق حلمهم في الإقامة القانونية بإسبانيا.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="bg-gradient-to-br from-primary to-primary/80 rounded-3xl p-10 space-y-7">
                {storyStats.map((stat, i) => (
                  <div
                    key={i}
                    className={`${i < storyStats.length - 1 ? "border-b border-white/10 pb-7" : ""}`}
                  >
                    <div className="font-cairo text-4xl font-bold text-accent">{stat.num}</div>
                    <div className="text-sm text-white/50 mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 lg:py-28 bg-secondary/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <SectionHeader tag="ما يميزنا" title="قيمنا" description="" center />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {values.map((v, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="bg-card rounded-2xl border border-border p-7 flex gap-5 items-start hover:shadow-lg hover:shadow-black/5 transition-all duration-500">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <v.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-changa text-base font-bold text-primary mb-2">{v.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <CTAStrip title="هل أنت مستعد لبدء" highlight="رحلتك؟" buttonText="تواصل معنا الآن" />
    </div>
  );
}